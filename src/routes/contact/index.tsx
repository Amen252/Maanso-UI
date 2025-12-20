import { createFileRoute } from "@tanstack/react-router";
import Contact from "@/Components/contact";
export const Route = createFileRoute("/contact/")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <Contact />
    </>
  );
}
