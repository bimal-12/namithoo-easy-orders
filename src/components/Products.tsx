import ProductCard from "./ProductCard";
import spicyMangoImage from "@/assets/spicy-mango-pickle.jpg";
import lemonChiliImage from "@/assets/lemon-chili-pickle.jpg";
import garlicImage from "@/assets/garlic-pickle.jpg";
import mixedVeggieImage from "@/assets/mixed-veggie-pickle.jpg";

const Products = () => {
  const products = [
    {
      name: "Spicy Mango",
      price: 200,
      weight: "250g",
      type: "Sweet & Spicy",
      image: spicyMangoImage,
      description: "Tangy raw mango pieces perfectly balanced with aromatic spices and a hint of sweetness."
    },
    {
      name: "Lemon Chili",
      price: 180,
      weight: "250g",
      type: "Sour & Hot",
      image: lemonChiliImage,
      description: "Zesty lemon pickle with fresh green chilies that awakens your taste buds."
    },
    {
      name: "Garlic Pickle",
      price: 220,
      weight: "250g",
      type: "Mustard Base",
      image: garlicImage,
      description: "Rich garlic cloves marinated in traditional mustard oil with authentic spices."
    },
    {
      name: "Mixed Veggie",
      price: 200,
      weight: "250g",
      type: "Tangy",
      image: mixedVeggieImage,
      description: "A delightful medley of seasonal vegetables pickled to perfection."
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-cream to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-spice-brown mb-4">
            Our Pickle Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each pickle is handcrafted using traditional recipes passed down through generations, 
            ensuring every bite delivers authentic flavors and memories.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;