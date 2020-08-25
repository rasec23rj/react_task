import React, { Component } from "react";
import FormularioCadastro from "./components/Formularios";
import ListaDeNotas from "./components/Listagem";

class App extends Component {
  constructor() {
    super();
 
    this.state = {
      notas:[]
    };
  }
  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoState = {
      notas:novoArrayNotas
    };
    this.setState(novoState);
  }
  render() {
    return (
      <div>
        <nav className="navbar sticky-top navbar-dark bg-dark">
          <span className="navbar-brand">Navbar</span>
        </nav>
        <br />
        <div className="row">
          <div className="col-4">
            <FormularioCadastro criarNota={this.criarNota.bind(this)} />
          </div>
          <div className="col-8">
            <ListaDeNotas notas={this.state.notas} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
