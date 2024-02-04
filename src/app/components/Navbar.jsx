"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Image } from "cloudinary-react";
import { Cloudinary } from "cloudinary-core";

const Navbar = () => {
  const [navbarSolid, setNavbarSolid] = useState(false);
  const [logoImageUrl, setLogoImageUrl] = useState(
    "https://res.cloudinary.com/ddrecezrk/image/upload/v1706611886/cawistra/cawistrafarm/eiepyhfo4dwpptwy5etm.png"
  );

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setNavbarSolid(true);
      setLogoImageUrl(
        "https://res.cloudinary.com/ddrecezrk/image/upload/v1706611886/cawistra/cawistrafarm/eiepyhfo4dwpptwy5etm.png"
      );
    } else {
      setNavbarSolid(false);
      setLogoImageUrl(
        "https://res.cloudinary.com/ddrecezrk/image/upload/v1706611886/cawistra/cawistrafarm/eiepyhfo4dwpptwy5etm.png"
      );
    }
  };

  const cloudinaryCore = new Cloudinary({ cloud_name: "ddrecezrk" });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed -top-2  w-full transition-all duration-300 z-50 lg:px-20 ${
        navbarSolid
          ? "bg-transparent backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-5 flex justify-between items-center py-4">
        <div>
          <h1>Cawistra Farm</h1>
        </div>
        <div className="flex items-center">
          <div className="rounded-full">
            <Image
              cloudName="ddrecezrk"
              publicId={logoImageUrl} // Gunakan variabel state untuk URL gambar
              alt="Moody Shirt"
              width={30}
              height={10}
              className="w-14 h-w-14"
            />
          </div>
        </div>
        <a
          target="_blank"
          className={`py-2 px-4 rounded-full  transition-colors ${
            navbarSolid
              ? "bg-white text-red-500 hover:bg-red-600 hover:text-white hover:border-2 hover:border-white"
              : "bg-primary text-white hover:bg-red-600"
          }`}
        >
          Shop Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
