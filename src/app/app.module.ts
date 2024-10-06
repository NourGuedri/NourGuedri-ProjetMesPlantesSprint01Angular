import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantesComponent } from './plantes/plantes.component';
import { AddPlanteComponent } from './add-plante/add-plante.component';
import { UpdatePlanteComponent } from './update-plante/update-plante.component';
import { RechercheParTypeComponent } from './recherche-par-type/recherche-par-type.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ListeTypesComponent } from './liste-types/liste-types.component';
import { UpdateTypeComponent } from './update-type/update-type.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { PlanteGuard } from './plante.guard';


@NgModule({
  declarations: [
    AppComponent,
    PlantesComponent,
    AddPlanteComponent,
    UpdatePlanteComponent,
    RechercheParTypeComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListeTypesComponent,
    UpdateTypeComponent,
    LoginComponent,
    ForbiddenComponent  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,   

    

  ],
  providers: [
    provideClientHydration(),
      provideHttpClient(withInterceptorsFromDi()),
      [PlanteGuard],
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
