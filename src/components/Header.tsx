import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <span className="text-2xl font-bold text-coral-500">areté</span>
          <span className="text-2xl font-normal text-gray-800">healthtech</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-gray-700 hover:text-coral-500 transition-colors font-medium cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-coral-500 transition-colors font-medium cursor-pointer"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-coral-500 transition-colors font-medium cursor-pointer"
          >
            Prodigy.AI
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-coral-500 transition-colors font-medium cursor-pointer"
          >
            Why Us
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-coral-500 transition-colors font-medium cursor-pointer"
          >
            Testimonials
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-coral-500 transition-colors font-medium cursor-pointer"
          >
            Contact
          </a>
        </nav>

        <Button className="bg-coral-500 hover:bg-coral-600 text-white px-6 py-2 rounded-lg font-medium transition-colors cursor-pointer">
          Schedule Demo
        </Button>
      </div>
    </header>
  );
};

export default Header;
