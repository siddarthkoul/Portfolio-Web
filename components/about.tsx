"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
  Hello there! I'm thrilled to embark on my journey as a fresh graduate in Information Technology, with a passion for becoming a proficient Full Stack Developer. My core stack revolves around MongoDB, Express.js, Node.js, React.js, and Next.js, with a keen eye for enhancing code quality and maintainability using TypeScript.

  While I may be new to the industry, my enthusiasm for problem-solving and continuous learning drives me forward. I'm eager to dive into real-world projects and apply my skills to create impactful solutions.

  Off the screen, you'll often find me on the basketball court, where teamwork and determination fuel my passion for the game. When I'm not coding or shooting hoops, I enjoy exploring new technologies, delving into the latest tech trends, and honing my craft.

  I'm on the lookout for opportunities to kickstart my career and make meaningful contributions to the world of technology. Let's connect and shoot for the stars together!
</p>

<p>
  <span className="italic">When I'm not coding</span>, I enjoy playing video games, watching movies, and playing basketball. I also enjoy <span className="font-medium">learning new things</span>. I am currently learning about <span className="font-medium">history and philosophy</span>. I'm also learning how to play the guitar.
</p>

    </motion.section>
  );
}
