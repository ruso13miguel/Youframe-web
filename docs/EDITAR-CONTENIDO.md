# Qué archivo tocar para cada cambio — YouFrame

| Quiero cambiar… | Archivo | Dónde |
|---|---|---|
| Número de WhatsApp | `site/js/content.js` | `WHATSAPP` (con indicativo, sin `+` ni espacios: `573016148523`) |
| Link de Instagram | `site/js/content.js` | `INSTAGRAM` |
| Cuadros del pasillo 3D | `site/js/content.js` | `OBRAS` (título, tipo, medida, marco, foto) |
| Productos de la colección | `site/js/content.js` | `PRODUCTOS` |
| Títulos y textos de las secciones | `site/index.html` | busca el texto y cámbialo |
| Colores de la marca | `site/css/styles.css` | `:root` al principio (`--fondo`, `--oro`, `--oro-brillo`, `--plata`…) |
| Logo | `site/assets/img/logo-youframe.webp` | reemplaza el archivo con el mismo nombre |
| Tiempos de envío | `site/index.html` | sección "Envíos" |

## Poner la foto real de un cuadro

1. Guarda la foto en `site/assets/obras/` con un nombre corto, sin espacios ni tildes (ej. `boda-ana.webp`). Mejor en `.webp` o `.jpg`, de unos 1000 px de alto.
2. En `site/js/content.js`, dentro de `OBRAS`, pon la ruta en `src`:
   ```js
   {t:"Boda de Ana", tipo:"Cuadro personalizado", med:"50 × 70 cm", marco:"Oro", k:"pareja", src:"assets/obras/boda-ana.webp"},
   ```
3. Si `src` está vacío (`src:""`), se muestra una ilustración de ejemplo según `k` (`atardecer`, `ciudad`, `flores`, `sepia`, `pareja`, `cafetal`, `mar`, `abstracto`).

## Cuidado al editar `content.js`

Es JavaScript: cada texto va entre comillas `"..."`, los elementos se separan con coma y no se borran los `[` `]` `{` `}`. Si algo queda mal, `npm run check` o GitHub (Actions en rojo) lo avisa.
