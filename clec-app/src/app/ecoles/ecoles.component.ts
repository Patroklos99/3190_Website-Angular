import { Component, OnInit } from '@angular/core';

export class EcolesComponent{

    public codeEcole: string; 
    public nom: string; 
    public courriel: string; 
    public telephone: number;
    public adresse: string; 
    public imagePath: string;

  constructor(codeEcole: string, nom: string, courriel: string, telephone: number, adresse: string, imagePath: string){
    this.codeEcole = codeEcole;
    this.nom = nom; 
    this.courriel = courriel; 
    this.telephone = telephone; 
    this.adresse = adresse;  
    this.imagePath = imagePath; 
  }

}

