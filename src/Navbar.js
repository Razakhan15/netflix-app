import React, { useEffect, useState } from 'react';
import "./Navbar.css"

function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () =>{
      if(window.scrollY > 100) {
        handleShow(true);
      }else handleShow(false)
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img className='nav_logo' src="/images/netflix.svg" alt="NETFLIX" />
        <img className='nav_avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="NETFLIX" />
    </div>
  )
}

export default Navbar