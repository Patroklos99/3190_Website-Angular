import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LivresComponent } from '../livres/livres.component';
import { bdService } from 'src/app/bd.service';
declare var $: any; 

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers:[bdService]
})
export class AdminComponent implements OnInit {
  codProd: number;
  livres: any;
  ecoles: any;
  livre = new Array< LivresComponent>();
  @ViewChild('courrielInput', {static:true}) courrielInputRef!: ElementRef;
  @ViewChild('motDePassInput', {static:true}) motDePassRef!: ElementRef ;
  @ViewChild('container', {static:true}) containerRef!: ElementRef ;
  @ViewChild('compte', {static:true}) compteRef!: ElementRef ;

  constructor(private httpClient: HttpClient, private bdService: bdService) { 
    this.codProd = 0;
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
            item.image
          )
        }
      )
    } );
  }

  ngOnInit(): void {
    this.httpClient.get<any>("assets/data/livres.json").subscribe((data)=>this.livres = data);
    this.httpClient.get<any>("assets/data/ecoles.json").subscribe((data)=>this.ecoles = data);
    
  }
  //la fonction pour voir l'accordion des livres 
  voire(i: number){
    
    var myElement = document.getElementById('livre'+i) as HTMLElement;
    if(myElement.classList.contains('in')){
      myElement.classList.remove("in");
    }else{
      myElement.classList.add("in");
    }
    
  }
  //la fonction pour voir l'accordion des ecoles
  voireEc(i: number){
    
    var myElement = document.getElementById('ecole'+i) as HTMLElement;
    if(myElement.classList.contains('in')){
      myElement.classList.remove("in");
    }else{
      myElement.classList.add("in");
    }
    
  }
  //la fonction qui nous montre les tab differentes (3 choix: Gerer l'inventaire, gerer les ecoles et gerer les rabais)
  voiretab(event: any){
   $("#"+event.target.className).css({"display" : "unset"});
   $("#"+event.target.className).siblings().css({"display" : "none"});
    $("#compte .nav-tabs ."+event.target.className).parent().addClass("active");
    $("#compte .nav-tabs ."+event.target.className).parent().siblings(".active").removeClass("active");  
  }
  //la fonction qui change les rabais pour nos livres 
  rabais(event:any, code:string){
  
    this.codProd = +code;

    let index = this.livre.map(function (obj:any) {return obj.codeProduit; }).indexOf(code);
   
   this.livre[index].rabais = event.target.innerText;

    this.bdService.updateLivreRabais(this.livre[index],index);
    
    $("."+code).text(event.target.innerText);
  }
  //la fonction qui verifie les mot de pass et le courriel durant l'autentification au compte utilisateur : Admin 
  connecte(event: any){
    let cour = this.courrielInputRef.nativeElement.value;
    let mot = this.motDePassRef.nativeElement.value;
  
    if (cour === "" || mot === "") {
      if(cour === "" && mot === ""){
        alert("Veillez entrer le courriel et le mot de pass");
      }else if(mot === ""){
        alert("Veillez entrer le mot de pass");
      }else{
        alert("Veillez entrer le courriel");
      }
      
    }else{

      if(cour === 'admin@biblio.qc' && mot === "Admin"){
        this.containerRef.nativeElement.classList.add("ferme");
        this.compteRef.nativeElement.classList.add("ouvert");
      }else{
        if(this.courrielInputRef.nativeElement.text !== "admin@biblio.qc" && this.motDePassRef.nativeElement.text !== "Admin"){
          alert("Courriel entré et mot de pass entré sont invalides");
        }else if(this.motDePassRef.nativeElement.text !== "Admin"){
          alert("Mot de pass entré est invalide");
        }else{
          alert("Courriel entré est invalide");
        }
        
      }	
    }
  }
}
