# YouFrame — página web

Página de **YouFrame** (@youframe.10): cuadros personalizados, restauración de fotos y espejos (LED, de maquillaje y a la medida) en Medellín. *Memoria visible.*

Es una sola página hecha con HTML, CSS y JavaScript. El inicio es un espejo que se abre a un **pasillo 3D** con los cuadros; después vienen la colección, el personalizador de acabados, el antes/después de restauración, el proceso y el pedido por WhatsApp.

| | |
|---|---|
| WhatsApp de pedidos | `573016148523` (en `site/js/content.js`) |
| Instagram | https://www.instagram.com/youframe.10/ |
| Hosting | Hosting propio de Miguel (pendiente de conectar) |
| Dominio | Pendiente |

## Carpetas

```
youframe-web/
├── site/                      ← LO QUE SE PUBLICA (esto va al hosting)
│   ├── index.html             estructura y textos de todas las secciones
│   ├── css/
│   │   └── styles.css         diseño: colores negro/oro, letras, botones, secciones
│   ├── js/
│   │   ├── content.js         ★ DATOS: WhatsApp, Instagram, cuadros del túnel, productos
│   │   └── main.js            túnel 3D, colección, personalizador, antes/después, animaciones
│   └── assets/
│       ├── img/               logo y otras imágenes de la marca
│       └── obras/             fotos de los cuadros reales (las que se ven en el túnel)
├── docs/
│   ├── ARQUITECTURA.md        cómo está armada la página y qué hace cada parte
│   ├── EDITAR-CONTENIDO.md    qué archivo tocar para cada cambio
│   └── PUBLICAR.md            cómo subirla al hosting
├── scripts/
│   ├── check.mjs              revisa que no falten archivos ni haya errores
│   └── build.mjs              prepara dist/ para subir al hosting
├── .github/workflows/check.yml   revisión automática en cada cambio
└── package.json               comandos: dev, check, build
```

## Comandos

Necesitas [Node.js](https://nodejs.org) 20 o más nuevo.

```bash
npm run dev      # abre la página en http://localhost:3000 para probar
npm run check    # revisa antes de publicar
npm run build    # crea dist/ lista para subir al hosting
```

> Abre la página siempre con `npm run dev`, no con doble clic en `index.html`: el pasillo 3D necesita un servidor para cargar las fotos.

## Cómo trabajar

1. Haz el cambio (en GitHub directamente o en tu computador).
2. Guárdalo en la rama `main`.
3. GitHub revisa solo que todo esté bien (pestaña **Actions**).
4. Publica en el hosting (ver `docs/PUBLICAR.md`).

## Pendientes antes de lanzar

- [ ] Fotos reales de los cuadros en `site/assets/obras/` y enlazarlas en `OBRAS` (`site/js/content.js`); hoy solo "Princesa" es real, el resto son ilustraciones de ejemplo
- [ ] Confirmar textos, tamaños y acabados de cada cuadro
- [ ] Conectar el hosting y el dominio
