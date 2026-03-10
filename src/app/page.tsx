export default async function Home() {
  await new Promise((res) => setTimeout(res, 700));
  return <main></main>;
}
