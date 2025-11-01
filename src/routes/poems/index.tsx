import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/poems/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/poems/"!</div>
}
