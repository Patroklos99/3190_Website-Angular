function getParamParNom(nom, url = window.location.href) {
    nom = nom.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + nom + '(=([^&#]*)|&|#|$)'),
        resultat = regex.exec(url);
    if (!resultat) return null;
    if (!resultat[2]) return '';
    return decodeURIComponent(resultat[2].replace(/\+/g, ' '));
}

const form = document.getElementById('form');
const prenom = document.getElementById('prenom');
const nom = document.getElementById('nom');
const telephone = document.getElementById('telephone'); 
const adresse = document.getElementById('adresse');
const courriel = document.getElementById('courriel');
const pass = document.getElementById('pass');
const pass2 = document.getElementById('pass2');
const code = document.getElementById('code');

form.addEventListener('submit', (e) => {
    e.preventDefault();


    verifierEntrees();
}
); 

function verifierEntrees() {
    const prenomVal= prenom.value.trim();
    const nomVal = nom.value.trim();
    const telephoneVal = telephone.value.trim();
    const adresseVal = adresse.value.trim();
    const courrielVal = courriel.value.trim();
    const passVal = pass.value.trim();
    const pass2Val = pass2.value.trim();
    const codeVal = code.value.trim();
    
    if(prenomVal === '') {
        msgErreur(prenom, 'Prenom ne peut pas être vide.')
        
    } else if(prenomVal.length < 1 || prenomVal.length >25 || !/^[a-zA-Z]*$/g.test(prenomVal)) {
        msgErreur(prenom, 'Votre prenom doit être composé de 1 à 25 lettres uniquement.')
    }
    else {
        msgReussi(prenom)
    }


    if(nomVal === '') {
        msgErreur(nom, 'Nom ne peut pas être vide.')
        
    } else if(nomVal.length < 1 || nomVal.length >25 || !/^[a-zA-Z]*$/g.test(nomVal)) {
        msgErreur(nom, 'Votre nom doit être composé de 1 à 25 lettres uniquement.')
    }
    else {
        msgReussi(nom)
    }

    if(telephoneVal === '') {
        msgErreur(telephone, 'Telephone ne peut pas être vide.')
        
    } else if(!cTelephone(telephoneVal)) {
        msgErreur(telephone, 'Votre telephone doit être composé de 10 chiffres.')
    }
    else {
        msgReussi(telephone)
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
    }
    else {
        msgReussi(code)
    }


}

function msgErreur(input, message){
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small');

    small.innerText = message;

    formGroup.className = 'form-group echoue';
}

function msgReussi(input) {
    const formGroup = input.parentElement;
    formGroup.className = 'form-group reussi';
}

function cEmail(email){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(email);
}

function cCode(code){
    return /^([A-Z]{4}\d{8}[A-Z]{2})$/.test(code); 
    
}

function cTelephone(telephone){
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/im.test(telephone);
} //(?=0(?!0)|[0-9])

function cAdresse(adresse){
    return /^(\d+) ?([A-Za-z](?= ))? (.*?) ([^ ]+?) ?((?<= )APT)? ?((?<= )\d*)?$/g.test(adresse);

}