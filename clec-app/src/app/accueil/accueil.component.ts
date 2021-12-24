import { ViewEncapsulation } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { bdService } from 'src/app/bd.service';
import { LivresComponent } from '../livres/livres.component';
import { HttpClient, HttpResponse } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'rating',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  
  
})
export class AccueilComponent implements OnInit {
  livres!: LivresComponent[];
  constructor(private httpClient: HttpClient, private bdService: bdService) { 


  }

  ngOnInit(): void {

    this.httpClient.get<any>("assets/data/livres.json").subscribe((data)=>this.livres = data);
   
  }
  //la fonction qui fait fonctionner notre carousel 
  carous(event:any){
    var myElement = document.getElementsByClassName('item') as unknown as HTMLElement;
    let elCur = $(".carousel-inner .item.active");
   if(event.target.classList.contains("left") || event.target.classList.contains("glyphicon-chevron-left")){
    if(elCur.prev().length != 0){
      elCur.prev().addClass("active");
      elCur.removeClass("active");
    }
    
   }else{
    if(elCur.next().length != 0){
      elCur.next().addClass("active");
      elCur.removeClass("active");
    }
   
   }

   
  }
}
