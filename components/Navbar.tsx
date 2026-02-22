"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
    ["Sobre mí", "#sobre-mi"],
    ["Stack", "#stack"],
    ["Proyectos", "#proyectos"],
    ["Experiencia", "#experiencia"],
    ["Contacto", "#contacto"],
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const onResize = () => { if (window.innerWidth > 768) setOpen(false); };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [open]);

    return (
        <>
            <style>{`
                .navbar {
                    position: fixed; top: 0; left: 0; right: 0; z-index: 200;
                    display: flex; justify-content: space-between; align-items: center;
                    padding: 1.2rem 4rem;
                    backdrop-filter: blur(20px);
                    background: rgba(8,12,16,0.7);
                    border-bottom: 1px solid var(--border);
                    transition: padding 0.3s;
                }
                .navbar.scrolled { padding-top: 0.8rem; padding-bottom: 0.8rem; }
                .nav-links { display: flex; gap: 2.5rem; list-style: none; margin: 0; padding: 0; }

                .hamburger {
                    display: none; flex-direction: column; gap: 5px;
                    cursor: pointer; background: none; border: none; padding: 4px; z-index: 202;
                }
                .hamburger span {
                    display: block; width: 24px; height: 2px;
                    background: var(--text); transition: all 0.3s;
                }
                .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
                .hamburger.open span:nth-child(2) { opacity: 0; }
                .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

                /* Dim overlay */
                .mobile-overlay {
                    position: fixed; inset: 0; z-index: 198;
                    background: rgba(0,0,0,0.6);
                    backdrop-filter: blur(3px);
                    opacity: 0; pointer-events: none;
                    transition: opacity 0.3s ease;
                }
                .mobile-overlay.open {
                    opacity: 1; pointer-events: all;
                }

                /* Sidebar */
                .mobile-sidebar {
                    position: fixed; top: 0; right: 0; bottom: 0; z-index: 199;
                    background: rgba(10,15,20,0.98);
                    border-left: 1px solid var(--border);
                    backdrop-filter: blur(24px);
                    padding: 6rem 2.5rem 3rem 2rem;
                    display: flex; flex-direction: column;
                    gap: 0.3rem;
                    min-width: 200px;
                    width: max-content;
                    transform: translateX(100%);
                    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: -8px 0 40px rgba(0,0,0,0.5);
                }
                .mobile-sidebar.open { transform: translateX(0); }
                .mobile-sidebar a {
                    font-family: var(--font-syne);
                    font-size: 0.85rem; font-weight: 600;
                    color: var(--muted); text-decoration: none;
                    letter-spacing: 0.12em; text-transform: uppercase;
                    padding: 0.7rem 1rem;
                    border-radius: 4px;
                    border-left: 2px solid transparent;
                    transition: all 0.2s;
                    white-space: nowrap;
                }
                .mobile-sidebar a:hover {
                    color: var(--accent);
                    border-left-color: var(--accent);
                    background: rgba(0,229,192,0.06);
                    padding-left: 1.4rem;
                }

                @media (max-width: 768px) {
                    .navbar { padding: 1rem 1.5rem; }
                    .nav-links { display: none; }
                    .hamburger { display: flex; }
                }
            `}</style>

            <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
                <Link href="/" style={{
                    fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "1.1rem",
                    letterSpacing: "-0.02em", color: "var(--text)", textDecoration: "none"
                }}>
                    MS<span style={{ color: "var(--accent)" }}>.</span>
                </Link>

                <ul className="nav-links">
                    {navLinks.map(([label, href]) => (
                        <li key={href}>
                            <a href={href} style={{
                                fontFamily: "var(--font-syne)", fontSize: "0.75rem",
                                color: "var(--muted)", textDecoration: "none",
                                letterSpacing: "0.1em", textTransform: "uppercase",
                                transition: "color 0.2s"
                            }}
                                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                                onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    className={`hamburger${open ? " open" : ""}`}
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </nav>

            <div className={`mobile-overlay${open ? " open" : ""}`} onClick={() => setOpen(false)} />
            <div className={`mobile-sidebar${open ? " open" : ""}`}>
                {navLinks.map(([label, href]) => (
                    <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
                ))}
            </div>
        </>
    );
}
