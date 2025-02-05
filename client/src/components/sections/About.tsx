import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
          <span className="bg-gradient-to-r from-amber-400 to-amber-610 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-4 sm:p-6">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              I am a passionate Computer Science and Engineering student specializing in full-stack development using the MERN stack. I enjoy solving complex challenges and have built dynamic web applications, interactive games, and API-driven projects. My work includes the innovative NetJets flight booking website showcased at the Reimagin competition. I thrive on learning and applying technologies to create user-friendly solutions.
            </p>
            <div className="mt-4 sm:mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="p-4 rounded-lg bg-amber-500/5 border border-amber-500/10">
                <h3 className="font-semibold mb-2 text-amber-400">Education</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Bachelor's in Computer Science<br />
                  Expected Graduation: 2025
                </p>
              </div>
              <div className="p-4 rounded-lg bg-amber-500/5 border border-amber-500/10">
                <h3 className="font-semibold mb-2 text-amber-400">Interests</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Web Development<br />
                  Artificial Intelligence<br />
                  Data Structures and Algorithms
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}