import React, { useState } from "react";
import { useCookies } from "react-cookie";
import Minicart from "../Minicart/Minicart";
import { IconMenuMobile, IconCorebiz, IconCart, IconUser , IconSearch, } from "../../assets/icons/headerIcons";
import "./Header.css";

const Header: React.FC = () => {
  const [get] = useCookies(["minicart"]);
  const [open, setOpen] = useState<boolean>(false);

  const product = get;

  return (
    <>
      <div className="header__container">
        <div className="header__content">
          <div className="content__logo">
            <a href="https://www.corebiz.ag/pt/"><IconCorebiz /></a>
          </div>
          <div className="content--search">
            <input type="text" placeholder="O que está procurando?" />
            <IconSearch /> 
          </div>
          <div className="content--account">
            <a href="/"><IconUser />Minha Conta</a>
          </div>
          <div className="content--minicart" onClick={() => setOpen(!open)}>
            <IconCart /> 
            {product?.minicart ? <span>{product?.minicart.length}</span> : null}
          </div>
        </div>
        <Minicart open={open} setOpen={setOpen} />
      </div>
      <div className="header__containerMobile">
        <div className="header__contentMobile">
          <div className="contentMobile--menuIcon"><IconMenuMobile /></div>
          <div className="contentMobile--logo">
            <a href="/"><IconCorebiz /></a>
          </div>
          <div className="contentMobile--minicart" onClick={() => setOpen(!open)}>
            <IconCart />
            {product?.minicart ? <span>{product?.minicart.length}</span> : null}
          </div>
          <Minicart open={open} setOpen={setOpen} />
          <div className="contentMobile--search">
            <input type="text" placeholder="O que está procurando?" />
            <IconSearch />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
