import { Component, OnInit } from '@angular/core';
import Tanque from 'src/app/models/Tanque';
import { TanqueService } from 'src/app/services/tanque.service';

@Component({
  selector: 'app-lista-tanques',
  templateUrl: './lista-tanques.component.html',
  styleUrls: ['./lista-tanques.component.css']
})

export class ListaTanquesComponent implements OnInit {

  tanques: any = [];

  constructor(
    private db: TanqueService
  ) { }

  ngOnInit(): void {
    this.db.getTanques().subscribe(result => {
      this.tanques = result;
    })
  }

}
