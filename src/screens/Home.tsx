import ConstellationBackground from "../components/ConstellationBackground.tsx";

export default function Home() {

return (
  <div className="min-h-screen relative w-screen  bg-gradient-to-br from-blue-500/20 via-transparent to-blue-500/10 flex flex-col">
    <div className="absolute inset-0 -z-10">
      <ConstellationBackground number={150} />
    </div>

    <main className="flex-1 z-10">
      <section className="h-[100vh] flex items-center justify-center">
        <h1 className="text-4xl font-bold">Landing Page</h1>
      </section>
      <section className="h-[100vh] flex items-center justify-center">
        <h1 className="text-4xl font-bold">More Content</h1>
      </section>
    </main>
  </div>
);
}
