# 🚀 MSD Landing Page - VERSÃO SIMPLES

## Landing Page Estática Pronta para Vercel

**100% Frontend | Zero Backend | Deploy em 3 Minutos**

---

## 🎯 O Que Tem Nesta Landing Page

- ✅ 13 seções premium
- ✅ 6 CTAs estratégicos (todos redirecionam para WhatsApp)
- ✅ Design preto e dourado
- ✅ Totalmente responsivo
- ✅ Google Analytics ready
- ✅ Facebook Pixel ready
- ✅ SEO completo

---

## ⚡ Deploy RÁPIDO no Vercel (3 Minutos)

### **Passo 1: Preparar o Projeto**

1. Baixe todos os arquivos da pasta `frontend`
2. **IMPORTANTE:** Edite o arquivo `src/data/mock.js`:

```javascript
whatsapp: {
  number: "5511999999999", // ⬅️ COLOQUE SEU NÚMERO AQUI!
  message: "Olá! Gostaria de agendar meu Diagnóstico Estratégico Gratuito com a MSD."
}
```

### **Passo 2: Deploy no Vercel**

#### **Opção A: Via Interface (Mais Fácil)**

1. Acesse https://vercel.com e faça login
2. Clique em "Add New..." → "Project"
3. Arraste a pasta `frontend` ou conecte seu GitHub
4. Configure:
   - **Framework Preset**: Create React App
   - **Root Directory**: Deixe em branco se enviou só a pasta frontend
   - **Build Command**: `npm run build` ou `yarn build`
   - **Output Directory**: `build`

5. **Environment Variables** (opcional):
   ```
   REACT_APP_GA_MEASUREMENT_ID = seu_google_analytics_id
   REACT_APP_FB_PIXEL_ID = seu_facebook_pixel_id
   ```

6. Clique em "Deploy"
7. Aguarde 2-3 minutos
8. **PRONTO!** Sua URL será algo como: `https://msd.vercel.app`

#### **Opção B: Via CLI (Para Quem Conhece Terminal)**

```bash
# Instale Vercel CLI
npm install -g vercel

# Entre na pasta frontend
cd frontend

# Deploy
vercel

# Siga as instruções na tela
# Escolha "yes" para todas as perguntas padrão
```

---

## 📝 Configurações Importantes

### **1. WhatsApp (OBRIGATÓRIO)**

Edite: `frontend/src/data/mock.js`

```javascript
whatsapp: {
  number: "5511987654321", // Seu número com código do país
  message: "Olá! Quero falar sobre o Método M.D.S."
}
```

**Formato:** `55` (Brasil) + `11` (DDD) + `987654321` (número)

### **2. Google Analytics (Opcional)**

Se quiser rastrear visitantes:

1. Crie conta em https://analytics.google.com
2. Copie o Measurement ID (G-XXXXXXXXXX)
3. No Vercel, adicione variável:
   - Nome: `REACT_APP_GA_MEASUREMENT_ID`
   - Valor: `G-XXXXXXXXXX`

### **3. Facebook Pixel (Opcional)**

Para anúncios no Facebook/Instagram:

1. Acesse https://business.facebook.com
2. Events Manager → Pixels
3. Copie o Pixel ID
4. No Vercel, adicione variável:
   - Nome: `REACT_APP_FB_PIXEL_ID`
   - Valor: `123456789012345`

---

## 🎨 Personalização

### **Alterar Cores**

Edite `frontend/src/index.css` e `frontend/tailwind.config.js`

Procure por:
- `amber-500` → Cor dourada
- `neutral-900` → Cor preta

Substitua por outras cores do Tailwind.

### **Alterar Textos**

Todos os textos estão em: `frontend/src/data/mock.js`

Edite diretamente e faça novo deploy.

### **Alterar Logo**

Substitua as URLs da logo nos componentes:
```javascript
// Procure por:
https://customer-assets.emergentagent.com/.../image.png

// Substitua pela URL da sua logo
```

---

## 🧪 Testar Localmente (Opcional)

Se quiser ver antes de fazer deploy:

```bash
cd frontend

# Instale dependências (primeira vez)
npm install
# ou
yarn install

# Rode localmente
npm start
# ou
yarn start

# Abre em: http://localhost:3000
```

---

## 📊 Como Funciona

1. **Visitante acessa a landing page**
2. **Navega pelas 13 seções** (Hero, Problemas, Método, etc)
3. **Clica em qualquer CTA** (6 pontos de conversão)
4. **Redirecionado para WhatsApp** com mensagem pré-definida
5. **Você atende o lead** direto no WhatsApp!

**Simples, eficaz e funcional!** 🎯

---

## 🔧 Estrutura de Arquivos

```
frontend/
├── public/
│   └── index.html          # SEO meta tags aqui
├── src/
│   ├── components/         # Todos os componentes da LP
│   ├── data/
│   │   └── mock.js        # 👈 CONFIGURE WHATSAPP AQUI
│   ├── App.js             # Aplicação principal
│   └── index.css          # Estilos globais
├── package.json
└── .env                   # 👈 Analytics IDs aqui
```

---

## ❓ Perguntas Frequentes

### **Precisa de backend?**
Não! Esta versão é 100% estática.

### **Os leads são salvos em algum lugar?**
Não. Eles vão direto para seu WhatsApp. Você gerencia lá.

### **Quanto custa o Vercel?**
**GRÁTIS!** O plano free tem 100GB de bandwidth/mês, mais que suficiente.

### **Posso usar outro domínio?**
Sim! No Vercel: Settings → Domains → Add Domain

### **Funciona no celular?**
Sim! É 100% responsivo.

### **Posso adicionar mais seções?**
Sim! Crie componentes em `src/components/` e adicione no `App.js`

---

## 🎉 Pronto!

Agora você tem uma landing page profissional que:
- ✅ Captura leads via WhatsApp
- ✅ Funciona perfeitamente
- ✅ Não precisa de backend
- ✅ Deploy em minutos
- ✅ Custo zero

**Próximos Passos:**
1. Configure seu número de WhatsApp
2. Faça deploy no Vercel
3. Compartilhe a URL
4. Comece a receber leads!

---

**Feito com ❤️ usando React + Tailwind + Shadcn UI**

🚀 **MSD - Engenharia de Crescimento Digital**
