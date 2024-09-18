import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  datos:any={
    nombre:'',
    correo:'',
    edad:'',
    contrasena:'',
  }
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  guardar(){
    this.http.get("https://pruebasub1.000webhostapp.com/read/guardar.php?nombre="+this.datos.nombre+"&correo="+this.datos.correo+"&edad="+this.datos.edad+"&contrasena="+this.datos.contrasena).subscribe(snap=>{
      console.log(snap);
    })
  }

}
