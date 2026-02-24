import React from "react";
import '../App.css';

class ItemsList extends React.Component {
  render() {
    const { src, name, price } = this.props;
    return (
      <div className="card">
        <img src={src} alt={name} />
        <h3>Name: {name}</h3>
        <p>Price: {price}</p>
      </div>
    );
  }
}

export default ItemsList;