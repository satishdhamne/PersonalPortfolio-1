import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Instagram, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-4rem)] flex items-center bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-center lg:text-left"
          >
            <div className="space-y-2">
              <h2 className="text-lg text-primary">Hi, my name is</h2>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                  [Your Name]
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium">
                Computer Science Student & Full Stack Developer
              </p>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              I build exceptional digital experiences and solve complex problems through code. 
              Currently focusing on web development and software engineering.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
              <Button size="lg" className="min-w-[140px] sm:min-w-[160px] bg-amber-500 hover:bg-amber-600">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="min-w-[140px] sm:min-w-[160px] border-amber-500/20 hover:bg-amber-500/10"
                onClick={() => document.getElementById('hire')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Hire Me
              </Button>
            </div>

            <div className="flex gap-4 pt-6 justify-center lg:justify-start">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:bg-amber-500/10">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:bg-amber-500/10">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:bg-amber-500/10">
                  <Instagram className="h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:your.email@gmail.com">
                <Button variant="ghost" size="icon" className="hover:bg-amber-500/10">
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative order-first lg:order-last"
          >
            <div className="relative mx-auto w-[220px] h-[220px] sm:w-[280px] sm:h-[280px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500/20 via-amber-400/10 to-transparent animate-pulse" />
              <img
                src="/attached_assets/kkkkkkkkkkkk.jpg"
                alt="Profile"
                className="rounded-full w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] object-cover border-4 border-amber-500/20 shadow-xl relative z-10 mx-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}