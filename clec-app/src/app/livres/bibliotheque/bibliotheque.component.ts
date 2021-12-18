import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Livre } from '../livre.model'; 
//import * as livres from '../livres.json';
 

@Component({
  selector: 'app-bibliotheque',
  templateUrl: './bibliotheque.component.html',
  styleUrls: ['./bibliotheque.component.css']
})
export class BibliothequeComponent implements OnInit {
  livres: any;  
  //public voire: Boolean = false;
  constructor(private httpClient: HttpClient) {
    //this.livres = any; 
   }

  ngOnInit(){
    this.httpClient.get<any>("assets/data/livres.json").subscribe((data)=>this.livres = data)
  }
  voire(i: number){
    
    var myElement = document.getElementById('livre'+i) as HTMLElement;
    console.log(i+" !!!")
    if(myElement.classList.contains('in')){
      myElement.classList.remove("in");
    }else{
      myElement.classList.add("in");
    }
    
  }

}
