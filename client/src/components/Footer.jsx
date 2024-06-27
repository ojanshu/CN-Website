import React from 'react';
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { assets } from "../assets/assets";

const Footer = () => {
  const socialLinks = [
    { icon: FaInstagram, link: 'https://instagram.com/coding.ninjas.kiit/' },
    { icon: FaLinkedinIn, link: 'https://www.linkedin.com/company/coding-ninjas-kiit/mycompany/' },
    { icon: FaWhatsapp, link: 'https://chat.whatsapp.com/GHfGSKTotRfIKY6R3y8Zey'}
    // { icon: FaGithub, link: 'https://github.com' },
  ];

  return (
    <footer className="bg-gradient-to-b from-black to-white-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link to="/">
          <div className="flex flex-col justify-center">
            <img src={assets.cnxkiit} alt="CN Logo" className="w-full h-auto md:w-64 lg:w-96 mt-12" />
          </div>
          </Link>
          {/* Contact Information */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 inline-block text-left">
              <li className="flex items-center">
                <MdEmail className="mr-2 text-orange-500" />
                <a href="mailto:2105538@kiit.ac.in" className="hover:text-orange-500 transition duration-300">2105538@kiit.ac.in</a>
              </li>
              <li className="flex items-center">
                <MdPhone className="mr-2 text-orange-500" />
                <a href="tel:+1234567890" className="hover:text-orange-500 transition duration-300">+91 90516 62628</a>
              </li>
              <li className="flex items-center">
                <MdLocationOn className="mr-2 text-orange-500" />
                <span>KIIT University, Bhubaneswar</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition duration-300 
                  transform hover:scale-110"
                >
                  <social.icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Coding Ninjas : KIIT Chapter</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;