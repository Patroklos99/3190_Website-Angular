import { Component} from '@angular/core';
//l'objet Livre 
export class LivresComponent {

  public codeProduit: number; 
  public auteur: string; 
  public titre: string; 
  public prix: number; 
  public rabais: number;
  public description: string; 
  public niveauScolaire: string; 
  public image: string;

  constructor(codeProduit: number, auteur: string, titre: string, prix: number, rabais: number, description: string, niveauScolaire: string, image: string){
      this.codeProduit = codeProduit;
      this.auteur = auteur;
      this.titre = titre; 
      this.prix = prix; 
      this.rabais = rabais; 
      this.description = description; 
      this.niveauScolaire = niveauScolaire; 
      this.image = image; 
  }
}
