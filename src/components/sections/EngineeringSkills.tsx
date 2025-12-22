import { AnimatedSection, StaggerContainer, StaggerItem } from "../ui/AnimatedSection";
import {
  Network,
  Boxes,
  Code,
  Layers,
  Puzzle,
  ShieldCheck,
  Database,
  Cloud,
  GitBranch,
  Gauge,
  Palette,
  Component,
} from "lucide-react";

const skills = [
  { name: "System Design", icon: Network },
  { name: "Microservices Architecture", icon: Boxes },
  { name: "REST API Design", icon: Code },
  { name: "Clean Architecture", icon: Layers },
  { name: "Design Patterns", icon: Puzzle },
  { name: "SOLID Principles", icon: ShieldCheck },
  { name: "Database Design (SQL + NoSQL)", icon: Database },
  { name: "AWS Basics", icon: Cloud },
  { name: "CI/CD Understanding", icon: GitBranch },
  { name: "Performance Optimization", icon: Gauge },
  { name: "UI/UX Principles", icon: Palette },
  { name: "React Component Architecture", icon: Component },
];

export function EngineeringSkills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Engineering Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Core technical competencies and engineering practices
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          staggerDelay={0.05}
        >
          {skills.map((skill, index) => (
            <StaggerItem key={index}>
              <div className="group relative p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 text-center tilt-hover">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                  <skill.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <span className="text-sm font-medium text-foreground/90">
                  {skill.name}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
