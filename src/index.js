//importando as funcionalidades do react (não há necessidade de declarar ou algo do tipo)
import React from 'react';
import ReactDOM from 'react-dom';
// importando meu app
import App from './App';
// import * as serviceWorker from './serviceWorker';

// chamando a função render para renderizar na tela meu app
ReactDOM.render(

    <App />,
  document.getElementById('root')
);

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();
