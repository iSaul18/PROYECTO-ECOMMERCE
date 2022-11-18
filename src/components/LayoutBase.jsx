import { Outlet } from "react-router-dom";
import { CardIcon, SearchIcon, MenuIcon } from "../assets/icon";

const Images = "src/assets/img";
const Icon = "src/assets/icon";

export const LayoutBase = () => {
  return (
    <>
      <header className="header">
        <nav className="header-nav">
          <div className="header-nav__menu">
            <button className="header-nav-button">
              <MenuIcon fill="white" heigth="20px" width="20px" />
            </button>
          </div>

          <picture className="header-nav__logo-container">
            <img className="header-nav__logo" src={`${Images}/logo.png`} alt="logo" />
          </picture>

          <div className="header-nav__buttons-container">
            <button className="header-nav-button">
              <CardIcon fill="white" heigth="20px" width="20px" />
            </button>

            <button className="header-nav-button">
              <SearchIcon fill="white" width="20px" height="20px" />
            </button>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
