import router from '@adonisjs/core/services/router'
import { controllers } from '#generated/controllers'

/*----------------------------------------
Criação do grupo de rotas (CLIENTES)
----------------------------------------*/

router
  .group(() => {
    router.get('/', () => 'Route cliente funcionando')
    router.get('/teste', [controllers.Clientes, 'teste'])
    router.post('/cadastrar', [controllers.Clientes, 'cadastrar'])
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