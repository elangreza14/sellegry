import React, { useState, useEffect, useCallback, useContext } from "react";
import Link from "next/link";
import { HiKey, HiMenu, HiOutlineX } from "react-icons/hi";
import { Button } from "../atoms";
import "./Header.css";
import { useWindowSize } from "../../hooks";
import { StoreContext } from "../../../contexts";

const Header = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const { width } = useWindowSize();
  const { cart } = useContext(StoreContext);
  const [totalCart, setTotalCart] = useState(0)

  useEffect(() => {
    let sum = 0;
    cart.forEach((x) => {
      sum += x.qty;
    });
    setTotalCart(sum)
    // console.log(sum);
  }, [cart]);

  const showButton = useCallback(() => {
    if (width <= 810) {
      setButton(false);
    } else {
      setButton(true);
    }
  }, [width]);

  useEffect(() => {
    window.addEventListener("resize", showButton);
    return () => {
      window.removeEventListener("resize", showButton);
    };
  }, [showButton]);

  return (
    // <header>
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          SELLEGRY <HiKey className="fa-typo3" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <HiOutlineX className="fa-bars" />
          ) : (
            <HiMenu className="fa-bars" />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tokosatu" className="nav-links">
              Toko Satu
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tokodua" className="nav-links">
              Toko Dua
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-links">
              Cart {totalCart}
            </Link>
          </li>
          <li>
            <Link to="/sign-up" className="nav-links-mobile">
              Sign Up
            </Link>
          </li>
        </ul>
        <div className="none">
          {button && (
            <Button
              fontWeight="700"
              buttonStyle="btn--outline"
              condition="button"
            >
              SIGN UP
            </Button>
          )}
        </div>
      </div>
    </nav>
    // </header>
  );
};

export default Header;
