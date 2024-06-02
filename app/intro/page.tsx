import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <p className="text-5xl h-16">Intro to Buffers</p>
            <div className="h-12">
                <Link className="border-2 border-white p-1" href="/">Back</Link>
            </div>
            <p className="para">
                A buffer is a solution of a weak acid and its conjugate base.
                It may <u><strong>not</strong></u> be composed of a strong acid and its conjugate base(e.g. HNO3 and NO3&#8315;),
                as the strong acid dissociates completely in solution(HNO3&rarr;H&#8314;+NO3&#8315;). It may also <u><strong>not</strong></u> be a solution
                of only a weak acid; the low Ka results in miniscule conjugate formation.
            </p>
            <p className="para">
                A buffer solution is an equilibrium(HA&harr;H&#8314;+A-) which reacts with added acid(H&#8314;+A&#8315;&rarr;HA) or added
                base(HA+OH&#8315;&rarr;H2O+A&#8315;), reducing the change in pH.
            </p>
        </main>
    );
}
