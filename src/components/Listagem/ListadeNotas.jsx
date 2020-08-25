import React, { Component } from "react";
import CardNota from "../../components/CardNota";

class ListaDeNotas extends Component {
  render() {
    return (
      <div>
        <div className="row row-cols-1 row-cols-md-5">
          {this.props.notas.map((nota, index) => {
            return (
              <div key={index} className="col mb-5 card-deck">
                <CardNota title={nota.titulo}  text={nota.texto}/>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default ListaDeNotas;
