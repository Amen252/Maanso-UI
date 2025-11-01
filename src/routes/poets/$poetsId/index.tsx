import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/poets/$poetsId/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/poets/$poetsId/"!</div>
}
