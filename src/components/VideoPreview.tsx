import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Eye, Download } from "lucide-react";
import videoPreview from "@/assets/video-preview.jpg";

const VideoPreview = () => {
  const videoCategories = [
    { name: "Carros de Luxo", count: 87, color: "bg-red-500" },
    { name: "Mansões & Casas", count: 134, color: "bg-blue-500" },
    { name: "Jatos Privados", count: 45, color: "bg-purple-500" },
    { name: "Joias & Relógios", count: 92, color: "bg-gold" },
    { name: "Iates & Barcos", count: 67, color: "bg-cyan-500" },
    { name: "Lifestyle Diário", count: 156, color: "bg-green-500" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-success text-white font-bold px-4 py-2">
            🎬 PREVIEW EXCLUSIVO
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Veja o que está 
            <span className="text-gold"> incluído no pack</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mais de 500 vídeos organizados por categorias para você nunca ficar sem conteúdo
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Preview */}
          <div className="relative group">
            <Card className="overflow-hidden border-gold shadow-card">
              <div className="relative">
                <img 
                  src={videoPreview}
                  alt="Preview dos vídeos inclusos no pack"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors duration-300">
                  <Button variant="gold" size="lg" className="rounded-full w-20 h-20 text-2xl">
                    <Play className="w-8 h-8" />
                  </Button>
                </div>
                
                {/* Quality badge */}
                <Badge className="absolute top-4 left-4 bg-red-600 text-white font-bold">
                  🔴 4K QUALITY
                </Badge>
                
                {/* Duration badge */}
                <Badge className="absolute bottom-4 right-4 bg-black/80 text-white">
                  2h+ de conteúdo
                </Badge>
              </div>
            </Card>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">
              📂 Categorias Incluídas:
            </h3>
            
            <div className="grid gap-4">
              {videoCategories.map((category, index) => (
                <Card key={index} className="bg-card border-border hover:border-gold transition-colors duration-300">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full ${category.color}`} />
                      <span className="text-white font-medium">{category.name}</span>
                    </div>
                    <Badge className="bg-muted text-gold border-gold">
                      {category.count} vídeos
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="pt-6">
              <div className="flex items-center gap-4 text-gray-300 mb-4">
                <Eye className="w-5 h-5 text-gold" />
                <span>Vídeos em HD, 2K e 4K</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300 mb-4">
                <Download className="w-5 h-5 text-gold" />
                <span>Download direto e organizado</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <Play className="w-5 h-5 text-gold" />
                <span>Formatos compatíveis com todas as plataformas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPreview;