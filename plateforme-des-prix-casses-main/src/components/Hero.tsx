import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative bg-secondary min-h-[600px] flex items-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-around">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8">
          <img src="/public/hero.jpg" alt="Hero Image" className="w-full h-auto max-w-sm object-cover rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 max-w-2xl animate-fadeIn text-center md:text-left">
          <span className="inline-block bg-primary/10 text-primary px-8 py-4 rounded-full text-2xl font-semibold mb-8 mx-auto">
            Jusqu'à -70%
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Plateforme de Déstockage
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Découvrez notre sélection de produits de grandes marques à prix cassés. Livraison rapide en France métropolitaine.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button size="lg" className="animate-fadeIn [animation-delay:200ms]">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Voir les offres
            </Button>
            <Button size="lg" variant="outline" className="animate-fadeIn [animation-delay:400ms]">
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};