import { Component } from '@angular/core';
import { Plante } from '../model/plante.model';
import { PlanteService } from '../services/plante.service';
import { Type } from '../model/type.model';



@Component({
  selector: 'app-recherche-par-type',
  templateUrl: './recherche-par-type.component.html',
  styleUrl: './recherche-par-type.component.css'
})
export class RechercheParTypeComponent {
  plantes! : Plante[];
  IdType! : number;
  types! : Type[];
  constructor(private planteService: PlanteService) { }
  ngOnInit(): void {
    this.planteService.listeTypes().subscribe(types => {
    if (Array.isArray(types)) {
        this.types = types;
    } else {
        console.error('Types is undefined or does not contain "types" property');
    }
   
    });
    }
    onChange() {
      this.planteService.rechercherParType(this.IdType).subscribe(pls =>{this.plantes=pls});
      }
    

      supprimerPlante(p: Plante)
    {
    // console.log(p);
    let conf = confirm("Etes-vous sûr ?");
    if (conf){
    this.planteService.supprimerPlante(p.idPlante).subscribe(()=>{
    console.log("plante supprimé");
    this.chargerPlantes();
    });
     } }
     chargerPlantes(){
      this.planteService.listePlante().subscribe(pls => {
        console.log(pls);
        this.plantes = pls;
        });
    }

}
