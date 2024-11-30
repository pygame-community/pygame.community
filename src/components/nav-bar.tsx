import React, { useState } from "react";

/**
   * ```css
   * .nav {
    color: white;
    justify-content: space-between;
    padding: 0 75px;
    height: 10vh;
    align-items: center;
  }

  .title {
    font-weight: 700;
    font-size: 1.5rem;
  }

  .mobilemenuicon {
    display: none;
  }

  .nav ul {
    display: flex;
    font-size: 1.05rem;
    list-style: none;
    gap: 16px;
  }

  .nav a {
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 4px;
    opacity: 1;
    transition: 500ms;
  }

  .nav a:hover {
    color: #dedede;
  }

  .mobileroutes a {
    padding-top: 8px;
    padding-bottom: 8px;
    text-align: left;
  }


  @media only screen and (max-width: 600px) {
    .title {
      display: none;
    }

    .nav {
      display: block;
      padding: 35px 35px;
    }

    .nav .mobilemenuicon {
      display: block;
    }

    .nav ul {
      display: block;
    }

    .nav .routes {
      display: none;
    }
  }
  * ```
  */

export default function Navbar() {
  const [isOpen, setOpen] = useState(true);

  function handleMenuClick() {
    setOpen(!isOpen);
  }

  return (
    <nav className="text-white flex justify-between items-center h-[10vh] px-[75px] sm:block sm:p-[35px]">
      <div className="font-bold text-[1.5rem] sm:hidden">
        <a href="">pygame-ce</a>
      </div>
      <div
        className="hidden sm:block bg-white rounded-md p-2 cursor-pointer"
        onClick={handleMenuClick}
      >
        <span className="text-black">menu</span>
      </div>
      <div className={isOpen ? "block" : "hidden sm:block"}>
        <ul className="flex text-[1.05rem] gap-4 list-none sm:block">
          <li>
            <a
              href="docs"
              className="text-white no-underline flex items-center p-1 hover:text-[#dedede] transition-colors duration-500 sm:py-2"
            >
              Documentation
            </a>
          </li>
          <li>
            <a
              href="docs/#tutorials"
              className="text-white no-underline flex items-center p-1 hover:text-[#dedede] transition-colors duration-500 sm:py-2"
            >
              Tutorials
            </a>
          </li>
          <li>
            <a
              href="https://github.com/pygame-community/pygame-ce"
              className="text-white no-underline flex items-center p-1 hover:text-[#dedede] transition-colors duration-500 sm:py-2"
            >
              Contribute
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
