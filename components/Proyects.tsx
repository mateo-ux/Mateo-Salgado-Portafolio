"use client";
import { useEffect, useRef } from "react";

const projects = [
    {
        type: "Agencia Digital",
        title: "IA Conexiones",
        desc: "Sitio web corporativo de la empresa de desarrollo. Diseño moderno, presentación de servicios y portafolio integrado.",
        tags: ["Next.js", "SQL", "Diseño Web"],
        link: "https://iaconexiones.com/",
        preview: "https://iaconexiones.com/",
        label: "Web",
    },
    {
        type: "Tienda Online",
        title: "LapTechMac",
        desc: "Plataforma de venta de equipos Apple y tecnología. Catálogos dinámicos conectados a base de datos.",
        tags: ["Next.js", "Base de Datos", "E-commerce"],
        link: "https://www.laptechmac.com/",
        preview: "https://www.laptechmac.com/",
        label: "E-commerce",
    },
    {
        type: "Educación Digital",
        title: "Lección Mágica",
        desc: "Aplicación web educativa con backend conectado y gestión de contenidos dinámica.",
        tags: ["Next.js", "Django", "EdTech", "IA"],
        link: "https://leccion-magica.iaconexiones.com/",
        preview: "https://leccion-magica.iaconexiones.com/",
        label: "EdTech",
    },
    {
        type: "ERP · Aplicación Móvil",
        title: "ERP Empresa de Poda",
        desc: "Sistema de gestión empresarial móvil. Sincronización en tiempo real con Firebase y Google Sheets.",
        tags: ["Flutter", "Firebase", "Apps Script", "Google Sheets"],
        link: "https://play.google.com/store/apps/details?id=com.zonasverdes.app&pcampaignid=web_share",
        preview: null,
        label: "App Móvil",
        icon: "📱",
    },
];

export default function Projects() {
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
                .projects-section {
                    padding: 7rem 4rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1.5rem;
                }
                @media (max-width: 768px) {
                    .projects-section { padding: 5rem 1.5rem; }
                    .projects-grid { grid-template-columns: 1fr; }
                }
            `}</style>

            <section id="proyectos" ref={sectionRef} className="projects-section">
                <p className="reveal" style={{
                    fontFamily: "var(--font-syne)", fontSize: "0.72rem", color: "var(--accent)",
                    letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem"
                }}>
                    // 03 — Proyectos
                </p>
                <h2 className="reveal" style={{
                    fontFamily: "var(--font-syne)", fontWeight: 700,
                    fontSize: "clamp(2rem, 4vw, 3.2rem)", letterSpacing: "-0.03em",
                    lineHeight: 1.1, marginBottom: "3rem"
                }}>
                    Lo que he construido.
                </h2>

                <div className="projects-grid">
                    {projects.map((p, i) => (
                        <div key={p.title} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                            <div
                                style={{
                                    background: "var(--bg2)", border: "1px solid var(--border)",
                                    borderRadius: 8, overflow: "hidden", transition: "all 0.3s",
                                    display: "flex", flexDirection: "column"
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.borderColor = "rgba(0,229,192,0.4)";
                                    e.currentTarget.style.transform = "translateY(-6px)";
                                    e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.4)";
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.borderColor = "var(--border)";
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "none";
                                }}
                            >
                                {/* PREVIEW */}
                                <div style={{
                                    height: 200, position: "relative", overflow: "hidden",
                                    borderBottom: "1px solid var(--border)",
                                    background: "var(--bg3)"
                                }}>
                                    {p.preview ? (
                                        <>
                                            <iframe
                                                src={p.preview}
                                                title={p.title}
                                                scrolling="no"
                                                style={{
                                                    width: "200%", height: "200%",
                                                    transform: "scale(0.5)", transformOrigin: "top left",
                                                    border: "none", pointerEvents: "none",
                                                }}
                                            />
                                            <div style={{
                                                position: "absolute", inset: 0,
                                                background: "linear-gradient(to bottom, transparent 50%, var(--bg2) 100%)",
                                                pointerEvents: "none"
                                            }} />
                                        </>
                                    ) : (
                                        <div style={{
                                            width: "100%", height: "100%",
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                            fontSize: "3rem", opacity: 0.15
                                        }}>
                                            {p.icon}
                                        </div>
                                    )}

                                    <span style={{
                                        position: "absolute", top: 12, right: 12, zIndex: 2,
                                        background: "rgba(8,12,16,0.85)", border: "1px solid rgba(0,229,192,0.3)",
                                        borderRadius: 3, padding: "0.25rem 0.6rem",
                                        fontFamily: "var(--font-syne)", fontSize: "0.65rem",
                                        color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase",
                                        backdropFilter: "blur(6px)"
                                    }}>{p.label}</span>
                                </div>

                                {/* BODY */}
                                <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.8rem", flex: 1 }}>
                                    <span style={{
                                        fontFamily: "var(--font-syne)", fontSize: "0.65rem",
                                        color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.15em"
                                    }}>{p.type}</span>
                                    <h3 style={{
                                        fontFamily: "var(--font-syne)", fontSize: "1.2rem",
                                        fontWeight: 700, letterSpacing: "-0.02em"
                                    }}>{p.title}</h3>
                                    <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.6, flex: 1 }}>{p.desc}</p>
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                                        {p.tags.map(tag => (
                                            <span key={tag} style={{
                                                background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)",
                                                borderRadius: 3, padding: "0.2rem 0.6rem",
                                                fontFamily: "var(--font-syne)", fontSize: "0.65rem", color: "var(--muted)"
                                            }}>{tag}</span>
                                        ))}
                                    </div>
                                    <a href={p.link} target="_blank" rel="noopener noreferrer" style={{
                                        display: "inline-flex", alignItems: "center", gap: "0.4rem",
                                        fontFamily: "var(--font-syne)", fontSize: "0.75rem",
                                        color: "var(--accent)", textDecoration: "none", marginTop: "0.5rem", transition: "gap 0.2s"
                                    }}
                                        onMouseEnter={e => e.currentTarget.style.gap = "0.8rem"}
                                        onMouseLeave={e => e.currentTarget.style.gap = "0.4rem"}
                                    >
                                        Ver proyecto →
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
