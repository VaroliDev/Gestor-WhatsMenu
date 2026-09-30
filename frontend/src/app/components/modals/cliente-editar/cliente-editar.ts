import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../../models/interfaces';

@Component({
  selector: 'app-cliente-editar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
      <div class="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg space-y-4">
        <h3 class="text-lg font-bold text-black">Editar Cliente</h3>

        <div class="space-y-3">
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">Nome</label>
            <input 
              type="text" 
              [(ngModel)]="cliente.nome" 
              class="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">Telefone</label>
            <input 
              type="text" 
              [(ngModel)]="cliente.telefone" 
              class="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div class="flex justify-end gap-3 pt-4">
          <button 
            (click)="fechar.emit()" 
            type="button" 
            class="px-4 py-2 border border-gray-200 text-gray-600 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
            Cancelar
          </button>
          <button 
            (click)="salvar.emit(cliente)" 
            type="button" 
            class="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold transition-colors">
            Salvar
          </button>
        </div>
      </div>
    </div>
  `
})
export class ModalEditarClienteComponent {
  @Input() cliente!: Cliente;
  @Output() salvar = new EventEmitter<Cliente>();
  @Output() fechar = new EventEmitter<void>();
}