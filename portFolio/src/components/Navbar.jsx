import { links } from "../data";

const Navbar = () => {
  return (
    <nav className="bg-blue-100">
      <div className="align-element py-4 flex justify-between sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold">
          Crafty<span className="text-blue-600">Coder</span>
        </h2>
        <div className="flex gap-x-3">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-xl tracking-wide hover:text-blue-600 duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
