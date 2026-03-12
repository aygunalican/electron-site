import { CiHeart, CiLocationOn, CiShop } from 'react-icons/ci'
import '../assets/css/header.css'

import { HiOutlineShoppingBag } from 'react-icons/hi'

import { IoSearch } from 'react-icons/io5'
import { FaRegHeart, FaRegLightbulb, FaWhatsapp } from 'react-icons/fa'
import { HiBars3, HiMiniArrowPath, HiOutlineBars3 } from 'react-icons/hi2'
import { BsMegaphone, BsPersonCircle, BsTranslate } from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'
import { MdKeyboardArrowDown, MdOutlineLiveTv } from 'react-icons/md'
import { RiHomeSmile2Line, RiTranslate } from 'react-icons/ri'
import i18n from '../i18n/i18n'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
const Header = () => {
const [lang, setLang] = useState('en');


  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'az' : 'en';
    i18n.changeLanguage(newLang);
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };
      const {t}=useTranslation();
  return (
    <>
      <header>
        <div className="top">
           {t("header.topMessage")}
        </div>
        <nav className="navbar first navbar-expand-lg mx-auto ">
          <div className="container">

            <div className="collapse navbar-collapse">
              <img className="me-5" src='https://electron.ninetheme.com/wp-content/uploads/2023/08/electron-logo-standart-1.png' />
        
        <div className="search-box">

              <input className="form-control " type="search" placeholder={t("header.searchPlaceholder")} aria-label="Search" />
              <button><IoSearch className='src' /></button>

</div>
       <div className='location '>
                <FaWhatsapp  className='locicon' />
                <div className="loc-text">
                  <p> {t("header.callAnytime")}</p>
                  <p><span>280 900 3434</span></p>
                </div>
              </div>
              <ul className="navbar-nav  ms-5">
                     <li className="nav-item icons">
   <HiOutlineShoppingBag />
                </li>
                <li className="nav-item icons">
               <HiMiniArrowPath />


                </li>
                <li className="nav-item icons">
                 <FaRegHeart />
                </li>
                <li className="nav-item icons">
               <BsPersonCircle/>
                </li>
           
                <li className="nav-item icons">
                <button onClick={toggleLanguage}>{lang}</button> 
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <nav className="navbar second navbar-expand-lg ">
            <div className="container">
        <div className="dropdown">
  <a  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
   <HiBars3 className='alo' /> {t("header.categories")}
  </a>
 <a><MdKeyboardArrowDown className='alo' /></a>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">{t("header.categoryItems.accessories")}</a></li>
    <li><a className="dropdown-item" href="#">{t("header.categoryItems.buds")}</a></li>
    <li><a className="dropdown-item" href="#">{t("header.categoryItems.laptop")}</a></li>
        <li><a className="dropdown-item" href="#">{t("header.categoryItems.mobile")}</a></li>
  </ul>
</div>
          <ul className="navbar-nav my-auto ms-5">
            <li className="nav-item">
              <Link to='/'  className="nav-link"><RiHomeSmile2Line className='waho me-1' />{t("header.navLinks.home")}<IoIosArrowDown className='waho ms-1' /></Link>
            </li>
            <li className="nav-item">
              <a a href="#" className="nav-link"><CiShop className='waho me-1' />{t("header.navLinks.shop")}<IoIosArrowDown className='waho ms-1' /></a>

            </li>
            <li className="nav-item">
               <a  href="#" className="nav-link"><MdOutlineLiveTv className='waho me-1' />{t("header.navLinks.pages")}<IoIosArrowDown className='waho ms-1' /></a>
            </li>
            <li className="nav-item">
             <a href="#" className="nav-link"><BsMegaphone className='waho me-1' />{t("header.navLinks.features")}<IoIosArrowDown className='waho ms-1' /></a>
            </li>
                <a  href="#" className="nav-link"><FaRegLightbulb className='waho me-1' />{t("header.navLinks.megaMenu")}<IoIosArrowDown className='waho ms-1' /></a>
          </ul>
          
          
          </div>
 

        </nav>

      </header>
    </>
  )
}

export default Header