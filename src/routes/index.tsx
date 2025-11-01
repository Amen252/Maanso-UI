import { createFileRoute } from '@tanstack/react-router'
import Hero from '@/Components/Hero'
import FeaturesSection from '@/Components/features'
import About from '@/Components/about'
import TestimonialsSection from '@/Components/testmonial'
import Contact from '@/Components/contact'
export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
<> 
  <Hero />
  <FeaturesSection />
  <About />
  <TestimonialsSection />
  <Contact />

</>
  
  )
}
