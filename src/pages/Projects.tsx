import { FolderOpen, ExternalLink } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const projects = [
  {
    name: "Personal Portfolio Website",
    description: "A responsive portfolio website built with React and TypeScript to showcase my skills and projects.",
  },
  {
    name: "Task Management App",
    description: "A full-stack task management application with user authentication and CRUD operations.",
  },
  {
    name: "Weather Dashboard",
    description: "A weather application that fetches real-time data from APIs and displays forecasts with interactive charts.",
  },
  {
    name: "Data Structures Library",
    description: "Implementation of common data structures in C++ including linked lists, trees, and graphs.",
  },
  {
    name: "Python Automation Scripts",
    description: "Collection of Python scripts for automating repetitive tasks and data processing.",
  },
];

const Projects = () => {
  return (
    <PageLayout>
      <section className="min-h-[calc(100vh-4rem)] px-6 py-20">
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-12 text-center opacity-0 animate-fade-in">
            <p className="font-mono text-sm text-primary">{"My Work"}</p>
            <h1 className="mt-2 text-4xl font-bold md:text-5xl">Projects</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A collection of projects I've worked on
            </p>
          </div>

          {/* Projects Table */}
          <div className="card-gradient rounded-xl border border-border opacity-0 animate-fade-in overflow-hidden" style={{ animationDelay: "0.2s" }}>
            <Table>
              <TableHeader>
                <TableRow className="border-border hover:bg-transparent">
                  <TableHead className="text-primary font-semibold">
                    <div className="flex items-center gap-2">
                      <FolderOpen className="h-4 w-4" />
                      Project Name
                    </div>
                  </TableHead>
                  <TableHead className="text-primary font-semibold">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.map((project, index) => (
                  <TableRow
                    key={project.name}
                    className="border-border transition-colors hover:bg-secondary/50"
                  >
                    <TableCell className="font-mono font-medium">
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">{String(index + 1).padStart(2, '0')}.</span>
                        {project.name}
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {project.description}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-muted-foreground">
              More projects coming soon! Check back for updates.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Projects;
