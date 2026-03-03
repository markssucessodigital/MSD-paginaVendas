# 📁 Estrutura do Projeto MSD Landing Page

```
frontend/
├── .env                        # ⚙️ Configurações (Analytics IDs)
├── .gitignore                  # Git ignore
├── package.json                # Dependências do projeto
├── tailwind.config.js          # Configuração Tailwind CSS
├── craco.config.js             # Configuração Create React App
├── postcss.config.js           # Configuração PostCSS
│
├── public/
│   └── index.html              # 🔍 SEO meta tags configurados aqui
│
└── src/
    ├── App.js                  # 🎯 Aplicação principal
    ├── App.css                 # Estilos do App
    ├── index.js                # Entry point React
    ├── index.css               # 🎨 Estilos globais + Tailwind
    │
    ├── components/             # 📦 Todos os componentes da LP
    │   ├── Hero.jsx                    # Seção Hero
    │   ├── Problems.jsx                # Seção Problemas
    │   ├── StrategicVision.jsx        # Seção Visão Estratégica
    │   ├── Method.jsx                  # Seção Método M.D.S
    │   ├── PillarsConnection.jsx      # Como pilares se conectam
    │   ├── Implementation.jsx          # Implementação 30 dias
    │   ├── Benefits.jsx                # Benefícios
    │   ├── Applications.jsx            # Aplicações
    │   ├── Differential.jsx            # Diferencial
    │   ├── SocialProof.jsx            # Prova Social
    │   ├── Objections.jsx             # FAQ
    │   ├── FinalCTA.jsx               # CTA Final
    │   ├── Footer.jsx                 # Rodapé
    │   ├── CTASection.jsx             # Componente CTA reutilizável
    │   ├── StickyFloatingCTA.jsx      # CTA flutuante
    │   └── ui/                        # Shadcn UI components
    │       ├── button.jsx
    │       ├── card.jsx
    │       ├── accordion.jsx
    │       └── ...
    │
    ├── data/
    │   └── mock.js             # 📝 CONFIGURE WHATSAPP AQUI!
    │
    ├── hooks/
    │   └── use-toast.js        # Hook de toast notifications
    │
    └── lib/
        └── utils.js            # Utilitários (cn helper)
```

## 📌 Arquivos Principais

### 🔧 Configuração
- **.env** - IDs do Google Analytics e Facebook Pixel
- **tailwind.config.js** - Cores, fontes e temas do Tailwind
- **package.json** - Dependências do React

### 🎨 Estilos
- **src/index.css** - Estilos globais + Tailwind + animações
- **src/App.css** - Estilos específicos do App
- **tailwind.config.js** - Configuração de cores (amber/neutral)

### 📄 Conteúdo
- **src/data/mock.js** - TODOS os textos da landing page
  - Configurar WhatsApp aqui: `whatsapp.number`
  - Alterar textos de todas as seções

### 🎯 Componentes
- **src/App.js** - Monta todas as seções
- **src/components/** - Cada seção é um componente separado

### 🔍 SEO
- **public/index.html** - Meta tags, Open Graph, Schema.org

## 🎯 Fluxo de Funcionamento

1. **index.js** → carrega **App.js**
2. **App.js** → monta todas as seções com dados de **mock.js**
3. **Componentes** → renderizam seções com dados recebidos
4. **CTAs** → todos redirecionam para WhatsApp

## 📝 Para Personalizar

| O que alterar | Onde está |
|--------------|-----------|
| Textos | `src/data/mock.js` |
| WhatsApp | `src/data/mock.js` (linha 4-6) |
| Cores | `tailwind.config.js` e `src/index.css` |
| Analytics | `.env` |
| Logo | URLs nos componentes |
| SEO | `public/index.html` |

## ✅ Está Pronto Para:
- ✅ Deploy no Vercel
- ✅ Deploy no Netlify
- ✅ Hospedagem estática qualquer
- ✅ GitHub Pages
