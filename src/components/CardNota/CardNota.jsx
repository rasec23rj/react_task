import React, { Component } from "react";
import "./../../assets/styleCard.css";
import { ReactComponent as DeleteSVG } from "./../../assets/icons/delete.svg";
class CardNota extends Component {
  constructor(props) {
    super(props);
  }

  apagar() {
    const indice = this.props.indices;
    this.props.deletarNota(indice);
  }
  render() {
    const { props } = this;
    return (
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">{props.titulo}</h5>
          <DeleteSVG onClick={this.apagar.bind(this)} />
          <p className="card-text">{props.texto}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted"></small>
        </div>
      </div>
    );
  }
}
export default CardNota;
