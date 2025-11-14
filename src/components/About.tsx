import { Target, Eye, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    { icon: Award, title: "Excelência", description: "Buscar sempre a qualidade máxima na prestação de nossos serviços" },
    { icon: Target, title: "Integridade", description: "Agir com ética, transparência e responsabilidade em todas as ações" },
    { icon: Eye, title: "Comprometimento", description: "Dedicar-se integralmente às necessidades e objetivos de nossos clientes" },
  ];

  return (
    <section id="sobre" className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">Sobre a Exactus</h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed px-2">
            A Exactus Consultoria & Auditoria foi idealizada em 2006 e fundada em 2007 pelo seu sócio 
            administrador Luís Alberto Santos Brito, contador, pós graduado em gestão tributária e 
            consultor de licitações e contratos.
          </p>
        </div>

        {/* Video Section */}
        <div className="max-w-5xl mx-auto mb-10 md:mb-16">
          <video 
            src="/video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
            aria-label="Vídeo sobre a Exactus Consultoria"
          >
            Seu navegador não suporta a reprodução de vídeos.
          </video>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12 mb-10 md:mb-16 max-w-6xl mx-auto">
          <Card className="border-primary/20 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Fornecer soluções estratégicas e precisas em consultoria de licitação e tributária, 
                ajudando nossos clientes a alcançar suas metas com transparência, eficiência e segurança, 
                promovendo o crescimento sustentável de seus negócios.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser reconhecida como a principal consultoria com referência em licitação e tributos, 
                destacando-se pela excelência, inovação e integridade, contribuindo para o desenvolvimento 
                econômico e a valorização de nossos clientes.
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-foreground">Nossos valores</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-primary/20 hover:border-primary transition-colors shadow-sm hover:shadow-md">
                <CardContent className="p-8">
                  <value.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h4 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
