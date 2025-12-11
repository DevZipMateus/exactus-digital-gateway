import { FileSearch, Calculator, Search, FileText, TrendingUp, BarChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import serviceLicitacao from "@/assets/service-licitacao.jpg";
import serviceTributaria from "@/assets/service-tributaria.jpg";

const Services = () => {
  const licitacoesServices = [
    {
      icon: Search,
      title: "Busca de oportunidades",
      description: "Localizamos e enviamos novas oportunidades de acordo com seu interesse. Você,  irá avaliar, selecionar e enviar o edital para participação."
    },
    {
      icon: FileText,
      title: "Gestão de documentos",
      description: "Identificamos e organizamos toda a documentação que sua empresa precisará para participar."
    },
    {
      icon: TrendingUp,
      title: "Disputa e acompanhamento",
      description: "Cadastramos a proposta, realizamos a etapa de disputa e acompanhamos o processo até a assinatura do contrato."
    },
    {
      icon: BarChart,
      title: "Resultados",
      description: "Receba relatórios de disputa e análises do assessor responsável para sair na frente da concorrência."
    }
  ];

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
    <section id="servicos" className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">Nossos serviços</h2>
          <p className="text-base md:text-lg text-muted-foreground px-2">
            Soluções completas para sua empresa vencer em licitações e otimizar sua gestão tributária
          </p>
        </div>

        {/* Consultoria em Licitações */}
        <div className="mb-12 md:mb-20">
          <div className="flex flex-col sm:flex-row items-center justify-center mb-8 md:mb-10 gap-2">
            <FileSearch className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center">Consultoria em licitações</h3>
          </div>
          
          <div className="max-w-5xl mx-auto mb-8 md:mb-10">
            <img 
              src={serviceLicitacao} 
              alt="Consultoria em licitações e contratos públicos"
              className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
            {licitacoesServices.map((service, index) => (
              <Card key={index} className="border-primary/20 hover:border-primary transition-all hover:shadow-lg">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Consultoria Tributária */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center mb-8 md:mb-10 gap-2">
            <Calculator className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center">Consultoria tributária</h3>
          </div>
          
          <div className="mb-8 md:mb-10">
            <img 
              src={serviceTributaria} 
              alt="Consultoria e auditoria tributária"
              className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <Card className="border-primary/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Consultoria e auditoria tributária</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-center">
                Estamos oferecendo para sua empresa uma análise experimental inicial gratuita, onde terá a 
                oportunidade de avaliar o nosso profissionalismo e eficácia, para ajudá-lo nas suas tomadas de decisão.
              </p>
              
              <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                <h4 className="font-semibold text-foreground text-lg">Nosso objetivo:</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Rastrear e consertar preventivamente seus arquivos, garantindo uma segurança para sua empresa</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Avaliar a existência de créditos fiscais, por conta de recolhimentos de tributo maior ou indevido</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Diagnóstico fiscal dos produtos em conformidade com a tributação dada pela legislação</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Recuperar créditos que serão creditados em até 60 dias na sua conta ou compensados nos tributos</span>
                  </li>
                </ul>
              </div>

              <div className="text-center pt-6">
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-accent font-semibold"
                >
                  Solicitar análise gratuita
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
