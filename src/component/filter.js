import React, { Component } from 'react';

export default class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <div className="filter-result">{this.props.count} Products</div>
        <div className="filter-sort">
          Price Order{' '}
          <select value={this.props.sort} onChange={this.props.sortProducts}>
            <option value="Rating">Price Filter</option>
            <option value="highest">Lowest</option>
            <option value="lowest">Highest</option>
          </select>
        </div>
        <div className="filter-rating">
          Rating Order{' '}
          <select
            value={this.props.ratingsort}
            onChange={this.props.ratingProducts}
          >
            <option value="Rating">Top Rating</option>
            <option value="highest">Lowest</option>
            <option value="lowest">Highest</option>
          </select>
        </div>
        <div className="filter-size">
          Filter Size{' '}
          <select value={this.props.size} onChange={this.props.filterProducts}>
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
