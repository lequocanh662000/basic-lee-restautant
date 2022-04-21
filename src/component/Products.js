import React, { Component } from 'react';
import formatCurrency from '../until';
import { Fade, Zoom } from 'react-reveal';
import Modal from 'react-modal/lib/components/Modal';
export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }
  openModal = (product) => {
    this.setState({ product });
  };
  closeModal = () => {
    this.setState({ product: null });
  };

  render() {
    const { product } = this.state;
    return (
      <div>
        <Fade bottom cascade>
          <ul className="products">
            {this.props.products.map((product, _id) => (
              <li key={product._id}>
                <div className="product">
                  <a
                    href={'#' + product._id}
                    onClick={() => {
                      this.openModal(product);
                    }}
                  >
                    <img src={product.image} alt={product.name}></img>
                    <p>{product.name}</p>
                  </a>
                  <div className="product-price">
                    <div>{formatCurrency(product.price)}</div>
                    <button
                      onClick={() => this.props.addToCart(product)}
                      lassName="button primary"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Fade>

        {product && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <button className="close-modal" onClick={this.closeModal}>
                x
              </button>
              <div className="product-details">
                <img src={product.image} alt={product.name}></img>
                <div className="product-details-description">
                  <p>
                    <strong>{product.name}</strong>
                  </p>
                  <li>{product.description}</li>
                  <li>Category: {product.category}</li>
                  <li>Brand: {product.brand}</li>
                  <p>
                    Avaiable Sizes:{'    '}
                    {product.availableSizes.map((x) => (
                      <span>
                        {'    '}
                        <button className="button">{x}</button>
                      </span>
                    ))}
                  </p>
                  <div className="product-price">
                    <div>{formatCurrency(product.price)}</div>
                    <button
                      className="button primary"
                      onClick={() => {
                        this.props.addToCart(product);
                        this.closeModal();
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </Zoom>
          </Modal>
        )}
      </div>
    );
  }
}
