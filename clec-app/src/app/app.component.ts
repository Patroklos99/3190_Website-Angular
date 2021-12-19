import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'clec-app';
  myScriptElement: HTMLScriptElement;
  constructor (){
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "clec-app/src/assets/js/index.js"
    document.body.appendChild(this.myScriptElement)
  }


}
