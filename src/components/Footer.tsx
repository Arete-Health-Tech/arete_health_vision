import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-coral-500">areté</span>
              <span className="text-2xl font-normal text-gray-800">
                healthtech
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Revolutionizing healthcare delivery with Prodigy.AI, an
              intelligent platform that integrates patient engagement, real-time
              analytics, and AI automation.
            </p>
            <div className="text-sm text-gray-500">
              © 2025 Arete Healthtech Pvt. Ltd. All rights reserved.
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-coral-500 transition-colors">
                  Prodigy.AI
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-coral-500 transition-colors">
                  Patient Acquisition
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-coral-500 transition-colors">
                  Operational Intelligence
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-coral-500 transition-colors">
                  Patient Retention
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-coral-500 transition-colors">
                  Agentic AI Suite
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-coral-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-coral-500 transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-coral-500 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-coral-500 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-coral-500 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/privacy-policy");
                  }}
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-coral-500 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-coral-500 transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-coral-500 transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-coral-500 transition-colors">
                  Training
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-coral-500 transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
