import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const FAQ = () => {
  const faqs = [
    {
      question: "Como funciona o acesso aos vídeos?",
      answer: "Após a confirmação do pagamento, você receberá imediatamente o link para download de todos os vídeos. O acesso é vitalício e você pode baixar quantas vezes quiser."
    },
    {
      question: "Os vídeos têm direitos autorais liberados?",
      answer: "Sim! Todos os vídeos do pack possuem licença comercial. Você pode usar em seus projetos pessoais e comerciais sem problemas de direitos autorais."
    },
    {
      question: "Qual a qualidade dos vídeos?",
      answer: "Os vídeos estão disponíveis em múltiplas qualidades: HD (1080p), 2K e 4K. Todos são profissionais e prontos para uso em qualquer plataforma."
    },
    {
      question: "Posso usar os vídeos em redes sociais?",
      answer: "Absolutamente! Os vídeos são perfeitos para Instagram, TikTok, YouTube, Facebook e qualquer outra plataforma. Formatos otimizados para cada rede social."
    },
    {
      question: "Há garantia de reembolso?",
      answer: "Sim! Oferecemos 30 dias de garantia total. Se não ficar satisfeito com o pack, devolvemos 100% do seu dinheiro, sem perguntas."
    },
    {
      question: "Receberei atualizações do pack?",
      answer: "Sim! Sempre que adicionarmos novos vídeos ao pack, você receberá as atualizações gratuitamente. Seu acesso é vitalício e inclui todas as futuras adições."
    },
    {
      question: "Os vídeos são organizados por categoria?",
      answer: "Sim! Todos os vídeos estão organizados em pastas por categoria: carros de luxo, mansões, jatos, joias, iates e lifestyle diário. Tudo bem organizado para facilitar seu uso."
    },
    {
      question: "Posso revender os vídeos?",
      answer: "A licença permite uso comercial para criar seu próprio conteúdo, mas a revenda direta dos vídeos não é permitida. Você pode usar para criar seus produtos e serviços."
    }
  ];

  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-muted text-gold border-gold font-bold px-4 py-2">
            ❓ PERGUNTAS FREQUENTES
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tire suas 
            <span className="text-gold"> dúvidas</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Respondemos as principais questões sobre o Pack Milionário
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-gold transition-colors duration-300"
              >
                <AccordionTrigger className="text-left text-white hover:text-gold transition-colors py-6 text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact support */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">
            Ainda tem dúvidas? Entre em contato com nosso suporte!
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Badge className="bg-success text-white px-4 py-2">
              📧 suporte@packmilionario.com
            </Badge>
            <Badge className="bg-success text-white px-4 py-2">
              📱 WhatsApp: (11) 99999-9999
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;