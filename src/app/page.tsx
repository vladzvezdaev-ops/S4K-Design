import { Hero } from "@/widgets/Hero";
export const dynamic = "force-dynamic";

export default async function Home() {
  await new Promise((res) => setTimeout(res, 1000));
  return (
    <main>
      <Hero />
    </main>
  );
}
