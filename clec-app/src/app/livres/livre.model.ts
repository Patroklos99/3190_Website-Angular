import { NgModuleDecorator } from "@angular/core";

export class Livre {
    public codeProduit: number; 
    public auteur: string; 
    public titre: string; 
    public prix: number; 
    public rabais: number;
    public description: string; 
    public niveauScolaire: string; 
    public imagePath: string;

    constructor(codeProduit: number, auteur: string, titre: string, prix: number, rabais: number, description: string, niveauScolaire: string, imagePath: string){
        this.codeProduit = codeProduit;
        this.auteur = auteur;
        this.titre = titre; 
        this.prix = prix; 
        this.rabais = rabais; 
        this.description = description; 
        this.niveauScolaire = niveauScolaire; 
        this.imagePath = imagePath; 
    }
}

