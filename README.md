# Clear View Escapes

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-BDD-45ba4b?logo=playwright&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS-Modules-000000?logo=css3&logoColor=white)

> *Your clarity. One trip away.*

Landing page moderna para a **Clear View Escapes**, uma empresa de viagens focada em criar jornadas que restauram a alma — *"We create soul restoring journeys that inspire you to be you."*

---

## Sobre o Projeto

O site é uma single-page application responsiva com as seguintes seções:

| Seção | Descrição |
|---|---|
| **Header** | Navegação com logo e links âncora para as seções |
| **Hero** | Imagem de destaque com headline e chamada para ação |
| **Our Beginning** | História da empresa com imagens responsivas |
| **Features** | 4 diferenciais: previsão do tempo, guias globais, Wi-Fi e kit de sobrevivência |
| **Testimonials** | Depoimentos de clientes com fotos e número de viagens realizadas |
| **Footer** | Informações de contato e copyright |

---

## Tech Stack

- **Framework:** React 18 + Vite 5
- **Estilização:** CSS Modules com variáveis CSS customizadas
- **Testes:** Playwright com BDD (Gherkin via `playwright-bdd`)
- **Imagens:** Otimização para WebP com `sharp`, elementos `<picture>` responsivos com variantes hi-DPI (2×)

---

## Estrutura de Pastas

```
travel-site/
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css               # Variáveis CSS globais e reset
│   └── components/
│       ├── Header/
│       ├── Hero/
│       ├── OurBeginning/
│       ├── Features/
│       ├── Testimonials/
│       └── Footer/
├── tests/
│   ├── features/               # Arquivos Gherkin (.feature)
│   └── steps/                  # Step definitions Playwright
├── scripts/
│   └── convert-webp.js         # Conversão de imagens para WebP
├── index.html
├── vite.config.js
└── playwright.config.js
```

---

## Como Rodar

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
# → http://localhost:5173

# Build de produção
npm run build

# Preview do build gerado
npm run preview
```

---

## Testes

Os testes usam BDD com arquivos `.feature` em sintaxe Gherkin, rodando via Playwright em Desktop Chrome e Mobile (Pixel 5).

```bash
# Rodar todos os testes
npm run test

# Interface visual interativa
npm run test:ui

# Abrir relatório HTML
npm run test:report
```

**Cobertura:** 5 feature files, 21 cenários — hero, navegação, features, testimonials e acessibilidade.

---

## Otimização de Imagens

```bash
npm run convert-images
```

Converte os JPGs de `src/assets/images/` para WebP com qualidade 85%. Os componentes usam `<picture>` com múltiplos breakpoints (401px, 641px, 1025px+) e variantes retina (2×), com fallback para JPG em navegadores sem suporte a WebP.
