import { FileSearch, Calculator, Search, FileText, TrendingUp, BarChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const licitacoesServices = [
    {
      icon: Search,
      title: "Busca de oportunidades",
      description: "Localizamos e enviamos novas oportunidades de acordo com seu interesse. Você avalia, define e nos envia o edital para participação."
    },
    {
      icon: FileText,
      title: "Gestão de documentos",
      description: "Identificamos e organizamos toda documentação que sua empresa necessitará para licitar."
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
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Nossos serviços</h2>
          <p className="text-lg text-muted-foreground">
            Soluções completas para sua empresa vencer em licitações e otimizar sua gestão tributária
          </p>
        </div>

        {/* Consultoria em Licitações */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-10">
            <FileSearch className="w-10 h-10 text-primary mr-4" />
            <h3 className="text-3xl font-bold text-foreground">Consultoria em licitações</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
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
          <div className="flex items-center justify-center mb-10">
            <Calculator className="w-10 h-10 text-primary mr-4" />
            <h3 className="text-3xl font-bold text-foreground">Consultoria tributária</h3>
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
