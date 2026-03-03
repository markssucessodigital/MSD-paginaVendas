import React, { useState, useEffect } from 'react';
import './App.css';
import { mockData } from './data/mock';
import Hero from './components/Hero';
import Problems from './components/Problems';
import CTASection from './components/CTASection';
import StrategicVision from './components/StrategicVision';
import Method from './components/Method';
import PillarsConnection from './components/PillarsConnection';
import Implementation from './components/Implementation';
import Benefits from './components/Benefits';
import Applications from './components/Applications';
import Differential from './components/Differential';
import SocialProof from './components/SocialProof';
import Objections from './components/Objections';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import StickyFloatingCTA from './components/StickyFloatingCTA';
import { Toaster } from './components/ui/sonner';
import { toast } from 'sonner';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Initialize Google Analytics (se tiver)
    const GA_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;
    if (GA_ID && GA_ID !== 'G-XXXXXXXXXX') {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag() { window.dataLayer.push(arguments); }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', GA_ID);
      console.log('📊 Google Analytics initialized');
    }

    // Initialize Facebook Pixel (se tiver)
    const FB_PIXEL = process.env.REACT_APP_FB_PIXEL_ID;
    if (FB_PIXEL && FB_PIXEL !== 'YOUR_PIXEL_ID') {
      !function(f,b,e,v,n,t,s) {
        if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)
      }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
      window.fbq('init', FB_PIXEL);
      window.fbq('track', 'PageView');
      console.log('📊 Facebook Pixel initialized');
    }
  }, []);

  const handleCTAClick = (source = 'generic') => {
    // Track event
    if (window.gtag) {
      window.gtag('event', 'cta_click', {
        event_category: 'engagement',
        event_label: source
      });
    }
    if (window.fbq) {
      window.fbq('trackCustom', 'CTAClick', { source: source });
    }

    // WhatsApp redirect
    const whatsappNumber = mockData.whatsapp.number;
    const whatsappMessage = encodeURIComponent(mockData.whatsapp.message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    toast.success('Redirecionando para WhatsApp...', {
      description: 'Vamos te atender agora!',
      duration: 2000,
    });
    
    setTimeout(() => {
      window.open(whatsappURL, '_blank');
    }, 500);
  };

  return (
    <div className={`App ${isLoaded ? 'loaded' : ''}`}>
      {/* Hero Section */}
      <Hero data={mockData.hero} onCTAClick={() => handleCTAClick('hero')} />
      
      {/* Problems Section */}
      <Problems data={mockData.problems} />
      
      {/* CTA 1 */}
      <CTASection
        title="Identificou Seu Negócio Nesses Desafios?"
        subtitle="Não deixe esses problemas travarem seu crescimento. Fale conosco agora!"
        ctaText="Quero Resolver Esses Problemas"
        variant="default"
        onCTAClick={() => handleCTAClick('after_problems')}
      />
      
      {/* Strategic Vision Section */}
      <StrategicVision data={mockData.strategicVision} />
      
      {/* Method M.D.S Section */}
      <Method data={mockData.method} />
      
      {/* CTA 2 */}
      <CTASection
        title="Pronto Para Implementar o Método M.D.S?"
        subtitle="Entre em contato e vamos estruturar seu crescimento em 30 dias."
        ctaText="Quero Implementar o Método M.D.S"
        variant="light"
        onCTAClick={() => handleCTAClick('after_method')}
      />
      
      {/* Pillars Connection Section */}
      <PillarsConnection data={mockData.pillarsConnection} />
      
      {/* Implementation Section */}
      <Implementation data={mockData.implementation} />
      
      {/* Benefits Section */}
      <Benefits data={mockData.benefits} />
      
      {/* Applications Section */}
      <Applications data={mockData.applications} />
      
      {/* Differential Section */}
      <Differential data={mockData.differential} />
      
      {/* CTA 3 */}
      <CTASection
        title="Escolha Engenharia, Não Agência Comum"
        subtitle="Fale com quem estrutura crescimento de verdade."
        ctaText="Quero Engenharia de Crescimento"
        variant="default"
        onCTAClick={() => handleCTAClick('after_differential')}
      />
      
      {/* Social Proof Section */}
      <SocialProof data={mockData.socialProof} />
      
      {/* Objections/FAQ Section */}
      <Objections data={mockData.objections} />
      
      {/* Final CTA Section */}
      <FinalCTA data={mockData.finalCTA} onCTAClick={() => handleCTAClick('final_cta')} />
      
      {/* Footer */}
      <Footer data={mockData.footer} />
      
      {/* Sticky Floating CTA */}
      <StickyFloatingCTA onCTAClick={() => handleCTAClick('sticky_floating')} />
      
      {/* Toast Notifications */}
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
