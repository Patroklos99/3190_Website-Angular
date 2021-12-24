import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-nouveautes',
  templateUrl: './nouveautes.component.html',
  styleUrls: ['./nouveautes.component.css']
})
export class NouveautesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  
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
