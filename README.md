# 🧮 Calculadora React (Vite)

Aplicación web de calculadora desarrollada con **React + Vite**, enfocada en una interfaz moderna, lógica robusta y manejo correcto de entradas del usuario.

---

## 🚀 Tecnologías

- ⚛️ React
- ⚡ Vite
- 🧠 JavaScript (ES6+)
- 🎨 CSS (UI moderna, dark theme)

---

## 🎯 Funcionalidades

- ✔️ Operaciones básicas: suma, resta, multiplicación y división  
- ✔️ Evaluación de expresiones completas  
- ✔️ Prevención de errores (división por cero, NaN, etc.)  
- ✔️ Control de entrada:
  - No permite múltiples operadores seguidos  
  - Evita múltiples decimales en un mismo número  
  - Bloquea ceros innecesarios  
- ✔️ Botón de borrado (`⌫`) carácter por carácter  
- ✔️ Botón de limpieza total (`Clear`)  
- ✔️ Manejo de errores visual (`Error`)  
- ✔️ Soporte para teclado (si está implementado)

---

## 🧠 Lógica destacada

Evaluación de expresiones usando:

```js
Function(`"use strict"; return (${expression})`)()
```

Validación previa con expresiones regulares (ej: división por cero) y control completo del input mediante `handleButton`.

---

## 📂 Estructura del proyecto

```bash
src/
│── components/
│   ├── Button.jsx
│   ├── ButtonGrid.jsx
│   ├── Display.jsx
│
│── App.jsx
│── main.jsx
│── index.css
```

---

## ⚙️ Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/interactive-calculator-react.git
```

2. Entrar al proyecto:

```bash
cd interactive-calculator-react
```

3. Instalar dependencias:

```bash
npm install
```

4. Ejecutar en desarrollo:

```bash
npm run dev
```

---

## 🌐 Acceso

Abrir en el navegador:

```
http://localhost:5173
```

---

## 🎨 UI / UX

- Diseño oscuro moderno  
- Botones con hover y animaciones  
- Layout en grid organizado  
- Centrado completo en pantalla  

---

## 📌 Posibles mejoras

- 🤖 Implementar lógica sin `Function` (parser matemático)  
- 📱 Mejorar responsive para móviles  
- 🧾 Historial de operaciones  
- 🎨 Temas (claro/oscuro)  
- 🧠 Soporte para paréntesis  

---

## 👨‍💻 Autor

**Sebastián Montoya**

