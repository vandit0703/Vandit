import { zodResolver } from "@hookform/resolvers/zod";
import { Github, Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "wouter";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Reveal } from "@/components/ui/Reveal";
import { useToast } from "@/hooks/use-toast";
import { api, type ContactInput } from "@shared/routes";

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<ContactInput>({
    resolver: zodResolver(api.contact.create.input),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = (data: ContactInput) => {
    window.location.href = `mailto:vanditkatbamna7@gmail.com?subject=${encodeURIComponent(`Contact from ${data.name}`)}&body=${encodeURIComponent(`${data.message}\n\nFrom: ${data.email}`)}`;
    toast({
      title: "Opening mail client...",
      description: "Redirecting to your default email application.",
    });
    form.reset();
  };

  return (
    <SiteLayout path="/contact">
      <section className="page-frame contact-page">
        <Reveal className="contact-layout">
          <div>
            <span className="eyebrow">Contact · Start a conversation</span>
            <h1 className="contact-headline">
              Tell me what needs to <em className="editorial-accent">work better.</em>
            </h1>
            <p className="section-copy">
              Have a project in mind or looking for a skilled developer to join
              your team? I’m currently available for new opportunities.
            </p>
            <div className="contact-availability">
              <span aria-hidden="true" />
              Available for new opportunities
            </div>
            <div className="contact-details">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vanditkatbamna7@gmail.com" target="_blank" rel="noreferrer">
                <Mail size={19} aria-hidden="true" /> vanditkatbamna7@gmail.com
              </a>
              <a href="tel:+917383817077">
                <Phone size={19} aria-hidden="true" /> +91 73838 17077
              </a>
              <a href="https://wa.me/917383817077" target="_blank" rel="noreferrer">
                <FaWhatsapp size={19} aria-hidden="true" /> WhatsApp Chat
              </a>
              <a href="https://github.com/vandit0703" target="_blank" rel="noreferrer">
                <Github size={19} aria-hidden="true" /> github.com/vandit0703
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={form.handleSubmit(onSubmit)}>
            <label>
              Your name
              <input autoComplete="name" {...form.register("name")} aria-invalid={!!form.formState.errors.name} />
              {form.formState.errors.name && <span className="form-error">{form.formState.errors.name.message}</span>}
            </label>
            <label>
              Email address
              <input type="email" autoComplete="email" {...form.register("email")} aria-invalid={!!form.formState.errors.email} />
              {form.formState.errors.email && <span className="form-error">{form.formState.errors.email.message}</span>}
            </label>
            <label>
              What would you like to build?
              <textarea {...form.register("message")} aria-invalid={!!form.formState.errors.message} />
              {form.formState.errors.message && <span className="form-error">{form.formState.errors.message.message}</span>}
            </label>
            <button type="submit" className="action-button">
              Send a note <span aria-hidden="true">↗</span>
            </button>
            <p className="section-copy" style={{ margin: 0, fontSize: "0.75rem" }}>
              Submitting opens a message in your default email application.
            </p>
          </form>
          </Reveal>
        <div className="home-cta" style={{ paddingBottom: 0 }}>
          <h2>Prefer to browse first?</h2>
          <Link href="/projects" className="text-link">
            Explore selected projects <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
