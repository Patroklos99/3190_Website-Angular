import { EventEmitter,Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PanierComponent } from './panier/panier.component';
import { LivresComponent } from './livres/livres.component';
import { Observable } from 'rxjs';
//import * as fs from "fs";
//import * as fs from './node_modules/file-system/file-system.js';

@Injectable({
    providedIn: 'root',
  })

export class bdService{
    panierChange = new EventEmitter<PanierComponent[]>();
    livreChange = new EventEmitter<LivresComponent[]>();
    private lstLivres = new Array< LivresComponent>();    
    private lstPanier: PanierComponent [] = [];
    livres: any;  

    constructor(private httpClient: HttpClient) {}
    
    getLivres(): Observable<LivresComponent[]>{
        const url = "assets/data/livres.json";
        return this.httpClient.get<LivresComponent[]>(url);
    }
    
    getPanier(){
        return this.lstPanier.slice(); 
    }
    
    getData(filename:string){
        this.httpClient.get<any>(filename).subscribe((data)=>this.livres = data);
       
    }
    ajoutCodProd(codProd:PanierComponent){
        this.lstPanier.push(codProd);
        this.panierChange.emit(this.lstPanier.slice());
    }
    togglePanier(cpr:string){
        let index = this.lstPanier.map(function (obj) {console.log("obj.codeProduit "+obj.codeProduit); return obj.codeProduit; }).indexOf(+cpr);
        if (index !== -1) {
            this.lstPanier.splice(index, 1);
            this.panierChange.emit(this.lstPanier.slice());
        }else{
            this.lstPanier.push(new PanierComponent(parseInt(cpr)));
            this.panierChange.emit(this.lstPanier.slice());
        }
        
    }
    addLivre(cpr:LivresComponent){
        this.lstLivres.push(cpr);
        this.livreChange.emit(this.lstLivres.slice());
        //let url = "./assets/data/livres.json";
        let url = 'http://localhost:3000/assets/data/livres.json';
        this.httpClient.post(url, JSON.stringify(LivresComponent)).subscribe(data=>{
            console.log(data);
        }

        )
        //HttpURLConnection con = (HttpURLConnection)url.openConnection();
        /*var fs = require('file-system');
        fs.writeFile("assets/data/livres.json", JSON.stringify(LivresComponent), function(err: any){
            if(err){
                return console.log(err);
            }
            console.log("The file was saved!");
        });*/
    }
   
}