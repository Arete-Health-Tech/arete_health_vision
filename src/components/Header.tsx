import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { name: "Home", action: "home" },
  { name: "About", action: "about-section" },
  { name: "Case Study", action: "caseStudies" },
  { name: "Why Us", action: "why-Prod" },
  { name: "Testimonials", action: "testimonials" },
  { name: "Contact", action: "contact-section" },
];

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (id: string) => {
    if (id === "home") {
      setIsOpen(false);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        navigate("/");
      }, 300);
    } else {
      setIsOpen(false);
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  };
  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="text-2xl font-bold text-coral-500">areté</span>
          <span className="text-2xl font-normal text-gray-800">healthtech</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <span
              key={link.name}
              className="text-gray-700 hover:text-coral-500 transition-colors font-medium cursor-pointer"
              onClick={() => handleNavigation(link.action)}
            >
              {link.name}
            </span>
          ))}
        </nav>

        {/* Desktop Button */}
        <Button
          onClick={() => handleNavigation("contact-section")}
          className="hidden md:block bg-coral-500 hover:bg-coral-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
        >
          Schedule Demo
        </Button>

        {/* Mobile Drawer */}
        <div className="md:hidden">
          <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader className="text-left">
                <div className="flex items-center justify-between">
                  <DrawerTitle className="text-xl font-bold text-coral-500">
                    areté healthtech
                  </DrawerTitle>
                  <DrawerClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-5 w-5" />
                    </Button>
                  </DrawerClose>
                </div>
              </DrawerHeader>
              <div className="px-4 pb-8">
                <nav className="flex flex-col space-y-4">
                  {NAV_LINKS.map((link) => (
                    <span
                      key={link.name}
                      className="text-gray-700 hover:text-coral-500 transition-colors font-medium py-2 px-2 rounded-lg hover:bg-coral-50 cursor-pointer"
                      onClick={() => handleNavigation(link.action)}
                    >
                      {link.name}
                    </span>
                  ))}
                </nav>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default Header;
