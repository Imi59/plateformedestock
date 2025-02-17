
import { Tags, Truck, Headphones } from "lucide-react";

export const Features = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-center bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
          Pourquoi nous choisir ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Prix imbattables",
              description: "Des réductions allant jusqu'à 70% sur des produits de grandes marques.",
              icon: <Tags className="w-12 h-12 text-orange-500" />,
            },
            {
              title: "Livraison rapide",
              description: "Livraison en 48/72h partout en France métropolitaine.",
              icon: <Truck className="w-12 h-12 text-orange-500" />,
            },
            {
              title: "Satisfaction client",
              description: "Service client disponible 6j/7 pour vous accompagner dans vos achats.",
              icon: <Headphones className="w-12 h-12 text-orange-500" />,
            },
          ].map((feature, index) => (
            <div
              key={feature.title}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fadeIn"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                {feature.icon}
                <h3 className="text-2xl font-semibold mb-4 mt-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
