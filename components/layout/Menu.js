import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Menu({ isShow }) {
  const router = useRouter();

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
        <li className="menu-item-has-children">
          <Link href="#">Үндсэн цэс</Link>
        </li>
        <li className="menu-item-has-children">
          <Link href="#">Бидний тухай</Link>
        </li>
        <li className="menu-item-has-children">
          <Link href="#">Төслүүд</Link>
        </li>
        <li className="menu-item-has-children">
          <Link href="#">Блог</Link>
        </li>
      </ul>
    </>
  );
}
