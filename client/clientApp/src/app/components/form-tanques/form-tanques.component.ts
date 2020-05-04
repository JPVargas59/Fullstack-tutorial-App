import { Component, OnInit } from '@angular/core';
import Tanque from 'src/app/models/Tanque';

import { TanqueService } from 'src/app/services/tanque.service';
import { ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute
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

}
