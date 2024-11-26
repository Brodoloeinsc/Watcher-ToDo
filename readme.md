# Watcher ToDo - Documentação

## Visão Geral

O **Watcher ToDo** é um aplicativo de gerenciamento de tarefas simples e intuitivo desenvolvido com React Native. O objetivo é permitir que os usuários possam adicionar, listar e excluir tarefas de forma rápida e fácil. O aplicativo possui uma interface com design agradável e usa fontes personalizadas para garantir uma experiência visual única.

## Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento de aplicativos móveis.
- **Expo**: Plataforma para facilitar o desenvolvimento com React Native.
- **react-native-vector-icons**: Biblioteca para ícones vetoriais.
- **expo-google-fonts**: Biblioteca para integrar fontes do Google Fonts no React Native.
- **AppLoading**: Usado para exibir uma tela de carregamento enquanto as fontes estão sendo carregadas.

## Funcionalidades

1. **Adicionar Tarefas**: O usuário pode adicionar novas tarefas digitando-as em um campo de texto e pressionando o botão de adicionar.
2. **Excluir Tarefas**: O usuário pode excluir tarefas clicando no ícone de lixeira ao lado de cada tarefa.
3. **Exibição de Tarefas**: As tarefas são exibidas em uma lista com a opção de exclusão. Caso não haja tarefas, é exibida uma mensagem indicando que ainda não há tarefas.
4. **Design Atraente**: O aplicativo utiliza a fonte personalizada "Joti One" do Google Fonts para uma experiência visual única e agradável.

## Instalação

### Pré-requisitos

Antes de iniciar, você precisa ter os seguintes itens instalados em sua máquina:

- **Node.js** (versão 12 ou superior)
- **npm** (ou yarn)
- **React Native CLI** ou **Expo CLI**
  
### Passos para Instalação

1. **Clone o repositório**

   Abra o terminal e execute o seguinte comando para clonar o repositório:

   ```bash
   git clone https://github.com/Brodoloeinsc/watcher-todo.git
   cd watcher-todo
   ```

2. **Instale as dependências**

   Instale as dependências do projeto utilizando npm ou yarn:

   ```bash
   npm install
   ```

   ou

   ```bash
   yarn install
   ```

3. **Instale o Expo (se necessário)**

   Caso você ainda não tenha o Expo CLI instalado, instale-o globalmente:

   ```bash
   npm install -g expo-cli
   ```

4. **Inicie o projeto**

   Para rodar o aplicativo no modo de desenvolvimento, use o comando:

   ```bash
   expo start
   ```

   Isso abrirá o aplicativo em seu navegador e permitirá que você visualize o aplicativo. Você também pode usar um emulador ou um dispositivo físico para testar.

## Estrutura de Arquivos

A estrutura do projeto é organizada da seguinte maneira:

```
/watcher-todo
  App.js
    - Contem todo o codigo do aplicativo.
  package.json
    - Dependências e scripts do projeto.
  README.md
    - Documentação do projeto.
```

## Personalização

Se desejar personalizar o aplicativo, você pode:

- **Alterar a fonte**: Troque a fonte do Google Fonts na parte do código onde a fonte é carregada. Há uma lista completa de fontes disponíveis no [Google Fonts](https://fonts.google.com/).
- **Alterar as cores**: Modifique as cores na parte de estilo no final do App, substituindo os valores de `color` e `backgroundColor` por novos valores hexadecimais.
  
## Contribuindo

Se você deseja contribuir com este projeto, siga os seguintes passos:

1. **Fork o repositório**.
2. **Crie uma branch** para suas modificações.
3. **Faça suas alterações** e faça commit.
4. **Crie um Pull Request**.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---