import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
declare var $: any; 

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  livres: any;
  ecoles: any;
  @ViewChild('courrielInput', {static:true}) courrielInputRef!: ElementRef;
  @ViewChild('motDePassInput', {static:true}) motDePassRef!: ElementRef ;
  @ViewChild('container', {static:true}) containerRef!: ElementRef ;
  @ViewChild('compte', {static:true}) compteRef!: ElementRef ;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<any>("assets/data/livres.json").subscribe((data)=>this.livres = data);
    this.httpClient.get<any>("assets/data/ecoles.json").subscribe((data)=>this.ecoles = data);
  }

  voire(i: number){
    
    var myElement = document.getElementById('livre'+i) as HTMLElement;
    if(myElement.classList.contains('in')){
      myElement.classList.remove("in");
    }else{
      myElement.classList.add("in");
    }
    
  }

  voireEc(i: number){
    
    var myElement = document.getElementById('ecole'+i) as HTMLElement;
    if(myElement.classList.contains('in')){
      myElement.classList.remove("in");
    }else{
      myElement.classList.add("in");
    }
    
  }

  voiretab(event: any){
    
    //var myElement = document.getElementById('event') as HTMLElement;

    console.log("Tab click "+event.target.className+" - "+$("#"+event.target.className).attr("id"))
   //$("#"+event.target.className).addClass("active");
   // $("#"+event.target.className).siblings(".active").removeClass("active");
   $("#"+event.target.className).css({"display" : "unset"});
   //$("#"+event.target.className).siblings(".active").hide();
   $("#"+event.target.className).siblings(".active").css({"display" : "none"});
    $("#compte .nav-tabs ."+event.target.className).parent().addClass("active");
    $("#compte .nav-tabs ."+event.target.className).parent().siblings(".active").removeClass("active");


    
    
  }

  connecte(event: any){
    let cour = this.courrielInputRef.nativeElement.value;
    let mot = this.motDePassRef.nativeElement.value;
    console.log("1 "+this.courrielInputRef.nativeElement.value);
    console.log("2 "+this.motDePassRef.nativeElement.value);
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
        //$( ".login-container2" ).hide();
        //$( "#compte" ).show();
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
