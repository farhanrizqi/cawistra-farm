"use client";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Image } from "cloudinary-react";
import { Cloudinary } from "cloudinary-core";
import Link from "next/link";

export default function Home() {
  const heroImage =
    "https://res.cloudinary.com/ddrecezrk/image/upload/v1707046170/cawistra/cawistrafarm/fbrgxbaymolukbz4vd3a.jpg";

  const meetImage =
    "https://res.cloudinary.com/ddrecezrk/image/upload/v1707022544/cawistra/cawistrafarm/sotxttffsa9aszil6bqw.jpg";

  const cowImage =
    "https://res.cloudinary.com/ddrecezrk/image/upload/v1707068942/cawistra/cawistrafarm/qr9wny0opeqqypbxxykm.png";

  const sheepImage =
    "https://res.cloudinary.com/ddrecezrk/image/upload/v1707068940/cawistra/cawistrafarm/t7twj3ez2rg6pinq7kb5.png";

  const cloudinaryCore = new Cloudinary({ cloud_name: "ddrecezrk" });

  const phoneNumber = "081214839040"; // Ganti dengan nomor telepon yang benar
  const encodedPhoneNumber = encodeURIComponent(phoneNumber);
  const whatsappLink = `https://api.whatsapp.com/send?phone=${encodedPhoneNumber}`;

  return (
    <>
      <Navbar />
      <main className="py-20">
        {/* section title */}
        <section className=" pt-4 px-5">
          <div>
            <h1 className="text-primary text-center font-bold text-xl md:text-3xl">
              Welcome to <br /> Cawistra Farm
            </h1>
            <h3 className="text-primary text-center font-light text-sm md:text-lg">
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
        <section className="flex px-5 py-5">
          {/* left */}
          <div className="flex items-center justify-end h-auto w-full pe-2">
            <h1 className="text-primary text-end font-bold text-lg md:text-2xl">
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
              crop="fill"
              className="rounded-xl md:w-80 lg:w-96" // Crop gambar agar sesuai dengan lebar dan tinggi yang diinginkan // Tentukan tinggi gambar
            />
          </div>
        </section>

        {/* section product */}
        <section className="py-5 px-5 lg:py-10">
          <div>
            <h1 className="text-primary text-center font-bold text-lg md:text-2xl">
              Let&apos;s Take a Look <br /> of Our Products
            </h1>
          </div>
          <div className="flex justify-evenly items-center">
            <div className="w-full h-full flex justify-center gap-4">
              <div className="flex flex-col items-center gap-2">
                <Image
                  src={sheepImage} // Ganti dengan path gambar sesuai struktur proyek Anda
                  alt="Farm"
                  width="100%" // Menyesuaikan lebar gambar
                  height={100}
                  crop="fill"
                  className="md:w-64" // Crop gambar agar sesuai dengan lebar dan tinggi yang diinginkan // Tentukan tinggi gambar
                />
                <div className="w-24 h-9 md:w-36 md:h-11 rounded-full  bg-secondary text-white border border-primary  hover:bg-primary cursor-pointer">
                  <Link
                    href={whatsappLink}
                    target="_blank"
                    className="w-full h-full flex justify-center items-center rounded-full text-sm text-center md:text-lg"
                  >
                    Order Now
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="h-full flex justify-center items-center">
                  <h1 className=" text-center text-lg px-2 md:text-5xl">
                    AQIQAH
                  </h1>
                </div>
                <div className="w-24 h-12 md:w-36 md:h-14 rounded-full  bg-secondary text-white border border-primary  hover:bg-primary cursor-pointer">
                  <Link
                    href="/pages/aqiqah"
                    className="w-full h-full flex justify-center items-center rounded-full text-sm text-center md:text-lg"
                  >
                    Visit
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image
                  src={cowImage} // Ganti dengan path gambar sesuai struktur proyek Anda
                  alt="Farm"
                  width="100%" // Menyesuaikan lebar gambar
                  height={100}
                  crop="fill"
                  className="md:w-64" // Crop gambar agar sesuai dengan lebar dan tinggi yang diinginkan // Tentukan tinggi gambar
                />
                <div className="w-24 h-9 md:w-36 md:h-11 rounded-full  bg-secondary text-white border border-primary  hover:bg-primary cursor-pointer">
                  <Link
                    href={whatsappLink}
                    target="_blank"
                    className="w-full h-full flex justify-center items-center rounded-full text-sm text-center md:text-lg"
                  >
                    Order Now
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
