import Link from "next/link";
import { useState } from "react";
export default function MobileMenu() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  return (
    <>
      <ul className="navigation">
        <li
          className={
            isActive.key == 1
              ? "menu-item-has-children active"
              : "menu-item-has-children"
          }
        >
          <Link href="#">Home</Link>
          <ul
            className="sub-menu"
            style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}
          >
            <li>
              <Link href="/">Үндсэн</Link>
            </li>
          </ul>
          <div
            className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"}
            onClick={() => handleToggle(1)}
          >
            <span className="fas fa-angle-down" />
          </div>
        </li>
        <li
          className={
            isActive.key == 2
              ? "menu-item-has-children active"
              : "menu-item-has-children"
          }
        >
          <Link href="#">About</Link>
          <ul
            className="sub-menu"
            style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}
          ></ul>
          <div
            className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"}
            onClick={() => handleToggle(2)}
          >
            <span className="fas fa-angle-down" />
          </div>
        </li>
        <li
          className={
            isActive.key == 3
              ? "menu-item-has-children active"
              : "menu-item-has-children"
          }
        >
          <Link href="#">Projects</Link>
          <ul
            className="sub-menu"
            style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}
          ></ul>
          <div
            className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"}
            onClick={() => handleToggle(3)}
          >
            <span className="fas fa-angle-down" />
          </div>
        </li>
        <li
          className={
            isActive.key == 4
              ? "menu-item-has-children active"
              : "menu-item-has-children"
          }
        >
          <Link href="#">blog</Link>
          <ul
            className="sub-menu"
            style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}
          >
            <li>
              <Link href="/blog">Blog Grid</Link>
            </li>
            <li>
              <Link href="/blog-sidebar">Blog Grid Sidebar</Link>
            </li>
            <li>
              <Link href="/blog-list">Blog Standard</Link>
            </li>
            <li>
              <Link href="/blog/1">Blog Single</Link>
            </li>
          </ul>
          <div
            className={isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"}
            onClick={() => handleToggle(4)}
          >
            <span className="fas fa-angle-down" />
          </div>
        </li>
        <li
          className={
            isActive.key == 5
              ? "menu-item-has-children active"
              : "menu-item-has-children"
          }
        >
          <div
            className={isActive.key == 5 ? "dropdown-btn open" : "dropdown-btn"}
            onClick={() => handleToggle(5)}
          >
            <span className="fas fa-angle-down" />
          </div>
        </li>
      </ul>
    </>
  );
}
