import { createFileRoute } from '@tanstack/react-router'
import About from '@/Components/about'
export const Route = createFileRoute('/about/')({
  component: RouteComponent,
})

function RouteComponent() {
return (
  <About />)
}
