import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import logo from "@/assets/logo.png";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-accent/95"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <img 
            src={logo} 
            alt="Exactus Consultoria & Auditoria" 
            className="h-24 md:h-32 mx-auto mb-8 animate-fade-in"
          />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            Exactus Consultoria & Auditoria
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl mb-8 font-light leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Dados, estratégia e resultado — o novo jeito de vencer licitações
          </h2>
          <p className="text-lg md:text-xl mb-12 text-white/90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Soluções estratégicas e precisas em consultoria de licitação e tributária, 
            ajudando sua empresa a crescer com transparência, eficiência e segurança
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-6 shadow-lg"
            >
              Solicitar consultoria
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              onClick={scrollToContact}
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/60 hover:bg-white hover:text-primary font-semibold text-lg px-8 py-6 backdrop-blur-sm"
            >
              Fale conosco
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
