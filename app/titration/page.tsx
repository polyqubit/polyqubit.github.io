import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <p className="text-5xl h-16">Titration</p>
            <div className="h-12">
                <Link className="border-2 border-white p-1" href="/">Back</Link>
            </div>
            <p className="para pb-1">
                Determining the pH of buffer solution
            </p>
            <ul>
                <li>
                    <button className="button">Indicators</button>
                </li>
                <li>
                    <button className="button">Strong Acid/Strong Base</button>
                </li>
                <li>
                    <button className="button">Weak Acid/Strong Base</button>
                </li>
                <li>
                    <button className="button">Polyprotic Acids</button>
                </li>
            </ul>
        </main>
    );
}
