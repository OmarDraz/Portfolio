import { AnimatedSection, StaggerContainer, StaggerItem } from "../ui/AnimatedSection";
import { Zap, Server, Globe, Code2, Settings, Users } from "lucide-react";

const highlights = [
  {
    icon: Server,
    text: "Worked on enterprise-scale microservices architecture at Scandiweb (BMW Rockar Project).",
  },
  {
    icon: Globe,
    text: "Hands-on experience with AWS, distributed systems, and scalable service communication.",
  },
  {
    icon: Zap,
    text: "Delivered 50+ premium animated WordPress themes at ThemesCamp using modular frontend architecture.",
  },
  {
    icon: Code2,
    text: "Advanced frontend engineering with React, component-driven architecture, and performance optimization.",
  },
  {
    icon: Settings,
    text: "Built full custom systems (RFQ system, ERP, CRM, EDU, dashboards, complex workflows).",
  },
  {
    icon: Users,
    text: "Strong understanding of system design, clean architecture, and design patterns.",
  },
  {
    icon: Globe,
    text: "Freelance experience delivering clean, fast websites for clients in UAE, UK, and Egypt.",
  },
];

export function Highlights() {
  return (
    <section id="highlights" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Highlights
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Key achievements and areas of expertise
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid gap-4 md:gap-6" staggerDelay={0.1}>
          {highlights.map((item, index) => (
            <StaggerItem key={index}>
              <div className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 tilt-hover card-shine">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground/90 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
