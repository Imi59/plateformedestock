
interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
}

interface ProductCategoryProps {
  title: string;
  products: Product[];
}

export const ProductCategory = ({ title, products }: ProductCategoryProps) => {
  const calculateDiscount = (price: number, originalPrice: number) => {
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-square overflow-hidden rounded-t-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white font-black rounded-full w-24 h-24 flex items-center justify-center text-2xl transform rotate-12 animate-pulse shadow-lg">
                  -{calculateDiscount(product.price, product.originalPrice)}%
                </div>
                <h3 className="font-bold mb-3 text-xl text-gray-800">{product.name}</h3>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-black bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                    {product.price}€
                  </span>
                  <span className="text-lg text-gray-400 line-through">{product.originalPrice}€</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
