import React from "react";
import Image from "next/image";

const NavBar: React.FC = () => {
  return (
    <nav className="h-24 bg-blue-950">
      <Image
        src="/stackline_logo.svg"
        alt="logo"
        height={150}
        width={150}
      ></Image>
    </nav>
  );
};

export default NavBar;
