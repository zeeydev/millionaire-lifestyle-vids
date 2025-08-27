import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Criador de Conteúdo",
      avatar: "👨‍💼",
      rating: 5,
      text: "Pack incrível! Meus vídeos nunca tiveram tantas visualizações. O conteúdo é de altíssima qualidade e realmente passa credibilidade.",
      results: "+250% views"
    },
    {
      name: "Marina Santos",
      role: "Influenciadora Digital",
      avatar: "👩‍💻",
      rating: 5,
      text: "Investimento que se pagou em 1 semana! A variedade de vídeos é impressionante e a qualidade é profissional. Recomendo muito!",
      results: "+10K seguidores"
    },
    {
      name: "Rafael Costa",
      role: "Agência de Marketing",
      avatar: "🧑‍💼",
      rating: 5,
      text: "Usamos para nossos clientes e os resultados são fantásticos. Material exclusivo que você não encontra em outro lugar.",
      results: "+400% engajamento"
    },
    {
      name: "Ana Rodrigues",
      role: "Coach Online",
      avatar: "👩‍🎓",
      rating: 5,
      text: "Perfeito para quem quer transmitir sucesso e abundância. Meus alunos ficaram impressionados com a mudança na minha presença online.",
      results: "+180% conversões"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-success text-white font-bold px-4 py-2">
            💬 DEPOIMENTOS REAIS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O que nossos clientes 
            <span className="text-gold"> estão dizendo</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mais de 2.800 criadores já transformaram seus resultados com nosso pack
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-gold transition-all duration-300 hover:shadow-card group"
            >
              <CardContent className="p-6">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-gold mb-4" />
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-current" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                  "{testimonial.text}"
                </p>

                {/* Results badge */}
                <Badge className="mb-4 bg-gradient-gold text-black font-bold w-full justify-center">
                  {testimonial.results}
                </Badge>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social proof numbers */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-gold mb-2">2.847+</div>
              <div className="text-gray-300">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">4.9★</div>
              <div className="text-gray-300">Avaliação Média</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">500+</div>
              <div className="text-gray-300">Vídeos Premium</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;