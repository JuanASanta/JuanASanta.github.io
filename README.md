# Portfolio

Sitio estático (HTML/CSS/JS puro, sin build) listo para GitHub Pages.

## Antes de publicar — rellena estos datos

En `index.html`:
- `[Tu Nombre]` (aparece en el `<title>`, el meta description y el hero)
- `tu@email.com` (dos sitios: hero y contacto)
- `https://github.com/tu-usuario`
- `https://linkedin.com/in/tu-usuario`
- Los `href="#"` de cada proyecto → enlaces a tu repo/demo/documentación reales
- El texto de las 3 tarjetas de proyecto (QA Automation, Backend, QA Manual) si tus proyectos reales tienen otro nombre o descripción

## Desplegar en GitHub Pages

1. Crea un repositorio nuevo (puede llamarse `tu-usuario.github.io` para que quede en la raíz de tu dominio, o cualquier otro nombre).
2. Sube estos tres archivos (`index.html`, `style.css`, `script.js`) a la raíz del repo.
3. En GitHub: **Settings → Pages → Source → Deploy from a branch**, elige la rama `main` y la carpeta `/ (root)`.
4. Guarda. En 1-2 minutos tu portfolio estará en `https://tu-usuario.github.io/nombre-repo/` (o en `https://tu-usuario.github.io/` si usaste el repo especial).

## Estructura

- `index.html` — contenido y estructura
- `style.css` — todo el estilo (variables de color/tipografía arriba del todo)
- `script.js` — animación de "test runner" al cargar (respeta `prefers-reduced-motion`)

Sin dependencias externas salvo la fuente IBM Plex Mono/Sans, cargada desde Google Fonts.
