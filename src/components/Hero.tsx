import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Download, Star } from "lucide-react";
import heroImage from "@/assets/hero-luxury.jpg";

const Hero = () => {
  const handlePurchase = () => {
    // Scroll to pricing section
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Lifestyle Milionário"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <Badge className="mb-6 bg-gradient-gold text-black font-bold px-4 py-2 text-sm">
          🔥 OFERTA LIMITADA
        </Badge>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">Pack</span>
          <br />
          <span className="bg-gradient-gold bg-clip-text text-transparent">
            +500 Vídeos
          </span>
          <br />
          <span className="text-white">Lifestyle</span>
          <span className="text-gold"> Milionário</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Tenha acesso ao <strong className="text-gold">maior pack de vídeos</strong> com lifestyle de pessoas milionárias. 
          Conteúdo premium para seus vídeos de divulgação!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            variant="gold" 
            size="lg" 
            className="text-lg px-8 py-4 h-auto"
            onClick={handlePurchase}
          >
            <Download className="w-5 h-5 mr-2" />
            COMPRAR AGORA
          </Button>
          
          <Button 
            variant="premium" 
            size="lg" 
            className="text-lg px-8 py-4 h-auto"
          >
            <Play className="w-5 h-5 mr-2" />
            VER PREVIEW
          </Button>
        </div>

        {/* Social Proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300">
          <div className="flex items-center gap-2">
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-sm">4.9/5 de avaliação</span>
          </div>
          
          <div className="hidden sm:block w-px h-6 bg-gray-600" />
          
          <div className="text-sm">
            <strong className="text-gold">+2.847</strong> criadores satisfeitos
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;