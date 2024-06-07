import Link from "next/link"

export const list: {text: string, text2: string, text3: string, imagepath: string, width: number, height: number}[] = [
    {
        "text":      "Click a button",
        "text2":     "",
        "text3":     "",
        "imagepath": "",
        "width":     0,
        "height":    0
    },
    {
        "text":      "Indicators($In$) are weak acids($HIn\\rightleftharpoons$$H^+ + In^-$). The indicator and its conjugate are of different colors $\\rarr$ by Le Chatelier's principle, the solution changes color with pH.",
        "text2":     "",
        "text3":     "",
        "imagepath": "/indicators.jpg",
        "width":     700,
        "height":    580
    },
    {
        "text":      "Plotted as pH vs. volume(of added titrant). The slow increase(or decrease if analyte is a base) of pH at beginning and sudden change around equivalence is due to logarithmic nature of the pH scale.",
        "text2":     "<strong>Equivalence point:</strong> Moles of acid and base are equal<p /><strong>Endpoint</strong>: pH that causes the indicator to change color, ideally close to equivalence point",
        "text3":     "",
        "imagepath": "/titrateequ.png",
        "width":     300,
        "height":    300
    },
    {
        "text":      "For strong acid-strong base reactions <u>only,</u> the equivalence point is at pH 7: $H^++OH^-\\rarr$$H_2O$(with equal amounts of acid and base, only $H_2O$ is left resulting in a pH of 7)",
        "text2":     "<strong>Initial concentration:</strong> With equivalence point values, solve for moles of the titrant to give moles of the analyte(1:1 stoichiometry). Divide by intial analyte volume to obtain molarity.<p />If given a titration curve, $M_{analyte}=[H^+]_0=10^{-pH_0}$ where $pH_0$ is the initial pH($pOH=14-pH$).",
        "text3":     "<strong>Concentration elsewhere(requires previous):</strong> <u>Analyte</u> is in excess: excess->$ex$, analyte->$A$, titrant->$T$, equivalence->$eq$, total->$\\Sigma$<p />$V_{eq}-V_{T}=V_{ex}$, $V_{ex}M_{A}=mol_A$, $mol_A\\over{V_{\\Sigma}}$$=[H^+]$, $-log[H^+]=pH$; this process still works if $V_T>V_{eq}$ <p />No buffer zone is present as there is no weak acid/base involved.",
        "imagepath": "",
        "width":     0,
        "height":    0
    },
    {
        "text":      "For weak acid-strong base(or weak base-strong acid) reactions, $pH_{eq}\\ne{7}$ as strong conjugates react with water:<p />$A^-+H_2O\\rarr{HA+OH^-}$(increases pH) and $HB^++H_2O\\rarr{B+H_3O^+}$ <p /> <strong>Initial concentration:</strong>",
        "text2":     "",
        "text3":     "",
        "imagepath": "",
        "width":     0,
        "height":    0
    },
    {
        "text":      "Equivalence point of a weak acid-weak base titration: $[pH<7$ if $K_a>K_b]$, $[pH>7$ if $K_a<K_b]$, $[pH=7$ when $K_a=K_b]$",
        "text2":     "Since the pH change is more gradual(due to double buffer generation), indicators are less accurate at determining the equivalence point. <p />It is possible to reduce experimental inaccuracy through a combination of indicators with similar transition pHs, so that the solution undergoes a more distinct color change.",
        "text3":     "However, it is much more reliable to collect and model(as an equation) pH data from the region around the equivalence point with an electronic pH meter.<p />This allows the first derivative to be calculated, and the equivalence point can be obtained from the volume coordinate of the absolute max of the region.",
        "imagepath": "",
        "width":     0,
        "height":    0
    },
    {
        "text":      "Polyprotic acid titration causes multiple equivalence points(one for each removable proton). $K_{ai}$ is the equilibrium constant for the $i^{th}$ proton.",
        "text2":     "",
        "text3":     "",
        "imagepath": "",
        "width":     0,
        "height":    0
    },
    {
        "text":  "",
        "text2": "",
        "text3": "",
        "imagepath": "",
        "width":     0,
        "height":    0
    }
]