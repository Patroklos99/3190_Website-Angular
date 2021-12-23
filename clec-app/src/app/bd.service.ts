import { EventEmitter,Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PanierComponent } from './panier/panier.component';
import { LivresComponent } from './livres/livres.component';
import { Observable} from 'rxjs';
import {Panier} from './panier/panier.model';
import { NodeJSReadonlyFileSystem } from '@angular/compiler-cli/src/ngtsc/file_system/src/node_js_file_system';
//import * as fs from "fs";
//import * as fs from './node_modules/file-system/file-system.js';

@Injectable({ providedIn: 'root' }) 

export class bdService{
    panierChange = new EventEmitter<Panier[]>();
    livreChange = new EventEmitter<LivresComponent[]>();    
    private lstLivres: LivresComponent[]= [];  
    private lstPanier: Panier [] = [];
    private tempArr: Panier [] = [];
    livres: any;  
    trouve: LivresComponent[]= [];   
   
    
    constructor(private httpClient: HttpClient) {
       this.getLivres().subscribe(HttpResponse=>{
        this.lstLivres = HttpResponse.map(item=>
          {
            return new LivresComponent(
              item.codeProduit,
              item.auteur,
              item.titre,
              item.prix,
              item.rabais,
              item.description,
              item.niveauScolaire,
              item.image,
            )
          })
      });
     // this.lstPanier = this.getPanier();
    }
    
    getLivres(): Observable<LivresComponent[]>{
        const url = "assets/data/livres.json";
        return this.httpClient.get<LivresComponent[]>(url);
    }
    
    getlstLivres(){
        return this.lstLivres.slice();
    }
    getPanier(){
       return this.lstPanier.slice(); 
    }
    
    getData(filename:string){
        this.httpClient.get<any>(filename).subscribe((data)=>this.livres = data);
       
    }
    ajoutCodProd(codProd:Panier){
        this.lstPanier.push(codProd);
        this.panierChange.emit(this.lstPanier.slice());
    }
    togglePanier(cpr:string){
        let index = this.lstPanier.map(function (obj) {console.log("obj.codeProduit "+obj.codeProduit); return obj.codeProduit; }).indexOf(+cpr);
        if (index !== -1) {
            this.lstPanier.splice(index, 1);
            this.panierChange.emit(this.lstPanier.slice());
        }else{
            this.lstPanier.push(new Panier(parseInt(cpr)));
            this.panierChange.emit(this.lstPanier.slice());
        }   
    }
    addLivre(cpr:LivresComponent){

        this.lstLivres.push(cpr);
        // console.log("!!!!! livres ajouter  "+JSON.stringify(this.lstLivres));
        this.livreChange.emit(this.lstLivres.slice());
        
        let url = 'https://localhost:4200/assets/data/livres.json';
        this.httpClient.post(url, JSON.stringify(LivresComponent)).subscribe(data=>{
            console.log(data);
        })
       
    }
    updateLivreRabais(cpr:LivresComponent,index:number){
        this.lstLivres[index] = cpr;
        this.livreChange.emit(this.lstLivres.slice());
        console.log("The file was saved! "+JSON.stringify(this.lstLivres[index]));
    }
    livresPanier(panier:Panier[]){
        for(let i = 0; i<this.lstLivres.length; i++){
            for(let x = 0; x<panier.length;x++){
                if(+this.lstLivres[i].codeProduit === panier[x].codeProduit){
                     this.trouve.push(this.lstLivres[i]);
                }
            }
        }
        return this.trouve;
    }
    livrePanierEnlever(code:number){
        
         let index = this.trouve.map(function (obj) { return obj.codeProduit; }).indexOf(code);
         console.log("beservice "+index) ;  
         if (index !== -1) {
            this.trouve.splice(index, 1);
         }else{
            alert("Panier est vide!");
         } 

    }

   
}