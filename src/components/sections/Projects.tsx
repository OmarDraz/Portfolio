import { useState } from "react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "../ui/AnimatedSection";
import { ExternalLink, Images, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MagneticButton } from "../ui/MagneticButton";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tech: string[];
  liveUrl?: string;
  thumbnail?: string;
  screenshots: string[];
}

const projects: Project[] = [
  // ThemesCamp Projects
  {
    id: "creative-agency",
    title: "Creative Agency",
    description: "Modern creative agency WordPress theme with stunning animations and modular components",
    category: "ThemesCamp",
    tech: ["React", "WordPress", "Framer Motion", "SCSS"],
    liveUrl: "https://zumar.themescamp.com/creative-agency/",
    thumbnail: "/creative-agency/thumbnail.jpg",
    screenshots: [
      "/creative-agency/thumbnail.jpg",
      "/creative-agency/screencapture-zumar-themescamp-creative-agency-2025-12-21-20_56_33.png",
      "/creative-agency/Screenshot 2025-12-21 205151.png",
      "/creative-agency/Screenshot 2025-12-21 205258.png",
      "/creative-agency/Screenshot 2025-12-21 205331.png",
      "/creative-agency/Screenshot 2025-12-21 205403.png",
      "/creative-agency/Screenshot 2025-12-21 205422.png",
      "/creative-agency/Screenshot 2025-12-21 205443.png",
      "/creative-agency/Screenshot 2025-12-21 205503.png",
      "/creative-agency/Screenshot 2025-12-21 205523.png",
      "/creative-agency/Screenshot 2025-12-21 205606.png",
    ],
  },
  {
    id: "interior-studio",
    title: "Interior Studio",
    description: "Elegant interior design studio theme with portfolio showcase and booking integration",
    category: "ThemesCamp",
    tech: ["React", "WordPress", "PHP", "SCSS"],
    liveUrl: "https://zumar.themescamp.com/inetrior-studio/",
    thumbnail: "/interior studio/thumbnail.jpg",
    screenshots: [
      "/interior studio/thumbnail.jpg",
      "/interior studio/Screenshot 2025-12-21 205817.png",
      "/interior studio/Screenshot 2025-12-21 205845.png",
      "/interior studio/Screenshot 2025-12-21 205906.png",
      "/interior studio/Screenshot 2025-12-21 205930.png",
      "/interior studio/Screenshot 2025-12-21 205949.png",
      "/interior studio/Screenshot 2025-12-21 210009.png",
      "/interior studio/Screenshot 2025-12-21 210030.png",
      "/interior studio/Screenshot 2025-12-21 210057.png",
      "/interior studio/Screenshot 2025-12-21 210138.png",
    ],
  },
  {
    id: "business-consult",
    title: "Business Consult",
    description: "Professional business consulting theme with clean design and customizable sections",
    category: "ThemesCamp",
    tech: ["WordPress", "React", "SCSS", "PHP"],
    liveUrl: "https://zumar.themescamp.com/business-consult/",
    thumbnail: "/business consulting/thumbnail.jpg",
    screenshots: [
      "/business consulting/thumbnail.jpg",
      "/business consulting/Screenshot 2025-12-21 210255.png",
      "/business consulting/Screenshot 2025-12-21 210336.png",
      "/business consulting/Screenshot 2025-12-21 210406.png",
      "/business consulting/Screenshot 2025-12-21 210431.png",
      "/business consulting/Screenshot 2025-12-21 210451.png",
      "/business consulting/Screenshot 2025-12-21 210510.png",
      "/business consulting/Screenshot 2025-12-21 210528.png",
    ],
  },
  {
    id: "geekfolio",
    title: "Geekfolio",
    description: "Modern portfolio theme for creative professionals and developers",
    category: "ThemesCamp",
    tech: ["React", "WordPress", "SCSS", "PHP"],
    liveUrl: "https://geekfolio.themescamp.com/",
    thumbnail: "/geekfolio/thumbnail.jpg",
    screenshots: [
      "/geekfolio/thumbnail.jpg",
      "/geekfolio/Screenshot 2025-12-21 210725.png",
      "/geekfolio/Screenshot 2025-12-21 210759.png",
      "/geekfolio/Screenshot 2025-12-21 210823.png",
      "/geekfolio/Screenshot 2025-12-21 210843.png",
      "/geekfolio/Screenshot 2025-12-21 210907.png",
      "/geekfolio/Screenshot 2025-12-21 210931.png",
      "/geekfolio/Screenshot 2025-12-21 210958.png",
    ],
  },
  {
    id: "agency-creative",
    title: "Agency Creative",
    description: "Premium creative agency theme with advanced animations and modular components",
    category: "ThemesCamp",
    tech: ["React", "WordPress", "Framer Motion", "SCSS"],
    liveUrl: "https://zumar.themescamp.com/agency-creative/",
    thumbnail: "/agency creative/thumbnail.jpg",
    screenshots: [
      "/agency creative/thumbnail.jpg",
      "/agency creative/Screenshot 2025-12-21 211223.png",
      "/agency creative/Screenshot 2025-12-21 211243.png",
      "/agency creative/Screenshot 2025-12-21 211304.png",
      "/agency creative/Screenshot 2025-12-21 211351.png",
      "/agency creative/Screenshot 2025-12-21 211422.png",
      "/agency creative/Screenshot 2025-12-21 211450.png",
    ],
  },
  {
    id: "archin-portfolio",
    title: "Archin Portfolio",
    description: "Architecture portfolio theme showcasing projects with stunning visual presentations",
    category: "ThemesCamp",
    tech: ["React", "WordPress", "SCSS", "PHP"],
    liveUrl: "https://archin.themescamp.com/portfolio/",
    thumbnail: "/archin portfolio/thumbnail.jpg",
    screenshots: [
      "/archin portfolio/thumbnail.jpg",
      "/archin portfolio/Screenshot 2025-12-21 211601.png",
      "/archin portfolio/Screenshot 2025-12-21 211634.png",
      "/archin portfolio/Screenshot 2025-12-21 211649.png",
      "/archin portfolio/Screenshot 2025-12-21 211740.png",
      "/archin portfolio/Screenshot 2025-12-21 211806.png",
      "/archin portfolio/Screenshot 2025-12-21 211824.png",
    ],
  },
  {
    id: "archin-furniture",
    title: "Archin Furniture",
    description: "Furniture showcase theme with product galleries and e-commerce integration",
    category: "ThemesCamp",
    tech: ["React", "WordPress", "WooCommerce", "SCSS"],
    liveUrl: "https://archin.themescamp.com/furniture/",
    thumbnail: "/archin furniture/thumbnail.jpg",
    screenshots: [
      "/archin furniture/thumbnail.jpg",
      "/archin furniture/Screenshot 2025-12-21 212016.png",
      "/archin furniture/Screenshot 2025-12-21 212046.png",
      "/archin furniture/Screenshot 2025-12-21 212119.png",
      "/archin furniture/Screenshot 2025-12-21 212151.png",
      "/archin furniture/Screenshot 2025-12-21 212210.png",
      "/archin furniture/Screenshot 2025-12-21 212243.png",
      "/archin furniture/Screenshot 2025-12-21 212314.png",
      "/archin furniture/Screenshot 2025-12-21 212338.png",
      "/archin furniture/Screenshot 2025-12-21 212431.png",
    ],
  },
  {
    id: "archin-architecture",
    title: "Architecture Studio",
    description: "Architecture design studio theme with project showcases, services, and team profiles",
    category: "ThemesCamp",
    tech: ["React", "WordPress", "SCSS", "PHP"],
    liveUrl: "https://archin.themescamp.com/architecture/",
    thumbnail: "/archin architecure/thumbnail.jpg",
    screenshots: [
      "/archin architecure/thumbnail.jpg",
      "/archin architecure/Screenshot 2025-12-21 212643.png",
      "/archin architecure/Screenshot 2025-12-21 212708.png",
      "/archin architecure/Screenshot 2025-12-21 212736.png",
      "/archin architecure/Screenshot 2025-12-21 212804.png",
      "/archin architecure/Screenshot 2025-12-21 212830.png",
      "/archin architecure/Screenshot 2025-12-21 212910.png",
      "/archin architecure/Screenshot 2025-12-21 212927.png",
      "/archin architecure/Screenshot 2025-12-21 212947.png",
      "/archin architecure/Screenshot 2025-12-21 213009.png",
    ],
  },
  {
    id: "archin-residence",
    title: "Residence",
    description: "Premium residential complex theme with apartment listings, 3D tours, and booking system",
    category: "ThemesCamp",
    tech: ["React", "WordPress", "SCSS", "PHP"],
    liveUrl: "https://archin.themescamp.com/residence/",
    thumbnail: "/residence/thumbnail.jpg",
    screenshots: [
      "/residence/thumbnail.jpg",
      "/residence/Screenshot 2025-12-21 213100.png",
      "/residence/Screenshot 2025-12-21 213121.png",
      "/residence/Screenshot 2025-12-21 213142.png",
      "/residence/Screenshot 2025-12-21 213217.png",
      "/residence/Screenshot 2025-12-21 213241.png",
      "/residence/Screenshot 2025-12-21 213310.png",
      "/residence/Screenshot 2025-12-21 213333.png",
      "/residence/Screenshot 2025-12-21 213356.png",
      "/residence/Screenshot 2025-12-21 213411.png",
    ],
  },
  {
    id: "creative-studio",
    title: "Creative Studio",
    description: "Dark mode creative studio theme with modern design and smooth animations",
    category: "ThemesCamp",
    tech: ["React", "WordPress", "Framer Motion", "SCSS"],
    liveUrl: "https://wpswak.themescamp.com/creative-studio/?mode=dark",
    thumbnail: "/creative studio/thumbnail.jpg",
    screenshots: [
      "/creative studio/thumbnail.jpg",
      "/creative studio/Screenshot 2025-12-21 213507.png",
      "/creative studio/Screenshot 2025-12-21 213716.png",
      "/creative studio/Screenshot 2025-12-21 213738.png",
      "/creative studio/Screenshot 2025-12-21 213755.png",
      "/creative studio/Screenshot 2025-12-21 213813.png",
      "/creative studio/Screenshot 2025-12-21 213833.png",
      "/creative studio/Screenshot 2025-12-21 213854.png",
      "/creative studio/Screenshot 2025-12-21 213918.png",
    ],
  },
  {
    id: "zumar-bakery",
    title: "Zumar Bakery",
    description: "Bakery and food business theme with online ordering, product showcase, and blog integration",
    category: "ThemesCamp",
    tech: ["React", "WordPress", "WooCommerce", "SCSS", "PHP"],
    liveUrl: "https://zumar.themescamp.com/bakery/",
    thumbnail: "/bakery/thumbnail.jpg",
    screenshots: [
      "/bakery/thumbnail.jpg",
      "/bakery/Screenshot 2025-12-21 213954.png",
      "/bakery/Screenshot 2025-12-21 214023.png",
      "/bakery/Screenshot 2025-12-21 214040.png",
      "/bakery/Screenshot 2025-12-21 214058.png",
      "/bakery/Screenshot 2025-12-21 214119.png",
      "/bakery/Screenshot 2025-12-21 214141.png",
    ],
  },
  // Freelance Projects
  {
    id: "klar-ae",
    title: "Klar.ae",
    description: "Business website for UAE-based company",
    category: "Freelance",
    tech: ["Wordpress", "React", "SCSS"],
    liveUrl: "https://klar.ae",
    thumbnail: "/Klar/thumbnail.png",
    screenshots: [
      "/Klar/thumbnail.png",
      "/Klar/Screenshot 2025-12-21 214331.png",
      "/Klar/Screenshot 2025-12-21 214358.png",
      "/Klar/Screenshot 2025-12-21 214413.png",
      "/Klar/Screenshot 2025-12-21 214433.png",
      "/Klar/Screenshot 2025-12-21 214509.png",
    ],
  },
  {
    id: "talent-life",
    title: "Talent Life Coaching",
    description: "Coaching services website with booking integration",
    category: "Freelance",
    tech: ["WordPress", "React", "SCSS"],
    liveUrl: "https://talentlifestylecoaching.com",
    thumbnail: "/talent life coaching/thumbnail.png",
    screenshots: [
      "/talent life coaching/thumbnail.png",
      "/talent life coaching/Screenshot 2025-12-21 214756.png",
      "/talent life coaching/Screenshot 2025-12-21 214827.png",
    ],
  },
  // Unpublished Projects
  {
    id: "jmt",
    title: "JMT",
    description: "Dashboard for an embedded device designed to make patients play a game to track their joint motion",
    category: "Unpublished",
    tech: ["React", "Javascript", "Node.js"],
    thumbnail: "/jmt/thumbnail.jpg",
    screenshots: [
      "/jmt/thumbnail.jpg",
      "/jmt/Desktop - 2.jpg",
      "/jmt/Desktop - 3.jpg",
      "/jmt/Desktop - 4.jpg",
      "/jmt/Desktop - 5.jpg",
    ],
  },
  {
    id: "6ctober",
    title: "6ctober",
    description: "Digital menu for a cafe & restaurant with interactive ordering system",
    category: "Unpublished",
    tech: ["React", "Javascript", "SCSS"],
    liveUrl: "https://sage-rolypoly-bf8601.netlify.app/",
    thumbnail: "/6ctober/thumbnail.jpg",
    screenshots: [
      "/6ctober/thumbnail.jpg",
      "/6ctober/Desktop - 3.jpg",
      "/6ctober/Desktop - 6.jpg",
    ],
  },
  {
    id: "nolaqen",
    title: "Nolaqen",
    description: "Educational platform with course management and student tracking features",
    category: "Unpublished",
    tech: ["React", "CSS", "Redux"],
    thumbnail: "/nolaqen/thumbnail.png",
    screenshots: [
      "/nolaqen/thumbnail.png",
      "/nolaqen/Screenshot_8.png",
      "/nolaqen/Screenshot_9.png",
    ],
  },
  {
    id: "e-exam",
    title: "E-Exam",
    description: "Educational platform for online examinations and assessment management",
    category: "Unpublished",
    tech: ["React", "Node.js", "CSS"],
    thumbnail: "/e-exam/thumbnail.jpg",
    screenshots: [
      "/e-exam/thumbnail.jpg",
      "/e-exam/Exam Page.jpg",
      "/e-exam/Exams.jpg",
      "/e-exam/Questions.png",
    ],
  },
  {
    id: "pulita",
    title: "Pulita",
    description: "Dashboard for a full solar tracking system to display live details and calculations",
    category: "Unpublished",
    tech: ["React", "TypeScript", "Chart.js", "Real-time Data"],
    thumbnail: "/pulita/thumbnail.jpg",
    screenshots: [
      "/pulita/thumbnail.jpg",
      "/pulita/Mobile.png",
      "/pulita/Mobile1.png",
    ],
  },
  {
    id: "signing-form",
    title: "Signing Form Template",
    description: "Reusable signing form template with signature capture functionality and form validation",
    category: "Unpublished",
    tech: ["React", "TypeScript", "TailwindCSS"],
    liveUrl: "https://signingform.netlify.app/",
    thumbnail: "/Signing Form/thumbnail.png",
    screenshots: [
      "/Signing Form/thumbnail.png",
      "/Signing Form/Screenshot 2025-12-22 031350.png",
    ],
  },
];

const categories = ["All", "ThemesCamp", "Freelance", "Unpublished"];

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % project.screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? project.screenshots.length - 1 : prev - 1
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-4xl bg-card border border-border rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
            <p className="text-muted-foreground text-sm mt-1">
              {project.description}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center hover:bg-muted transition-colors"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Screenshots carousel */}
        <div className="relative aspect-video bg-secondary overflow-hidden">
          {/* Actual screenshots */}
          {project.screenshots.length > 0 ? (
            <img
              src={project.screenshots[currentIndex]}
              alt={`${project.title} screenshot ${currentIndex + 1}`}
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-xl bg-muted flex items-center justify-center">
                  <Images className="w-10 h-10 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground">No screenshots available</p>
              </div>
            </div>
          )}

          {/* Navigation arrows */}
          {project.screenshots.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </>
          )}

          {/* Dots indicator */}
          {project.screenshots.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {project.screenshots.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    idx === currentIndex ? "bg-primary" : "bg-foreground/30"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer with tech stack */}
        <div className="p-6 border-t border-border">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({
  project,
  onViewScreenshots,
}: {
  project: Project;
  onViewScreenshots: () => void;
}) {
  return (
    <div className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 tilt-hover card-shine">
      {/* Thumbnail */}
      <div className="relative aspect-video mb-5 rounded-xl bg-secondary overflow-hidden">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center">
              <Images className="w-8 h-8 text-muted-foreground" />
            </div>
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Category badge */}
      <span className="inline-block px-3 py-1 mb-3 text-xs font-medium rounded-full bg-primary/10 text-primary">
        {project.category}
      </span>

      <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.slice(0, 3).map((tech, idx) => (
          <span
            key={idx}
            className="px-2 py-0.5 text-xs font-medium rounded bg-secondary text-muted-foreground"
          >
            {tech}
          </span>
        ))}
        {project.tech.length > 3 && (
          <span className="px-2 py-0.5 text-xs font-medium rounded bg-secondary text-muted-foreground">
            +{project.tech.length - 3}
          </span>
        )}
      </div>

      {/* Action buttons */}
      <div className="flex gap-3">
        {project.liveUrl && (
          <MagneticButton
            variant="primary"
            href={project.liveUrl}
            target="_blank"
            className="flex-1 text-xs py-2"
          >
            <ExternalLink size={14} />
            Live Demo
          </MagneticButton>
        )}
        <MagneticButton
          variant="outline"
          onClick={onViewScreenshots}
          className={`text-xs py-2 ${project.liveUrl ? "" : "flex-1"}`}
        >
          <Images size={14} />
          Screenshots
        </MagneticButton>
      </div>
    </div>
  );
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 md:py-32 relative bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I've worked on
          </p>
        </AnimatedSection>

        {/* Category filter */}
        <AnimatedSection delay={0.1} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {category}
            </button>
          ))}
        </AnimatedSection>

        {/* Projects grid */}
        <StaggerContainer
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {filteredProjects.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard
                project={project}
                onViewScreenshots={() => setSelectedProject(project)}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
