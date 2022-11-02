import React, { Component } from 'react'
import './App.css';
import { getBoletos } from './services/services';
import FolioInput from './components/FolioInput';
import BoletosList from './components/BoletosList';
class App extends Component {
  state = {
    folioPreimpreso: {},
    boletos: []
  }

  findMovimientos = folio => {
    console.log("App findMovimientos: "+folio);
    getBoletos(folio)
      .then(boletos => this.setState({ boletos }))
  }

  render() {
    const { boletos, folioPreimpreso } = this.state;
    console.log("Boletos: "+boletos);
    boletos.map(boleto => console.log(boleto.claveCorrida))
    return (

      <div className="App">
        <FolioInput buscarMovimientos ={this.findMovimientos} />
        <BoletosList boletos={boletos}/>
      </div>
    );
  }
}



export default App;
