import { GiLaptop } from 'react-icons/gi'
import '../assets/css/home.css'
import { MdLaptopChromebook } from 'react-icons/md'
import { FiTv } from 'react-icons/fi'
import { SiYoutubegaming } from 'react-icons/si'
import { CiMobile3 } from 'react-icons/ci'
import { useContext } from 'react'
import { ApiContext } from '../components/ApiContext'
import { Link } from 'react-router'
import slugify from 'slugify'
import { useTranslation } from 'react-i18next'

const Home = () => {
      const { i18n} = useTranslation();
  const currentLang = i18n.language;
    const {t}=useTranslation();
    const { data, setData } = useContext(ApiContext);
    return (
        <>
            <section className="hero">
                <div className="container hero-con">
                    <h1>{t("hero.title")}</h1>
                    <p>{t("hero.description")}</p>
                    <div className="button-con">
                        <button>{t("hero.buttons.buy")}</button>
                        <a href='#latest'>   <button>{t("hero.buttons.checkAll")}</button></a>
                    </div>
                </div>
            </section>

            <section id='latest' className="products">
                <div className="container product-con">
                    <div className="nav-con">
                        <h1>{t("latestProducts.title")}</h1>
                        <ul>
                            <li>{t("latestProducts.categories.all")}</li>
                            <li><MdLaptopChromebook className='yehu me-1' />{t("latestProducts.categories.laptop")}</li>
                            <li> <CiMobile3 className='yehu me-1' />{t("latestProducts.categories.mobile")}</li>
                            <li><FiTv className='yehu me-1' />{t("latestProducts.categories.tv")}</li>
                            <li><SiYoutubegaming className='yehu me-1' />{t("latestProducts.categories.mobile")}</li>
                        </ul>
                    </div>


                    <div className="container my-5">

                        <div className="row g-0">

                            {data?.map((product) => (
                                <div className="col-lg-2 col-md-4 col-sm-6" key={product.id}>
                             <Link
  to={"/product/" + slugify(product.title[currentLang] || '', { lower: true })}
  className="product-card-link"
>
                                        <div className="product-card position-relative">

                                            <span className="badge badge-custom">
                                                {product.badge[currentLang]}
                                            </span>

                                            <img
                                                src={product.image}
                                                className="product-img w-100"
                                            />

                                            <div className="p-3">

                                                <h6>{product.title[currentLang]}</h6>

                                                <div>
                                                    <span className="price">
                                                        {product.currency}{product.price}
                                                    </span>

                                                    {product.oldPrice && (
                                                        <span className="old-price">
                                                            {product.currency}{product.oldPrice}
                                                        </span>
                                                    )}

                                                </div>

                                                <div className="stock">
                                                    IN STOCK: {product.stock}
                                                </div>

                                                <button className="btn  btn-cart mt-2">

                                              {t("products.button")}
                                                </button>


                                            </div>

                                        </div>
                                    </Link>
                                </div>
                            ))}

                        </div>
                    </div>


                </div>



            </section>





        </>
    )
}

export default Home