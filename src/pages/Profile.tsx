import { GraduationCap, Calendar, Code2 } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import StarRating from "@/components/StarRating";
import csulbLogo from "@/assets/csulb-logo.jpg";

const languages = [
  { name: "Python", rating: 4 },
  { name: "C++", rating: 4 },
  { name: "C", rating: 3 },
  { name: "CSS", rating: 3 },
  { name: "HTML", rating: 2 },
  { name: "JavaScript", rating: 2 },
  
];

const Profile = () => {
  return (
    <PageLayout>
      <section className="min-h-[calc(100vh-4rem)] px-6 py-20">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center opacity-0 animate-fade-in">
            <p className="font-mono text-sm text-primary">{"About Me"}</p>
            <h1 className="mt-2 text-4xl font-bold md:text-5xl">
              Ryan Ottoniel Tomas
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Passionate about building solutions through code
            </p>
          </div>

          {/* Education Card */}
          <div className="mb-8 card-gradient rounded-xl border border-border p-6 opacity-0 animate-fade-in md:p-8" style={{ animationDelay: "0.2s" }}>
            <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
              {/* CSULB Logo */}
              <div className="flex-shrink-0 rounded-lg bg-secondary p-4">
                <img
                  src={csulbLogo}
                  alt="CSULB Logo"
                  className="h-24 w-24 object-contain"
                />
              </div>

              {/* Education Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center gap-2 md:justify-start">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">Education</h2>
                </div>
                
                <h3 className="mt-3 text-2xl font-bold text-primary">
                  California State University, Long Beach
                </h3>
                
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-center gap-2 md:justify-start">
                    
                    <span className="text-muted-foreground">
                      Major: <span className="text-foreground font-medium">Computer Science</span>
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 md:justify-start">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      Graduated on:{" "}
                      <span className="text-foreground font-medium">December 24, 2025</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="card-gradient rounded-xl border border-border p-6 opacity-0 animate-fade-in md:p-8" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2">
              
              <h2 className="text-xl font-semibold">Programming Languages</h2>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {languages.map((lang, index) => (
                <div
                  key={lang.name}
                  className="flex items-center justify-between rounded-lg border border-border bg-secondary/50 p-4 transition-all duration-300 hover:border-primary/50 hover:bg-secondary"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <span className="font-mono font-medium">{lang.name}</span>
                  <StarRating rating={lang.rating} />
                </div>
              ))}
            </div>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              Star ratings reflect my proficiency and experience with each language
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Profile;
