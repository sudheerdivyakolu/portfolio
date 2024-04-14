"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import uh_red from "@/public/uh_red.png";
import Image from "next/image";

export default function Education() {
  const { ref } = useSectionInView("Education");

  return (
    <motion.section
      id="education"
      ref={ref}
      className="mb-20 sm:mb-28 scroll-mt-28 w-full md:w-[700px]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>My Education</SectionHeading>

      <div className="mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20">
        <div>
          <Image src={uh_red} alt="QUT" width="150" />
        </div>

        {/* <div>
          <p className="text-lg font-medium">
            Master of Science, Computer Science
          </p>
          <p>University Of Houston, Texas</p>
          <p className="mt-1">Graduated in 2024</p>
          <p className="my-1">GPA 3.5/4</p>
          <ul className="list-disc pl-6">
            <li>Major in Computer Science</li>
          </ul>
        </div> */}
        <div>
          <p className="text-lg font-medium">
            Bachelor of Technology,Computer Science and Engineering(IoT, /cybersecurity Inc Blockchain)
          </p>
          <p>Vasireddy Venkatadri institute of technology, Andhra Pradesh</p>
          <p className="mt-1">Graduated in 2024</p>
          <p className="my-1">GPA 8/10</p>
        </div>
      </div>
    </motion.section>
  );
}
