# Gerenciador de Tarefas

Este é um projeto de Gerenciador de Tarefas desenvolvido por **João Vitor Bastos**. É uma aplicação web que permite adicionar, visualizar, completar e remover tarefas. O projeto foi desenvolvido utilizando **React** como principal ferramenta e **Tailwind CSS** para a estilização.

## Demonstração

Você pode acessar o projeto online através do seguinte link:  
[Gerenciador de Tarefas](https://gerenciador-de-tarefas-gold.vercel.app/)

## Other Languages

- [English version](README.md)

## Funcionalidades

- **Adicionar tarefas**: Crie novas tarefas com título e descrição.
- **Marcar tarefas como concluídas**: Clique em uma tarefa para marcá-la como concluída.
- **Remover tarefas**: Exclua tarefas da lista.
- **Visualizar detalhes das tarefas**: Veja o título e a descrição detalhada de cada tarefa.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface.
- **Tailwind CSS**: Framework de CSS para estilização rápida e eficiente.
- **React Router**: Navegação entre páginas.
- **LocalStorage**: Armazenamento local das tarefas no navegador.
- **UUID**: Para gerar identificadores únicos para cada tarefa.
- **Vercel**: Hospedagem do projeto.

## Estrutura do Projeto

- **App.jsx**: Componente principal que gerencia o estado das tarefas.
- **AddTask.jsx**: Componente responsável por adicionar novas tarefas.
- **Tasks.jsx**: Componente que exibe a lista de tarefas e seus botões de ação (completar, visualizar detalhes, remover).
- **TaskPage.jsx**: Página que exibe os detalhes de uma tarefa específica.
- **Title.jsx**: Componente que renderiza os títulos da aplicação.

## Como Rodar o Projeto Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/bastosjoaovitor/gerenciador-de-tarefas.git

2. Acesse a pasta do projeto:
   ```bash
   cd gerenciador-de-tarefas

3. Instale as dependências:
   ```bash
   npm install

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev

## Aprendizados

Este projeto foi minha primeira experiência com React e Tailwind CSS, o que me permitiu aprender sobre o desenvolvimento de aplicações reativas e estilização utilizando classes utilitárias. Também aprendi a trabalhar com gerenciamento de estado em React e a integrar funcionalidades de navegação com o React Router.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto é de código aberto e está sob a [licença MIT](LICENSE).