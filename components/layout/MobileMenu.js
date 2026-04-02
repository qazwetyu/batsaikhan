import Link from "next/link";

export default function MobileMenu() {
  return (
    <ul className="navigation">
      <li>
        <Link href="/">Нүүр</Link>
      </li>
      <li>
        <Link href="/overview">Бидний тухай</Link>
      </li>
      <li>
        <Link href="/services">Үйлчилгээ</Link>
      </li>
      <li>
        <Link href="/project">Төслүүд</Link>
      </li>
      <li>
        <Link href="/contact">Холбоо барих</Link>
      </li>
    </ul>
  );
}
