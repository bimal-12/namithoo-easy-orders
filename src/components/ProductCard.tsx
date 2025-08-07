import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import WhatsAppOrder from "./WhatsAppOrder";

interface ProductCardProps {
  name: string;
  price: number;
  weight: string;
  type: string;
  image: string;
  description: string;
}

const ProductCard = ({ name, price, weight, type, image, description }: ProductCardProps) => {
  const { handleWhatsAppOrder } = WhatsAppOrder({ productName: name, price, weight });
  return (
    <Card className="group hover:shadow-warm transition-all duration-300 hover:scale-105 transform bg-card border-border overflow-hidden">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
          {weight}
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-foreground">{name}</CardTitle>
        <CardDescription className="text-muted-foreground">{type}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="text-2xl font-bold text-primary">₹{price}</div>
      </CardContent>
      <CardFooter>
        <Button variant="fresh" className="w-full" onClick={handleWhatsAppOrder}>
          Order via WhatsApp 💬
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;