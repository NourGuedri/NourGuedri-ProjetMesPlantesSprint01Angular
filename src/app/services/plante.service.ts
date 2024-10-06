import { Injectable } from '@angular/core';
import { Plante } from '../model/plante.model';
import { Type } from '../model/type.model'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypeWrapper } from '../model/typeWrapped.model';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
}
@Injectable({
providedIn: 'root'
})
export class PlanteService {
   apiUrl = 'http://localhost:8081/plantes/api';
   apiURLType = 'http://localhost:8081/plantes/api/type';
   types!: Type[];
   constructor(private http: HttpClient) { }

listePlante(): Observable <Plante[]> {
  console.log("1");
  return this.http.get<Plante[]>(this.apiUrl);
}
ajouterPlante( pls: Plante) : Observable<Plante>{
  return this.http.post<Plante>(this.apiUrl, pls, httpOptions);
}
supprimerPlante( id: number){
  const url = `${this.apiUrl}/${id}`;
  return this.http.delete(url, httpOptions);
  
  //ou Bien
  /* this.plantes.forEach((cur, index) => {
  if(pls.idPlante === cur.idPlante) {
  this.plantes.splice(index, 1);
  }
  }); */
  }
consulterPlante(id:number): Observable <Plante>{
  const url = `${this.apiUrl}/${id}`;
  return this.http.get<Plante>(url);
  }
    
    // trierPlantes(){
    //   this.plantes = this.plantes.sort((n1,n2) => {
    //   if (n1.idPlante! > n2.idPlante!) {
    //   return 1;
    //   }
    //   if (n1.idPlante! < n2.idPlante!) {
    //   return -1;
    //   }
    //   return 0;
    //   });
    //   }
updatePlante(p:Plante): Observable<Plante>{
  return this.http.put<Plante>(this.apiUrl, p, httpOptions);
}
listeTypes(): Observable <TypeWrapper> {
  return this.http.get<TypeWrapper>(this.apiURLType);}
consulterType(id:number): Type{
    return this.types.find(ty => ty.idType == id)!;
    }  

    rechercherParType(idType: number):Observable< Plante[]> {
      const url = `${this.apiUrl}/plstype/${idType}`;
      return this.http.get<Plante[]>(url);
      }

      rechercherParNom(nom: string):Observable< Plante[]> {
        const url = `${this.apiUrl}/plsByName/${nom}`;
        return this.http.get<Plante[]>(url);
        }
        
        ajouterType( type: Type):Observable<Type>{
          return this.http.post<Type>(this.apiURLType, type, httpOptions);
          }
          
      
}
