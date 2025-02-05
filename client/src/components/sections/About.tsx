import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a recent Computer Science graduate with a passion for creating efficient and elegant solutions to complex problems. My academic journey has equipped me with strong foundations in software development, algorithms, and problem-solving. I'm constantly learning and exploring new technologies to stay at the forefront of the ever-evolving tech landscape.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Education</h3>
                <p className="text-muted-foreground">
                  Bachelor's in Computer Science<br />
                  Expected Graduation: 2024
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Interests</h3>
                <p className="text-muted-foreground">
                  Web Development<br />
                  Artificial Intelligence<br />
                  Software Architecture
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
