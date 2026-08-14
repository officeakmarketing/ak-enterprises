import ContactHeader from "@/components/contact/ContactHeader";
import ContactForm from "@/components/contact/ContactForm";

export default function Contact() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
      <section className="py-24">
        <div className="flex flex-col md:flex-row gap-16">
          <ContactHeader />
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
