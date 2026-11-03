# Cómo se publica — YouFrame

## GitHub Pages (automático, para ver y compartir)

Cada cambio guardado en `main` se publica solo en **https://ruso13miguel.github.io/Youframe-web/** (archivo `.github/workflows/pages.yml`). En la pestaña **Actions** ves "Publicar en GitHub Pages": ✓ verde = ya está en vivo.

Si algún día sale en rojo diciendo que Pages no está activado: **Settings → Pages → Source: GitHub Actions**.

## Hosting propio (Hostinger)

Lo que hay en la carpeta `site/` es la página completa. Para publicarla se sube a la carpeta pública del hosting (normalmente `public_html`).

## 1. Preparar los archivos

```bash
npm run check   # revisa que todo esté bien
npm run build   # crea la carpeta dist/
```

`dist/` es una copia de `site/` con la versión puesta, para que los visitantes no vean CSS/JS viejo. **Lo que se sube es el contenido de `dist/`** (no la carpeta `dist` en sí).

## 2. Subir al hosting

**Con el administrador de archivos del hosting (cPanel / hPanel):**

1. Entra al panel del hosting → **Administrador de archivos** → `public_html`.
2. Borra lo que había de la página anterior (si había).
3. Sube todo lo que hay dentro de `dist/`: `index.html`, `css/`, `js/`, `assets/`.
4. Abre el dominio y revisa.

**Con FTP (FileZilla):** conecta con los datos FTP del hosting y arrastra el contenido de `dist/` a `public_html`.

## Más adelante: publicación automática

Cuando el hosting esté listo, se puede hacer que GitHub suba la página solo cada vez que se guarda en `main` (por FTP, con los datos guardados en **Settings → Secrets** del repositorio, nunca dentro de un archivo). Se agrega como un paso más en `.github/workflows/check.yml`.

## Importante

- Los cambios se hacen siempre aquí (GitHub o la carpeta del PC), nunca directo en el hosting: la próxima subida reemplaza lo que haya allá.
- `__VERSION__` en `index.html` no se toca: `npm run build` lo cambia solo.
