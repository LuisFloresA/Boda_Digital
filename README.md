# Invitación de Boda Digital 💍✨

Una invitación de boda digital ultra premium, interactiva y "mobile-first" desarrollada con **React** y **Vite**. Diseñada para sorprender a los invitados ("Wow Factor") mediante animaciones fluidas, un diseño elegante, y texturas hiperrealistas.

## 🌟 Características Principales

- **Sobre Interactivo 3D:** La experiencia comienza con un sobre cerrado que se abre mediante una animación suave en 3D (CSS puro) al tocarlo, revelando una carta interior con textura realista de papel algodón.
- **Sello de Cera Vectorial:** Un sello dorado dibujado en formato SVG que se asemeja a la cera derretida tradicional, completo con detalles de cuerdas colgantes.
- **Efecto de "Glassmorphism":** Paneles semitransparentes con desenfoque de fondo que albergan la información y destacan sobre las hermosas imágenes fotográficas generadas.
- **Animaciones "Scroll Reveal":** Impulsadas por `framer-motion`, todas las secciones (textos, itinerario, detalles) flotan elegantemente hacia arriba a medida que el invitado hace scroll.
- **Cuenta Regresiva en Vivo (Countdown):** Temporizador automático mostrando los días, horas, minutos y segundos exactos para el evento.
- **Itinerario (Timeline) Visual:** Una estructura clara para los distintos momentos del día de la boda.
- **Formulario RSVP Interactivo:** Integrado de manera limpia con el fondo de la invitación para confirmar asistencia directamente.

## 🛠️ Tecnologías Usadas

- **[React](https://reactjs.org/)** (v18+)
- **[Vite](https://vitejs.dev/)** para una experiencia de desarrollo veloz.
- **[Framer Motion](https://www.framer.com/motion/)** para las animaciones complejas de entrada y scroll.
- **[Lucide React](https://lucide.dev/)** para los íconos minimalistas.
- **CSS3 Avanzado** (Variables, 3D Transforms, `backdrop-filter`, y texturas de ruido Fractal SVG).

## 🚀 Cómo ejecutar el proyecto localmente

Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu máquina.

1. **Instala las dependencias:**
   ```bash
   npm install
   ```

2. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

3. Abre el enlace proporcionado en tu terminal (usualmente `http://localhost:5173`) en tu navegador web. Para tener la mejor experiencia, **se recomienda encarecidamente utilizar las herramientas de desarrollador de tu navegador y simular un dispositivo móvil**.

## 📦 Construcción para Producción (Despliegue)

El proyecto está configurado para exportarse como archivos estáticos, ideal para ser alojado gratuitamente en plataformas como **GitHub Pages**, **Vercel** o **Netlify**.

Ejecuta el siguiente comando para generar los archivos de producción:

```bash
npm run build
```

La carpeta `/dist` contendrá todo lo necesario (HTML, CSS, JS e imágenes) minificado y optimizado.

---
*Desarrollado con pasión para hacer del inicio de una gran historia, algo inolvidable.*
