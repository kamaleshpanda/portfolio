import boy from "../../assets/boy.svg";
import { useCursorHover } from "../../hooks/useCursorHover";
import { motion } from "motion/react";

export default function AboutMe() {
  const { handleMouseEnter, handleMouseLeave } = useCursorHover();
  return (
    <section
      className="bg-primary-black flex flex-col gap-10 px-4 py-5 sm:p-6 md:p-20 lg:flex-row lg:px-28"
      id="about"
    >
      <div className="flex-center lg:w-1/2">
        <div className="bg-white rounded-2xl overflow-hidden w-full max-w-[460px] aspect-square flex items-center justify-center">
          <img src={boy} alt="boy illustration" className="w-full h-full object-contain" />
        </div>
      </div>
      <div className="lg:w-1/2">
        <h3 className="text-primary-white mb-10 text-[28px]/[114%] tracking-tight lg:text-5xl/[117%]">
          <span className="pr-2 md:pr-4">About</span>{" "}
          <span className="font-extrabold">Me</span>
        </h3>
        <article
          className="flex flex-col gap-4 text-zinc-300"
          onMouseEnter={() => handleMouseEnter(150)}
          onMouseLeave={() => handleMouseLeave(40)}
        >
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
          >
            I’m a computer science student working with data science and 
            machine learning, mainly through building projects and experimenting with 
            ideas. Most of my learning has come from trying things on my own and 
            applying concepts to real problems, which helped me 
            understand how models actually work beyond theory.
          </motion.p>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
            viewport={{ once: true }}
          >
            I’ve worked on projects across machine learning, deep learning, and 
            computer vision, including a motion-controlled system using real-time 
            pose detection and a project focused on fairness in toxicity detection. 
            Through these, I explored how models behave in real-world situations, 
            particularly when facing 
            challenges such as bias, accuracy, and reliability.
          </motion.p>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 3, type: "spring" }}
            viewport={{ once: true }}
          >
            I’m interested in how intelligent systems make decisions and how 
            they can be improved to be more balanced and efficient. I like working 
            with data, 
            building models, and testing different approaches to solve problems.
          </motion.p>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 4, type: "spring" }}
            viewport={{ once: true }}
          >
            Currently, I’m focused on enhancing my skills in machine 
            learning, deep learning, and computer vision, while continuing to
            develop projects that reflect real-world use cases. I’m also 
            looking for opportunities to learn, collaborate, and grow through 
            practical experience.
          </motion.p>
        </article>
      </div>
    </section>
  );
}
