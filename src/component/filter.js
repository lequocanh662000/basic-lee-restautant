import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  filterProducts,
  sortProducts,
  ratingProducts,
} from '../actions/productActions';
class Filter extends Component {
  render() {
    return !this.props.filteredProducts ? (
      <div>Loading...</div>
    ) : (
      <div className="filter">
        <div className="filter-result">
          {this.props.filteredProducts.length} Products
        </div>
        <div className="filter-sort">
          Price Order{' '}
          <select
            value={this.props.sort}
            onChange={(e) =>
              this.props.sortProducts(
                this.props.filteredProducts,
                e.target.value
              )
            }
          >
            <option value="Rating">Price Filter</option>
            <option value="highest">Lowest</option>
            <option value="lowest">Highest</option>
          </select>
        </div>
        <div className="filter-rating">
          Rating Order{' '}
          <select
            value={this.props.ratingsort}
            onChange={(e) =>
              this.props.ratingProducts(
                this.props.filteredProducts,
                e.target.value
              )
            }
          >
            <option value="Rating">Top Rating</option>
            <option value="highest">Lowest</option>
            <option value="lowest">Highest</option>
          </select>
        </div>
        <div className="filter-size">
          Filter Size{' '}
          <select
            value={this.props.size}
            onChange={(e) =>
              this.props.filterProducts(this.props.products, e.target.value)
            }
          >
            <option value="">All</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    size: state.products.size,
    sort: state.products.sort,
    ratingsort: state.products.ratingsort,
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
  }),
  {
    filterProducts,
    sortProducts,
    ratingProducts,
  }
)(Filter);
