import React, { useEffect } from "react";
import {
  ProductDetailWrapper,
  ProductDetailImgWrapper,
  ProductDetailImg,
  ProductDetailInfo,
  ProductDetailName,
  ProductDetailPrice,
  ProductDetailCardButton,
} from "./styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetailAction } from "../store/actions/productActions";
import { addToCartAction } from "../store/actions/cartActions";

const ProductDetail = () => {
  const { id } = useParams();
  const { product } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const getProductDetail = (id) => dispatch(getProductDetailAction(id));
  const addToCart = (product) => dispatch(addToCartAction(product));
  useEffect(() => {
    getProductDetail(id);
  }, [id]);

  console.log(product);
  return (
    <ProductDetailWrapper key={product.id}>
      <ProductDetailImgWrapper>
        <ProductDetailImg src={product.imageURL} />
      </ProductDetailImgWrapper>
      <ProductDetailInfo>
        <ProductDetailName>{product.name}</ProductDetailName>
        <ProductDetailPrice>$ {product.price}</ProductDetailPrice>
        <ProductDetailCardButton onClick={() => addToCart(product)}>
          Add to Card
        </ProductDetailCardButton>
      </ProductDetailInfo>
    </ProductDetailWrapper>
  );
};

export default ProductDetail;
