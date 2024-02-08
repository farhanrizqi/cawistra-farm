"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Image } from "cloudinary-react";
import { Cloudinary } from "cloudinary-core";
import Link from "next/link";

export default function Aqiqah() {
  const heroImage =
    "https://res.cloudinary.com/ddrecezrk/image/upload/v1707046170/cawistra/cawistrafarm/fbrgxbaymolukbz4vd3a.jpg";

  const meetImage =
    "https://res.cloudinary.com/ddrecezrk/image/upload/v1707022544/cawistra/cawistrafarm/sotxttffsa9aszil6bqw.jpg";

  const cowImage =
    "https://res.cloudinary.com/ddrecezrk/image/upload/v1707068942/cawistra/cawistrafarm/qr9wny0opeqqypbxxykm.png";

  const sheepImage =
    "https://res.cloudinary.com/ddrecezrk/image/upload/v1707068940/cawistra/cawistrafarm/t7twj3ez2rg6pinq7kb5.png";

  const cloudinaryCore = new Cloudinary({ cloud_name: "ddrecezrk" });

  const phoneNumber = "082299927574"; // Ganti dengan nomor telepon yang benar
  const encodedPhoneNumber = encodeURIComponent(phoneNumber);
  const whatsappLink = `https://api.whatsapp.com/send?phone=${encodedPhoneNumber}`;

  return (
    <>
      <Navbar />
      <main className="py-20">
        {/* section title */}
        <section className=" pt-4 px-5">
          <div>
            <h1 className="text-primary text-center font-bold text-xl">
              Welcome to <br /> Cawistra Farm
            </h1>
            <h3 className="text-primary text-center font-light text-sm">
              Your Source for Premium Livestock
            </h3>
          </div>
        </section>

        {/* Section Hero */}
        <section className="py-5">
          <div className="h-auto">
            <Image
              src={heroImage} // Ganti dengan path gambar sesuai struktur proyek Anda
              alt="Farm"
              width="100%" // Menyesuaikan lebar gambar
              height={100}
              crop="fill" // Crop gambar agar sesuai dengan lebar dan tinggi yang diinginkan // Tentukan tinggi gambar
            />
          </div>
        </section>

        {/* section about */}
        <section className="flex px-5">
          {/* left */}
          <div className="flex items-center justify-end h-auto w-full pe-2">
            <h1 className="text-primary text-end font-bold text-lg">
              Meet the <br /> Cawistra Family
            </h1>
          </div>
          {/* right */}
          <div className="h-auto w-full ps-2">
            <Image
              src={meetImage} // Ganti dengan path gambar sesuai struktur proyek Anda
              alt="Meet the Family"
              width="100%" // Menyesuaikan lebar gambar
              height={100}
              crop="fill" // Crop gambar agar sesuai dengan lebar dan tinggi yang diinginkan // Tentukan tinggi gambar
            />
          </div>
        </section>

        {/* section product */}
        <section className="py-5 px-5">
          <div>
            <h1 className="text-primary text-center font-bold text-lg">
              Let&apos;s Take a Look <br /> of Our Products
            </h1>
          </div>
          <div className="flex justify-evenly items-center">
            <div className="w-full h-full flex gap-4">
              <div className="flex flex-col items-center">
                <Image
                  src={sheepImage} // Ganti dengan path gambar sesuai struktur proyek Anda
                  alt="Farm"
                  width="100%" // Menyesuaikan lebar gambar
                  height={100}
                  crop="fill"
                  media={{
                    "(max-width: 640px)": { width: "100vw" }, // Ukuran untuk handphone
                    "(max-width: 768px)": { width: "10vw" }, // Ukuran untuk tablet
                    "(min-width: 769px)": { width: "60vw" }, // Ukuran untuk laptop
                  }} // Crop gambar agar sesuai dengan lebar dan tinggi yang diinginkan // Tentukan tinggi gambar
                />
                <div className="w-24 h-9 rounded-full  bg-secondary text-white border border-primary  hover:bg-primary cursor-pointer">
                  <Link
                    href={whatsappLink}
                    target="_blank"
                    className="w-full h-full flex justify-center items-center rounded-full text-sm text-center"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-full flex justify-center items-center">
                  <h1 className="h-full text-center text-lg pt-7 px-2">
                    AQIQAH
                  </h1>
                </div>
                <div className="w-24 h-12 rounded-full  bg-secondary text-white border border-primary  hover:bg-primary cursor-pointer">
                  <Link
                    href="/"
                    target="_blank"
                    className="w-full h-full flex justify-center items-center rounded-full text-sm text-center"
                  >
                    Visit
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={cowImage} // Ganti dengan path gambar sesuai struktur proyek Anda
                  alt="Farm"
                  width="100%" // Menyesuaikan lebar gambar
                  height={100}
                  crop="fill"
                  media={{
                    "(max-width: 640px)": { width: "100vw" }, // Ukuran untuk handphone
                    "(max-width: 768px)": { width: "80vw" }, // Ukuran untuk tablet
                    "(min-width: 769px)": { width: "60vw" }, // Ukuran untuk laptop
                  }} // Crop gambar agar sesuai dengan lebar dan tinggi yang diinginkan // Tentukan tinggi gambar
                />
                <div className="w-24 h-9 rounded-full  bg-secondary text-white border border-primary  hover:bg-primary cursor-pointer">
                  <Link
                    href={whatsappLink}
                    target="_blank"
                    className="w-full h-full flex justify-center items-center rounded-full text-sm text-center"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
