import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: "🏠",
      title: "Family Recipe",
      description: "Traditional recipes passed down through generations"
    },
    {
      icon: "🌿",
      title: "Fresh Ingredients",
      description: "Sourced locally from trusted farmers and markets"
    },
    {
      icon: "👩‍🍳",
      title: "Handmade",
      description: "Every jar is carefully prepared by hand with love"
    },
    {
      icon: "🚚",
      title: "Fresh Delivery",
      description: "Cash on delivery within 2-3 days"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-cream to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-spice-brown mb-4">
            Our Story
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Namithoo was born from a passion to preserve and share the authentic taste of traditional Indian pickles. 
            What started as a family kitchen experiment has grown into a brand that brings the rich heritage of 
            pickle-making to your table.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-warm transition-all duration-300 bg-card border-border">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-cream to-secondary rounded-2xl p-8 md:p-12 text-center shadow-elegant">
          <h3 className="text-3xl font-bold text-spice-brown mb-4">
            Why Choose Namithoo?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            We believe that great pickles come from great ingredients and time-honored techniques. 
            Each jar of Namithoo pickle is a testament to quality, authenticity, and the love we put into our craft.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Natural Ingredients</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">2-3 Days</div>
              <div className="text-sm text-muted-foreground">Fresh Delivery</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">250g</div>
              <div className="text-sm text-muted-foreground">Perfect Jar Size</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;