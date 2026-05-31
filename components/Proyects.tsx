"use client";
import { useEffect, useRef } from "react";

const projects = [
    {
        type: "ERP Agrícola · Cliente Real",
        title: "Canción de la India",
        desc: "Sistema web integral de gestión y automatización para empresa agrícola en Manizales. Desarrollado bajo contrato formal. Gestión de lotes y rotaciones con actualización automática, registro de cortes en tiempo real con soporte offline, control de nómina, alertas inteligentes y migración de +2.200 registros históricos desde 2008.",
        tags: ["Next.js", "Python/Django", "REST API", "Google Cloud", "PWA"],
        link: "https://cancion-de-la-india.vercel.app/login",
        preview: "https://cancion-de-la-india.vercel.app/login",
        label: "En producción",
        icon: "🌿",
        badge: "Cliente real",
        badgeColor: "#00e5c0",
    },
    {
        type: "ERP · Proyecto Propio",
        title: "Nevados Cerveza",
        desc: "Plataforma de gestión integral para cervecería artesanal. Panel de brewmaster con autenticación por roles, control de recetas (ABV/IBU/OG), gestión de inventarios e insumos, pedidos, clientes y seguimiento de ganancias. Proyecto personal en desarrollo.",
        tags: ["Next.js", "Firebase", "TypeScript", "Tailwind CSS"],
        link: "https://nevados-cerveza.vercel.app/auth",
        preview: "https://nevados-cerveza.vercel.app/auth",
        label: "En desarrollo",
        icon: "🍺",
        badge: "Proyecto propio",
        badgeColor: "#0066ff",
    },
    {
        type: "Agencia Digital",
        title: "IA Conexiones",
        desc: "Sitio web corporativo de agencia de desarrollo de software. Diseño moderno con presentación de servicios, portafolio integrado y backend conectado a base de datos.",
        tags: ["Next.js", "SQL", "Diseño Web"],
        link: "https://iaconexiones.com/",
        preview: "https://iaconexiones.com/",
        staticImg: null,
        label: "Web",
        icon: null,
        badge: null,
        badgeColor: null,
    },
    {
        type: "Tienda Online",
        title: "LapTechMac",
        desc: "E-commerce de equipos Apple y tecnología con catálogos dinámicos conectados a base de datos, gestión de productos y flujo de compra completo.",
        tags: ["Next.js", "Base de Datos", "E-commerce"],
        link: "https://www.laptechmac.com/",
        preview: "https://www.laptechmac.com/",
        staticImg: null,
        label: "E-commerce",
        icon: null,
        badge: null,
        badgeColor: null,
    },
    {
        type: "Educación Digital",
        title: "Lección Mágica",
        desc: "Plataforma educativa con backend en Django, gestión dinámica de contenidos y componentes de aprendizaje interactivo. Integración de IA para personalización del contenido.",
        tags: ["Next.js", "Django", "EdTech", "IA"],
        link: "https://leccion-magica.iaconexiones.com/",
        preview: "https://leccion-magica.iaconexiones.com/",
        staticImg: null,
        label: "EdTech",
        icon: null,
        badge: null,
        badgeColor: null,
    },
    {
        type: "ERP · Aplicación Móvil",
        title: "ERP Empresa de Poda",
        desc: "Sistema de gestión empresarial móvil con sincronización en tiempo real. Registro de órdenes, seguimiento de personal y reportes automáticos integrados con Firebase y Google Sheets.",
        tags: ["Flutter", "Firebase", "Apps Script", "Google Sheets"],
        link: "https://play.google.com/store/apps/details?id=com.zonasverdes.app&pcampaignid=web_share",
        preview: null,
        staticImg: "Podando.jpg",
        label: "App Móvil",
        icon: "📱",
        badge: "Play Store",
        badgeColor: "#00e5c0",
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
                .project-card {
                    background: var(--bg2);
                    border: 1px solid var(--border);
                    border-radius: 8px;
                    overflow: hidden;
                    transition: all 0.3s;
                    display: flex;
                    flex-direction: column;
                }
                .project-card:hover {
                    border-color: rgba(0,229,192,0.4);
                    transform: translateY(-6px);
                    box-shadow: 0 20px 60px rgba(0,0,0,0.4);
                }
                .project-preview {
                    height: 200px;
                    position: relative;
                    overflow: hidden;
                    border-bottom: 1px solid var(--border);
                    background: var(--bg3);
                }
                .project-badge-status {
                    position: absolute;
                    top: 12px;
                    right: 12px;
                    z-index: 2;
                    background: rgba(8,12,16,0.85);
                    border: 1px solid rgba(0,229,192,0.3);
                    border-radius: 3px;
                    padding: 0.25rem 0.6rem;
                    font-family: var(--font-syne);
                    font-size: 0.65rem;
                    color: var(--accent);
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    backdrop-filter: blur(6px);
                }
                .project-extra-badge {
                    position: absolute;
                    top: 12px;
                    left: 12px;
                    z-index: 2;
                    border-radius: 3px;
                    padding: 0.25rem 0.6rem;
                    font-family: var(--font-syne);
                    font-size: 0.62rem;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    font-weight: 600;
                }
                .project-body {
                    padding: 1.5rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.8rem;
                    flex: 1;
                }
                .project-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.4rem;
                    font-family: var(--font-syne);
                    font-size: 0.75rem;
                    color: var(--accent);
                    text-decoration: none;
                    margin-top: 0.5rem;
                    transition: gap 0.2s;
                }
                .project-link:hover { gap: 0.8rem; }
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
                            <div className="project-card">
                                {/* PREVIEW */}
                                <div className="project-preview">
                                    {p.staticImg ? (
                                        <img
                                            src={p.staticImg}
                                            alt={`Preview de ${p.title}`}
                                            style={{
                                                width: "100%", height: "100%",
                                                objectFit: "cover", objectPosition: "top",
                                                display: "block"
                                            }}
                                        />
                                    ) : p.preview ? (
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
                                            fontSize: "3.5rem", opacity: 0.18
                                        }}>
                                            {p.icon}
                                        </div>
                                    )}

                                    <span className="project-badge-status">{p.label}</span>

                                    {p.badge && p.badgeColor && (
                                        <span className="project-extra-badge" style={{
                                            background: `${p.badgeColor}18`,
                                            border: `1px solid ${p.badgeColor}40`,
                                            color: p.badgeColor,
                                        }}>
                                            {p.badge}
                                        </span>
                                    )}
                                </div>

                                {/* BODY */}
                                <div className="project-body">
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
                                    <a
                                        href={p.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
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
