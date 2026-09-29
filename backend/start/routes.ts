import router from '@adonisjs/core/services/router'
import { controllers } from '#generated/controllers'

/*----------------------------------------
Criação do grupo de rotas (CLIENTES)
----------------------------------------*/

router
  .group(() => {
    router.get('/', () => 'Route cliente funcionando')
    router.post('/cadastrar', [controllers.Clientes, 'cadastrar'])
    router.get('/listar', [controllers.Clientes, 'listarClientes'])
    router.get('/listar/:id', [controllers.Clientes, 'listarCliente'])
    router.put('/editar', [controllers.Clientes, 'editarCliente'])
    router.delete('/deletar/:id', [controllers.Clientes, 'deletarCliente'])
  })
  .prefix('/clientes')

/*----------------------------------------
Criação do grupo de rotas (PEDIDOS)
----------------------------------------*/

router
  .group(() => {

  })
  .prefix('/pedidos')

/*----------------------------------------
Criação do grupo de rotas (PRODUTOS)
----------------------------------------*/

router
  .group(() => {

  })
  .prefix('/produtos')