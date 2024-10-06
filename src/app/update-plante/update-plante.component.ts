import { Component } from '@angular/core';

import { Plante } from '../model/plante.model';
import { PlanteService } from '../services/plante.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Type } from '../model/type.model';

import { OnInit } from '@angular/core';

@Component({
  selector: 'app-update-plante',
  templateUrl:'./update-plante.component.html',
  styleUrl: './update-plante.component.css'
})
export class UpdatePlanteComponent implements OnInit {

  currentPlante = new Plante();
  types !: Type[];
  updateTypeId!: number;

  constructor(private planteService: PlanteService,
    private activateroute: ActivatedRoute,private router: Router){}

  ngOnInit() {

    this.planteService.listeTypes().subscribe(types => {
      if (Array.isArray(types)) {
        this.types = types;
    } else {
        console.error('Types is undefined or does not contain "types" property');
    }
    });

    this.planteService.consulterPlante(this.activateroute.snapshot.params['id']).subscribe(pls => {
      console.log(pls);
      this.currentPlante = pls;
      this.updateTypeId = this.currentPlante.type.idType;
    });
}
  updatePlante()

  {

    this.currentPlante.type = this.types.find(type => type.idType == this.updateTypeId)!;

    this.planteService.updatePlante(this.currentPlante).subscribe(pls => {

      console.log(pls);

      this.router.navigate(['plantes']);

}

    );
  }
}
