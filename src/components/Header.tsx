import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToWhy = () => {
    const aboutSection = document.getElementById("why-Prod");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToTest = () => {
    const aboutSection = document.getElementById("testimonials");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
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
            onClick={scrollToAbout}
            className="text-gray-700 hover:text-coral-500 transition-colors font-medium cursor-pointer"
          >
            About
          </a>
          <a
            onClick={scrollToAbout}
            className="text-gray-700 hover:text-coral-500 transition-colors font-medium cursor-pointer"
          >
            Prodigy.AI
          </a>
          <a
            onClick={scrollToWhy}
            className="text-gray-700 hover:text-coral-500 transition-colors font-medium cursor-pointer"
          >
            Why Us
          </a>
          <a
            onClick={scrollToTest}
            className="text-gray-700 hover:text-coral-500 transition-colors font-medium cursor-pointer"
          >
            Testimonials
          </a>
          <a
            onClick={scrollToContact}
            className="text-gray-700 hover:text-coral-500 transition-colors font-medium cursor-pointer"
          >
            Contact
          </a>
        </nav>

        <Button
          onClick={scrollToContact}
          className="bg-coral-500 hover:bg-coral-600 text-white px-6 py-2 rounded-lg font-medium transition-colors cursor-pointer"
        >
          Schedule Demo
        </Button>
      </div>
    </header>
  );
};

export default Header;
