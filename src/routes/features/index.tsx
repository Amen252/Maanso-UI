import { createFileRoute } from '@tanstack/react-router'
import FeaturesSection from '@/Components/features'
export const Route = createFileRoute('/features/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <FeaturesSection />
  </div>
}
