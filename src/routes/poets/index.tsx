import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/poets/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/poets/"!</div>
}
