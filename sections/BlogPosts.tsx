< !DOCTYPE html >
  <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Página Inicial</title>
          <style>
            body {font - family: Arial, sans-serif; margin: 0; padding: 0; }
            header {background: #333; color: white; padding: 1rem; display: flex; justify-content: space-between; align-items: center; }
            nav a {color: white; margin: 0 1rem; text-decoration: none; }
            .banner {background: url('banner.jpg') no-repeat center center; background-size: cover; height: 300px; color: white; display: flex; justify-content: center; align-items: center; text-align: center; }
            .banner h1 {font - size: 3rem; }
            .banner button {background: #555; color: white; padding: 1rem 2rem; border: none; cursor: pointer; }
            .section {padding: 2rem; }
            .services {display: flex; justify-content: space-around; flex-wrap: wrap; }
            .service {width text-align: center; margin-bottom: 1rem; }
            .blog {display: flex; justify-content: space-around; flex-wrap: wrap; }
            .post {width margin-bottom: 1rem; }
            footer {background: #333; color: white; text-align: center; padding: 1rem; }
          </style>
        </head>
        <body>
          <header>
            <div class="logo">Meu Site</div>
            <nav>
              <a href="#">Home</a>
              <a href="#">Sobre</a>
              <a href="#">Serviços</a>
              <a href="#">Blog</a>
              <a href="#">Contato</a>
            </nav>
          </header>

          <div class="banner">
            <div>
              <h1>Bem-vindo ao Meu Site</h1>
              <button>Saiba Mais</button>
            </div>
          </div>

          <div class="section about">
            <h2>Sobre Nós</h2>
            <p>Somos uma empresa dedicada a fornecer os melhores serviços.</p>
          </div>

          <div class="section services">
            <div class="service">
              <h3>Serviço 1</h3>
              <p>Descrição do serviço 1.</p>
            </div>
            <div class="service">
              <h3>Serviço 2</h3>
              <p>Descrição do serviço 2.</p>
            </div>
            <div class="service">
              <h3>Serviço 3</h3>
              <p>Descrição do serviço 3.</p>
            </div>
          </div>

          <div class="section blog">
            <div class="post">
              <h3>Postagem 1</h3>
              <p>Resumo da postagem 1.</p>
            </div>
            <div class="post">
              <h3>Postagem 2</h3>
              <p>Resumo da postagem 2.</p>
            </div>
            <div class="post">
              <h3>Postagem 3</h3>
              <p>Resumo da postagem 3.</p>
            </div>
          </div>

          <footer>
            <p>&copy; 2024 Meu Site. Todos os direitos reservados.</p>
          </footer>
        </body>
      </html