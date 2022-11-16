import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getProductsAction } from "../redux/actions/getProductsAction";

const Images = "src/assets/img";
const Icon = "src/assets/icon";

export const Header = () => {
  const { products } = useSelector((state) => state.PRODUCTS);
  const dispatch = useDispatch();

  console.log(products);

  useEffect(() => {
    dispatch(getProductsAction());
  }, []);

  return (
    <header className="header">
      <div className="header-superior">
        <nav className="header-nav">
          <ul className="nav__items">
            <li className="nav__item"></li>
            <li className="nav__item"></li>
            <li className="nav__item"></li>
          </ul>
        </nav>

        <picture className="logo-container">
          <img className="logo" src={`/${Images}/logo.webp`} alt="logo" />
        </picture>

        <div className="aditional-container">
          <button className="btn-search">
            <img style={{ height: "10px", width: "10px" }} src={`/${Icon}/cart-buy-icon.svg`} alt="cart-icon" />
          </button>
          <button className="btn-carrito">
            <img style={{ height: "10px", width: "10px" }} src={`/${Icon}/search-icon.svg`} alt="search-icon" />
          </button>
        </div>
      </div>

      <div className="header-hero"></div>
    </header>
  );
};
