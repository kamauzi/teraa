import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <Head>
        <title>Terra Verge Solution</title>
        <meta name="description" content="Geospatial intelligence & Earth observation services" />
      </Head>

      <main className="max-w-4xl mx-auto text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Terra Verge Solution</h1>
        <p className="text-xl mb-6">
          Empowering decisions with geospatial intelligence, Earth observation,
          and sustainable solutions for the blue and green economy.
        </p>
        <div className="space-x-4">
          <a href="#services" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded">Learn More</a>
          <a href="mailto:info@terraverge.com" className="border px-6 py-2 rounded">Contact Us</a>
        </div>
      </main>

      <section id="services" className="max-w-4xl mx-auto py-16">
        <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
        <ul className="space-y-4 text-left text-lg">
          <li>🌍 Earth Observation and Satellite Analytics</li>
          <li>📊 Environmental Monitoring and Reporting</li>
          <li>🛰️ Coastal and Forest Ecosystem Tracking</li>
          <li>💧 Climate Resilience and Sustainability Planning</li>
          <li>📱 Custom EO Dashboards and Mobile Tools</li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto py-16">
        <h2 className="text-3xl font-semibold mb-6">Why Terra Verge?</h2>
        <p className="text-lg">
          We combine cutting-edge remote sensing technology, cloud platforms, and community insights
          to provide real-time, actionable intelligence for governments, NGOs, and private sectors.
        </p>
      </section>

      <footer className="text-center py-10 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Terra Verge Solution. All rights reserved.
      </footer>
    </div>
  )
}
