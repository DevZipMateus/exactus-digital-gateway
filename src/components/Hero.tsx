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
    <section id="hero" className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-accent/95"></div>
      
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <img 
            src={logo} 
            alt="Exactus Consultoria & Auditoria" 
            className="h-20 md:h-28 lg:h-32 mx-auto mb-6 md:mb-8 animate-fade-in"
          />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight animate-fade-in px-2">
            Exactus Consultoria de Licitação e Tributos
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8 font-light leading-relaxed animate-fade-in px-4" style={{ animationDelay: "0.2s" }}>
            Dados, estratégia e resultado — o novo jeito de vencer licitações
          </h2>
          <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-12 text-white/90 max-w-3xl mx-auto animate-fade-in px-4" style={{ animationDelay: "0.4s" }}>
            Soluções estratégicas e precisas em consultoria de licitação e tributária, 
            ajudando sua empresa a crescer com transparência, eficiência e segurança
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center animate-fade-in px-4" style={{ animationDelay: "0.6s" }}>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold text-base md:text-lg px-6 md:px-8 py-5 md:py-6 shadow-lg w-full sm:w-auto"
            >
              Solicitar consultoria
              <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button
              onClick={scrollToContact}
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/60 hover:bg-white hover:text-primary font-semibold text-base md:text-lg px-6 md:px-8 py-5 md:py-6 backdrop-blur-sm w-full sm:w-auto"
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
