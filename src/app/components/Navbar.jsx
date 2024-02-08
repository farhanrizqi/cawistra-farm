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

  const phoneNumber = "+6282299927574"; // Ganti dengan nomor telepon yang benar
  const encodedPhoneNumber = encodeURIComponent(phoneNumber);
  const whatsappLink = `https://api.whatsapp.com/send?phone=${encodedPhoneNumber}`;

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
      <div className="container mx-auto px-5 flex justify-between items-center py-4 md:justify-evenly md:gap-10">
        <div>
          <h1 className="font-bold md:text-xl text-primary">Cawistra Farm</h1>
        </div>
        <div className="flex items-center lg:me-10">
          <div className="rounded-full">
            <Image
              cloudName="ddrecezrk"
              publicId={logoImageUrl} // Gunakan variabel state untuk URL gambar
              alt="Cawistra Farm"
              width={30}
              height={10}
              className="w-14 h-w-14 md:w-20"
            />
          </div>
        </div>
        <a
          href={whatsappLink}
          target="_blank"
          className={`py-2 px-4 rounded-full  transition-colors ${
            navbarSolid
              ? "bg-white text-primary hover:bg-primary hover:text-white hover:border-2 hover:border-primary"
              : "bg-primary text-white hover:bg-white hover:text-primary"
          }`}
        >
          Shop Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
