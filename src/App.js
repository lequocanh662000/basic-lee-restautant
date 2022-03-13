//feature 1
import React from 'react';
import Cart from './component/Cart';
import Filter from './component/filter';
import Products from './component/Products';
import data from './data';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      cartItems: [],
      size: '',
      sort: '',
      ratingsort: '',
    };

    // this.filterProducts = this.filterProducts.bind(this);
  }
  //
  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((x) => x._id !== product._id),
    });
  };
  //
  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({ cartItems });
  };
  //need to change method function
  sortProducts = (event) => {
    //imp
    const sort = event.target.value;
    console.log(event.target.value);
    this.setState((state) => ({
      sort: sort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === 'lowest'
            ? a.price < b.price
              ? 1
              : -1
            : sort === 'highest'
            ? a.price > b.price
              ? 1
              : -1
            : a._id > b._id
            ? 1
            : -1
        ),
    }));
  };

  ratingProducts = (event) => {
    //imp
    const ratingsort = event.target.value;
    console.log(event.target.value); //for testing whenever ya change the state
    this.setState((state) => ({
      ratingsort: ratingsort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          ratingsort === 'lowest'
            ? a.rating < b.rating
              ? 1
              : -1
            : ratingsort === 'highest'
            ? a.rating > b.rating
              ? 1
              : -1
            : a._id > b._id
            ? 1
            : -1
        ),
    }));
  };

  filterProducts = (event) => {
    //imp
    console.log(event.target.value);
    if (event.target.value === '') {
      this.setState({ size: event.target.value, products: data.products });
    } else {
      //have errors
      this.setState({
        size: event.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value) >= 0
        ),
      });
    }
  };

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">Lee Restaurant</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter
                count={this.state.products.length}
                sort={this.state.sort}
                ratingsort={this.state.ratingsort}
                size={this.state.size}
                sortProducts={this.sortProducts}
                ratingProducts={this.ratingProducts}
                filterProducts={this.filterProducts}
              ></Filter>
              <Products
                products={this.state.products}
                addToCart={this.addToCart}
              ></Products>
            </div>
            <div className="sidebar">
              <Cart
                cartItems={this.state.cartItems}
                removeFromCart={this.removeFromCart}
              />
            </div>
          </div>
        </main>
        <footer>All right is reserved.</footer>
      </div>
    );
  }
}

export default App;
