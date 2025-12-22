import { AnimatedSection, StaggerContainer, StaggerItem } from "../ui/AnimatedSection";
import { Check } from "lucide-react";

const expertiseItems = [
  "React, Next.js",
  "TailwindCSS, Styled Components",
  "Framer Motion animations",
  "Component-driven architecture",
  "State management (Context / Redux)",
  "Routing, API integration, error boundaries",
  "Pixel-perfect UI conversion from Figma",
  "Accessibility + responsiveness",
  "Web performance optimization",
];

export function FrontendExpertise() {
  return (
    <section className="py-24 md:py-32 relative bg-secondary/30 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[150px]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            React & Frontend Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specialized skills in modern frontend development
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          staggerDelay={0.08}
        >
          {expertiseItems.map((item, index) => (
            <StaggerItem key={index}>
              <div className="group flex items-center gap-3 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card transition-all duration-300">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground/90 font-medium">{item}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
