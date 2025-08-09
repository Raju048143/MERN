import React from "react";
import logoImage from "../image/BlogMingleLogo.png";
function Logo() {
   return (
    <img
      src={logoImage}
      alt="BlogMingle Logo"
      style={{ width: '120px', height: '60px', borderRadius: '30px' }}
    />
  );
}

export default Logo;
