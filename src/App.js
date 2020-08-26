import React, { Component } from "react";
import FormularioCadastro from "./components/Formularios";
import ListaDeNotas from "./components/Listagem";
import ListaCategorias from "./components/Categorias";

class App extends Component {
  constructor() {
    super();

    this.state = {
      notas: [],
      categorias: ["Trabalho", "Escola", "Faculdade"],
    };
  }
  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoState = {
      notas: novoArrayNotas,
    };
    this.setState(novoState);
  }

  deletarNota(index) {
    let arrayNotas = this.state.notas;

    arrayNotas.splice(index, 1);
    this.setState({ notas: arrayNotas });
  }
  _adicionarCategoria(nomeCategoria){
    const novoArrayCategoria = [...this.state.categorias, nomeCategoria]
    const novoEstado = {...this.state, categorias:novoArrayCategoria};
    this.setState(novoEstado);
  }
  render() {
    return (
      <div>
        <nav className="navbar sticky-top navbar-dark bg-dark">
          <span className="navbar-brand">Navbar</span>
        </nav>
        <br />

        <div className="container">
          <div className="row">
            <div className="col-4">
              <FormularioCadastro criarNota={this.criarNota.bind(this)} />
            </div>
            <div className="col-8">
              <ListaCategorias categorias={this.state.categorias} adicionarCategoria={this._adicionarCategoria.bind(this)}/>
              <ListaDeNotas
              deletarNota={this.deletarNota.bind(this)}
              notas={this.state.notas}
            />
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
