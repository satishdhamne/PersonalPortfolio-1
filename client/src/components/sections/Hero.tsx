import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-lg font-medium text-primary">Hello, I'm</h2>
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                [Your Name]
              </span>
            </h1>
            <h3 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
              Full Stack Developer
            </h3>
            <p className="text-lg text-muted-foreground max-w-xl">
              A passionate developer specializing in building exceptional digital experiences. 
              Currently focused on building accessible, human-centered products.
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            {/* Add your profile image here */}
            <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
              <img
                src="[Your Profile Image URL]"
                alt="Profile"
                className="w-[380px] h-[380px] rounded-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}