import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { Plus, Minus, Trash2 } from "lucide-react";
import { useState } from "react";
import OrderConfirmationDialog from "./OrderConfirmationDialog";

interface CartDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CartDialog = ({ open, onOpenChange }: CartDialogProps) => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);

  const handleProceedToOrder = () => {
    if (items.length === 0) return;
    setShowOrderConfirmation(true);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Your Cart</DialogTitle>
          </DialogHeader>
          
          {items.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              Your cart is empty
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-3 bg-card p-3 rounded-lg">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">{item.weight}</p>
                    <p className="font-semibold text-primary">₹{item.price}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center text-sm font-medium">
                      {item.quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-destructive hover:text-destructive"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
              
              <div className="border-t pt-4">
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span>Total: ₹{getTotalPrice()}</span>
                </div>
                <div className="flex space-x-2 mt-4">
                  <Button 
                    variant="outline" 
                    onClick={clearCart}
                    className="flex-1"
                  >
                    Clear Cart
                  </Button>
                  <Button 
                    variant="fresh" 
                    onClick={handleProceedToOrder}
                    className="flex-1"
                  >
                    Proceed to Order
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <OrderConfirmationDialog
        open={showOrderConfirmation}
        onOpenChange={setShowOrderConfirmation}
        onOrderConfirmed={() => {
          onOpenChange(false);
          setShowOrderConfirmation(false);
        }}
      />
    </>
  );
};

export default CartDialog;