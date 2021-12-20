import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

declare var verifierEntrees:any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document)
 { }

  ngOnInit(): void {
  }

  handleClick(){ 
    const form = document.getElementById('formRecherche');
		const bRadio1 = document.getElementById('bRadio1');
		const bRadio2 = document.getElementById('bRadio2');
		const bCheck1 = document.getElementById('bCheck1');
		const bCheck2 = document.getElementById('bCheck2');
      this.verifierEntrees(form, bRadio1, bRadio2, bCheck1, bCheck2)
  }

  verifierEntrees(form, bRadio1, bRadio2, bCheck1, bCheck2) {
    const bRadio1Val= bRadio1.value.trim();
	  const bCheck1Val= bCheck1.value.trim();

	
    if(!form.elements["bRadio1"].checked && !form.elements["bRadio2"].checked) {
        msgErreur(bRadio1, 'vous devez choisir une option.')
		
    } else {
        msgReussi(bRadio1);
    }

	if(!form.elements["bCheck1"].checked && !form.elements["bCheck2"].checked) {
        msgErreur(bCheck1, 'vous devez choisir une option.')
        throw new Error("Something went badly wrong!");
		
    } else {
        msgReussi(bCheck1);
        throw new Error("Something went badly wrong!");
    }
	



function msgErreur(input, message){
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small');

    small.innerText = message;

    formGroup.className = 'formRecherche echoue';
}

function msgReussi(input) {
    const formGroup = input.parentElement;
    formGroup.className = 'formRecherche reussi';
}
  
}
}



