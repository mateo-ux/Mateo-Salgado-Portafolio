"use client";
import { useEffect, useRef } from "react";

export default function About() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
            { threshold: 0.1 }
        );
        sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <style>{`
                .about-section {
                    padding: 7rem 4rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .about-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 5rem;
                    align-items: start;
                }
                .about-photo-wrap {
                    display: flex;
                    justify-content: center;
                    padding: 12px 12px 12px 0;
                }
                .about-photo {
                    display: block;
                    width: auto; height: auto;
                    max-width: 320px; max-height: 420px;
                    border-radius: 8px;
                    border: 1px solid var(--border);
                }
                .about-stats {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1rem;
                    margin-top: 2rem;
                    padding-top: 2rem;
                    border-top: 1px solid var(--border);
                }
                .about-stat-value {
                    font-family: var(--font-syne);
                    font-size: 1.6rem;
                    font-weight: 800;
                    color: var(--accent);
                    letter-spacing: -0.03em;
                    line-height: 1;
                }
                .about-stat-label {
                    font-family: var(--font-syne);
                    font-size: 0.65rem;
                    color: var(--muted);
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    margin-top: 0.3rem;
                }
                @media (max-width: 768px) {
                    .about-section { padding: 5rem 1.5rem; }
                    .about-grid {
                        grid-template-columns: 1fr;
                        gap: 2.5rem;
                    }
                    .about-photo-wrap {
                        padding: 0;
                        justify-content: center;
                    }
                    .about-photo {
                        max-width: 260px;
                        max-height: 340px;
                    }
                    .about-stats {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }
            `}</style>

            <section id="sobre-mi" ref={sectionRef} className="about-section">
                <div className="about-grid">
                    {/* TEXT */}
                    <div className="reveal">
                        <p style={{ fontFamily: "var(--font-syne)", fontSize: "0.72rem", color: "var(--accent)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>
                            // 01 — Sobre mí
                        </p>
                        <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3.2rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "2rem" }}>
                            Constructor de proyectos e ideas.
                        </h2>
                        <p style={{ color: "var(--muted)", marginBottom: "1.2rem" }}>
                            Soy Mateo Salgado, <strong style={{ color: "var(--text)", fontWeight: 500 }}>Ingeniero Mecatrónico</strong> con base en Manizales.
                        </p>
                        <p style={{ color: "var(--muted)", marginBottom: "1.2rem" }}>
                            Me especializo en construir soluciones completas: desde <strong style={{ color: "var(--text)", fontWeight: 500 }}>aplicaciones web con Next.js</strong> hasta ERPs móviles con Flutter, APIs en Python/Django y automatizaciones con Google Apps Script.
                        </p>
                        <p style={{ color: "var(--muted)", marginBottom: "1.2rem" }}>
                            Recién finalicé una <strong style={{ color: "var(--text)", fontWeight: 500 }}>Especialización en Inteligencia Artificial</strong> en la Universidad Internacional de La Rioja.
                        </p>

                        <div style={{
                            display: "inline-flex", alignItems: "center", gap: "0.5rem",
                            background: "rgba(0,229,192,0.08)", border: "1px solid rgba(0,229,192,0.2)",
                            borderRadius: 4, padding: "0.5rem 1rem", marginTop: "0.5rem",
                            fontFamily: "var(--font-syne)", fontSize: "0.72rem", color: "var(--accent)"
                        }}>
                            🏅 Certificado ISO 17024 — Desarrollo de Software · ParqueSoft TI, Oct 2024
                        </div>

                        {/* Stats */}
                        <div className="about-stats">
                            <div>
                                <div className="about-stat-value">6+</div>
                                <div className="about-stat-label">Proyectos en producción</div>
                            </div>
                            <div>
                                <div className="about-stat-value">2+</div>
                                <div className="about-stat-label">Años en desarrollo</div>
                            </div>
                        </div>
                    </div>

                    {/* PHOTO */}
                    <div className="reveal about-photo-wrap">
                        <img
                            src="/foto.jpg"
                            alt="Mateo Salgado — Full Stack Developer"
                            className="about-photo"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
