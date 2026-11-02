import { AnimatedSection } from "../ui/AnimatedSection";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative bg-secondary/30">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="relative p-8 md:p-12 rounded-2xl bg-card border border-border">
            {/* Decorative gradient */}
            <div className="absolute -top-px left-20 right-20 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Since 2022, I've been on a journey of continuous growth in web development. 
                I started at <span className="text-foreground font-medium">ThemesCamp</span>, 
                where I built and delivered 50+ premium animated WordPress themes ( some was with React-powered 
                frontends ), learning the art of modular, maintainable code.
              </p>
              <p>
                In 2024, I joined <span className="text-foreground font-medium">Scandiweb</span>, 
                working on enterprise-level projects like the BMW Rockar platform and 
                BTC Activewear. Here, I've been exposed to microservices architecture, 
                AWS integrations, and the challenges of building at scale. Since January 2026, 
                I've been a Full Stack Engineer at <span className="text-foreground font-medium">CTCHealth</span>.
              </p>
              <p>
                Throughout this time, I've also taken on freelance projects, delivering 
                clean, fast, and beautiful websites for clients across the UAE, UK, and Egypt. 
                My focus has always been on <span className="text-foreground font-medium">
                quality, performance, and user experience</span>.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
