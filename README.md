# Cambios del portafolio — Instrucciones

## Archivos a reemplazar

Copia cada archivo a la carpeta correspondiente de tu proyecto:

| Archivo aquí             | Reemplaza en tu proyecto              |
|--------------------------|---------------------------------------|
| components/Proyects.tsx  | components/Proyects.tsx               |
| components/About.tsx     | components/About.tsx                  |
| components/Experience.tsx| components/Experience.tsx             |
| components/Contact.tsx   | components/Contact.tsx                |
| app/layout.tsx           | app/layout.tsx                        |
| app/page.tsx             | app/page.tsx                          |

---

## Foto de perfil

Renombra tu nueva foto a `foto.jpg` y colócala en la carpeta `public/` del proyecto:

```
public/foto.jpg   ← reemplaza la foto actual
```

---

## Cambios realizados

### components/Proyects.tsx
- Agregados 2 proyectos nuevos: **Canción de la India** (ERP agrícola, cliente real) y **Nevados Cerveza** (ERP propio, en desarrollo)
- Descripciones de todos los proyectos reescritas con enfoque de impacto
- Badges de "Cliente real" y "Proyecto propio" para diferenciar
- Los proyectos nuevos aparecen primero en la lista

### components/About.tsx
- Agregados 3 stats: proyectos en producción, años de experiencia
- Texto ajustado para sonar más profesional

### components/Experience.tsx
- Experiencia en IA Conexiones puesta primera (más reciente)
- Descripciones ampliadas con logros concretos (2.200 registros migrados, etc.)

### components/Contact.tsx
- CTA principal ahora es un botón grande de WhatsApp muy visible
- Email y teléfono son links clicables
- Footer actualizado a 2026
- Footer ahora dice "Disponible para trabajo remoto"
- Separador visual entre redes y datos de contacto

### app/layout.tsx
- Metadata de Open Graph agregada (mejora SEO y cómo se ve el link al compartir)
- Descripción mejorada con más keywords relevantes

### app/page.tsx
- Sin cambios funcionales (el import de Proyects sigue igual para no romper nada)

---

## Proyecto Nevados Cerveza — arreglar metadata

En el proyecto nevados-cerveza, abre `app/layout.tsx` y cambia:

```tsx
// ANTES (lo que hay ahora — aparece "Create Next App" en la pestaña)
export const metadata: Metadata = {
  title: "Create Next App",
  ...
}

// DESPUÉS
export const metadata: Metadata = {
  title: "Nevados — Cerveza Artesanal · Manizales",
  description: "Panel de gestión para Nevados Cerveza Artesanal. Manizales, Caldas.",
}
```
