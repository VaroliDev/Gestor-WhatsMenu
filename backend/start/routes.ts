import router from '@adonisjs/core/services/router'
import { controllers } from '#generated/controllers'

/*----------------------------------------
  Criação do grupo de rotas (CLIENTES)
----------------------------------------*/

router
  .group(() => {
    router.post('/cadastrar', [controllers.Clientes, 'cadastrarCliente'])
    router.get('/listar', [controllers.Clientes, 'listarClientes'])
    router.get('/listar/:id', [controllers.Clientes, 'listarCliente'])
    router.put('/editar', [controllers.Clientes, 'editarCliente'])
    router.delete('/deletar/:id', [controllers.Clientes, 'deletarCliente'])
  })
  .prefix('/clientes')


/*----------------------------------------
  Criação do grupo de rotas (PRODUTOS)
----------------------------------------*/

router
  .group(() => {
    router.post('/cadastrar', [controllers.Produtos, 'cadastrarProduto'])
    router.get('/listar', [controllers.Produtos, 'listarProdutos'])
    router.get('/listar/:id', [controllers.Produtos, 'listarProduto'])
    router.put('/editar', [controllers.Produtos, 'editarProduto'])
    router.delete('/deletar/:id', [controllers.Produtos, 'deletarProduto'])
  })
  .prefix('/produtos')


/*----------------------------------------
  Criação do grupo de rotas (PEDIDOS)
----------------------------------------*/

router
  .group(() => {
    router.post('/cadastrar', [controllers.Pedidos, 'criarPedido'])
    router.get('/listar', [controllers.Pedidos, 'listarPedidos'])
    router.get('/listar/:id', [controllers.Pedidos, 'buscarPedido'])
    router.put('/status/:id', [controllers.Pedidos, 'alterarStatus'])
  })
  .prefix('/pedidos')