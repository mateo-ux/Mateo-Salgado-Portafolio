"use client";
import React, { useEffect, useRef } from "react";

const WHATSAPP_NUMBER = "573209389636";
const PHONE_NUMBER = "tel:+573209389636";

const GithubIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

interface LinkItem {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const links: LinkItem[] = [
  { icon: <GithubIcon />, label: "GitHub", href: "https://github.com/mateo-ux" },
  { icon: <LinkedinIcon />, label: "LinkedIn", href: "https://www.linkedin.com/in/mateo-alejandro-salgado-salgado" },
  { icon: <InstagramIcon />, label: "Instagram", href: "https://www.instagram.com/mateoalejandrosalgado/" },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.borderColor = "var(--accent)";
    e.currentTarget.style.color = "var(--accent)";
    e.currentTarget.style.transform = "translateY(-2px)";
  };
  const handleLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.borderColor = "var(--border)";
    e.currentTarget.style.color = "var(--text)";
    e.currentTarget.style.transform = "translateY(0)";
  };

  const waUrl =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=Hola%20Mateo%2C%20vi%20tu%20portafolio%20y%20me%20gustaria%20hablar%20contigo.";

  return (
    <>
      <style>{`
                .contact-section {
                    background: var(--bg2);
                    border-top: 1px solid var(--border);
                    padding: 7rem 4rem;
                    text-align: center;
                }
                .contact-links {
                    display: flex;
                    justify-content: center;
                    gap: 1.2rem;
                    flex-wrap: wrap;
                }
                .contact-footer {
                    padding: 2rem 4rem;
                    border-top: 1px solid var(--border);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }
                .float-btns {
                    position: fixed;
                    bottom: 2rem; right: 2rem;
                    display: flex; flex-direction: column; gap: 0.75rem;
                    z-index: 200;
                }
                @media (max-width: 768px) {
                    .contact-section { padding: 5rem 1.5rem; }
                    .contact-footer { padding: 1.5rem; justify-content: center; text-align: center; }
                    .contact-links { gap: 0.75rem; }
                    .contact-links a { padding: 0.7rem 1.2rem !important; font-size: 0.72rem !important; }
                    .float-btns { bottom: 1.2rem; right: 1.2rem; }
                }
            `}</style>

      <React.Fragment>
        <div id="contacto" ref={sectionRef} className="contact-section">
          <h2
            className="reveal"
            style={{
              fontFamily: "var(--font-syne)", fontWeight: 800,
              fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.04em", marginBottom: "1rem",
            }}
          >
            Trabajamos{" "}
            <span style={{
              background: "linear-gradient(90deg, var(--accent), var(--accent2))",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              juntos?
            </span>
          </h2>

          <p className="reveal" style={{ color: "var(--muted)", maxWidth: 400, margin: "0 auto 2rem" }}>
            Disponible para proyectos en desarrollo web y móvil.
          </p>

          <div className="reveal" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem", marginBottom: "2rem" }}>
            <p style={{ fontFamily: "var(--font-syne)", fontSize: "0.78rem", color: "var(--muted)", letterSpacing: "0.08em" }}>
              📧 mateosalgado555@gmail.com
            </p>
            <p style={{ fontFamily: "var(--font-syne)", fontSize: "0.78rem", color: "var(--muted)", letterSpacing: "0.08em" }}>
              📞 +57 320 938 9636
            </p>
          </div>

          <div className="reveal contact-links">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  background: "var(--bg)", border: "1px solid var(--border)",
                  borderRadius: 4, padding: "0.8rem 1.5rem",
                  fontFamily: "var(--font-syne)", fontSize: "0.78rem",
                  color: "var(--text)", textDecoration: "none", transition: "all 0.25s",
                }}
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <footer className="contact-footer">
          <p style={{ fontFamily: "var(--font-syne)", fontSize: "0.7rem", color: "var(--muted)" }}>
            2025 Mateo Alejandro Salgado Salgado
          </p>
          <p style={{ fontFamily: "var(--font-syne)", fontSize: "0.7rem", color: "var(--muted)" }}>
            Manizales, Colombia
          </p>
        </footer>

        {/* Floating buttons */}
        <div className="float-btns">
          <a
            href={PHONE_NUMBER}
            title="Llamar"
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.transform = "scale(1)";
            }}
            style={{
              width: 52, height: 52, borderRadius: "50%",
              background: "var(--bg2)", border: "1px solid var(--border)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1.3rem", textDecoration: "none",
              boxShadow: "0 4px 20px rgba(0,0,0,0.4)", transition: "all 0.25s",
            }}
          >
            📞
          </a>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
            onMouseEnter={e => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(37,211,102,0.5)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,211,102,0.35)";
            }}
            style={{
              width: 56, height: 56, borderRadius: "50%",
              background: "#25d366",
              display: "flex", alignItems: "center", justifyContent: "center",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(37,211,102,0.35)", transition: "all 0.25s",
            }}
          >
            <svg viewBox="0 0 24 24" fill="white" width={26} height={26}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.549 4.112 1.509 5.843L.057 23.428a.75.75 0 0 0 .916.916l5.585-1.452A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.686-.504-5.222-1.383l-.374-.214-3.876 1.007 1.007-3.876-.214-.374A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
          </a>
        </div>
      </React.Fragment>
    </>
  );
}
