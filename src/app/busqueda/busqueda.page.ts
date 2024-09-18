import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
})
export class BusquedaPage implements OnInit {

  nombre:'';
  categoria:'';
  id:'';
  listado;

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  buscar(){
   
     if(this.http.get("https://pruebasub1.000webhostapp.com/read/buscar.php?nombre="+
     this.nombre).subscribe(snap=>{
       console.log(snap);
       this.listado=snap;
       this.categoria=this.nombre;
     })) {
       this.http.get('http://localhost:8100/'+this.categoria);
     }
  }
  
  }
  
   