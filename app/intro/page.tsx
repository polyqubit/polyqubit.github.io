import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <p className="text-5xl size-16">Content</p>
      <ul>
        <li>
          <Link href="/">Back</Link>
        </li>
      </ul>
    </main>
  );
}
