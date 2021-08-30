import React from "react";
import { IconEmail, IconPhone, SmallIconCorebiz, SmallIconVtex } from "../../assets/icons/footerIcons";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <div className="footer__container">
      <div className="footer__content">
        <div className="footer__address">
          <h4>Localização</h4>
          <p>Avenina Andôme, 2000, Bloco 6 e 8 </p>
          <p>Alphavile SP</p>
          <p><a href="mailto:brasil@corebiz.ag">brasil@corebiz.ag</a></p>
          <a href="tell:11 3090 1039">+55 11 3090 1039</a>
        </div>
        <div className="footer__contact">
          <a href="mailto:brasil@corebiz.ag">
            <IconEmail />
            Entre em contanto
          </a>
          <a href="tell:11 3090 1039">
            <IconPhone />
            Fale com o nosso consultor online
          </a>
        </div>
        <div className="footer__companys">
          <a href="https://www.corebiz.ag/pt/" target="_blank" rel="noreferrer">
            Created by
            <SmallIconCorebiz />
          </a>
          <a href="https://vtex.com/br-pt/" target="_blank" rel="noreferrer">
            <SmallIconVtex />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
