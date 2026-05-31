"use client";
import { useEffect, useRef } from "react";

const experience = [
    {
        date: "Nov 2024 — Jun 2026",
        title: "Soporte de Plataformas y Desarrollador Full Stack",
        company: "Universidad de Caldas · Manizales, Colombia",
        desc: "Desarrollo de herramientas internas con Python y Next.js, administración de plataformas Moodle y SIGA, automatizaciones con Google Apps Script y generación de reportes dinámicos en Google Sheets conectados con sistemas académicos. Programa Talento Tech.",
    },
    {
        date: "Nov 2025 — Abr 2026",
        title: "Desarrollador Full Stack",
        company: "IA Conexiones · Colombia",
        desc: "Desarrollo de sistemas web completos con backend conectado, apps móvil ERP en Flutter con Firebase, e integración de bases de datos SQL con frontends en Next.js para clientes de distintos sectores. Entre los proyectos entregados: sistema ERP agrícola con más de 2.200 registros migrados y plataforma educativa con IA.",
    },
    {
        date: "Jun 2023 — Nov 2023",
        title: "Analista de Eficiencia Operacional",
        company: "Veolia Servicios Industriales · Colombia",
        desc: "Implementación de soluciones IoT para adquisición y análisis de datos industriales. Análisis de datos operativos para identificar oportunidades de mejora y automatización. Reportes de monitoreo mediante SQL integrado con Excel y Report Builder.",
    },
    {
        date: "Sep 2021 — Mar 2022",
        title: "Practicante de Automatización y Proyectos",
        company: "Arme S.A.",
        desc: "Reportes de monitoreo industrial mediante consultas SQL e integración con Excel y Report Builder.",
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
        <>
            <style>{`
                .experience-section {
                    padding: 7rem 4rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                @media (max-width: 768px) {
                    .experience-section { padding: 5rem 1.5rem; }
                }
            `}</style>

            <section id="experiencia" ref={sectionRef} className="experience-section">
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
                            <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(1rem, 3vw, 1.3rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "0.3rem" }}>{exp.title}</h3>
                            <p style={{ fontSize: "0.88rem", color: "var(--muted)", marginBottom: "1rem" }}>{exp.company}</p>
                            <p style={{ fontSize: "0.9rem", color: "var(--muted)", maxWidth: 600, lineHeight: 1.7 }}>{exp.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
