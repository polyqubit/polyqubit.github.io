'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { list } from "./data";

export default function Home() {
    const [num, setNum] = useState(0);
    function handleClick(n:number) {
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
                Determining the pH of buffer solution
            </p>
            <ul>
                <li>
                    <button onClick={()=>handleClick(1)} className="button">Indicators</button>
                </li>
                <li>
                    <button onClick={()=>handleClick(2)} className="button">Strong Acid-Strong Base</button>
                </li>
                <li>
                    <button onClick={()=>handleClick(3)} className="button">Weak Acid-Strong Base</button>
                </li>
                <li>
                    <button onClick={()=>handleClick(4)} className="button">Polyprotic Acids</button>
                </li>
            </ul>
            <p>
                {current.text}
            </p>
        </main>
    );
}
