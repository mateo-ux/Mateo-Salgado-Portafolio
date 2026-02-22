"use client";
import { useEffect, useRef } from "react";

const education = [
    {
        icon: "🎓",
        degree: "Ingeniería Mecatrónica",
        institution: "Universidad de Caldas. Manizales - Colombia",
        year: "Pregrado",
    },
    {
        icon: "🤖",
        degree: "Especialización en Inteligencia Artificial",
        institution: "Universidad Internacional de la Rioja",
        year: "En curso · 2025–2026",
    },
    {
        icon: "🏅",
        degree: "Desarrollo de Software · ISO 17024",
        institution: "ParqueSoft TI · EvalMAX",
        year: "Certificado · Octubre 2024",
    },
];

export default function Education() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
            { threshold: 0.1 }
        );
        sectionRef.current?.querySelectorAll(".reveal").forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <style>{`
                .education-section {
                    padding: 2rem 4rem 7rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .education-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.2rem;
                    align-items: stretch;
                }
                @media (max-width: 900px) {
                    .education-grid { grid-template-columns: 1fr; }
                }
                @media (max-width: 768px) {
                    .education-section { padding: 2rem 1.5rem 5rem; }
                }
            `}</style>

            <section id="educacion" ref={sectionRef} className="education-section">
                <p className="reveal" style={{
                    fontFamily: "var(--font-syne)", fontSize: "0.72rem", color: "var(--accent)",
                    letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem"
                }}>
                    // 05 — Formación
                </p>
                <h2 className="reveal" style={{
                    fontFamily: "var(--font-syne)", fontWeight: 700,
                    fontSize: "clamp(2rem, 4vw, 3.2rem)", letterSpacing: "-0.03em",
                    lineHeight: 1.1, marginBottom: "3rem"
                }}>
                    Estudios.
                </h2>

                <div className="education-grid">
                    {education.map((edu, i) => (
                        <div key={i} className="reveal" style={{
                            transitionDelay: `${i * 0.1}s`,
                            display: "flex"
                        }}>
                            <div
                                style={{
                                    flex: 1,
                                    background: "var(--bg2)", border: "1px solid var(--border)",
                                    borderRadius: 8, padding: "1.8rem", transition: "all 0.25s",
                                    display: "flex", flexDirection: "column"
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.borderColor = "rgba(0,229,192,0.3)";
                                    e.currentTarget.style.transform = "translateY(-4px)";
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.borderColor = "var(--border)";
                                    e.currentTarget.style.transform = "translateY(0)";
                                }}
                            >
                                <div style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>{edu.icon}</div>
                                <h3 style={{
                                    fontFamily: "var(--font-syne)", fontSize: "1rem", fontWeight: 700,
                                    letterSpacing: "-0.02em", marginBottom: "0.4rem",
                                    flex: 1
                                }}>{edu.degree}</h3>
                                <p style={{
                                    fontFamily: "var(--font-syne)", fontSize: "0.72rem", color: "var(--accent)",
                                    textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem"
                                }}>{edu.institution}</p>
                                <p style={{ fontSize: "0.8rem", color: "var(--muted)" }}>{edu.year}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
