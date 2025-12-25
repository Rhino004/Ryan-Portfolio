import { Mail, Phone, MapPin, Send } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const Contact = () => {
  return (
    <PageLayout>
      <section className="min-h-[calc(100vh-4rem)] px-6 py-20">
        <div className="container mx-auto max-w-2xl">
          {/* Header */}
          <div className="mb-12 text-center opacity-0 animate-fade-in">
            <p className="font-mono text-sm text-primary">{"Get In Touch"}</p>
            <h1 className="mt-2 text-4xl font-bold md:text-5xl">Contact Me</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Feel free to reach out for opportunities or just to say hello!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="space-y-6">
            {/* Email */}
            <a
              href="mailto:ryantomas85@gmail.com"
              className="group flex items-center gap-6 card-gradient rounded-xl border border-border p-6 transition-all duration-300 hover:border-primary/50 hover:scale-[1.02] opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Mail className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="mt-1 text-lg font-medium font-mono group-hover:text-primary transition-colors">
                  ryantomas85@gmail.com
                </p>
              </div>
              <Send className="h-5 w-5 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
            </a>

            {/* Phone */}
            <a
              href="tel:+714-829-7541"
              className="group flex items-center gap-6 card-gradient rounded-xl border border-border p-6 transition-all duration-300 hover:border-primary/50 hover:scale-[1.02] opacity-0 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Phone className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="mt-1 text-lg font-medium font-mono group-hover:text-primary transition-colors">
                  (714)-829-7541
                </p>
              </div>
              <Send className="h-5 w-5 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
            </a>

            {/* Location */}
            <div
              className="flex items-center gap-6 card-gradient rounded-xl border border-border p-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="mt-1 text-lg font-medium">
                  Huntington Beach, California
                </p>
              </div>
            </div>
          </div>

          {/* Footer Message */}
          <div className="mt-12 text-center opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <p className="text-muted-foreground">
              I'm always open to discussing new projects and opportunities!
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
