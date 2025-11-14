import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(71) 98160-6625",
      link: "https://wa.me/5571981606625"
    },
    {
      icon: Mail,
      title: "Email",
      content: "goldlicite@gmail.com",
      link: "mailto:goldlicite@gmail.com"
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Ed. Ômega - Av. Tancredo Neves, 1283 - Sala 902 - Caminho das Árvores, Salvador - BA, 41820-021",
      link: null
    },
    {
      icon: Clock,
      title: "Horário de funcionamento",
      content: "Segunda a Sexta: 08:00h às 18:00h",
      link: null
    }
  ];

  return (
    <section id="contato" className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">Entre em contato</h2>
          <p className="text-base md:text-lg text-muted-foreground px-2">
            Estamos prontos para ajudar sua empresa a crescer. Entre em contato conosco
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto mb-8 md:mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="border-primary/20 hover:border-primary transition-colors shadow-sm hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <info.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.content}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-4 md:space-y-6">
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-2">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-accent font-semibold w-full sm:w-auto"
            >
              <a href="https://wa.me/5571981606625" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2" size={18} />
                Fale pelo WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground font-semibold w-full sm:w-auto"
            >
              <a href="mailto:goldlicite@gmail.com">
                <Mail className="mr-2" size={18} />
                Enviar email
              </a>
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm md:text-base text-muted-foreground px-4">
            <div className="flex items-center gap-2">
              <Instagram size={18} className="text-primary" />
              <span>Siga-nos no Instagram:</span>
            </div>
            <a
              href="https://instagram.com/licit_consultoria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent font-semibold transition-colors"
            >
              @licit_consultoria
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
