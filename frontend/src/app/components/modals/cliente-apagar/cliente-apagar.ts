import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cliente } from '../../../models/interfaces';

@Component({
  selector: 'app-cliente-apagar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
      <div class="bg-white rounded-2xl p-6 w-full max-w-sm shadow-lg space-y-4">
        <h3 class="text-lg font-bold text-red-600">Apagar Cliente</h3>
        
        <p class="text-sm text-gray-600">
          Tem certeza que deseja apagar o cliente <span class="font-bold text-black">{{ cliente.nome }}</span>? 
          Esta ação não pode ser desfeita.
        </p>

        <div class="flex justify-end gap-3 pt-4">
          <button 
            (click)="fechar.emit()" 
            type="button" 
            class="px-4 py-2 border border-gray-200 text-gray-600 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
            Cancelar
          </button>
          <button 
            (click)="confirmar.emit(cliente.id!)" 
            type="button" 
            class="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-sm font-semibold transition-colors">
            APAGAR
          </button>
        </div>
      </div>
    </div>
  `
})
export class ModalApagarClienteComponent {
  @Input() cliente!: Cliente;
  @Output() confirmar = new EventEmitter<number>();
  @Output() fechar = new EventEmitter<void>();
}