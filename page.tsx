/* Includes previous modifications */
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <title>VIGLO - AI-Powered Insights</title>
        <meta name="description" content="VIGLO provides AI-powered insights for fraud detection on Solana." />
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXX-X"></Script>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-XXXXX-X');
        `}
      </Script>
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
