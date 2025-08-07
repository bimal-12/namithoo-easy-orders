const Footer = () => {
  return (
    <footer className="bg-spice-brown text-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Namithoo</h3>
            <p className="text-cream/80 mb-4">
              Handmade Pickles, Straight from the Heart!
            </p>
            <p className="text-cream/80 text-sm">
              Bringing you the authentic taste of traditional Indian pickles, 
              made with love and the finest ingredients.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-cream/80">
              <li><a href="#home" className="hover:text-turmeric transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-turmeric transition-colors">Products</a></li>
              <li><a href="#about" className="hover:text-turmeric transition-colors">About</a></li>
              <li><a href="#order" className="hover:text-turmeric transition-colors">Order Now</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-cream/80">
              <p>📞 +91 12345 67890</p>
              <p>📧 hello@namithoo.com</p>
              <p>📍 Traditional Kitchen, India</p>
              <p className="text-sm mt-4">
                💰 Cash on Delivery Available<br/>
                🚚 2-3 Days Delivery
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-cream/20 mt-8 pt-8 text-center">
          <p className="text-cream/60">
            © 2024 Namithoo. Made with ❤️ for pickle lovers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;