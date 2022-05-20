import { FETCH_PRODUCTS } from '../type';
import {
  FILTER_PRODUCTS_BY_SIZE,
  ORDER_PRODUCTS_BY_RATING,
  ORDER_PRODUCTS_BY_PRICE,
} from '../type';

// List all products at beginning
export const fetchProducts = () => async (dispatch) => {
  const res = await fetch('/api/products');
  const data = await res.json();
  console.log(data);
  dispatch({
    type: FETCH_PRODUCTS,
    payload: data,
  });
};

// size Filter
export const filterProducts = (products, size) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCTS_BY_SIZE,
    payload: {
      size: size,
      items:
        size === ''
          ? products
          : products.filter((x) => x.availableSizes.indexOf(size) >= 0),
    },
  });
};

// Price sort
export const sortProducts = (filteredProducts, sort) => (dispatch) => {
  const sortedProducts = filteredProducts.slice();
  if (sort === 'Rating') {
    sortedProducts.sort((a, b) => (a._id > b._id ? 1 : -1));
  } else {
    sortedProducts.sort((a, b) =>
      sort === 'lowest'
        ? a.price > b.price
          ? -1
          : 1
        : a.price > b.price
        ? 1
        : -1
    );
  }
  console.log(sortedProducts);
  dispatch({
    type: ORDER_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      items: sortedProducts,
    },
  });
};

// Rating sort
export const ratingProducts = (filteredProducts, ratingsort) => (dispatch) => {
  const ratingsortedProducts = filteredProducts.slice();
  if (ratingsort === 'Rating') {
    ratingsortedProducts.sort((a, b) => (a._id > b._id ? 1 : -1));
  } else {
    ratingsortedProducts.sort((a, b) =>
      ratingsort === 'lowest'
        ? a.rating > b.rating
          ? -1
          : 1
        : a.rating > b.rating
        ? 1
        : -1
    );
  }
  console.log(ratingsortedProducts);
  dispatch({
    type: ORDER_PRODUCTS_BY_RATING,
    payload: {
      ratingsort: ratingsort,
      items: ratingsortedProducts,
    },
  });
};
