import { Component, OnInit } from '@angular/core';
import Tanque from 'src/app/models/Tanque';

import { TanqueService } from 'src/app/services/tanque.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-tanques',
  templateUrl: './form-tanques.component.html',
  styleUrls: ['./form-tanques.component.css']
})
export class FormTanquesComponent implements OnInit {

  tanque: Tanque = {
    idTanque: undefined,
    calidad: undefined,
    peso: undefined,
    fechaEsperadaRetorno: undefined,
    idEtiqueta: undefined,
    foto: undefined
  }

  idTanque: string;

  constructor(
    private db: TanqueService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.idTanque = this.route.snapshot.params.id
    if (this.idTanque) {
      // GET Tanque por ID
      this.db.getTanque(this.idTanque).subscribe(tanque => {
        this.tanque = tanque;
      })
    }
  }

  onSubmit() {
    console.log('Onsubmit')
    if (this.idTanque) {
      this.db.updateTanque(this.tanque).subscribe(() =>{
        alert('Tanque actualizado con éxtio')
        this.router.navigateByUrl('/tanques');
      })
    } else {
      this.db.setTanque(this.tanque).subscribe(() => {
        alert('Tanque creado con éxito');
        this.router.navigateByUrl('/tanques');
      })
    }
  }

}
