import {Livre} from './livres/livre.model'; 
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class bdService{
    private lstLivres: Livre[] = [];
    public lstPanier: String [] = []; 
    livres: any;  
    getLivres(){
        return this.lstLivres.slice(); 
    }

    constructor(private httpClient: HttpClient) {}

    getData(filename:string){
        this.httpClient.get<any>(filename).subscribe((data)=>this.livres = data);
    }

   /*ngOnInit(){

        getData( "assets/data/livres.json")
    }*/


}