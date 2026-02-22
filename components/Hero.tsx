"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
    const scrollLineRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (scrollLineRef.current) {
            scrollLineRef.current.style.transform = "scaleX(1)";
        }
    }, []);

    return (
        <>
            <style>{`
                .hero-section {
                    min-height: 100vh;
                    display: flex; flex-direction: column; justify-content: center;
                    padding: 8rem 4rem 4rem;
                    position: relative; overflow: hidden;
                }
                .hero-title {
                    font-family: var(--font-syne); font-weight: 800;
                    font-size: clamp(3rem, 8vw, 7rem); line-height: 0.95;
                    letter-spacing: -0.04em; margin-bottom: 0.2rem;
                    animation: fadeUp 0.8s 0.4s forwards; opacity: 0;
                }
                .hero-subtitle {
                    font-size: 1.1rem; color: var(--muted); max-width: 500px; margin-top: 2rem;
                    animation: fadeUp 0.8s 0.6s forwards; opacity: 0;
                }
                .hero-buttons {
                    display: flex; gap: 1rem; margin-top: 3rem; flex-wrap: wrap;
                    animation: fadeUp 0.8s 0.8s forwards; opacity: 0;
                }
                .hero-scroll {
                    position: absolute; bottom: 2.5rem; left: 4rem;
                    font-family: var(--font-syne); font-size: 0.7rem; color: var(--muted);
                    letter-spacing: 0.15em; text-transform: uppercase;
                    display: flex; align-items: center; gap: 1rem;
                    animation: fadeUp 0.8s 1.2s forwards; opacity: 0;
                }
                @media (max-width: 768px) {
                    .hero-section { padding: 7rem 1.5rem 5rem; }
                    .hero-subtitle { font-size: 1rem; }
                    .hero-buttons { flex-direction: column; }
                    .hero-buttons a { text-align: center; justify-content: center; }
                    .hero-scroll { left: 1.5rem; }
                }
            `}</style>

            <section className="hero-section">
                {/* Glows */}
                <div style={{
                    position: "absolute", width: 600, height: 600, borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(0,229,192,0.08) 0%, transparent 70%)",
                    top: -100, right: -100, pointerEvents: "none"
                }} />
                <div style={{
                    position: "absolute", width: 400, height: 400, borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(0,102,255,0.06) 0%, transparent 70%)",
                    bottom: 100, left: 200, pointerEvents: "none"
                }} />

                <p style={{
                    fontFamily: "var(--font-syne)", fontSize: "0.75rem", color: "var(--accent)",
                    letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1.5rem",
                    animation: "fadeUp 0.8s 0.2s forwards", opacity: 0
                }}>
                    // Full Stack Developer · Manizales, Colombia
                </p>

                <h1 className="hero-title">
                    Mateo<br />
                    <span style={{
                        display: "block",
                        background: "linear-gradient(90deg, var(--accent), var(--accent2))",
                        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
                    }}>
                        Salgado.
                    </span>
                </h1>

                <p className="hero-subtitle">
                    Ingeniero Mecatrónico y desarrollador Full Stack. Construyo aplicaciones web,
                    móviles y automatizaciones que conectan datos con experiencias digitales reales.
                </p>

                <div className="hero-buttons">
                    <a href="#proyectos" style={{
                        display: "inline-flex", alignItems: "center", gap: "0.5rem",
                        padding: "0.85rem 2rem", borderRadius: 4,
                        fontFamily: "var(--font-syne)", fontSize: "0.8rem", letterSpacing: "0.05em",
                        background: "var(--accent)", color: "#080c10", fontWeight: 500,
                        textDecoration: "none", transition: "all 0.25s"
                    }}
                        onMouseEnter={e => {
                            e.currentTarget.style.background = "#fff";
                            e.currentTarget.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.background = "var(--accent)";
                            e.currentTarget.style.transform = "translateY(0)";
                        }}
                    >
                        Ver proyectos →
                    </a>
                    <a href="#contacto" style={{
                        display: "inline-flex", alignItems: "center",
                        padding: "0.85rem 2rem", borderRadius: 4,
                        fontFamily: "var(--font-syne)", fontSize: "0.8rem", letterSpacing: "0.05em",
                        background: "transparent", color: "var(--text)",
                        border: "1px solid var(--border)", textDecoration: "none", transition: "all 0.25s"
                    }}
                        onMouseEnter={e => {
                            e.currentTarget.style.borderColor = "var(--accent)";
                            e.currentTarget.style.color = "var(--accent)";
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.borderColor = "var(--border)";
                            e.currentTarget.style.color = "var(--text)";
                        }}
                    >
                        Contacto
                    </a>
                </div>

                <div className="hero-scroll">
                    <span ref={scrollLineRef} style={{
                        width: 40, height: 1, background: "var(--accent)", display: "block",
                        transformOrigin: "left", transform: "scaleX(0)", transition: "transform 1.5s 1.5s ease"
                    }} />
                    scroll
                </div>

                <style>{`
                    @keyframes fadeUp {
                        from { opacity: 0; transform: translateY(24px); }
                        to   { opacity: 1; transform: translateY(0); }
                    }
                `}</style>
            </section>
        </>
    );
}
