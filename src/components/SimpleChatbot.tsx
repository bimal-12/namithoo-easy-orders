import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, MessageCircle } from "lucide-react";

interface ChatMessage {
  type: 'bot' | 'user';
  message: string;
  timestamp: Date;
}

const SimpleChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      type: 'bot',
      message: "Hi! I'm Namithoo Bot 🥒 How can I help you with our pickles?",
      timestamp: new Date()
    }
  ]);
  const [currentStep, setCurrentStep] = useState(0);

  const chatFlow = [
    {
      question: "What type of pickle interests you?",
      options: ["Spicy Mango", "Lemon Chili", "Garlic Pickle", "Mixed Veggie", "All of them!"]
    },
    {
      question: "How many jars would you like?",
      options: ["1 jar", "2 jars", "3 jars", "5+ jars"]
    },
    {
      question: "Great! Let me connect you to WhatsApp for easy ordering 📱"
    }
  ];

  const handleOptionClick = (option: string) => {
    // Add user message
    const userMessage: ChatMessage = {
      type: 'user',
      message: option,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      if (currentStep < chatFlow.length - 1) {
        const nextStep = currentStep + 1;
        setCurrentStep(nextStep);
        
        let botResponse = chatFlow[nextStep].question || "";
        
        if (nextStep === chatFlow.length - 1) {
          // Final step - redirect to WhatsApp
          botResponse = "Perfect! Let me connect you to our WhatsApp for quick ordering. Click below to continue! 👇";
        }

        const botMessage: ChatMessage = {
          type: 'bot',
          message: botResponse,
          timestamp: new Date()
        };

        setMessages(prev => [...prev, botMessage]);
      }
    }, 1000);
  };

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "9779844280175";
    const message = "Hi! I came from the Namithoo website chatbot. I'm interested in ordering pickles. Can you help me? 🥒";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  const resetChat = () => {
    setCurrentStep(0);
    setMessages([
      {
        type: 'bot',
        message: "Hi! I'm Namithoo Bot 🥒 How can I help you with our pickles?",
        timestamp: new Date()
      }
    ]);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="hero"
          size="lg"
          className="rounded-full w-16 h-16 shadow-warm hover:shadow-2xl"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 h-96 shadow-warm border-border z-40 bg-card">
          <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-to-r from-turmeric to-lime-green text-cream">
            <h3 className="font-semibold">Namithoo Bot 🥒</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-cream hover:bg-cream/20"
            >
              <X size={16} />
            </Button>
          </div>
          
          <CardContent className="p-0 h-80 flex flex-col">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg text-sm ${
                      msg.type === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {msg.message}
                  </div>
                </div>
              ))}
            </div>

            {/* Options Area */}
            <div className="p-4 border-t border-border bg-cream">
              {currentStep < chatFlow.length - 1 && chatFlow[currentStep]?.options && (
                <div className="space-y-2">
                  {chatFlow[currentStep].options.map((option, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="w-full text-left justify-start text-xs"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              )}
              
              {currentStep === chatFlow.length - 1 && (
                <div className="space-y-2">
                  <Button
                    variant="fresh"
                    size="sm"
                    className="w-full"
                    onClick={handleWhatsAppRedirect}
                  >
                    Continue on WhatsApp 💬
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={resetChat}
                  >
                    Start Over
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default SimpleChatbot;