import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import OrderForm from "@/components/OrderForm";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import SimpleChatbot from "@/components/SimpleChatbot";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <About />
      <OrderForm />
      <Feedback />
      <Footer />
      <SimpleChatbot />
    </div>
  );
};

export default Index;
