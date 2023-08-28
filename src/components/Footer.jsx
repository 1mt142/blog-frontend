import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaPinterest } from "react-icons/fa6"

function Footer() {
  return (
    <div className="container text-gray-900 mt-auto">
      <div className="border-gray-300 border-t-[1px] w-full py-8 flex justify-between items-center max-lg:flex-col max-lg:gap-4">
        <div className="text-[#717378] order-1 max-lg:order-2">
          &copy; 2023 | Powered by <a href="https://github.com/meecan" className="hover:underline hover:text-gray-800">meecan</a>
        </div>
        <div className="flex gap-2 text-[#203656] order-2 max-lg:order-1">
          <a href="#" className="p-1">
            <FaInstagram />
          </a>
          <a href="#" className="p-1">
            <FaFacebook />
          </a>
          <a href="#" className="p-1">
            <FaTwitter />
          </a>
          <a href="#" className="p-1">
            <FaYoutube />
          </a>
          <a href="#" className="p-1">
            <FaPinterest />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
