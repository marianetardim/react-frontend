import React from "react";
import "./MobileMenu.css";
import { IconUser } from "../../assets/icons/headerIcons";

//use minicart interface for set openMenu and close
interface IMobalMenu {
  openMenu: boolean;
  setOpenMenu: Function;
}

const MobalMenu: React.FC<IMobalMenu> = ({ openMenu, setOpenMenu }) => {

  return (
    <>
      {openMenu ? (
        <>
          <div className="MobalMenu__container">
            <div className="MobalMenu__titleContent">
              <span
                className="MobalMenu__closeButton"
                onClick={() => setOpenMenu(false)}
              >
                X
              </span>
            </div>
            <div className="MobalMenu__itemContent"></div>
                <div className="content--account">
                    <a href="/"><IconUser />Minha Conta</a>
                </div>
          </div>
          <div className="MobalMenuOverlay" onClick={() => setOpenMenu(false)}></div>
        </>
      ) : null}
    </>
  );
};

export default MobalMenu;
