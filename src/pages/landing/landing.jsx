import Template from "../../components/template/template";
import "./landing.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../redux/features/products/productsSlice";
export default function Landing() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  /*eslint-disable */
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  // confirmation of redux
  if (products) {
    console.log(`redux is working ${products}`);
  }
  /*eslint-enable */

  return (
    <Template>
      <div className="landing">Landing Page</div>
    </Template>
  );
}
