import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsAction } from "../redux/actions/getProductsAction";
import { ArrowIcon } from "../assets/icon";

export const Home = () => {
  const { products } = useSelector((state) => state.PRODUCTS);
  const dispatch = useDispatch();

  console.log("Probando la Api");
  console.log(products);

  useEffect(() => {
    dispatch(getProductsAction());
  }, []);
  return (
    <>
      <main className="main">
        <div className="main__hero-box"></div>
        <div className="main__text-box">
          <p className="main__text-box__subtitle">INDOORS</p>
          <h2 className="main__text-box__title">See Bamboo’s New Range Of Indoor Furniture</h2>
          <p className="main__text-box__paragraph">
            Classic meet modern living, Bamboo has a fantastic range of indoor furniture, perfect for any modern home.
          </p>
          <button className="main__text-box__btn">SEE MORE</button>

          <div className="main__slider">
            <button className="main__slider__btn active"></button>
            <button className="main__slider__btn"></button>
            <button className="main__slider__btn"></button>
            <button className="main__slider__btn"></button>
          </div>
        </div>

        <button className="slider-btn slider-btn--prev">
          <ArrowIcon />
        </button>
        <button className="slider-btn slider-btn--next">
          <ArrowIcon />
        </button>
      </main>

      <section className="home-section-products">
        <h2>Featured Product</h2>
        <div className="home-products"></div>
      </section>
    </>
  );
};
