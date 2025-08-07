interface WhatsAppOrderProps {
  productName: string;
  price: number;
  weight: string;
}

const WhatsAppOrder = ({ productName, price, weight }: WhatsAppOrderProps) => {
  const phoneNumber = "9779844280175"; // +977 984-4280175
  
  const handleWhatsAppOrder = () => {
    const message = `Hi! I'd like to order *${productName}* pickle.
    
Product Details:
• Name: ${productName}
• Price: ₹${price}
• Weight: ${weight}

Please let me know:
1. My delivery address
2. Quantity needed
3. Delivery timeline

Thank you! 🥒`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return { handleWhatsAppOrder };
};

export default WhatsAppOrder;