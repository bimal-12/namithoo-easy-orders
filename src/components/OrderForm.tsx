import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const OrderForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    pickle: "",
    quantity: "1"
  });

  const pickles = [
    { value: "spicy-mango", label: "Spicy Mango - ₹200" },
    { value: "lemon-chili", label: "Lemon Chili - ₹180" },
    { value: "garlic-pickle", label: "Garlic Pickle - ₹220" },
    { value: "mixed-veggie", label: "Mixed Veggie - ₹200" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address || !formData.pickle) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to place your order.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Order Placed Successfully! 🥒",
      description: "We'll contact you within 24 hours to confirm your order details and delivery.",
      duration: 5000
    });
    
    // Reset form
    setFormData({
      name: "",
      phone: "",
      address: "",
      pickle: "",
      quantity: "1"
    });
  };

  return (
    <section id="order" className="py-20 bg-gradient-to-b from-background to-cream">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-spice-brown mb-4">
            Place Your Order
          </h2>
          <p className="text-lg text-muted-foreground">
            Fresh pickles delivered to your doorstep with Cash on Delivery
          </p>
        </div>
        
        <Card className="shadow-warm border-border">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-foreground">Order Details</CardTitle>
            <CardDescription>Fill in your details for delivery</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter your full name"
                  className="bg-cream"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="Enter your phone number"
                  className="bg-cream"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="address">Delivery Address *</Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                  placeholder="Enter your complete delivery address"
                  className="bg-cream min-h-20"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="pickle">Select Pickle *</Label>
                <Select value={formData.pickle} onValueChange={(value) => setFormData(prev => ({ ...prev, pickle: value }))}>
                  <SelectTrigger className="bg-cream">
                    <SelectValue placeholder="Choose your pickle" />
                  </SelectTrigger>
                  <SelectContent>
                    {pickles.map((pickle) => (
                      <SelectItem key={pickle.value} value={pickle.value}>
                        {pickle.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity</Label>
                <Select value={formData.quantity} onValueChange={(value) => setFormData(prev => ({ ...prev, quantity: value }))}>
                  <SelectTrigger className="bg-cream">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} jar{num > 1 ? 's' : ''}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">Payment Method:</p>
                <p className="font-medium text-foreground">💰 Cash on Delivery</p>
                <p className="text-sm text-muted-foreground">Pay when your order arrives at your doorstep</p>
              </div>
              
              <Button type="submit" variant="hero" size="lg" className="w-full text-lg">
                Place Order 🥒
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OrderForm;