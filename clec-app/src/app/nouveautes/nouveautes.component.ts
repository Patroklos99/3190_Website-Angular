import { Component, OnInit } from '@angular/core';
//declaration de la variable pour le jQuery 
declare var $: any;

@Component({
  selector: 'app-nouveautes',
  templateUrl: './nouveautes.component.html',
})
export class NouveautesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }
  //la fonction quipermet a notre carousel de fonctionner (sur le click de la souris sur les fleches)
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
