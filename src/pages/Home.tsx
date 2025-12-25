import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import profilePhoto from "@/assets/profile-photo.jpg";
// The name on the tab is in navigation.tsx
const Home = () => {
  return (
    <PageLayout>
      <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-6 py-20">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-8 text-center">
          {/* Profile Image */}
          <div className="animate-float relative">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-full border-4 border-primary/50 glow">
              <img
                src={profilePhoto}
                alt="Ryan Ottoniel Tomas"
                className="h-48 w-48 object-cover md:h-64 md:w-64"
              />
            </div>
          </div>

          {/* Greeting */}
          <div className="space-y-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="font-mono text-lg text-muted-foreground">
              {"Welcome to my portfolio"}
            </p>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Hello, my name is{" "}
              <span className="text-gradient">Ryan</span>
            </h1>
            <p className="mx-auto max-w-xl text-lg text-muted-foreground md:text-xl">
              Computer Science Student & Aspiring Developer
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link
              to="/profile"
              className="group flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              Learn More About Me
            </Link>
            <Link
              to="/projects"
              className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 font-semibold text-secondary-foreground transition-all duration-300 hover:border-primary hover:text-primary"
            >
              View My Projects
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <ChevronDown className="h-8 w-8 animate-bounce text-muted-foreground" />
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
