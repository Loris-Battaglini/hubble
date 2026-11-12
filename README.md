# Huddle

Una landing page responsive per **Huddle**, realizzata con React, TypeScript e styled-components. La pagina presenta il prodotto, le sue funzionalità e i collegamenti social.

## ✨ Funzionalità

- Hero con call to action e illustrazione
- Sezioni con le funzionalità principali
- Footer con contatti e link social
- Layout adattabile a schermi di diverse dimensioni
- Componenti e tema stilizzati con styled-components

## 🧰 Tecnologie

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [styled-components](https://styled-components.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

## 🚀 Per iniziare

### Requisiti

- Node.js e npm

### Installazione

```bash
git clone <url-della-repository>
cd hubble
npm install
```

### Avvio in sviluppo

```bash
npm run dev
```

Apri nel browser l'indirizzo mostrato da Vite nel terminale, di solito `http://localhost:5173`.

## 📦 Build e controlli

Genera la build ottimizzata per la produzione:

```bash
npm run build
```

Visualizza localmente la build:

```bash
npm run preview
```

Esegui ESLint:

```bash
npm run lint
```

## 📁 Struttura del progetto

```text
src/
├── assets/
│   └── images/          # Logo e illustrazioni
├── components/
│   ├── styles/          # Stili globali e componenti styled
│   ├── Card.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── SocialIcons.tsx
│   └── content.ts      # Contenuti delle sezioni
├── App.tsx
└── main.tsx
```

## 🎨 Personalizzazione

Il tema condiviso — colori e breakpoint mobile — è definito in `src/App.tsx`. I contenuti delle schede sono raccolti in `src/components/content.ts`; i componenti e i relativi stili si trovano in `src/components/`.
