import { Header1 } from "@/components/Header1";
import { Hero5 } from "@/components/Hero5";
import { Feature3 } from "@/components/Feature3";
import { Feature4 } from "@/components/Feature4";
import { Pricing1 } from "@/components/Pricing1";
import { FAQ1 } from "@/components/FAQ1";
import { CTA1 } from "@/components/CTA1";
import { Footer1 } from "@/components/Footer1";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header1 />
      <div className="pt-20">
        <Hero5 />
        <Feature3 />
        <Feature4 />
        <Pricing1 />
        <FAQ1 />
        <CTA1 />
        <Footer1 />
      </div>
    </main>
  );
}
