import { DOCUMENT } from '@angular/common';
import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

declare var verifierEntrees:any;

@Component({
  selector: 'app-inscription-ecole',
  templateUrl: './inscription-ecole.component.html',
  styleUrls: ['./inscription-ecole.component.css']
})
export class InscriptionEcoleComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document) {
  }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  //la fonction qui va faire passe les variables entrees en fesant le click sur 'enter' 
  handleClick(){ 
      const formulaire = this.document.getElementById('formulaire');
      const nom1 = this.document.getElementById('nom1');
      const adresse = this.document.getElementById('adresse');
      const courriel = this.document.getElementById('courriel'); 
      const pass = this.document.getElementById('pass');
      const pass2 = this.document.getElementById('pass2');
      const code = this.document.getElementById('code');
      //appel de la fonction javascript du fichier inscription-ecole.js 
      verifierEntrees(nom1, adresse, courriel, pass, pass2, code);
  }
  //la fonction qui verifie que les variables entree correspondes auc criteres 
  doit(nom1:any, adresse:any, courriel:any, pass:any, pass2:any, code:any){

    const nomVal = nom1.value.trim();
    const adresseVal = adresse.value.trim();
    const courrielVal = courriel.value.trim();
    const passVal = pass.value.trim();
    const pass2Val = pass2.value.trim();
    const codeVal = code.value.trim();

    if(nomVal === '') {
        msgErreur(nom1, 'Nom ne peut pas être vide.')
        
    } else if(nomVal.length < 1 || nomVal.length >25 || !/^[a-zA-Z]*$/g.test(nomVal)) {
        msgErreur(nom1, 'Votre nom doit être composé de 1 à 25 lettres uniquement.')
    }
    else {
        msgReussi(nom1)
    }

    if(adresseVal === '') {
        msgErreur(adresse, 'Adresse ne peut pas être vide.')
        
    } else if(!cAdresse(adresseVal)) {
        msgErreur(adresse, 'Votre adresse nest pas valide.')
    }
    else {
        msgReussi(adresse)
    }

    if(courrielVal === '') {
        msgErreur(courriel, 'Courriel ne peut pas être vide.')
        
    } else if(!cEmail(courrielVal)) {
        msgErreur(courriel, 'Votre courriel nest pas valide, reessayez.')
    }
    else {
        msgReussi(courriel)
    }

    if(passVal === '') {
        msgErreur(pass, 'Mot de passe ne peut pas être vide.')
        
    } else if(passVal.length < 8 || passVal.length >12) {
        msgErreur(pass, 'Votre Mot de passe doit avoir entre 8 et 12 characteres, reessayez.')
    }
    else if(!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/g.test(passVal))) {
        msgErreur(pass, 'Votre Mot de passe doit avoir au moins un caractere special, un chiffre et une majuscule.')
    } 
    else {
        msgReussi(pass)
    }
    
    if(pass2Val === '') {
        msgErreur(pass2, 'Mot de passe ne peut pas être vide.')
        
    } else if(pass2Val.length < 8 || pass2Val.length >12) {
        msgErreur(pass2, 'Votre Mot de passe doit avoir entre 8 et 12 characteres, reessayez.')
    }
    else if(!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/g.test(pass2Val))) {
        msgErreur(pass2, 'Votre Mot de passe doit avoir au moins un caractere special, un chiffre et une majuscule.')
    } else if(!(pass2Val === passVal)) {
        msgErreur(pass2, 'Vos mot de passe doivent être identiques, reessayez.')
    }
    else {
        msgReussi(pass2)
    }
    
    if(!cCode(codeVal) && !(codeVal === "")){
        msgErreur(code, 'Votre code nest pas valide, reessayez.')
    }else if(codeVal === ""){
        msgErreur(code, 'Votre code ne peut pas être vide.')
        throw new Error("Something went badly wrong!");
    }
    else {
        msgReussi(code)
    }

function msgErreur(input:any, message:any){
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small');

    small.innerText = message;

    formGroup.className = 'form-group echoue';
}

function msgReussi(input:any) {
    const formGroup = input.parentElement;
    formGroup.className = 'form-group reussi';
}

function cEmail(email:any){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(email);
}

function cCode(code:any){
    return /^([A-Z]{4}\d{8}[A-Z]{2})$/.test(code); 
    
}

function cAdresse(adresse:any){
    return /^(\d+) ?([A-Za-z](?= ))? (.*?) ([^ ]+?) ?((?<= )APT)? ?((?<= )\d*)?$/g.test(adresse);

}
  
  
}
}
