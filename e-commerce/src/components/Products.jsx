import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsAction } from "../store/actions/productActions";
import { addToCartAction } from "../store/actions/cartActions";
import { addToFavoriteAction } from "../store/actions/favoriteActions";

import {
  ProductsWrapper,
  ProductCard,
  ProductCardImage,
  ProductCardText,
  ProductCardBody,
  ProductCardButton,
  ProductCardPrice,
  ProductFavoriteButton,
} from "./styled-components";
import toast, { Toaster } from "react-hot-toast";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const getProducts = () => dispatch(getProductsAction());

  useEffect(() => {
    getProducts();
  }, []);

  const addToCart = (product) => {
    toast.success(`${product.name} added to cart`);
    dispatch(addToCartAction(product));
  };

  const addToFavorites = (product) => {
    toast.success(`${product.name} added to favorites`);
    dispatch(addToFavoriteAction(product));
  };

  return (
    <ProductsWrapper>
      <Toaster position="bottom-right" />
      {products.map((product) => (
        <ProductCard key={product.id}>
          <ProductCardText to={`/product/${product.id}`}>
            <ProductCardImage src={product.imageURL} />
          </ProductCardText>
          <ProductCardBody>
            <ProductCardText to={`/product/${product.id}`}>
              {product.name}
            </ProductCardText>
            <ProductCardPrice>${product.price}</ProductCardPrice>
          </ProductCardBody>
          <ProductCardButton type="button" onClick={() => addToCart(product)}>
            Add to Cart
          </ProductCardButton>
          <ProductFavoriteButton
            type="button"
            onClick={() => addToFavorites(product)}
          >
            Add to Favorites
          </ProductFavoriteButton>
        </ProductCard>
      ))}
    </ProductsWrapper>
  );
};

export default Products;
