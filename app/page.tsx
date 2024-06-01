import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <p className="text-5xl size-16">Content</p>
      <ul>
        {/* <li className="size-16">
          <Link href="/">Home</Link>
        </li> */}
        <li className="size-16">
          <Link href="/intro">Intro</Link>
        </li>
        <li >
          <Link href="/blog/hello-world">Blog Post</Link>
        </li>
      </ul>
    </main>
  );
}
