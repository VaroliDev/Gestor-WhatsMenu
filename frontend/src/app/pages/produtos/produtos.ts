import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Produto } from '../../models/interfaces';
import { ProdutoService } from '../../services/produto-service';

@Component({
  imports: [FormsModule],
  selector: 'app-produtos',
  styleUrl: './produtos.css',
  templateUrl: './produtos.html',
})
export class Produtos implements OnInit {

  carregando = signal(true);
  produtos = signal<Produto[]>([]);

  // Pesquisa
  busca = signal('');
  produtosFiltrados = computed(() => {
    const termo = this.busca().toLowerCase();
    return this.produtos().filter(p => p.nome.toLowerCase().includes(termo));
  });

  // Campos do formulário de cadastro
  nome = signal('');
  preco = signal<number | null>(null);

  // Modal de edição
  modalEdicaoAberto = signal(false);
  produtoEmEdicao: Produto = { nome: '', preco: 0, ativo: true };

  // Modal de apagar
  produtoParaApagar = signal<Produto | null>(null);

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.carregando.set(true);

    this.produtoService.listar().subscribe({
      next: (dados) => {
        this.produtos.set(dados.reverse());
        this.carregando.set(false);
      },
      error: (err) => {
        console.error('Erro ao listar produtos:', err);
        this.carregando.set(false);
      }
    });
  }

  cadastrar(): void {
    const preco = this.preco();
    if (!this.nome() || preco === null) return;

    const novoProduto: Produto = { nome: this.nome(), preco: preco, ativo: true };

    this.produtoService.criar(novoProduto).subscribe({
      next: () => {
        this.nome.set('');
        this.preco.set(null);
        this.carregarProdutos();
      },
      error: (err) => console.error('Erro ao cadastrar produto:', err)
    });
  }

  // --- Edição ---
  abrirModalEdicao(produto: Produto): void {
    this.produtoEmEdicao = { ...produto };
    this.modalEdicaoAberto.set(true);
  }

  fecharModalEdicao(): void {
    this.modalEdicaoAberto.set(false);
  }

  salvarEdicao(): void {
    this.produtoService.atualizar(this.produtoEmEdicao).subscribe({
      next: () => {
        this.fecharModalEdicao();
        this.carregarProdutos();
      },
      error: (err) => console.error('Erro ao atualizar produto:', err)
    });
  }

  // --- Apagar ---
  abrirModalApagar(produto: Produto): void {
    this.produtoParaApagar.set(produto);
  }

  fecharModalApagar(): void {
    this.produtoParaApagar.set(null);
  }

  confirmarApagar(): void {
    const produto = this.produtoParaApagar();
    if (!produto?.id) return;

    this.produtoService.deletar(produto.id).subscribe({
      next: () => {
        this.fecharModalApagar();
        this.carregarProdutos();
      },
      error: (err) => console.error('Erro ao apagar produto:', err)
    });
  }
}