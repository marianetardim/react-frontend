import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import StarRatingComponent from "react-star-rating-component";
import { useMinicartProvider } from "../../../context/minicartContext";
import apiData from "../../../API-data/apiPageData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Shelf.css";

interface IShelfProps {
  shelfTitle?: string;
}
interface IproductList {
  productId: number;
  productName: string;
  stars: number;
  imageUrl: string;
  price: number;
  listPrice: number;
  installments: {
    quantity: number;
    value: number;
  }[];
}

const carouselSettings = {
  infinite: true,
  speed: 600,
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: false,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,  
        dots: true,
      },
    },
  ],
};

const ShelfComponent: React.FC<IShelfProps> = ( ) => {
  const [product, setProducts] = useState<IproductList[]>();
  const { addToCart } = useMinicartProvider();

  const formatPrices = (value: number) => {
    const price = value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });

    return price;
  };

  useEffect(() => {
    apiData
      .get("/products")
      .then(({ data }) => {
        setProducts(data);
      })
  }, []);

  return (
    <div className={"shelf__container"}>
      <div className={"shelf__title"}>Mais Vendidos</div>
      <Slider {...carouselSettings}>
        {product?.map(
          (
            { imageUrl, productName, price, listPrice, installments, stars },
            index
          ) => (
            <div key={index} className={"shelElement__container"}>
              <div className={"shelf__content"}>
                <img src={imageUrl} alt="shelf product" />
                <div className={price < listPrice ? "shelf__Flag" : ""}></div>
                <div className={"shelf_productInfo"}>
                  <span className={"shelf__productName"}>{productName}</span>
                  <StarRatingComponent
                    name="Stars"
                    starCount={5}
                    value={stars}
                    starColor="#F8475F"
                    emptyStarColor="#c4c4c4"
                  />
                  <span className={"shelf__priceList"}>
                    {price < listPrice
                      ? `de ${formatPrices(listPrice / 100)}`
                      : null}
                  </span>
                  <span className={"shelf__price"}>
                    por {formatPrices(price / 100)}
                  </span>
                  <span className={"shelf_installments"}>
                    {installments.length
                      ? `ou em ${installments[0].quantity}x de ${formatPrices(
                          installments[0].value / 100
                        )}`
                      : null}
                  </span>
                  <button
                    className={"shelf_AddToCart"}
                    onClick={() => addToCart(product[index])}
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </Slider>
    </div>
  );
};

export default ShelfComponent;
