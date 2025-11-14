import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Logo e Descrição */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img src={logo} alt="Exactus Consultoria" className="h-10 md:h-12 mb-3 md:mb-4" />
            <p className="text-xs md:text-sm text-secondary-foreground/80 leading-relaxed">
              Soluções estratégicas em consultoria de licitação e tributária
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base text-secondary-foreground">Links rápidos</h4>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <a href="#hero" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contato" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base text-secondary-foreground">Contato</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-secondary-foreground/80" />
                <a href="tel:71981606625" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  (71) 98160-6625
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-secondary-foreground/80" />
                <a href="mailto:goldlicite@gmail.com" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  goldlicite@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-secondary-foreground/80" />
                <span className="text-secondary-foreground/80">
                  Ed. Ômega - Av. Tancredo Neves, 1283 - Sala 902, Salvador - BA
                </span>
              </li>
            </ul>
          </div>

          {/* Horário e Redes */}
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base text-secondary-foreground">Horário</h4>
            <div className="flex items-start gap-2 mb-3 md:mb-4 text-xs md:text-sm">
              <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-secondary-foreground/80" />
              <span className="text-secondary-foreground/80">
                Segunda a Sexta:<br />08:00h às 18:00h
              </span>
            </div>
            <div>
              <h4 className="font-semibold mb-2 md:mb-3 text-sm md:text-base text-secondary-foreground">Redes sociais</h4>
              <a 
                href="https://instagram.com/licit_consultoria" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs md:text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              >
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                @licit_consultoria
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary-foreground/20 pt-8 text-center">
          <p className="text-sm text-secondary-foreground/70">
            © {new Date().getFullYear()} Exactus Consultoria & Auditoria. Todos os direitos reservados.
          </p>
          <p className="text-xs text-secondary-foreground/60 mt-2">
            CNPJ: 35.047.354/0001-76
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
