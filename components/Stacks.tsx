"use client";
import { useEffect, useRef } from "react";

const stack = [
    { icon: "⚡", name: "Next.js", type: "Frontend" },
    { icon: "🐍", name: "Python", type: "Backend" },
    { icon: "🎯", name: "Django", type: "Backend" },
    { icon: "📱", name: "Flutter", type: "Mobile" },
    { icon: "🔷", name: "C#", type: "Backend" },
    { icon: "🟣", name: ".NET", type: "Framework" },
    { icon: "🔥", name: "Firebase", type: "Cloud" },
    { icon: "🗄️", name: "SQL", type: "Datos" },
    { icon: "📊", name: "Apps Script", type: "Automatización" },
    { icon: "☁️", name: "Google Cloud", type: "Infraestructura" },
    { icon: "⚙️", name: "C++", type: "Sistemas" },
    { icon: "🤖", name: "IA", type: "Especialización" },
];

export default function Stack() {
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
                .stack-section {
                    background: var(--bg2);
                    border-top: 1px solid var(--border);
                    border-bottom: 1px solid var(--border);
                    padding: 7rem 4rem;
                }
                .stack-inner { max-width: 1200px; margin: 0 auto; }
                .stack-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
                    gap: 1rem;
                }
                @media (max-width: 768px) {
                    .stack-section { padding: 5rem 1.5rem; }
                    .stack-grid { grid-template-columns: repeat(2, 1fr); gap: 0.75rem; }
                }
                @media (max-width: 400px) {
                    .stack-grid { grid-template-columns: repeat(2, 1fr); }
                }
            `}</style>

            <div id="stack" ref={sectionRef} className="stack-section">
                <div className="stack-inner">
                    <p className="reveal" style={{ fontFamily: "var(--font-syne)", fontSize: "0.72rem", color: "var(--accent)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>
                        // 02 — Stack Técnico
                    </p>
                    <h2 className="reveal" style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3.2rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "3rem" }}>
                        Herramientas con las<br />que trabajo.
                    </h2>
                    <div className="stack-grid">
                        {stack.map((item, i) => (
                            <div key={item.name} className="reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                                <div
                                    style={{
                                        background: "var(--bg)", border: "1px solid var(--border)",
                                        borderRadius: 6, padding: "1.2rem", cursor: "default",
                                        transition: "all 0.25s", display: "flex", flexDirection: "column", gap: "0.5rem"
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.borderColor = "var(--accent)";
                                        e.currentTarget.style.transform = "translateY(-4px)";
                                        e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,229,192,0.1)";
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.borderColor = "var(--border)";
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.boxShadow = "none";
                                    }}
                                >
                                    <span style={{ fontSize: "1.5rem", lineHeight: 1 }}>{item.icon}</span>
                                    <span style={{ fontFamily: "var(--font-syne)", fontSize: "0.78rem", color: "var(--text)", fontWeight: 500 }}>{item.name}</span>
                                    <span style={{ fontFamily: "var(--font-syne)", fontSize: "0.65rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{item.type}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
