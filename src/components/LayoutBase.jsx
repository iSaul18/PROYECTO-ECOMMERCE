import { Outlet } from "react-router-dom";
import { CardIcon, SearchIcon, MenuIcon, FacebookIcon, WhatsappIcon, TwitterIcon } from "../assets/icon";
import { Logo } from "./";

export const LayoutBase = () => {
  return (
    <>
      <header className="header">
        <nav className="header-nav">
          <div className="header-nav__menu">
            <button className="header-nav-button">
              <MenuIcon className="header__icon" />
            </button>
          </div>

          <Logo />

          <div className="header-nav__buttons-container">
            <button className="header-nav-button">
              <SearchIcon className="header__icon" />
            </button>

            <button className="header-nav-button">
              <CardIcon className="header__icon" />
            </button>
          </div>
        </nav>
      </header>

      <Outlet />

      <footer className="footer">
        <div className="footer__suscribe">
          <label htmlFor="footer-textlabel">SUBSCRIBE TO OUR NEWSLETTER</label>
          <input id="footer-textlabel" type="email" placeholder="Enter Your E-mail Addres Here &rarr;" />
        </div>

        <div className="footer__social">
          <p>JOIN US ON</p>
          <picture>
            <FacebookIcon className="footer__icon" />
            <TwitterIcon className="footer__icon" />
            <WhatsappIcon className="footer__icon" />
          </picture>
        </div>

        <div className="footer__copy">
          <p>TERMS & CODITION POLICY</p>
          <picture>
            <Logo />
          </picture>
          <p>© {new Date().getFullYear()} Saul Porras All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};
