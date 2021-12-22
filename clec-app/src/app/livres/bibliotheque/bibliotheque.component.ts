import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { bdService } from 'src/app/bd.service';
import { PanierComponent } from 'src/app/panier/panier.component';
import { LivresComponent } from '../livres.component';

//import * as livres from '../livres.json';
declare var $: any; 

@Component({
  selector: 'app-bibliotheque',
  templateUrl: './bibliotheque.component.html',
  styleUrls: ['./bibliotheque.component.css'],
  providers:[bdService]
})
export class BibliothequeComponent implements OnInit {
  livres: any;
  liversAjouter: any;
  numero: number; 
  panire: PanierComponent[];
  livre = new Array< LivresComponent>();
  codProd: number;
  auteur: string;
  titre: string;
  prix: number;
  rabais: number;
  description: string;
  niveauScolaire: string;
  image: string;
  livreAjout: LivresComponent | undefined;
 
  //public voire: Boolean = false;
  constructor(private httpClient: HttpClient, private bdService: bdService) {
    this.numero = 0;
    this.panire = [];
    //this.livre = []; 
    this.codProd = 0;
    this.auteur = '';
    this.titre = '';
    this.prix = 0;
    this.rabais = 0;
    this.description = '';
    this.niveauScolaire = '';
    this.image = '';  
    
    bdService.getLivres().subscribe(HttpResponse=>{
      this.livre = HttpResponse.map(item=>
        {
          return new LivresComponent(
            item.codeProduit,
            item.auteur,
            item.titre,
            item.prix,
            item.rabais,
            item.description,
            item.niveauScolaire,
            item.imagePath
          )

        }

      )
    }

    );
  
    
  }

  ngOnInit(){
    this.httpClient.get<any>("assets/data/livres-a-ajoute.json").subscribe((data)=>this.liversAjouter = data);
    this.httpClient.get<any>("assets/data/livres.json").subscribe((data)=>this.livres = data);
    this.panire = this.bdService.getPanier();
    //this.livre = this.bdService.getLivres(); 

    console.log(" "+JSON.stringify( this.livre));
   

    this.bdService.panierChange
    .subscribe(
      (panier: PanierComponent[])=>{
        this.panire = panier;
      }
    );
   /* this.bdService.livreChange
    .subscribe((livre: LivresComponent[])=>{
      this.livre = livre; 
    })*/
    //this.livreAjout = new Livre(this.codProd,this.auteur,this.titre,this.prix,this.rabais,this.description, this.niveauScolaire, this.image);
  }
  voire(i: number){
    
    var myElement = document.getElementById('livre'+i) as HTMLElement;
    if(myElement.classList.contains('in')){
      myElement.classList.remove("in");
    }else{
      myElement.classList.add("in");
    }
    
  }
  ajouter(e:any){
    //let codProd = ""; 
    this.numero++;
    $("#pannier").text(this.numero);
    console.log("e parent "+  e.target.parentNode.firstChild.lastChild.innerText);
   
    this.codProd = +e.target.parentNode.firstChild.lastChild.innerText;
    const nPanier = new PanierComponent(this.codProd);
    this.bdService.ajoutCodProd(nPanier);
  }
  toggle(e:any){
      this.bdService.togglePanier(e.target.parentNode.firstChild.lastChild.innerText);
  }
 enlever(){
    if(this.numero > 0){
      this.numero--;
      $("#pannier").text(this.numero);
      console.log("! numero "+this.numero+" - ");
    }else{
      alert("Pannier est vide");
    }
 }
 addLivre(e:any){
    this.codProd = +e.target.parentNode.firstChild.lastChild.innerText;
    //console.log("AddLivres "+this.codProd);
    for(var i = 0; i< e.target.parentNode.children.length-1; i++){
      switch(i){
        case 0:
          this.codProd = e.target.parentNode.children[i].lastChild.innerText;
          break;
        case 1:
          this.auteur = e.target.parentNode.children[i].lastChild.innerText;
          break;
        case 2:
          this.titre = e.target.parentNode.children[i].lastChild.innerText;
          break;
        case 3:
          this.prix = +e.target.parentNode.children[i].lastChild.innerText;
          break;
        case 4:
          this.rabais = + e.target.parentNode.children[i].lastChild.innerText;
          break;
        case 5:
          this.description  = e.target.parentNode.children[i].lastChild.innerText;
          break;
        case 6:
          this.niveauScolaire = e.target.parentNode.children[i].lastChild.innerText;
          break;
      }
     
    }
    this.livreAjout = new LivresComponent(this.codProd,this.auteur,this.titre,this.prix,this.rabais,this.description,this.niveauScolaire,this.image);
   // console.log("-------------------------------------------")
    //console.log(JSON.stringify(this.livreAjout));
    //console.log(JSON.stringify(this.livre));
    let index = this.livre.map(function (obj) { console.log("obj.codeProduit "+obj.codeProduit); return obj.codeProduit; }).indexOf(this.codProd);
   
    if(index == -1){
        this.bdService.addLivre(this.livreAjout);
    }else{
      alert("Ce livre est deja dans bibliotheque");
    }
   // this.bdService.addLivre(this.livreAjout); 
    
 }
 

}
