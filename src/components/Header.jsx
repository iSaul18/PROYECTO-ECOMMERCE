import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getProductsAction } from "../redux/actions/getProductsAction";

const Images = "src/assets/img";

export const Header = () => {
  const { products } = useSelector((state) => state.PRODUCTS);
  const dispatch = useDispatch();

  console.log(products);

  useEffect(() => {
    dispatch(getProductsAction());
  }, []);

  return (
    <header>
      <div>
        <nav>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </nav>

        <picture>
          <img src="" alt="" />
        </picture>

        <div>
          <button></button>
          <button></button>
        </div>
      </div>
    </header>
  );
};
