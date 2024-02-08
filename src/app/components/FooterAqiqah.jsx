"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Image } from "cloudinary-react";

const FooterAqiqah = () => {
  const [logoImageUrl, setLogoImageUrl] = useState(
    "https://res.cloudinary.com/ddrecezrk/image/upload/v1707401639/png_20231119_211925_0000_aou0w2.png"
  );

  const phoneNumber = "081214839040"; // Ganti dengan nomor telepon yang benar
  const encodedPhoneNumber = encodeURIComponent(phoneNumber);
  const whatsappLink = `https://api.whatsapp.com/send?phone=${encodedPhoneNumber}`;

  return (
    <footer className="bg-secondary h-full text-white py-8 px-5">
      <div className="container mx-auto flex flex-wrap items-center justify-between  md:gap-2">
        {/* Logo dan Nama */}
        <div className="flex items-center md:flex-col md:items-end lg:flex-1">
          <Image
            cloudName="ddrecezrk"
            publicId={logoImageUrl}
            src={logoImageUrl} // Ganti dengan path logo sesuai struktur proyek Anda
            alt="Cawistra Farm Logo"
            className="w-12 h-12 me-4 md:me-0 lg:w-20 lg:h-20" // Sesuaikan dengan ukuran logo Anda
          />
          <h1 className="text-2xl font-bold">Cawistra Aqiqah</h1>
        </div>

        {/* Detail Kontak */}
        <div className=" flex-1 w-full h-44 flex flex-col gap-2 justify-center ">
          {/* Informasi Alamat */}
          <div>
            <div className="flex items-center gap-2">
              <svg
                className="hidden md:flex"
                xmlns="http://www.w3.org/2000/svg"
                width={22}
                height={22}
                viewBox="0 0 20 20"
              >
                <path
                  fill="#1b1b1b"
                  d="m19.799 5.165l-2.375-1.83a1.997 1.997 0 0 0-.521-.237A2.035 2.035 0 0 0 16.336 3H9.5l.801 5h6.035c.164 0 .369-.037.566-.098s.387-.145.521-.236l2.375-1.832c.135-.091.202-.212.202-.334s-.067-.243-.201-.335M8.5 1h-1a.5.5 0 0 0-.5.5V5H3.664c-.166 0-.37.037-.567.099c-.198.06-.387.143-.521.236L.201 7.165C.066 7.256 0 7.378 0 7.5c0 .121.066.242.201.335l2.375 1.832c.134.091.323.175.521.235c.197.061.401.098.567.098H7v8.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-17a.5.5 0 0 0-.5-.5"
                />
              </svg>
              <a
                href="https://maps.app.goo.gl/setj7pnoA1XX1xah9"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kp. Tegallega, Cibinong Hilir, Kec. Cilaku, Kabupaten Cianjur,
                Jawa Barat 43285
              </a>
            </div>
          </div>
          {/* Informasi Instagram */}
          <div className="">
            <div className="flex flex-row items-center gap-2">
              <svg
                className="hidden md:flex"
                role="img"
                viewBox="0 0 24 24"
                width={20}
                height={20}
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Instagram</title>
                <path
                  fill="#1b1b1b"
                  d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                />
              </svg>
              <a
                href="https://www.instagram.com/cawistra_aqiqah/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @cawistra_aqiqah
              </a>
            </div>
          </div>

          {/* Informasi Email */}
          <div className="">
            <div className="flex flex-row items-center gap-2">
              <svg
                className="hidden md:flex"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
              >
                <title>Gmail</title>
                <path
                  fill="#1b1b1b"
                  d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
                />
              </svg>
              <a href="mailto:cawistrafarm@gmail.com">cawistrafarm@gmail.com</a>
            </div>
          </div>

          {/* Informasi Nomor */}
          <div className="">
            <div className="flex flex-row items-center gap-2">
              <svg
                className="hidden md:flex"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <g fill="none" fillRule="evenodd">
                  <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                  <path
                    fill="#1b1b1b"
                    d="M16.552 22.133c-1.44-.053-5.521-.617-9.795-4.89c-4.273-4.274-4.836-8.354-4.89-9.795c-.08-2.196 1.602-4.329 3.545-5.162a1.47 1.47 0 0 1 1.445.159c1.6 1.166 2.704 2.93 3.652 4.317a1.504 1.504 0 0 1-.256 1.986l-1.951 1.449a.48.48 0 0 0-.142.616c.442.803 1.228 1.999 2.128 2.899c.901.9 2.153 1.738 3.012 2.23a.483.483 0 0 0 .644-.162l1.27-1.933a1.503 1.503 0 0 1 2.056-.332c1.407.974 3.049 2.059 4.251 3.598a1.47 1.47 0 0 1 .189 1.485c-.837 1.953-2.955 3.616-5.158 3.535Z"
                  />
                </g>
              </svg>
              <a href={whatsappLink} target="_blank" className="text-white">
                +62 812-1483-9040
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterAqiqah;
