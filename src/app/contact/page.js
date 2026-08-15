import ContactHeader from "@/components/contact/ContactHeader";
import ContactForm from "@/components/contact/ContactForm";

export default function Contact() {
  return (
    <main className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden">
      <section className="w-screen relative left-1/2 -translate-x-1/2 flex flex-col bg-ink-black overflow-hidden pt-8 sm:pt-12 lg:pt-4 xl:pt-6 pb-16 lg:pb-24">
        <div className="w-full max-w-[1536px] mx-auto px-0 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-6">
              <ContactHeader />
            </div>
            <div className="lg:col-span-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
