
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2">
              <img src="/public/logo.png" alt="Plateforme destock" className="h-10 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-[#8B5CF6] transition-colors">
              Accueil
            </a>
            <a href="#about" className="text-gray-700 hover:text-[#8B5CF6] transition-colors">
              À propos
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-fadeIn">
            <a href="/" className="block py-2 text-gray-700 hover:text-[#8B5CF6] transition-colors">
              Accueil
            </a>
            <a href="#about" className="block py-2 text-gray-700 hover:text-[#8B5CF6] transition-colors">
              À propos
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};
