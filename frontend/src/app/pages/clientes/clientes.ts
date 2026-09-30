import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Cliente } from '../../models/interfaces';

@Component({
  imports: [CommonModule],
  selector: 'app-clientes',
  styleUrl: './clientes.css',
  templateUrl: './clientes.html',
})
export class Clientes implements OnInit{

  carregando: boolean = false
  clientes: Cliente[] = [
    {id: 1, nome: 'samuel', telefone: "13999998888"},
    {id: 2, nome: 'joao', telefone: "13112234455"}
  ]

  ngOnInit(): void {
    
  }
}
