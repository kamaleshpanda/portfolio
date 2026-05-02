import aboutMeImg from "../../assets/aboutme.png";
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
          <img src={aboutMeImg} alt="Kamalesh Panda" className="w-full h-full object-cover" />
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
            I’m a Computer Science and Engineering student interested in data science and machine learning, mostly learning by 
            building projects and experimenting with ideas. Working on real problems has helped me understand how models behave 
            beyond just theory.
          </motion.p>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
            viewport={{ once: true }}
          >
            My projects span machine learning, deep learning, and computer vision.
             These include a motion-controlled system using real-time pose detection and a project focused on fairness in toxicity detection. Through this work, 
            I’ve seen how models perform in practical scenarios, especially when 
            dealing with challenges like bias, accuracy, and reliability.
          </motion.p>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 3, type: "spring" }}
            viewport={{ once: true }}
          >
            I’m particularly interested in understanding how models make decisions and how their performance can be improved in 
            real-world conditions.I enjoy working with data and building models, especially when exploring different approaches to solve problems.
          </motion.p>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 4, type: "spring" }}
            viewport={{ once: true }}
          >
            Currently, the focus is on strengthening skills in machine learning, deep learning, and computer vision, while continuing to 
            build projects with real-world applications. Also looking for opportunities to learn, collaborate, and gain hands-on experience.
          </motion.p>
        </article>
      </div>
    </section>
  );
}
