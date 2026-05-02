import { useState } from "react";
import { motion } from "motion/react";
import LinkIcon from "../../assets/link.svg?react";
import GitHubIcon from "../../assets/social/github.svg?react";
import { useCursorHover } from "../../hooks/useCursorHover";
import { ProjectType } from "../../types/project";

export default function Project({ project }: { project: ProjectType }) {
  const { handleMouseEnter, handleMouseLeave } = useCursorHover();
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.article
      initial={{ x: 75, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.9, type: "spring" }}
      viewport={{ once: true }}
      className={`group relative flex flex-grow flex-col rounded-lg border-2 transition-colors hover:border-zinc-500 ${project.number !== 3 ? "cursor-pointer" : ""}`}
      style={{ perspective: 2000 }}
      onClick={() => project.number !== 3 && setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative flex flex-grow flex-col w-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Face (Text) */}
        <div
          className="bg-primary-black text-primary-white relative flex flex-grow flex-col items-start gap-10 rounded-lg px-3 py-5 md:p-10 xl:p-20 group-hover:bg-zinc-900 transition-colors"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          {/* Flip Hint */}
          {project.number !== 3 && (
            <div className="absolute top-4 right-4 md:top-6 md:right-6 flex items-center gap-2 bg-neutral-100 text-neutral-800 px-3 py-1.5 rounded-full text-xs font-bold shadow-md animate-bounce group-hover:animate-none opacity-90 transition-all pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                <path d="M3 3v5h5"></path>
                <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
                <path d="M16 16h5v5"></path>
              </svg>
              <span>Tap to flip</span>
            </div>
          )}

          <div className="flex flex-col gap-10 pr-24 md:pr-32">
            <p className="text-primary-white text-2xl font-extrabold text-neutral-900 md:text-4xl">
              {project.number < 10 ? `0${project.number}` : project.number}
            </p>
            <h3 className="text-primary-white text-xl font-extrabold tracking-tight text-neutral-800 md:text-3xl">
              {project.title}
            </h3>
          </div>
          <p
            className="flex-grow leading-relaxed text-zinc-300"
            onMouseEnter={(e) => {
              e.stopPropagation();
              handleMouseEnter(150);
            }}
            onMouseLeave={(e) => {
              e.stopPropagation();
              handleMouseLeave(40);
            }}
          >
            {project.description}
          </p>

          <div className="flex flex-col gap-2">
            <span className="font-extrabold">Technologies:</span>
            <ul className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string, index: number) => (
                <li
                  key={index}
                  className="rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-700 shadow-sm"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-4 pt-2">
            <a
              href={project.demo}
              aria-label={project.ariaLabel.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="rounded-full bg-neutral-100 p-2 transition-colors hover:bg-neutral-200"
            >
              <LinkIcon className="h-6 w-6 text-neutral-800" />
            </a>

            <a
              href={project.github}
              aria-label={project.ariaLabel.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="rounded-full bg-neutral-100 p-2 transition-colors hover:bg-neutral-200"
            >
              <GitHubIcon className="h-6 w-6 text-neutral-800" />
            </a>
          </div>
        </div>

        {/* Back Face (Image) */}
        <div
          className="bg-primary-black absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {project.imgSrc ? (
            <img
              src={project.imgSrc}
              alt={project.imgAlt}
              className="w-full h-full object-contain rounded-lg opacity-90 transition-opacity hover:opacity-100"
            />
          ) : (
            <InteractiveGestureDemo />
          )}
          <p className="absolute bottom-5 bg-black/70 px-4 py-2 rounded-full text-sm font-bold text-white shadow-xl pointer-events-none z-20">
             Click to flip back
          </p>
        </div>
      </motion.div>
    </motion.article>
  );
}

const InteractiveGestureDemo = () => {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  return (
    <div 
      className="w-full h-full relative overflow-hidden bg-neutral-900 flex flex-col items-center justify-center cursor-crosshair group/demo"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }}
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{
             backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
             backgroundSize: '20px 20px'
           }} 
      />
      
      <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover/demo:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Target that follows mouse */}
      <motion.div 
        className="absolute w-12 h-12 border-2 border-emerald-400 rounded-full flex items-center justify-center pointer-events-none shadow-[0_0_15px_rgba(52,211,153,0.3)] z-10 hidden sm:flex"
        animate={{ 
          left: `${pos.x}%`, 
          top: `${pos.y}%`,
          x: "-50%",
          y: "-50%"
        }}
        transition={{ type: "spring", damping: 15, stiffness: 200, mass: 0.5 }}
      >
        <div className="w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
      </motion.div>
      
      <div className="flex flex-col items-center gap-2 z-10 pointer-events-none bg-black/40 p-4 rounded-xl border border-emerald-500/20 backdrop-blur-sm">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-emerald-400 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 11V6a2 2 0 0 0-4 0v4"></path>
          <path d="M14 10V5a2 2 0 0 0-4 0v5"></path>
          <path d="M10 10.5V4a2 2 0 0 0-4 0v9"></path>
          <path d="m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8v-7a2 2 0 0 0-4 0v3"></path>
        </svg>
        <p className="text-emerald-400 font-mono text-center text-sm font-semibold tracking-wider">
          LIVE TRACKING
        </p>
        <p className="text-[10px] text-emerald-400/60 font-mono uppercase tracking-widest mt-1 hidden sm:block">
          Move Cursor to interact
        </p>
      </div>
    </div>
  );
};
