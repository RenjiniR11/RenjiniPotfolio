import { Menu } from "lucide-react";

const Navbar = () => {

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <nav className="sticky top-0 bg-slate-900/90 backdrop-blur z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        <h1 className="font-bold text-xl">
          Renjini
        </h1>

        <div className="space-x-6 hidden md:flex">
          <button onClick={()=>scrollTo("about")}>About</button>
          <button onClick={()=>scrollTo("skills")}>Skills</button>
          <button onClick={()=>scrollTo("projects")}>Projects</button>
          <button onClick={()=>scrollTo("contact")}>Contact</button>
        </div>

        <Menu className="md:hidden" />

      </div>
    </nav>
  );
};

export default Navbar;
