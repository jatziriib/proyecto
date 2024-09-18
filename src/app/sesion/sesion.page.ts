import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.page.html',
  styleUrls: ['./sesion.page.scss'],
})
export class SesionPage implements OnInit {

  username:string;
  password:string;
  e;

  constructor(private router: Router,private http:HttpClient,public navCtrl: NavController, public alertCtrl: AlertController) { }

  ngOnInit() {
  }
  formRegister(){
    this.router.navigate(['/registro']);
  }

  Login(): void {
    this.http.get("https://pruebasub1.000webhostapp.com/read/login.php?user="+
    this.username+"&pass="+this.password).subscribe(snap=>{
      console.log(snap);
      this.e=snap;
      if(this.e=='si'){
        this.router.navigate(['/prueba']);
      }else{
        this.presentAlert();
      }
});
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Usuario o contraseña incorrecta',
      message: 'la contraseña ingresada es incorrecta:' + this.password,
      buttons: ['OK']

    });
        
  await alert.present();
}
  }


