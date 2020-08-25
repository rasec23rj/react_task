import React, { Component } from "react";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
  }
  _handlerMudancaTitulo(event) {
    this.titulo = event.target.value;
  }
  _handlerMudancaTexto(event) {
    this.texto = event.target.value;
  }
  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
  }

  render() {
    return (
      <div>
        <form onSubmit={this._criarNota.bind(this)}>
          <div className="form-group">
            <input
              type="text"
              name="titulo"
              placeholder="Título"
              className="form-control"
              onChange={this._handlerMudancaTitulo.bind(this)}
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              placeholder="Escreva sua nota..."
              onChange={this._handlerMudancaTexto.bind(this)}
            />
          </div>

          <div className="button-form float-right">
            <button className="btn btn-primary">Criar Nota</button>
          </div>
        </form>
      </div>
    );
  }
}
export default FormularioCadastro;
