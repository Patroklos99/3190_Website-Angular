import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var function1:any;

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document, private router : Router) { }
  //la fonction qui passe les donnees entrees a la fonction1 quand sur le click 
  handleClick(){
    const form = document.getElementById('form');
		const courriel = document.getElementById('courriel');
		const password = document.getElementById('password');

    this.function1(form, courriel, password);
  }
  //la fonction qui verifie l'autentification aux comptes Usager et Ecole
  function1(form:any, courriel:any, password:any){
    
      const courrielVal= courriel.value.trim();
      const passwordVal= password.value.trim();
  
      if(courrielVal === 'usager@gmail.com' && passwordVal === 'usager'){
        this.router.navigate(['/profile-usager']); 
        throw new Error("Something went badly wrong!");    
      }
      
  
      if(courrielVal === 'ecole@ecole.qc' && passwordVal === 'ecole'){
        this.router.navigate(['/profile-ecole']); 
        throw new Error("Something went badly wrong!");  
      
      }
  
      if(passwordVal !== "usager" || passwordVal !== "ecole" || courrielVal != 'ecole@ecole.qc' || courrielVal !== 'usager@gmail.com'){
        alert("Mot de passe ou courriel entré invalide");
                
      }

  }

  ngOnInit(): void {
  }

}
