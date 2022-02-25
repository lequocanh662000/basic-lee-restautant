import React, { Component } from 'react';
import formatCurrency from '../until';

export default class Products extends Component {
  render() {
    return (
      <div>
        <ul className="products">
          {this.props.products.map((product, _id) => (
            <li key={product._id}>
              <div className="product">
                <a href={'#' + product._id}>
                  <img src={product.image} alt={product.name}></img>
                  <p>{product.name}</p>
                </a>
                <div className="product-price">
                  <div>{formatCurrency(product.price)}</div>
                  <button className="button primary">Add To Cart</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
