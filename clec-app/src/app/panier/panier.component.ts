import { Component, Injectable} from '@angular/core';
import { Panier } from './panier.model';
import { bdService } from 'src/app/bd.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
})
@Injectable({ providedIn: 'root' }) 
export class PanierComponent {    
  panier: Panier[];
  lstLivres: any;  
  constructor(private bdService: bdService) {
    this.panier = [];
  }

  ngOnInit(): void{
    this.panier = this.bdService.getPanier();
    this.lstLivres =this.bdService.livresPanier(this.panier);
  }
  //la fonction qui enleve le livre du panier
  enlever(e:any, code:number){
    this.bdService.livrePanierEnlever(code);
  }
}