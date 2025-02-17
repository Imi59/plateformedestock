
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Inscription réussie !",
        description: "Vous recevrez désormais nos meilleures offres.",
        duration: 5000,
      });
      
      setEmail("");
    } catch (error) {
      toast({
        title: "Une erreur est survenue",
        description: "Veuillez réessayer plus tard.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4">
              {/* Emplacement pour le logo */}
              <img src="/logo.png" alt="Plateforme destock" className="h-12 w-auto" />
            </div>
            <p className="text-sm text-center md:text-left">
              Leader français du déstockage en ligne. Des milliers de produits à prix cassés.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Informations</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm hover:text-white transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="/mentions-legales" className="text-sm hover:text-white transition-colors">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  CGV
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="flex">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email"
                  required
                  className="rounded-r-none bg-gray-800 border-gray-700 focus:ring-primary"
                />
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="rounded-l-none bg-primary hover:bg-primary/90"
                >
                  {isLoading ? "..." : "OK"}
                </Button>
              </div>
              <p className="text-xs text-gray-400">
                En vous inscrivant, vous acceptez de recevoir nos newsletters.
              </p>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; 2024 Plateforme destock. Tous droits réservés.</p>
          <p className="mt-2 text-gray-400">Fait par IB WEB SOLUTIONS</p>
        </div>
      </div>
    </footer>
  );
};
