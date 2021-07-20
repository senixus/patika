import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavoriteAction } from "../store/actions/favoriteActions";
import {
  ProductCard,
  ProductsWrapper,
  ProductCardBody,
  ProductCardImage,
  ProductCardText,
  ProductCardButton,
  ProductCardPrice,
} from "./styled-components";

const Favorites = () => {
  const { favorites } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const removeFavorite = (favorite) =>
    dispatch(removeFromFavoriteAction(favorite));

  return (
    <ProductsWrapper>
      {favorites?.map((favorite) => (
        <ProductCard key={favorite.id}>
          <ProductCardText to={`/product/${favorite.id}`}>
            <ProductCardImage src={favorite.imageURL} />
          </ProductCardText>
          <ProductCardBody>
            <ProductCardText to={`/product/${favorite.id}`}>
              {favorite.name}
            </ProductCardText>
            <ProductCardPrice>{favorite.price}</ProductCardPrice>
          </ProductCardBody>
          <ProductCardButton
            type="button"
            onClick={() => removeFavorite(favorite)}
          >
            Remove
          </ProductCardButton>
        </ProductCard>
      ))}
    </ProductsWrapper>
  );
};

export default Favorites;
