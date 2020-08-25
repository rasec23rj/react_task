import React, { Component } from "react";
import "./../../assets/styleCard.css";
class CardNota extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { props } = this;
    return (
      <div className="card  p-3 border-secondary" >
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
          {props.text}
          </p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    );
  }
}
export default CardNota;
