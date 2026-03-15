import { Hero } from "@/widgets/Hero";
export const dynamic = "force-dynamic";
import { PortfolioSlider } from '@/widgets/PortfolioSlider'; 

const mockProjects = [
  { 
    id: '1', 
    title: 'Aura Website', 
    category: 'WEB DESIGN', 
    imageUrl: 'https://via.placeholder.com/400x500/333/fff?text=Project+1' 
  },
  { 
    id: '2', 
    title: 'Nova Branding', 
    category: 'BRANDING', 
    imageUrl: 'https://via.placeholder.com/400x500/444/fff?text=Project+2' 
  },
  { 
    id: '3', 
    title: 'Fintech App', 
    category: 'UI/UX', 
    imageUrl: 'https://via.placeholder.com/400x500/555/fff?text=Project+3' 
  },
  { 
    id: '4', 
    title: 'Eco Store', 
    category: 'E-COMMERCE', 
    imageUrl: 'https://via.placeholder.com/400x500/666/fff?text=Project+4' 
  },
  { 
    id: '5', 
    title: 'Crypto Dashboard', 
    category: 'UI/UX', 
    imageUrl: 'https://via.placeholder.com/400x500/777/fff?text=Project+5' 
  },
];

export default async function Home() {
  await new Promise((res) => setTimeout(res, 1000));
  return (
    <main>
      <Hero />
      <PortfolioSlider projects={mockProjects} />
    </main>
  );
}
