import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Check, 
  Crown, 
  Zap, 
  Gift,
  Clock,
  Shield
} from "lucide-react";

const Pricing = () => {
  const handlePurchase = () => {
    alert("Redirecionando para pagamento...");
    // Aqui você integraria com seu gateway de pagamento
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-red-600 text-white font-bold px-4 py-2 animate-pulse">
            🔥 OFERTA ESPECIAL
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Garanta seu 
            <span className="text-gold"> Pack Milionário</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Investimento que se paga em poucos vídeos. Tenha acesso vitalício!
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="relative bg-card border-2 border-gold shadow-elegant overflow-hidden">
            {/* Crown badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-gradient-gold text-black font-bold px-6 py-2 rounded-full shadow-gold">
                <Crown className="w-4 h-4 mr-2" />
                PACK COMPLETO
              </Badge>
            </div>

            <CardHeader className="text-center pt-12 pb-6">
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2 text-gray-400 line-through text-lg">
                  <span>De R$ 497,00</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-5xl font-bold text-gold">R$ 97</span>
                  <div className="text-gray-300">
                    <div className="text-sm">pagamento único</div>
                  </div>
                </div>
                <Badge className="bg-red-600 text-white font-bold">
                  80% DE DESCONTO
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="px-8 pb-8">
              <div className="space-y-4 mb-8">
                {[
                  "✅ +500 vídeos lifestyle milionário",
                  "✅ Qualidade HD, 2K e 4K",
                  "✅ Download imediato",
                  "✅ Uso comercial liberado",
                  "✅ Acesso vitalício",
                  "✅ Atualizações gratuitas",
                  "✅ Suporte 24/7",
                  "✅ Garantia de 30 dias"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-success flex-shrink-0" />
                    <span>{feature.replace('✅ ', '')}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant="gold" 
                size="lg" 
                className="w-full text-lg font-bold py-4 h-auto mb-4"
                onClick={handlePurchase}
              >
                <Zap className="w-5 h-5 mr-2" />
                COMPRAR AGORA - R$ 97
              </Button>

              {/* Urgency indicators */}
              <div className="space-y-3 text-center">
                <div className="flex items-center justify-center gap-2 text-red-400 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>Oferta válida por tempo limitado</span>
                </div>
                
                <div className="flex items-center justify-center gap-2 text-green-400 text-sm">
                  <Shield className="w-4 h-4" />
                  <span>Pagamento 100% seguro</span>
                </div>
                
                <div className="flex items-center justify-center gap-2 text-gold text-sm">
                  <Gift className="w-4 h-4" />
                  <span>Acesso imediato após pagamento</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment methods */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Formas de pagamento aceitas:</p>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <Badge className="bg-muted text-white">💳 Cartão de Crédito</Badge>
            <Badge className="bg-muted text-white">🏦 PIX</Badge>
            <Badge className="bg-muted text-white">📱 Boleto</Badge>
            <Badge className="bg-muted text-white">💰 PayPal</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;