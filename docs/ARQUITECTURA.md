# Arquitectura — YouFrame

## Cómo funciona

```
GitHub (youframe-web)                 Hosting
┌──────────────────┐  npm run build   ┌────────────────────┐
│ site/            │ ───────────────► │ public_html/       │ ──► dominio de YouFrame
│  index.html      │   (dist/)        │ (archivos estáticos)│
│  css/ js/ assets/│                  └────────────────────┘
└──────────────────┘
```

- No hay base de datos ni servidor propio: es HTML + CSS + JavaScript que el navegador ejecuta.
- Los pedidos no se guardan en la página: los botones abren **WhatsApp** con un mensaje ya escrito (cuadro, tamaño y acabado elegidos).
- Las fotos y el logo viven en `site/assets/`.

## Librerías (se cargan desde internet, CDN)

| Librería | Versión | Para qué |
|---|---|---|
| three.js | 0.149.0 | el pasillo 3D del inicio |
| GSAP + ScrollTrigger | 3.12.5 | animaciones al hacer scroll |
| Lenis | 1.0.42 | scroll suave |
| Google Fonts | — | Cinzel (títulos), Cormorant Garamond (frases), EB Garamond (texto) |

## Orden de carga

| # | Archivo | Para qué |
|---|---|---|
| 1 | `css/styles.css` | Variables de color (`--fondo`, `--oro`, `--plata`…), letras y todas las secciones |
| 2 | librerías CDN | three.js, GSAP, ScrollTrigger, Lenis |
| 3 | `js/content.js` | Define los datos: `WHATSAPP`, `INSTAGRAM`, `OBRAS`, `PRODUCTOS` |
| 4 | `js/main.js` | Usa esos datos para construir y animar las secciones |

## Secciones de la página (de arriba a abajo)

| Sección | id en index.html | La construye |
|---|---|---|
| Pantalla de carga con el logo | `#loader` | HTML + `main.js` |
| Menú | `nav.top` | HTML |
| Pasillo 3D (entrar al espejo) | `#tunel` | `main.js` con `OBRAS` (three.js) |
| Lo que podemos hacer | `#coleccion` | `main.js` con `PRODUCTOS` (carrusel arrastrable) |
| Un recuerdo, cuatro acabados | `#hazlo-tuyo` | `main.js` (marco 3D con oro, plata, negro, madera) |
| Restauración antes/después | `#restauracion` | `main.js` |
| Proceso (4 pasos) | `#proceso` | HTML |
| Envíos (Medellín y Colombia) | sección sin id | HTML |
| Llamado final | `#pedir` | HTML + botones de WhatsApp de `main.js` |
| Caja de detalle de un cuadro | `#caja` | `main.js` |

## Partes de `main.js`

`ilustraciones de ejemplo` (dibuja los cuadros que aún no tienen foto) · `loader` · `scroll suave` · `túnel 3D` · `cursor` · `caja de detalle` · `colección arrastrable` · `personalizador` · `antes / después` · `WhatsApp` · `revelados de texto`.

## Archivos fuera de `site/`

- `scripts/check.mjs`: revisa que existan los archivos enlazados y que el JavaScript no tenga errores.
- `scripts/build.mjs`: copia `site/` a `dist/` y cambia `__VERSION__` para que los navegadores no usen CSS/JS viejo.
- `.github/workflows/check.yml`: corre la revisión en cada cambio en GitHub.
