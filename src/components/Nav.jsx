const Nav = () => {
  return (
    <nav className="bg-primary fixed w-full z-10 py-4 px-8 flex justify-between items-center">
      <p className="text-gray-400 text-2xl font-semibold flex items-end">
        Educt{" "}
        <div className="bg-secondary w-2 h-2 rounded-full ml-1 mb-2"></div>
      </p>
      <div className="flex justify-between gap-6 items-center">
        <a
          className="text-lg hover:text-secondary text-gray-500 font-bold"
          href="#home"
        >
          Home
        </a>
        <a
          className="text-lg hover:text-secondary text-gray-500 font-bold"
          href="#about"
        >
          About
        </a>
        <a
          className="text-lg hover:text-secondary text-gray-500 font-bold"
          href="#courses"
        >
          Courses
        </a>
      </div>
      <p className="text-white px-6 py-2 bg-secondary rounded-full font-bold">
        Join
      </p>
    </nav>
  );
};
export default Nav;
