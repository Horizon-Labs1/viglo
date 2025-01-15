/* Includes previous modifications */
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>VIGLO - AI-Powered Insights</title>
        <meta name="description" content="VIGLO provides AI-powered insights for fraud detection on Solana." />
      </Head>
      <main className="bg-gray-900 text-white overflow-x-hidden">
        <Hero />
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="use-cases">
          <UseCases />
        </section>
        <section id="why-viglo">
          <WhyVIGLO />
        </section>
        <Suspense fallback={<p className="text-center text-gray-400">Loading Live Dashboard...</p>}>
          <section id="live-dashboard">
            <DynamicLiveDashboard />
          </section>
        </Suspense>
        <Suspense fallback={<p className="text-center text-gray-400">Loading Join Revolution...</p>}>
          <section id="join">
            <DynamicJoinRevolution />
          </section>
        </Suspense>
        <Footer />
      </main>
    </>
  );
}
