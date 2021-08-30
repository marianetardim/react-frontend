import React from "react";
import { useCookies } from "react-cookie";

import "./Minicart.css";

interface IMinicart {
  open: boolean;
  setOpen: Function;
}

const Minicart: React.FC<IMinicart> = ({ open, setOpen }) => {
  const [get] = useCookies(["minicart"]);

  const product = get;

  return (
    <>
      {open ? (
        <>
          <div className="minicart__container">
            <div className="minicart__titleContent">
              <span className="minicartTitle">Mini Cart</span>
              <span
                className="minicart__closeButton"
                onClick={() => setOpen(false)}
              >
                X
              </span>
            </div>
            <div className="minicart__itemContent"></div>
            {product?.minicart?.map((product: any, index: number) => (
              <div key={index} className={"product__listContainer"}>
                <div className={"product__listContent"}>
                  <img src={product.imageUrl} alt="product" />
                  <div className={"product__listInfo"}>
                    <span className={"product__listName"}>
                      {product.productName}
                    </span>
                    <span> X {product.quantity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="minicartOverlay" onClick={() => setOpen(false)}></div>
        </>
      ) : null}
    </>
  );
};

export default Minicart;
