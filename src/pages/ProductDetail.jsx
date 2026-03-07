import { Link, NavLink, useParams } from "react-router-dom";
import slugify from "slugify";
import { useContext } from "react";
import '../assets/css/detail.css'
import { ApiContext } from "../components/ApiContext";
import { IoStarSharp } from "react-icons/io5";
import { LuBus } from "react-icons/lu";
import { TbPlant2 } from "react-icons/tb";
import { useTranslation } from "react-i18next";

const ProductDetail = () => {

  const { slug } = useParams();
      const { i18n} = useTranslation();
            const { t } = useTranslation();
  const currentLang = i18n.language;
  const { data } = useContext(ApiContext);

  const product = data.find(
    (item) => slugify(item.title[currentLang]) === slug
  );

  if (!product) return <h1>Loading...</h1>;

  return (

        <div className="singleproduct">
    <div className="container single ">
      <div className="image-con">
            <img src={product.image}  />
      </div>
      <div className="text-con">
      <h1>{product.title[currentLang]}</h1>
      <div className="stars">
        <p><TbPlant2 className="plant me-2" />{t("productDetail.original")}</p>
      <IoStarSharp className='star' />    <IoStarSharp className='star' />  <IoStarSharp className='star' />  <IoStarSharp className='star' />
      </div>
    <p>High-quality product - <span>{product.title[currentLang]}     </span>{t("productDetail.description")}</p>
      <h4>{product.currency}{product.price}</h4>
      <p> <LuBus className='bus me-2' />{t("productDetail.delivery")}</p>
      <p>{t("productDetail.amount")}: <span ms-4>{t("productDetail.amountValue")}</span></p>
      <div className="btns mt-3">
      <button className=' btn btn-outline-primary  me-3'>{t("productDetail.addToCart")}</button>
            <NavLink to='/'  className=' btn btn-outline-primary  lo me-3'>{t("productDetail.goBack")}</NavLink>
    </div>
    </div>
</div>
</div>
  )
}

export default ProductDetail
