import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPhone,
} from "react-icons/fa";
import logo from "../../../assets/logo.png";
import { MdOutlineMail } from "react-icons/md";
import Container from "../Container/Container";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center lg:items-start">
            <img src={logo} alt="SpinCycle Logo" className="h-16 w-16 mb-3" />
            <h2 className="text-2xl font-bold text-[#FD661F]">SpinCycle</h2>
            <p className="text-[#8A8A8A] my-2 text-center lg:text-left">
              Keep the wheels turning and the fun spinning.
            </p>
            <div className="flex space-x-4 mt-3">
              <a href="#" className="hover:text-gray-400">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-col gap-3">
            <a href="#" className="hover:text-gray-400">
              Home
            </a>
            <a href="#" className="hover:text-gray-400">
              Courses
            </a>
            <a href="#" className="hover:text-gray-400">
              About Us
            </a>
            <a href="#" className="hover:text-gray-400">
              Contact
            </a>
          </div>

          {/* Address Section */}
          <div className="text-[#8A8A8A]">
            <p>Gazipur, Dhaka</p>
            <p>Bangladesh, 1743</p>
          </div>

          {/* Contact Section */}
          <div className="text-[#8A8A8A] space-y-2">
            <p className="flex items-center gap-2">
              <MdOutlineMail className="text-xl" />
              bdmamun100@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <FaPhone className="text-xl" />
              +8801794798000
            </p>
          </div>
        </div>

        {/* Bottom CopyRight */}
        <hr className="my-6 border-gray-700" />
        <div className="text-center text-[#8A8A8A] text-sm">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
