import Image from "next/image";
import Link from "next/link";
import Latex from "react-latex-next";
import "/node_modules/katex/dist/katex.min.css"

export default function Home() {
    return (
        <main>
            <p className="text-5xl h-16">pH Calculations</p>
            <div className="h-12">
                <Link className="border-2 border-white p-1" href="/">Back</Link>
            </div>
            <p className="para pb-1">
                Determining the pH of buffer solution
            </p>
            <div className="para max-w-screen-lg pb-1">
                <div className="text-2xl"><Latex strict>$K_a=$${"[H^+][A^-]"}\over{"[HA]"}$</Latex><text className="text-xl">(definition of equilibrium constant)</text></div>
                All concentrations measured at <u><strong>equilibrium</strong></u>
            </div>
            <p className="para max-w-screen-lg pb-1">
                Then, since <Latex strict>$pX=-logX$</Latex>,
            </p>
            <div className="para max-w-screen-lg">
                <div className="text-2xl"><Latex strict>$pH=pK_a-log$${"[HA]"}\over{"[A^-]"}$</Latex></div>
            </div>
            <p className="para pb-1 max-w-screen-lg">
                Determining the pH of a buffer solution + acid(similar for base)
            </p>
            <p className="para pb-1 max-w-xl">
                The acid(HX) added ionizes to <Latex>$H^+$ and $X^-$</Latex>, <Latex>$mol$ $H^+$</Latex> can be 
                found from the acids's equilibrium expression
            </p>
            <p className="para pb-1 max-w-xl">
                Then, determine <Latex>$[HA]$ and $[A^-]$ from $H^+$+ $A^-\rightarrow$$HA$</Latex>(accounting for the change in volume)
            </p>
            <p className="para pb-1 max-w-xl">
                Since <Latex>$[A^-]$</Latex> is a strong base, this reaction can be assumed to proceed to completion
            </p>
            <p className="para pb-1 max-w-xl">
                Calculate the pH of the solution with the above equation
            </p>
        </main>
    );
}
