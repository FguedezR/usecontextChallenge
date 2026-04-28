# useContext Challenge

Ejercicio práctico de React para aprender a gestionar estado global con `useContext` y `useState`, implementando un sistema de temas light/dark.

## Tecnologías

- React 18
- React Router DOM
- Vite
- CSS vanilla

## Estructura del proyecto

```
├── src/
│   ├── components/
│   │   └── Button.jsx        # Botón para alternar el tema
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Profile.jsx
│   │   └── MyJob.jsx
│   ├── routes/
│   │   └── RoutesApp.jsx     # Configuración de rutas
│   ├── themes/
│   │   └── ThemeContext.jsx  # Contexto y proveedor del tema
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
└── index.html
```

## Instalación

```bash
npm install
npm run dev
```

## Funcionamiento

El estado del tema (`light` / `dark`) se gestiona en `ThemeContext.jsx` mediante `useState`. El `ThemeProvider` envuelve toda la aplicación en `App.jsx` y expone el valor del tema y la función `toggleTheme` a través del contexto. Cualquier componente puede consumir ese contexto con el hook personalizado `useTheme`.

Al pulsar el botón, la clase CSS de la sección principal cambia entre `App light` y `App dark`, aplicando los estilos correspondientes definidos en `index.css`.

## Conceptos practicados

- `createContext` y `useContext`
- Hook personalizado (`useTheme`)
- `useState` para estado global
- React Router DOM con `BrowserRouter`, `Routes`, `Route` y `Link`
- Aplicación dinámica de clases CSS según estado