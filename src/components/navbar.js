
import { FaShoppingCart } from 'react-icons/fa';
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";


function Navbar() {
  const navRef = useRef();
  const navigateTo = useNavigate();

  const goToLogin = () => {
    navigateTo("/login");
  };

  const goToSignup = () => {
    navigateTo("/signup");
  };

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };

  return (
    <header>
      <div class="logo">
        <img className="logo-img" src="/logo.webp"></img>
      </div>
      <nav ref={navRef}>

        <div style={{ flexGrow: 1, marginRight: "30px" }}>
          <input
            type="text"
            placeholder="Search..."
            className='searchbar'
          />
        </div>
        
            <Link to={"/"}>HOME</Link>
            <Link to={"/men"} >MENS</Link>
            <Link to={"/women"}>WOMENS</Link>
            <Link to={"/kid"}>KIDS</Link>
            <FaShoppingCart/>
            <button className='btn logoutBtn' onClick={goToLogin}>LOGIN</button>
            <button className='btn logoutBtn' onClick={goToSignup}>SIGN UP</button>
          
        <button
          className="nav-btn nav-close-btn"
          onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button
        className="nav-btn"
        onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;