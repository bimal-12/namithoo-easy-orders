import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { Badge } from "@/components/ui/badge";

interface CartIconProps {
  onClick: () => void;
}

const CartIcon = ({ onClick }: CartIconProps) => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <div className="relative">
      <Button variant="outline" size="icon" onClick={onClick}>
        <ShoppingCart className="h-5 w-5" />
      </Button>
      {totalItems > 0 && (
        <Badge 
          variant="destructive" 
          className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
        >
          {totalItems}
        </Badge>
      )}
    </div>
  );
};

export default CartIcon;