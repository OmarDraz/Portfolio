import { useState } from "react";
import { AnimatedSection } from "../ui/AnimatedSection";
import { MagneticButton } from "../ui/MagneticButton";
import { Mail, Github, Linkedin, Send, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:omarnader6636@gmail.com",
      label: "omarnader6636@gmail.com",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/OmarDraz",
      label: "github.com/omardraz",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/omar-draz-945ba5199/",
      label: "linkedin.com/in/omardraz",
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out.
          </p>
        </AnimatedSection>

        <div className="flex justify-center">
          <div className="max-w-4xl">
            {/* Contact Info */}
            <AnimatedSection delay={0.1}>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Let's work together
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always interested in hearing about new projects and opportunities. 
                  Whether you have a question or just want to say hi, I'll try my best 
                  to get back to you!
                </p>
              </div>

              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                      <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    </div>
                    <div>
                      <span className="block text-sm text-muted-foreground">
                        {link.name}
                      </span>
                      <span className="text-foreground font-medium">
                        {link.label}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>Available for remote work worldwide</span>
              </div>
            </div>
          </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
