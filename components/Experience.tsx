"use client";
import { useEffect, useRef } from "react";

const experience = [
    {
        date: "Nov 2024 — Presente",
        title: "Soporte plataformas y desarrollador Full Stack",
        company: "Universidad de Caldas · Manizales, Colombia",
        desc: "Desarrollo de herramientas internas con Python y Next.js (API), administración de Moodle y SIGA, automatizaciones con Google Apps Script y generación de reportes dinámicos en Google Sheets conectados con plataformas a cadémicas.(Talento Tech)",
    },
    {
        date: "2025 — Presente",
        title: "Desarrollador Full Stack",
        company: "IA Conexiones · Colombia",
        desc: "Desarrollo de páginas web con backend, apps móvil ERP con Flutter y Firebase, e integración de bases de datos SQL con frontends en Next.js para clientes de distintos sectores.",
    },
];

export default function Experience() {
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
        <section id="experiencia" ref={sectionRef} style={{ padding: "7rem 4rem", maxWidth: 1200, margin: "0 auto" }}>
            <p className="reveal" style={{ fontFamily: "var(--font-syne)", fontSize: "0.72rem", color: "var(--accent)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>
        // 04 — Experiencia
            </p>
            <h2 className="reveal" style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3.2rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "3rem" }}>
                Dónde he trabajado.
            </h2>
            <div style={{ position: "relative", paddingLeft: 0 }}>
                <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 1, background: "var(--border)" }} />
                {experience.map((exp, i) => (
                    <div key={i} className="reveal" style={{
                        paddingLeft: "2.5rem", paddingBottom: "3rem", position: "relative",
                        transitionDelay: `${i * 0.15}s`
                    }}>
                        <div style={{
                            position: "absolute", left: -4, top: 6,
                            width: 9, height: 9, borderRadius: "50%",
                            background: "var(--accent)", boxShadow: "0 0 0 3px rgba(0,229,192,0.2)"
                        }} />
                        <p style={{ fontFamily: "var(--font-syne)", fontSize: "0.7rem", color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>{exp.date}</p>
                        <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "1.3rem", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "0.3rem" }}>{exp.title}</h3>
                        <p style={{ fontSize: "0.88rem", color: "var(--muted)", marginBottom: "1rem" }}>{exp.company}</p>
                        <p style={{ fontSize: "0.9rem", color: "var(--muted)", maxWidth: 600, lineHeight: 1.7 }}>{exp.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}