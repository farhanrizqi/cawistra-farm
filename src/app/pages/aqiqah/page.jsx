"use client";
import React from "react";
import Navbar from "../../components/NavbarAqiqah";
import Footer from "../../components/FooterAqiqah";
import { Image } from "cloudinary-react";
import { Cloudinary } from "cloudinary-core";
import Link from "next/link";

export default function Aqiqah() {
  const heroImage =
    "https://res.cloudinary.com/ddrecezrk/image/upload/v1707394490/cawistra/cawistrafarm/udznnxiotml4dzu7nzy4.jpg";

  const meetImage =
    "https://res.cloudinary.com/ddrecezrk/image/upload/v1707397168/meet_izouoq.jpg";

  const menu3Image =
    "https://res.cloudinary.com/ddrecezrk/image/upload/v1707397174/menu3_vxoik7.jpg";

  const menu2Image =
    "https://res.cloudinary.com/ddrecezrk/image/upload/v1707397174/menu2_jntyxh.jpg";

  const menu1Image =
    "https://res.cloudinary.com/ddrecezrk/image/upload/v1707397171/menu1_ir1cwf.jpg";

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
              Welcome to <br /> Cawistra Aqiqah
            </h1>
            <h2 className="text-primary text-center font-light text-sm">
              Blessed Beginnings, Joyful Traditions
            </h2>
          </div>
        </section>

        {/* Section Hero */}
        <section className="py-5">
          <div className="h-auto">
            <Image
              className=""
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
          <div className="flex flex-col items-end justify-center h-auto w-full pe-2">
            <h1 className="text-primary text-end font-bold text-lg">
              Why
              <br /> Cawistra Aqiqah
            </h1>
            <p className="text-end text-xs">
              Celebrate tradition effortlessly with Cawistra Aqiqah. Our premium
              service combines sacred rituals with top-notch quality, ensuring a
              meaningful and memorable Aqiqah ceremony for you and your loved
              ones.
            </p>
          </div>
          {/* right */}
          <div className="h-auto w-full ps-2">
            <Image
              className="rounded-xl"
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
              Some of Our Menu&apos;s
            </h1>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-2/3 rounded-full border-2 border-primary flex items-center"></div>
          </div>
          <div className="flex justify-evenly items-center">
            <div className="w-full h-full flex gap-4 pt-4">
              <div className="flex flex-col items-center">
                <div className="rounded-full p-1 bg-primary">
                  <Image
                    className="rounded-full h-24 w-24"
                    src={menu1Image} // Ganti dengan path gambar sesuai struktur proyek Anda
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
                </div>
              </div>
              <div className="flex flex-col  items-center">
                <div className="rounded-full p-1 bg-primary">
                  <Image
                    className="rounded-full h-24 w-24"
                    src={menu2Image} // Ganti dengan path gambar sesuai struktur proyek Anda
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
                </div>
              </div>
              <div className="flex flex-col  items-center">
                <div className="rounded-full p-1 bg-primary">
                  <Image
                    className="rounded-full h-24 w-24"
                    src={menu3Image} // Ganti dengan path gambar sesuai struktur proyek Anda
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
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section cta */}
        <section className="flex flex-col justify-center items-center gap-2">
          <div className="w-52 rounded-full  bg-secondary text-white border border-primary  hover:bg-primary cursor-pointer">
            <Link
              href={whatsappLink}
              target="_blank"
              className="w-full h-full py-2 flex justify-center items-center rounded-full text-sm text-center"
            >
              Order Now
            </Link>
          </div>
          <div className="w-52 flex items-center rounded-full gap-2 bg-primary text-white border border-secondary  hover:bg-secondary cursor-pointer">
            <svg
              className="ps-2 rounded-full"
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="#fff"
                  d="M3.636 11.293a1 1 0 0 0 0 1.414l5.657 5.657a1 1 0 0 0 1.414-1.414L6.757 13H20a1 1 0 1 0 0-2H6.757l3.95-3.95a1 1 0 0 0-1.414-1.414z"
                />
              </g>
            </svg>
            <Link
              href="/"
              target="_blank"
              className="w-full h-full pe-2 py-2 flex justify-center items-center rounded-full text-sm text-center"
            >
              Back to Cawistra Farm
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
