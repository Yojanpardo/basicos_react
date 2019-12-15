import React, { Fragment } from 'react';
import FirstComponent from './components/FirstComponent';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';

function App() {
  const year = new Date().getFullYear();
  return(
    <Fragment>
      <Header titulo='Welcome to my Frist React app'/>
      <FirstComponent />
      <Products />
      <Footer year={year} />
    </Fragment>
  );
  // const empleado = {
  //   nombre: 'Yojan',
  //   trabajo: 'desarrollador'
  // }
  // return (
  //   <Fragment>
  //     <h1>{empleado.nombre}</h1>
  //     <h2>{empleado.trabajo}</h2>
  //   </Fragment>
    // React si jsx
    // React.createElement(
    //   'h1',
    //   {id: 'heading', className: 'heading'},
    //   'Hola Mundo'
    // )
}

export default App;
