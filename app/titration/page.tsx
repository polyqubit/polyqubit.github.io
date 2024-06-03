'use client'

import Image from "next/image";
import Link from "next/link";
import Latex from "react-latex-next";
import { useState } from "react";
import { list } from "./data";
import "/node_modules/katex/dist/katex.min.css"

export default function Home() {
    const [num, setNum] = useState(0);
    function handleClick(n: number) {
        setNum(n);
        // console.log(num);
    }
    let current = list[num];
    return (
        <main>
            <p className="text-5xl h-16">Titration</p>
            <div className="h-12">
                <Link className="border-2 border-white p-1" href="/">Back</Link>
            </div>
            <p className="para pb-1">
                Info on titration
            </p>
            <ul className="float-left pr-4">
                <li>
                    <button onClick={() => handleClick(1)} className="button">Indicators</button>
                </li>
                <li>
                    <button onClick={() => handleClick(2)} className="button">Titration Curves</button>
                </li>
                <li>
                    <button onClick={() => handleClick(3)} className="button">Strong Acid-Strong Base</button>
                </li>
                <li>
                    <button onClick={() => handleClick(4)} className="button">Weak Acid-Strong Base</button>
                </li>
                <li>
                    <button onClick={() => handleClick(5)} className="button">Polyprotic Acids</button>
                </li>
            </ul>
            <div className="float-left border-2 p-1 border-stone-500">
                <Latex>
                    {current.text}
                </Latex>
                {num===2&&<p>testmachine</p>}
            </div>

        </main>
    );
}
