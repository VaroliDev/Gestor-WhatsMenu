import { Component, OnInit, signal } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { Cliente } from '../../models/interfaces'
import { ClienteService } from '../../services/cliente-service'

@Component({
  imports: [FormsModule],
  selector: 'app-clientes',
  styleUrl: './clientes.css',
  templateUrl: './clientes.html',
})
export class Clientes implements OnInit {

  clientes = signal<Cliente[]>([])

  // Campos do formulário de cadastro
  nome = signal('')
  telefone = signal('')

  // Modal de edição
  modalEdicaoAberto = signal(false)
  clienteEmEdicao: Cliente = { nome: '', telefone: '' }

  // Modal para apagar
  clienteParaApagar = signal<Cliente | null>(null)

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.carregarClientes()
  }

  carregarClientes(): void {

    this.clienteService.listar().subscribe({
      next: (dados) => {
        this.clientes.set(dados.reverse())
      },
      error: (err) => {
        console.error('Erro ao listar clientes:', err)
      }
    })
  }

  cadastrar(): void {
    if (!this.nome() || !this.telefone()) return

    const novoCliente: Cliente = { nome: this.nome(), telefone: this.telefone() }

    this.clienteService.criar(novoCliente).subscribe({
      next: () => {
        this.nome.set('')
        this.telefone.set('')
        this.carregarClientes()
      },
      error: (err) => console.error('Erro ao cadastrar cliente:', err)
    })
  }

  abrirModalEdicao(cliente: Cliente): void {
    this.clienteEmEdicao = { ...cliente }
    this.modalEdicaoAberto.set(true)
  }

  fecharModalEdicao(): void {
    this.modalEdicaoAberto.set(false)
  }

  salvarEdicao(): void {
    this.clienteService.atualizar(this.clienteEmEdicao).subscribe({
      next: () => {
        this.fecharModalEdicao()
        this.carregarClientes()
      },
      error: (err) => console.error('Erro ao atualizar cliente:', err)
    })
  }

  // --- Apagar ---
  abrirModalApagar(cliente: Cliente): void {
    this.clienteParaApagar.set(cliente)
  }

  fecharModalApagar(): void {
    this.clienteParaApagar.set(null)
  }

  confirmarApagar(): void {
    const cliente = this.clienteParaApagar()
    if (!cliente?.id) return

    this.clienteService.deletar(cliente.id).subscribe({
      next: () => {
        this.fecharModalApagar()
        this.carregarClientes()
      },
      error: (err) => console.error('Erro ao apagar cliente:', err)
    })
  }
}