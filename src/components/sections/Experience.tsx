import { AnimatedSection } from "../ui/AnimatedSection";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Building2, Globe } from "lucide-react";

const experiences = [
  {
    company: "Scandiweb",
    role: "Fullstack / React Engineer",
    period: "2024 – Present",
    icon: Building2,
    color: "primary",
    projects: [
      {
        name: "BMW Rockar Project",
        points: [
          "Contributed to UI + backend microservices",
          "AWS integrations",
          "SQL + NoSQL databases",
          "High-scale architecture",
        ],
      },
      {
        name: "BTC Activewear (London)",
        points: [
          "Complex feature development",
          "Frontend engineering + backend logic",
          "Working in an international agile environment",
        ],
      },
    ],
  },
  {
    company: "ThemesCamp",
    role: "Frontend & WordPress Engineer",
    period: "2021 – 2024",
    icon: Briefcase,
    color: "accent",
    projects: [
      {
        name: "Theme Development",
        points: [
          "Built 50+ premium themes (React + WordPress)",
          "Integrated animations, responsive UI, modular setups",
          "Worked closely with designers for pixel-perfect components",
          "Strong frontend-first role with backend integration",
        ],
      },
    ],
  },
  {
    company: "Freelance Projects",
    role: "Frontend Developer",
    period: "2021 – Present",
    icon: Globe,
    color: "muted-foreground",
    projects: [
      {
        name: "Client Work",
        points: [
          "Built multiple clean business websites",
          "Focus on simplicity & quality UX",
          "Projects: klar.ae, talentlifestylecoaching.com, and others",
        ],
      },
    ],
  },
];

function TimelineItem({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
      className="relative pl-8 md:pl-12 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

      {/* Timeline dot */}
      <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-card border-2 border-primary flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-primary" />
      </div>

      <div className="group relative p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
        {/* Gradient top border */}
        <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="flex flex-wrap items-center gap-4 mb-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <experience.icon className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground">
              {experience.company}
            </h3>
            <p className="text-primary font-medium">{experience.role}</p>
          </div>
          <span className="text-sm text-muted-foreground font-medium px-3 py-1 rounded-full bg-secondary">
            {experience.period}
          </span>
        </div>

        <div className="space-y-6">
          {experience.projects.map((project, pIndex) => (
            <div key={pIndex}>
              <h4 className="text-foreground/90 font-semibold mb-3">
                {project.name}
              </h4>
              <ul className="space-y-2">
                {project.points.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key contributions
          </p>
        </AnimatedSection>

        <div className="relative">
          {experiences.map((experience, index) => (
            <TimelineItem key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
