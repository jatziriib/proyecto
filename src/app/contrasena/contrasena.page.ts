import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-contrasena',
  templateUrl: './contrasena.page.html',
  styleUrls: ['./contrasena.page.scss'],
})
export class ContrasenaPage implements OnInit {

  nombre:'';
  listado;
  d:any={
    correo:'',
    edad:'',
    contrasena:''
  }

  constructor(private router: Router,private http:HttpClient,public navCtrl: NavController, public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  buscar(){
    this.http.get("https://pruebasub1.000webhostapp.com/read/buscar.php?nombre="+
    this.nombre).subscribe(snap=>{
      console.log(snap);
      this.listado=snap;
    });
  }

  actualizar(): void {
    this.http.get("https://pruebasub1.000webhostapp.com/read/editar.php?contrasena="+
    this.d.contrasena+"&nombre="+this.nombre).subscribe(snap=>{
      console.log(snap);
      this.presentAlert();
    });
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: 'La contraseña se ha modificado correctamente',
      buttons: ['OK']

    });

    await alert.present();
  }

}
