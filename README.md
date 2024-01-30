# Desafio Frontend - Vue.js 3 / Nuxt 3

Acesse o deploy através do link: https://learning-system-ebon.vercel.app/

## Descrição
O projeto consiste na criação de uma aplicação web de controle de tarefas, visando demonstrar habilidades avançadas na concepção de interfaces de usuário (UI) responsivas e modulares. A inspiração para o design e layout da aplicação foi baseada em uma tela fornecida no Figma.

## Ferramentas e Tecnologias
- **Vue.js**: Versão 3.4.14
- **Nuxt**: Versão 3.9.3
- **Pinia**: Para gerenciamento de estados
- **Sass**: SCSS para criar estilos escaláveis e de fácil manutenção

## Pré-requisitos
- **Node.js** (Versão 18.0.0)
- **Yarn** (Versão 1.22.19)

## Estrutura de Pastas
`assets` <blockquote> Inclui arquivos de estilização scss, além de icons e imagens usados no projeto </blockquote>
`components` <blockquote> Onde se encontra os componentes criados para cada seção, além de componentes reutilizáveis de uso comum entre as seções </blockquote>
`interfaces` <blockquote> Contém arquivos de interface para serem usados a fim de garantir que determinados objetos aderem a essa estrutura específica </blockquote>
`layouts` <blockquote> Armazena layouts que podem ser compartilhados entre diferentes páginas, como header e sidebar </blockquote>
`pages` <blockquote> Contém as páginas da aplicação, que são automaticamente roteadas pelo Nuxt.js </blockquote>
`public` <blockquote> Contém arquivos estáticos que são servidos diretamente, como imagens, icons, etc </blockquote>
`store` <blockquote> Define a store utilizando o Pinia, que é um gerenciador de estado central para Vue.js </blockquote>


## Instalação
Clone o repositório:

```git clone https://github.com/starladyrie/learning-system.git```

Navegue até o diretório do projeto:

```cd learning-system```

Instale as dependências com Yarn:

```yarn install```

## Executando o Projeto
Para iniciar o projeto, utilize o seguinte comando:

```yarn dev```

O aplicativo estará disponível em http://localhost:3000

## Pontos de Melhorias
Alguns requisitos não foram atendidos devido ao curto período de tempo disponível para a entrega deste desafio. No entanto, pretende-se abordá-los num futuro próximo:

- Usabilidade não adequada para todas as resoluções (responsividade)
- Sidebar não está sendo minimizada
- Layout do body da tabela quebrado em relação ao protótipo
- Simulação de dados não preenchidos não implementada
- Refatorações para otimização de código
  -   Identificar estilizações repetidas e possibilidades de componentização
  -   Realizar testes a fim de garantir o bom funcionamento dos métodos empregados
    
