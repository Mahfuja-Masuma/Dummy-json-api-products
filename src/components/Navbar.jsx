import { Link } from "react-router-dom";
const Navbar = () => {
  const items = [
    { title: "Home", link: "/" },
    { title: "Products", link: "/products" }, 
    { title: "NumberGuess", link: "/numbergess" },
  ];
  return (
    <div>
      <div className="py-4 bg-blue-400">
        <nav className=" container mx-auto flex justify-between">
          <div className="">
            <Link to='/' className="text-4xl font-bold text-orange-600">E-Coo</Link>
          </div>
          <div>
            <ul className="flex justify-end gap-5">
              {items.map((item, i) => (
                <li key={i} className="text-white text-lg">
                  <Link to={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;