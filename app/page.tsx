import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <p className="text-5xl pb-2">Buffer Solutions and Titration</p>
      <p className="pb-10">(white boxes are clickable)</p>
      <ul>
        <li>
          <Link className="link" href="/intro">Intro to Buffers</Link>
        </li>
        <li>
          <Link className="link" href="/phcalc">pH Calculations</Link>
        </li>
        <li>
          <Link className="link" href="/titration">Titration</Link>
        </li>
      </ul>
    </main>
  );
}
