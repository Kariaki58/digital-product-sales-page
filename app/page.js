import Head from 'next/head';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>24-Hour E-Commerce Websites for Boutiques | Get Selling Fast</title>
        <meta name="description" content="Stop losing sales to WhatsApp DMs! Get a professional e-commerce website with admin dashboard and payment integration in just 24 hours for only ₦60,000." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      
      <footer className="bg-gray-800 text-white py-8 text-center">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Boutique E-Commerce Solutions</p>
          <p className="mt-2 text-sm text-gray-400">Get your online store launched in 24 hours or your money back</p>
        </div>
      </footer>
    </div>
  );
}