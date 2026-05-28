import React from "react";
import { Badge } from "@/components/ui/badge";

function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* ABOUT SECTION */}
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        {/* TEXT */}
        <div className="w-full lg:w-1/2">
          <p className="text-gray-500 font-semibold">About & History</p>

          <hr className="border-t-2 my-2" />

          <h1 className="text-[#6E2408] text-3xl sm:text-4xl lg:text-5xl font-semibold font-serif leading-tight">
            Shri Bindu Madhav, Kashi
          </h1>

          <div className="text-gray-600 font-serif mt-4 space-y-4 text-sm sm:text-lg leading-relaxed">
            <p>
              Shri Bindu Madhav Mandir, dedicated to Lord Vishnu, is one of the
              most sacred and historically significant temples in Varanasi.
            </p>

            <p>
              The temple is an important center for Vaishnavite worshippers and
              is considered the largest among the Pancha Madhav temples.
            </p>

            <p>
              Shri Bindu Madhav Temple has a rich history. The original temple
              was demolished during the Mughal period.
            </p>
          </div>
        </div>

        {/* IMAGE */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://i.pinimg.com/736x/ef/5d/c5/ef5dc54ca08475e7b9bc8926559a0e56.jpg"
            alt="idol"
            className="w-full h-[300px] sm:h-[450px] object-cover rounded-2xl shadow-2xl"
          />
        </div>
      </div>

      {/* GALLERY SECTION */}
      <div className="mt-16">
        <div className="inline-block">
          <p className="text-gray-500 font-semibold">Hanuman Mandir</p>

          <hr className="border-t-2 mt-1" />
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif font-semibold text-[#6E2408] mt-3">
          Media Gallery
        </h1>

        <div>
          <Badge
            variant="outline"
            className="rounded-xl px-4 py-1 text-white bg-yellow-500 mt-4"
          >
            Explore
          </Badge>
        </div>

        {/* RESPONSIVE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Gy5oCpG0OOPwe49H5FNz2E1uLbVdvNLr-Q&s"
            alt="vishnu"
            className="w-full h-[250px] object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-300"
          />

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT15WmtR4GlaVA7K33w4V1HQn_62bNZxynMLA&s"
            alt="brahma"
            className="w-full h-[250px] object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-300"
          />

          <img
            src="https://t4.ftcdn.net/jpg/16/41/92/71/360_F_1641927153_KvrGkEvKESz7LsqtMrTSgab2tYYcAMMQ.jpg"
            alt="lakshmi"
            className="w-full h-[250px] object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
