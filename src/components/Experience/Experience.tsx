import { motion } from "motion/react";
import { useCursorHover } from "../../hooks/useCursorHover";

export default function Experience() {
  const { handleMouseEnter, handleMouseLeave } = useCursorHover();

  return (
    <section className="bg-[linear-gradient(to_bottom,#f4f4f5,#fafafa)] text-primary-black px-4 py-12 sm:px-6 md:px-15 lg:py-20 xl:px-28 relative overflow-hidden border-y border-zinc-200" id="experience">
      
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-zinc-200/50 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto w-full">
        
        {/* Main Section Header */}
        <h2 className="mb-16 pt-5 text-center text-[32px]/[114%] tracking-tight md:pt-0 lg:text-[48px]/[114%] font-extrabold text-primary-black">
          <span className="pr-2 md:pr-4">My</span>
          <span className="font-extrabold text-stroke-1 text-stroke-primary-black text-transparent">Journey</span>
        </h2>
        
        {/* Main Grid container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          
          {/* Left Column: Experience */}
          <div className="flex flex-col gap-8">
            <h3 className="text-2xl font-extrabold text-neutral-800 flex items-center gap-3">
              <span className="w-8 h-[3px] bg-primary-black inline-block"></span>
              EXPERIENCE
            </h3>
            
            <div className="flex flex-col gap-6 relative before:absolute before:inset-y-0 before:left-[11px] before:w-[2px] before:bg-zinc-300">
              
              {/* Timeline Item 1 */}
              <motion.div 
                className="relative pl-10"
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                viewport={{ once: true }}
              >
                <div className="absolute left-0 top-3 w-6 h-6 bg-zinc-100 border-4 border-zinc-800 rounded-full z-10"></div>
                <div 
                  className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                  onMouseEnter={() => handleMouseEnter(100)}
                  onMouseLeave={() => handleMouseLeave(40)}
                >
                  <h4 className="text-xl font-extrabold mb-1 text-primary-black group-hover:text-zinc-600 transition-colors">Open to Opportunities</h4>
                  <p className="text-neutral-600 font-semibold mb-3">Exploration | 2026 - Present</p>
                  <p className="text-zinc-700 font-medium leading-relaxed">Actively seeking opportunities to build real-world systems, apply my machine learning knowledge, and develop scalable applications.</p>
                </div>
              </motion.div>

              {/* Timeline Item 2 */}
              <motion.div 
                className="relative pl-10"
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
                viewport={{ once: true }}
              >
                <div className="absolute left-0 top-3 w-6 h-6 bg-zinc-100 border-4 border-zinc-800 rounded-full z-10"></div>
                <div 
                  className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                  onMouseEnter={() => handleMouseEnter(100)}
                  onMouseLeave={() => handleMouseLeave(40)}
                >
                  <h4 className="text-xl font-extrabold mb-1 text-primary-black group-hover:text-zinc-600 transition-colors">Student Developer</h4>
                  <p className="text-neutral-600 font-semibold mb-3">Independent Projects | 2023 - Present</p>
                  <p className="text-zinc-700 font-medium leading-relaxed">Building machine learning and computer vision–driven systems, including sentiment analysis models and real-time motion-controlled applications using pose detection. Focused on developing intelligent, data-driven solutions with Python, deep learning frameworks, and interactive visualization tools.</p>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Right Column: Certifications */}
          <div className="flex flex-col gap-8">
            <h3 className="text-2xl font-extrabold text-neutral-800 flex items-center gap-3">
              <span className="w-8 h-[3px] bg-primary-black inline-block"></span>
              CERTIFICATIONS
            </h3>
            
            <div className="flex flex-col gap-6 relative before:absolute before:inset-y-0 before:left-[11px] before:w-[2px] before:bg-zinc-300">
              
              {/* Timeline Item 1 */}
              <motion.div 
                className="relative pl-10"
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                viewport={{ once: true }}
              >
                <div className="absolute left-0 top-3 w-6 h-6 bg-zinc-100 border-4 border-zinc-800 rounded-full z-10"></div>
                <div 
                  className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                  onMouseEnter={() => handleMouseEnter(100)}
                  onMouseLeave={() => handleMouseLeave(40)}
                >
                  <h4 className="text-xl font-extrabold mb-1 text-primary-black group-hover:text-zinc-600 transition-colors">SAP Certified – SAP Business Data Cloud</h4>
                  <p className="text-neutral-600 font-semibold mb-3">Issued by SAP | Apr 2026</p>
                  <p className="text-zinc-700 font-medium leading-relaxed">Gained a foundational understanding of SAP Business Data Cloud, including data management, analytics, and data-driven decision-making.</p>
                </div>
              </motion.div>

              {/* Timeline Item 2 */}
              <motion.div 
                className="relative pl-10"
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
                viewport={{ once: true }}
              >
                <div className="absolute left-0 top-3 w-6 h-6 bg-zinc-100 border-4 border-zinc-800 rounded-full z-10"></div>
                <div 
                  className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                  onMouseEnter={() => handleMouseEnter(100)}
                  onMouseLeave={() => handleMouseLeave(40)}
                >
                  <h4 className="text-xl font-extrabold mb-1 text-primary-black group-hover:text-zinc-600 transition-colors">Agentic Automation Developer Associate Training</h4>
                  <p className="text-neutral-600 font-semibold mb-3">Issued by UiPath | Dec 2025</p>
                  <p className="text-zinc-700 font-medium leading-relaxed">Learned the fundamentals of Robotic Process Automation (RPA) by building automation workflows using UiPath. Gained hands-on experience in automating repetitive tasks, handling data, and designing step-by-step workflows.</p>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
