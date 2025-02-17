
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Bell } from "lucide-react";

export const NewsletterCTA = () => {
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
    <section className="py-20 bg-gradient-to-br from-[#8B5CF6] to-[#D946EF]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <Bell className="w-16 h-16 mx-auto mb-6 animate-bounce" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ne ratez aucun nouvel arrivage !
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Inscrivez-vous à notre newsletter et soyez les premiers informés des nouveaux produits à prix cassés.
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-2">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email"
                required
                className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button 
                type="submit" 
                disabled={isLoading}
                className="h-12 px-8 bg-white text-[#8B5CF6] hover:bg-white/90"
              >
                {isLoading ? "..." : "Je m'inscris"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
