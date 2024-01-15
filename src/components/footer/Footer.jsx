import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#081315] pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-2 lg:px-0">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="col-span-3 lg:col-span-2">
            <img src="https://i.ibb.co/m6psJVd/Logo-1.png" alt="" />
            <p className="text-[#D3D6D8] leading-6 text-base -tracking-tighter my-7">
              Build a modern and creative 
              website with crealand
            </p>
            <div className="flex items-center gap-2">
              <div className="bg-[#d5e2e423]  p-2 rounded-full">
                <FaGoogle className="text-white text-xs" />
              </div>
              <div className="bg-[#d5e2e423]  p-2 rounded-full">
                <FaTwitter className="text-white text-xs" />
              </div>
              <div className="bg-[#d5e2e423]  p-2 rounded-full">
                <FaInstagram className="text-white text-xs" />
              </div>
              <div className="bg-[#d5e2e423]  p-2 rounded-full">
                <FaLinkedin className="text-white text-xs" />
              </div>
            </div>
          </div>
          <div className="">
            <h3 className="font-bold text-white text-[18px]">Product</h3>
            <div className="flex flex-col gap-8 mt-7">
              <Link className="text-[#D3D6D8] leading-6 text-base -tracking-tighter">Landingpage</Link>
              <Link className="text-[#D3D6D8] leading-6 text-base -tracking-tighter">Features</Link>
              <Link className="text-[#D3D6D8] leading-6 text-base -tracking-tighter">Documentation</Link>
              <Link className="text-[#D3D6D8] leading-6 text-base -tracking-tighter">Referral Program</Link>
              <Link className="text-[#D3D6D8] leading-6 text-base -tracking-tighter">Pricing</Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-white text-[18px]">Services</h3>
            <div className="flex flex-col gap-8 mt-7">
              <Link className="text-[#D3D6D8] leading-6 text-base -tracking-tighter">Documentation</Link>
              <Link className="text-[#D3D6D8] leading-6 text-base -tracking-tighter">Design</Link>
              <Link className="text-[#D3D6D8] leading-6 text-base -tracking-tighter">Themes</Link>
              <Link className="text-[#D3D6D8] leading-6 text-base -tracking-tighter">Illustrations</Link>
              <Link className="text-[#D3D6D8] leading-6 text-base -tracking-tighter">UI Kit</Link>
            </div>
          </div>  
          <div>
            <h3 className="font-bold text-white text-[18px]">Company</h3>
            <div className="flex flex-col gap-8 mt-7">
              <Link className="text-[#D3D6D8] leading-6 text-base -tracking-tighter">About</Link>
              <Link className="text-[#D3D6D8] leading-6 text-base -tracking-tighter">Terms</Link>
              <Link className="text-[#D3D6D8] leading-6 text-base -tracking-tighter">Privacy Policy</Link>
              <Link className="text-[#D3D6D8] leading-6 text-base -tracking-tighter">Careers</Link>
            </div>
          </div>  
          <div>
            <h3 className="font-bold text-white text-[18px]">More</h3>
            <div className="flex flex-col gap-8 mt-7">
              <Link className="text-[#D3D6D8] leading-6 text-base -tracking-tighter">Documentation</Link>
              <Link className="text-[#D3D6D8] leading-6 text-base -tracking-tighter">License</Link>
              <Link className="text-[#D3D6D8] leading-6 text-base -tracking-tighter">Changelog</Link>
            </div>
          </div>  
        </div>
        <div className="flex flex-col justify-center items-center mt-20">
          <img
            className="w-[40px]"
            src="https://i.ibb.co/qsxtFQT/Heart.png"
            alt=""
          />
          <p className="text-white leading-6 text-[14px] -tracking-tighter text-center my-4">
            Copyright © {new Date().getFullYear()}. Crafted with love.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
