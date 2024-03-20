import React from "react";
import Image from "next/image";

const NavBar: React.FC = () => {
  return (
    <nav className="flex h-16 flex-col justify-center bg-blue-950">
      <Image
        src="/stackline_logo.svg"
        alt="logo"
        height={150}
        width={150}
        className="pl-4"
      ></Image>
    </nav>
  );
};

export default NavBar;
