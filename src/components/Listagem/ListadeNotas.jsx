import React, { Component } from "react";
import CardNota from "../../components/CardNota";

class ListaDeNotas extends Component {
  render() {
    return (
      <div>
        <div className="row row-cols-1 row-cols-md-4">
          {this.props.notas.map((nota, index) => {
            return (
              <div key={index} className="col mb-5">
                <CardNota
                  indices={index}
                  deletarNota={this.props.deletarNota}
                  titulo={nota.titulo}
                  texto={nota.texto}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default ListaDeNotas;
