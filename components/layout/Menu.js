import Link from "next/link";
import { MAIN_NAV_LINKS } from "@/components/layout/navLinks";

export default function Menu() {
  return (
    <ul className="navigation">
      {MAIN_NAV_LINKS.map((item) => (
        <li key={item.href}>
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
}
