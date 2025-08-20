import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/hooks/useCart";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface OrderConfirmationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onOrderConfirmed: () => void;
}

const OrderConfirmationDialog = ({ open, onOpenChange, onOrderConfirmed }: OrderConfirmationDialogProps) => {
  const { items, getTotalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    phone: '',
    address: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setCustomerDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleWhatsAppOrder = () => {
    if (!customerDetails.name || !customerDetails.phone || !customerDetails.address) {
      toast({
        title: "Missing Information",
        description: "Please fill in all customer details",
        variant: "destructive"
      });
      return;
    }

    const phoneNumber = "9779844280175";
    
    const orderSummary = items.map(item => 
      `• ${item.name} (${item.weight}) - Qty: ${item.quantity} - ₹${item.price * item.quantity}`
    ).join('\n');

    const message = `🥒 *New Order from Namithoo Website*

*Customer Details:*
Name: ${customerDetails.name}
Phone: ${customerDetails.phone}
Address: ${customerDetails.address}

*Order Summary:*
${orderSummary}

*Total Amount: ₹${getTotalPrice()}*

Payment: Cash on Delivery

Thank you for choosing Namithoo! 🙏`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Clear cart and close dialogs
    clearCart();
    setCustomerDetails({ name: '', phone: '', address: '' });
    onOrderConfirmed();
    
    toast({
      title: "Order Placed!",
      description: "Your order has been sent via WhatsApp. We'll contact you soon!",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Order Confirmation</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Order Summary */}
          <div className="bg-muted p-3 rounded-lg">
            <h4 className="font-medium mb-2">Order Summary</h4>
            {items.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>{item.name} x{item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
            <div className="border-t mt-2 pt-2 font-semibold">
              Total: ₹{getTotalPrice()}
            </div>
          </div>

          {/* Customer Details Form */}
          <div className="space-y-3">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={customerDetails.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                value={customerDetails.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="Enter your phone number"
              />
            </div>
            
            <div>
              <Label htmlFor="address">Delivery Address *</Label>
              <Textarea
                id="address"
                value={customerDetails.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                placeholder="Enter your complete delivery address"
                rows={3}
              />
            </div>
          </div>

          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button 
              variant="fresh" 
              onClick={handleWhatsAppOrder}
              className="flex-1"
            >
              Place Order via WhatsApp 💬
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderConfirmationDialog;