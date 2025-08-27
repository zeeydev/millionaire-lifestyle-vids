import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Video, 
  Download, 
  Infinity, 
  Zap, 
  Crown, 
  TrendingUp,
  Shield,
  Clock
} from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Video,
      title: "+500 Vídeos Premium",
      description: "Biblioteca gigantesca de conteúdo lifestyle milionário em alta qualidade",
      highlight: "500+ Vídeos"
    },
    {
      icon: Download,
      title: "Download Imediato",
      description: "Acesso instantâneo após a compra. Baixe todos os vídeos na hora!",
      highlight: "Acesso Imediato"
    },
    {
      icon: Infinity,
      title: "Uso Ilimitado",
      description: "Use quantas vezes quiser em seus projetos. Sem limitações!",
      highlight: "Sem Limites"
    },
    {
      icon: Zap,
      title: "Alta Qualidade",
      description: "Vídeos em HD e 4K prontos para usar em qualquer plataforma",
      highlight: "HD & 4K"
    },
    {
      icon: Crown,
      title: "Conteúdo Exclusivo",
      description: "Material único que você não encontra em outros lugares",
      highlight: "Exclusivo"
    },
    {
      icon: TrendingUp,
      title: "Aumente Engajamento",
      description: "Vídeos que chamam atenção e geram mais views e seguidores",
      highlight: "Mais Engajamento"
    },
    {
      icon: Shield,
      title: "Garantia Total",
      description: "30 dias de garantia. Não ficou satisfeito? Devolvemos seu dinheiro",
      highlight: "30 Dias"
    },
    {
      icon: Clock,
      title: "Economize Tempo",
      description: "Pare de procurar conteúdo. Tenha tudo organizado em um lugar",
      highlight: "Praticidade"
    }
  ];

  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gold text-black font-bold px-4 py-2">
            💎 BENEFÍCIOS EXCLUSIVOS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Por que escolher nosso 
            <span className="text-gold"> Pack Milionário?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tudo que você precisa para criar conteúdo de alto impacto e se destacar nas redes sociais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card 
                key={index}
                className="bg-card border-border hover:border-gold transition-all duration-300 hover:shadow-card group"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-black" />
                    </div>
                  </div>
                  
                  <Badge className="mb-3 bg-muted text-gold border-gold">
                    {benefit.highlight}
                  </Badge>
                  
                  <h3 className="text-xl font-bold text-white mb-3">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;