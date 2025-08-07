import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-cream overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Traditional pickle making" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-spice-brown mb-6 animate-in slide-in-from-bottom duration-1000">
          Namithoo
        </h1>
        <p className="text-xl md:text-2xl text-foreground mb-4 animate-in slide-in-from-bottom duration-1000 delay-200">
          Handmade Pickles, Straight from the Heart!
        </p>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-in slide-in-from-bottom duration-1000 delay-300">
          Experience the authentic taste of traditional Indian pickles, made with love and the finest ingredients. 
          Each jar tells a story of heritage, flavor, and culinary craftsmanship.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in slide-in-from-bottom duration-1000 delay-500">
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Shop Pickles
          </Button>
          <Button 
            variant="outline-warm" 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Our Story
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;