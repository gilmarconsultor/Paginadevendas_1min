import React from 'react';
import { Bot, CheckCircle2, ChevronDown, Clock, Code2, DollarSign, FastForward, FileCode2, MessageSquare, Rocket, Zap, Brain, Shield, Layout, Smartphone } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,50,50,0.2),rgba(0,0,0,0.9))]"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] bg-cover bg-center opacity-5"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-4 rounded-2xl shadow-xl transform hover:scale-105 transition-all">
              <Bot className="w-12 h-12 text-black" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-6 animate-fade-in">
            🚀 Transforme sua Venda Online com Inteligência Artificial!
          </h1>
          <div className="space-y-4 text-xl sm:text-2xl text-gray-300 mb-8">
            <p>🔹 Crie páginas de vendas profissionais em segundos</p>
            <p>🔹 Sem precisar de códigos ou design</p>
            <p>🔹 100% otimizadas para conversão</p>
          </div>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black text-xl font-bold py-6 px-12 rounded-full transform hover:scale-105 transition-all shadow-[0_0_30px_rgba(234,179,8,0.3)] animate-pulse">
            COMPRAR AGORA
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-12">
            ✅ 5 Benefícios Exclusivos
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <FastForward />, title: "Criação Automática", desc: "Em segundos, sua página está pronta" },
              { icon: <Brain />, title: "Alta Conversão", desc: "Design e copy testados para vender mais" },
              { icon: <Smartphone />, title: "100% Responsiva", desc: "Perfeita para mobile e desktop" },
              { icon: <Layout />, title: "Sem Codificação", desc: "Simples e fácil de usar" },
              { icon: <Rocket />, title: "Resultados Rápidos", desc: "Comece a vender no mesmo dia" }
            ].map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-yellow-500/20 hover:border-yellow-500/40 transform hover:scale-105 transition-all">
                <div className="text-yellow-500 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-yellow-400 text-center mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-center">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-12">
            📌 Depoimentos de quem já usou e teve resultados incríveis!
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                text: "Eu sempre achei que criar uma página de vendas era complicado e demorado, mas essa ferramenta mudou tudo! Em apenas 2 minutos, minha página estava pronta, linda e otimizada para conversão. Nunca mais perco tempo com códigos e design. Simplesmente incrível!",
                author: "Ana S., Empreendedora Digital"
              },
              {
                text: "Eu já tinha tentado várias plataformas para criar páginas de vendas, mas sempre levava horas ajustando detalhes. Com essa inteligência artificial, criei minha página em 2 minutos e comecei a vender no mesmo dia! Praticidade e eficiência que realmente fazem a diferença.",
                author: "Lucas M., Lançador de Infoprodutos"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-yellow-500/20">
                <MessageSquare className="text-yellow-500 mb-4" />
                <p className="text-gray-300 mb-4 text-lg">{testimonial.text}</p>
                <p className="text-yellow-400 font-semibold">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-12">
            ❓ Perguntas Frequentes (FAQ)
          </h2>
          <div className="grid gap-6 max-w-3xl mx-auto">
            {[
              {
                q: "Preciso ter experiência para usar a ferramenta?",
                a: "Não! Nossa IA faz todo o trabalho para você."
              },
              {
                q: "Em quanto tempo minha página fica pronta?",
                a: "Menos de 2 minutos! Basta inserir suas informações e pronto."
              },
              {
                q: "A ferramenta realmente ajuda na conversão?",
                a: "Sim! O design e a estrutura são otimizados para aumentar suas vendas."
              },
              {
                q: "Funciona em qualquer nicho?",
                a: "Sim! Seja infoprodutos, afiliados, e-commerce ou qualquer outro nicho."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">{faq.q}</h3>
                <p className="text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-8">
            💡 Não perca tempo com páginas complicadas. Experimente agora e veja a diferença!
          </h2>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black text-xl font-bold py-6 px-12 rounded-full transform hover:scale-105 transition-all shadow-[0_0_30px_rgba(234,179,8,0.3)] animate-pulse">
            EU QUERO AGORA
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;