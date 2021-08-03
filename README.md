<div align="center">
  <img src="https://pede.ai/upload/logo-horizontal-pedeai.png" alt="Pedeai logo">
  <img src="./src/assets/rickyandmortylogo.svg" alt="RickMortyApp logo">
</div>

## RickMortyApp

<h4 align="center">
  RickMortyApp é um App criado para busca de personagens da série televisiva Rick and Morty.
</h4>

![RickMortyApp Welcome](.github/Welcome.PNG)
![RickMortyApp CharacterList](.github/CharacterList.PNG)

![RickMortyApp SearchList](.github/SearchList.PNG)
![RickMortyApp OverView](.github/OverView.PNG)

## Tecnologias

- [ReactJS](https://reactjs.org/)
- [React-Native](https://reactnative.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/docs/intro)
- [ReactNavigation](https://reactnavigation.org/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)
- [Styled-Components](https://styled-components.com/)

## 💻 Começando

### Requisitos

- Você precisa instalar [Node.js](https://nodejs.org/en/download/) e [Yarn](https://yarnpkg.com/) e ter um ambiente android configurado na sua maquina para rodar este projeto.

**Clone o projeto e acesse a pasta**

```bash
$ git clone https://github.com/MiDrAjX/RickAndMortyApp.git && cd RickAndMortyApp
```

**Siga os passos a seguir**

```bash
# Instale as dependencias
$ yarn || npm install

# Inicie o Metro
$ yarn start || npm start

# Com o emulador ou celular conectado use o comando para instalar o aplicativo no dispositvo:
$ npx react-native run-android
```

O aplicativo vai estar disponivel na tela do seu dispositivo.

## 💻 Funcionalidades

### Listagem de personagens "Scroll Infinito"

<div>
<h3>Ao chegar ao fim da lista carrega novos personagens na lista</h3>
 <img src=".github/CharacterList.PNG" alt="Print da tela lista de personagens">
</div>

### Filtro por nome de personagem

<div>
<h3>Para Filtrar devesse inserir o nome que deseja e clicar na lupa ou no submit do teclado</h3>
 <img src=".github/SearchList.PNG" alt="Print da tela exemplo de filtro">
<h4>para retornar a lista de todos basta limpar o campo do filtro e clicar na lupa ou no submit do teclado</h4>
</div>

### Like consistente nos personagens

<div>
<h3>Clicar no simbolo de coração para realizar o like/deslike do personagem. estado fica salvo no asyncStorage</h3>
 <img src=".github/SearchList.PNG" alt="Print da tela exemplo de filtro">
<h5>Desafio encontrado nessa parte, Mesmo havendo a persistência do like no aplicativo </h5>
<h5>quando se é realizado o like/deslike dentro da pagina do personagem a atualização na lista </h5>
<h5>não é instantânea precisando atualizar a tela de lista de personagens para aparecer o like</h5>
</div>

Feito com 💜 por Jeison Marques 👋 [Dá uma olhada no meu linkedin](https://www.linkedin.com/in/jeison-marques/)
