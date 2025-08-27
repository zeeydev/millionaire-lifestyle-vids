import { Badge } from "@/components/ui/badge";
import { Shield, Mail, MessageCircle, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pack <span className="text-gold">Milionário</span>
            </h3>
            <p className="text-gray-400 mb-4">
              O maior pack de vídeos lifestyle milionário para criadores de conteúdo.
            </p>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Shield className="w-5 h-5 text-success" />
              <span className="text-success text-sm font-medium">
                Pagamento 100% Seguro
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Links Úteis</h4>
            <div className="space-y-2">
              <div>
                <a href="#pricing" className="text-gray-400 hover:text-gold transition-colors">
                  Comprar Pack
                </a>
              </div>
              <div>
                <a href="#faq" className="text-gray-400 hover:text-gold transition-colors">
                  Perguntas Frequentes
                </a>
              </div>
              <div>
                <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                  Política de Privacidade
                </a>
              </div>
              <div>
                <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                  Termos de Uso
                </a>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 justify-center md:justify-end">
                <Mail className="w-4 h-4 text-gold" />
                <span className="text-gray-400 text-sm">
                  suporte@packmilionario.com
                </span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-end">
                <MessageCircle className="w-4 h-4 text-gold" />
                <span className="text-gray-400 text-sm">
                  WhatsApp: (11) 99999-9999
                </span>
              </div>
              
              {/* Social Media */}
              <div className="flex items-center gap-3 justify-center md:justify-end mt-4">
                <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2024 Pack Milionário. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center gap-4">
              <Badge className="bg-muted text-gray-400 border-border">
                💳 Pagamento Seguro
              </Badge>
              <Badge className="bg-muted text-gray-400 border-border">
                🔒 SSL Certificado
              </Badge>
              <Badge className="bg-muted text-gray-400 border-border">
                ✅ Garantia 30 Dias
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;