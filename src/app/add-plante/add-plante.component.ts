import { Component } from '@angular/core';
import { Plante } from '../model/plante.model';
import { PlanteService } from '../services/plante.service';
import { Type } from '../model/type.model';
import { Router } from '@angular/router';
import { TypeWrapper } from '../model/typeWrapped.model';
@Component({
  selector: 'app-add-plante',
  templateUrl: './add-plante.component.html',
  styleUrl: './add-plante.component.css'
})
export class AddPlanteComponent {
  newPlante = new Plante();
  types: Type[] = [];
  newIdType! : number ;
  newType !: Type ;
message?: string;
constructor(private planteService: PlanteService,private router: Router
) { }

ngOnInit(): void {
  this.planteService.listeTypes().subscribe(types => {
     
    if (Array.isArray(types)) {
      this.types = types;
  } else {
      console.error('Types is undefined or does not contain "types" property');
  }
  

  });
  

}
addPlante(){
  console.log( this.newIdType)
  this.newPlante.type = this.types.find( type => type.idType == this.newIdType)!;
  
  this.planteService.ajouterPlante(this.newPlante).subscribe(pls => {
    
    this.router.navigate(['plantes']);
});
  this.message="Plante :"+this.newPlante.nomPlante+" ajoute avec succes!";
}
}
