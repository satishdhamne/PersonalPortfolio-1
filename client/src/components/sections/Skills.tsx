import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SiJavascript, SiTypescript, SiReact, SiPython, SiApachemaven, SiGit } from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Java", icon: SiApachemaven, color: "#007396" },
  { name: "Git", icon: SiGit, color: "#F05032" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 bg-muted/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
          <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:bg-amber-500/5 transition-colors">
                <CardContent className="flex flex-col items-center justify-center p-4 sm:p-6">
                  <skill.icon className="w-8 h-8 sm:w-12 sm:h-12 mb-2 sm:mb-4" style={{ color: skill.color }} />
                  <span className="text-sm sm:text-base font-medium text-center">{skill.name}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}