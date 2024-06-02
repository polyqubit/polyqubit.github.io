import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <p className="text-5xl max-w-xl pb-2">Buffer Solutions</p>
      <p className="pb-10">(hover over highlighted words)</p>
      <ul>
        <li>
          <Link className="link" href="/intro">Intro</Link>
        </li>
        <li>
          <Link className="link" href="/phcalc">pH Calculations</Link>
        </li>
      </ul>
    </main>
  );
}
