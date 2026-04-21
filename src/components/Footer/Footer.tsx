import kpLogo from "../../assets/logokp.svg";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary-black text-primary-white flex items-center justify-between px-5 py-5 md:px-20 lg:px-[112px]">
      <div
        className="flex-center cursor-pointer transition-all duration-300 ease-in hover:scale-125"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img src={kpLogo} alt="KP Logo" className="w-[55px] h-[55px] object-contain brightness-0 invert scale-[1.5]" />
      </div>
      <div className="flex flex-col">
        <p className="flex items-center gap-2">
          <span className="text-lg">&#169;</span>{" "}
          <span>{year} Personal Portfolio</span>
        </p>
        <span>
          Built by{" "}
          <span className="font-semibold text-zinc-300">
            Kamalesh
          </span>
        </span>
      </div>
    </footer>
  );
}
