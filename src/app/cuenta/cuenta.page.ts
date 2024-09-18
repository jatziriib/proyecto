import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {
  @Output() onChange: EventEmitter<File> =new EventEmitter<File>();


  constructor() { }
   // If the input has changed(file picked) we project the file into the img previewer
   updateSource($event: Event) {
    // We access he file with $event.target['files'][0]
    this.projectImage($event.target['files'][0]);
}

// Uses FileReader to read the file from the input
source:string = '';
projectImage(file: File) {
    let reader = new FileReader;
    // TODO: Define type of 'e'
    reader.onload = (e: any) => {
        // Simply set e.target.result as our <img> src in the layout
        this.source = e.target.result;
        this.onChange.emit(file);
    };
    // This will process our file and get it's attributes/data
    reader.readAsDataURL(file);
}

  ngOnInit() {
  }

}
