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
        <section id="sobre-mi" ref={sectionRef} style={{ padding: "7rem 4rem", maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>

                <div className="reveal">
                    <p style={{ fontFamily: "var(--font-syne)", fontSize: "0.72rem", color: "var(--accent)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>
            // 01 — Sobre mí
                    </p>
                    <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3.2rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "2rem" }}>
                        Constructor de proyectos e ideas.
                    </h2>
                    <p style={{ color: "var(--muted)", marginBottom: "1.2rem" }}>
                        Soy Mateo Salgado, <strong style={{ color: "var(--text)", fontWeight: 500 }}>Ingeniero Mecatrónico</strong> de 29 años con base en Manizales. Trabajo como contratista en la <strong style={{ color: "var(--text)", fontWeight: 500 }}>Universidad de Caldas</strong> y en proyectos de desarrollo para la empresa <strong style={{ color: "var(--text)", fontWeight: 500 }}>IAConexiones.</strong>
                    </p>
                    <p style={{ color: "var(--muted)", marginBottom: "1.2rem" }}>
                        Me especializo en construir soluciones que van desde <strong style={{ color: "var(--text)", fontWeight: 500 }}>aplicaciones web con Next.js</strong> hasta automatizaciones con Google Apps Script, pasando por apps móviles con Flutter y APIs en Python/Django, C# y .NET.
                    </p>
                    <p style={{ color: "var(--muted)", marginBottom: "1.2rem" }}>
                        Actualmente curso una <strong style={{ color: "var(--text)", fontWeight: 500 }}>especialización en Inteligencia Artificial</strong> en la Universidad de La Rioja.
                    </p>
                    <div style={{
                        display: "inline-flex", alignItems: "center", gap: "0.5rem",
                        background: "rgba(0,229,192,0.08)", border: "1px solid rgba(0,229,192,0.2)",
                        borderRadius: 4, padding: "0.5rem 1rem", marginTop: "1.5rem",
                        fontFamily: "var(--font-syne)", fontSize: "0.72rem", color: "var(--accent)"
                    }}>
                        🏅 Certificado ISO 17024 — Desarrollo de Software · ParqueSoft TI, Oct 2024
                    </div>
                </div>

                {/* FOTO */}
                <div className="reveal" style={{ display: "flex", justifyContent: "center", padding: "12px 12px 12px 0" }}>
                    <div style={{ position: "relative", display: "inline-block" }}>
                        <img
                            src="/foto.jpg"
                            alt="Mateo Salgado"
                            style={{
                                display: "block",
                                width: "auto",
                                height: "auto",
                                maxWidth: "320px",
                                maxHeight: "420px",
                                borderRadius: 8,
                            }}
                        />

                    </div>
                </div>

            </div>
        </section>
    );
}
