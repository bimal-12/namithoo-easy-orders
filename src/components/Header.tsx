import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-cream/95 backdrop-blur-sm border-b border-border z-50 shadow-elegant">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold text-spice-brown">Namithoo</h1>
          <span className="text-sm text-muted-foreground hidden sm:block">
            Handmade Pickles, Straight from the Heart!
          </span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
          <a href="#products" className="text-foreground hover:text-primary transition-colors">Products</a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          <Button variant="outline-warm" size="sm">Order Now</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;