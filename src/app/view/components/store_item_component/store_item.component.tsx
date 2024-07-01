/* eslint-disable @next/next/no-img-element */
import {
  CardContainer,
  CardContent,
  ImageContainer,
  ProductImage,
  ProductInfo,
  ProductName,
  PriceTag,
  PriceText,
  ProductDescription,
} from './store_item.style';
import StoreItemButtonComponent from "./store_item_button.component";
import { ProductModel } from "@/app/domain/model/product.model";

export default function StoreItemComponent(params: { product: ProductModel }) {
  return (
    <CardContainer>
      <CardContent>
        <ImageContainer>
        <img
            src={params.product.photo}
            alt={params.product.name}
            width={300}
            height={300}
            className="rounded-3xl w-[70%] h-[70%]"
          />
        </ImageContainer>
        <ProductInfo>
          <ProductName>{params.product.name}</ProductName>
          <PriceTag>
            <PriceText>R${params.product.price}</PriceText>
          </PriceTag>
        </ProductInfo>
        <ProductDescription>{params.product.description}</ProductDescription>
      </CardContent>
      <StoreItemButtonComponent product={params.product} />
    </CardContainer>
  );
}
