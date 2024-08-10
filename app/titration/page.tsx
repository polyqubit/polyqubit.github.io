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
            <div className="flex">
                <ul className="top-0 pr-4 inline-block">
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
                        <button onClick={() => handleClick(5)} className="button">Weak Acid-Weak Base</button>
                    </li>
                    <li>
                        <button onClick={() => handleClick(6)} className="button">Polyprotic Acids</button>
                    </li>
                </ul>
                <div className="max-w-fit border-2 p-1 border-stone-500 inline-block display-flex">
                    <Latex strict>
                        {current.text}
                    </Latex>
                    <p></p>
                    <Latex strict>
                        {current.text2}
                    </Latex>
                    <p></p>
                    <Latex strict>
                        {current.text3}
                    </Latex>
                    {/* machine */}
                    {/* {num === 2 && <p>show titration</p>} */}
                    {num !== 0 && <p> </p> && <Image
                    src={current.imagepath}
                    alt="example diagram"
                    width={current.height}
                    height={current.width}
                    priority
                    />}
                </div>
            </div>
        </main>
    );
}
