import React, { Component } from "react";

class listaCategorias extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _handleEventInput(e) {
    if (e.key === "Enter") {
      const valorCategoria = e.target.value;
      this.props.adicionarCategoria(valorCategoria);
    }
  }
  render() {
    return (
      <div>
        <ul className="list-group list-group-horizontal list-group-flush">
          {this.props.categorias.map((categoria, index) => {
            return (
              <li className="list-group-item " key={index}>
                <span className="spanCat">
                  <label className="labelCat">{categoria}</label>
                </span>
              </li>
            );
          })}

          <li className="list-group-item ">
            <input
              type="text"
              className="form-control  form-control-sm inputCat"
              onKeyUp={this._handleEventInput.bind(this)}
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default listaCategorias;
