# Sistema Gestor

Este é um Monorepo do sistema de gestão de pedidos para avaliação do teste técnico do Whatsmenu, desenvolvido utilizando AdonisJS (backend) e Angular (frontend)

# Requesitos

- **Node.JS**
-  **npm** (instalado junto com o Node.JS)
-  **Git** 

## Estrutura do projeto

- `backend/`: Backend em AdonisJS (Servidor HTTP na porta 3333)
- `frontend/`: Interface Web em Angular (Servidor na porta 4200)

## Passo a passo para execução do projeto

### Clonagem do repositório
Abra um terminal na pasta de sua escolha (por exemplo: C:\User\Usuario\Documentos)
Execute a clonagem do repositório do Github utilizando o seguinte comando

    git clone https://github.com/VaroliDev/Gestor-WhatsMenu.git
Em seguida, entre na pasta Gestor-WhatsMenu

    cd Gestor-WhatsMenu
Abra mais um terminal na pasta do Gestor-WhatsMenu ( C:\User\Usuario\Documentos\Gestor-WhatsMenu)

----
### 1. Backend (AdonisJS)
Em um dos terminais entre na pasta backend:

    cd backend
   e baixe as dependencias do projeto utilizando:
   

    npm install
**Certifique-se** de ter o arquivo **.env** configurado, junto com o link do projeto foi enviado um link para o pastebin, contendo as configurações **.env**

Em seguida, execute a migração do banco de dados

    node ace migration:run
Agora já é possivel iniciar o backend utilzando:

    npm run dev
Agora a API estará rodando em `http://localhost:3333`

---

### 2.Frontend
No outro terminal entre na pasta do frontend:

    cd frontend
Realize o download do Angular utilizando:

    npm install --global @angular/cli
    
Baixe as dependências do projeto utilizando:

    npm install
 
Inicialize o projeto do Angular utilizando

    npm start

Pronto! agora o frontend e backend estão funcionando, você pode acessar o site de gestão indo em `http://localhost:4200`

