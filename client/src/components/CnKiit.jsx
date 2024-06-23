import React from 'react';
import { assets } from "../assets/assets";

const CnKiit = () => {
  return(
    <div className="bg-black text-white min-h-screen flex justify-center items-center">
      <div className="w-full max-w-4xl mx-auto p-6 md:p-12 flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 text-left md:pr-12">
          <div className="text-lg leading-relaxed mb-6">
            <h1 className="text-4xl md:text-6xl font-light mb-4 text-gray-500">Coding Ninjas</h1>
            <h2 className="text-3xl md:text-5xl">KIIT Chapter</h2>
          </div>
          <div className="text-lg leading-relaxed mb-6">
            <p>
              is the student organization with fundamentals "by the student", "for the student" and "to the student". 
              We believe in hard work and therefore, we find the hidden and unorganized talent,
              focusing precise amount of energy of new talent in the right direction so as to bring out the best which ultimately serves society.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex justify-center md:justify-end items-start mt-24 md:mt-0">
          <div className="inline-block">
            <img src={assets.cnxkiit} alt="CN Logo" className="w-full h-auto md:w-64 lg:w-96 mt-24" />
            <p className="text-lg text-red-500 mt-4 text-center">CODE COMPETE CONQUER</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CnKiit;