"use client";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav style={{
            position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
            display: "flex", justifyContent: "space-between", alignItems: "center",
            padding: "1.2rem 4rem",
            backdropFilter: "blur(20px)",
            background: "rgba(8,12,16,0.7)",
            borderBottom: "1px solid var(--border)"
        }}>
            <Link href="/" style={{
                fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "1.1rem",
                letterSpacing: "-0.02em", color: "var(--text)", textDecoration: "none"
            }}>
                MS<span style={{ color: "var(--accent)" }}>.</span>
            </Link>
            <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none" }}>
                {[
                    ["Sobre mí", "#sobre-mi"],
                    ["Stack", "#stack"],
                    ["Proyectos", "#proyectos"],
                    ["Experiencia", "#experiencia"],
                    ["Contacto", "#contacto"],
                ].map(([label, href]) => (
                    <li key={href}>
                        <a href={href} style={{
                            fontFamily: "var(--font-syne)", fontSize: "0.75rem",
                            color: "var(--muted)", textDecoration: "none",
                            letterSpacing: "0.1em", textTransform: "uppercase",
                            transition: "color 0.2s"
                        }}
                            onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                            onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}