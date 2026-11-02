import { motion } from "framer-motion";
import { Download, Mail, Github } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg pt-20 md:pt-0">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(220_20%_12%)_0%,hsl(0_0%_4%)_50%)]" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(0 0% 50%) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(0 0% 50%) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase text-primary border border-primary/30 rounded-full bg-primary/5">
            Wordpress & Fullstack Engineer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="text-foreground">Omar Draz</span>
          <br />
          <span className="text-muted-foreground text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-medium">
            with Frontend Passion
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Building modern, scalable animatedinterfaces and backend systems using {" "}
          <span className="text-foreground">React</span>,{" "}
          <span className="text-foreground">Next.js</span>,{" "}
          <span className="text-foreground">Node.js</span>,{" "}
          <span className="text-foreground">WordPress</span>, and clean
          engineering principles.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton variant="primary" href="/files/Omar%20Draz.pdf" download="Omar-Draz-Resume.pdf">
            <Download size={18} />
            Download CV
          </MagneticButton>
          <MagneticButton variant="outline" href="mailto:omarnader6636@gmail.com">
            <Mail size={18} />
            Contact Me
          </MagneticButton>
          <MagneticButton
            variant="ghost"
            href="https://github.com/OmarDraz"
            target="_blank"
          >
            <Github size={18} />
            GitHub
          </MagneticButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="w-full"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 mx-auto mt-20 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2"
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5], y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-primary rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
