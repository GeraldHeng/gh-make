import styles from "../styles/Home.module.css";
import Button from "../components/commons/Button";
import NavItem from "../components/commons/NavItem";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="hero">
        <nav>
          <div className=" mx-auto px-8 py-4">
            <div className="flex justify-between">
              {/* logo */}
              <div className="flex space-x-7">
                <a href="#" className="flex items-center py-4 px-2">
                  <p className="text-pale-white">Logo</p>
                  <span className="font-semibold text-pale-white text-lg pl-2">
                    GH Make
                  </span>
                </a>
              </div>
              {/* logo end */}
              {/* <!-- navbar items --> */}
              <div className="hidden md:flex items-center space-x-3">
                <NavItem active={true}>Home</NavItem>
                <NavItem>About</NavItem>
                <NavItem>Works</NavItem>
                <NavItem>Experience</NavItem>

                <Button>Contact Me</Button>
              </div>
              {/* <!-- navbar items end --> */}

              {/* <!-- Mobile menu button --> */}
              <div className="md:hidden flex items-center">
                <button className="outline-none mobile-menu-button">
                  <svg
                    className=" w-6 h-6 text-pale-white hover:text-green-500 "
                    x-show="!showMenu"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* <!-- mobile menu --> */}
          <div className="hidden mobile-menu">
            <ul>
              <li className="active">
                <a
                  href="index.html"
                  className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
                >
                  Experience
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- mobile menu end --> */}
        </nav>
      </div>
      <div>Second section</div>
    </div>
  );
}
