"use client";
import React from "react";
import Navbar from "./components/Navbar";
import { Image } from "cloudinary-react";
import { Cloudinary } from "cloudinary-core";

export default function Home() {
  const cloudImage =
    "https://res.cloudinary.com/ddrecezrk/image/upload/v1707022549/cawistra/cawistrafarm/ey9ug6orya4uep4dcxdi.jpg ";

  const cloudinaryCore = new Cloudinary({ cloud_name: "ddrecezrk" });

  return (
    <>
      <Navbar />
      <main className="mt-16">
        <section className="bg-blue-200 w-screen pt-4 px-5">
          <div>
            <h1 className="text-center font-bold text-xl">
              Welcome to <br /> Cawistra Farm
            </h1>
            <h3 className="text-center font-light text-sm">
              Your Source for Premium Livestock
            </h3>
          </div>
        </section>
        <section className="bg-green-200 py-5">
          <div>
            <Image
              src={cloudImage} // Ganti dengan path gambar sesuai struktur proyek Anda
              alt="Farm"
              width={400} // Tentukan lebar gambar
              height={50} // Tentukan tinggi gambar
            />
          </div>
        </section>
      </main>
    </>
  );
}
