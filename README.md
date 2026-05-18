# 🐾 VET STUDY - Plataforma Premium de Estudos Veterinários

Bem-vindo à **VET STUDY**, uma plataforma moderna e completa para estudantes e profissionais de Medicina Veterinária!

## ✨ Características Principais

✅ **Autenticação com Firebase** - Crie sua conta de forma segura  
✅ **Dashboard Interativo** - Acompanhe seu progresso em tempo real  
✅ **Quiz Inteligente** - Teste seus conhecimentos com perguntas detalhadas  
✅ **Design Premium** - Interface moderna com Tailwind CSS  
✅ **Múltiplas Disciplinas** - Anatomia, Farmacologia, Clínica Geral e Patologia  
✅ **Gerenciamento de Perfil** - Customize sua experiência  
✅ **Estatísticas Detalhadas** - Acompanhe seu desempenho  

## 📋 Requisitos

Antes de começar, você precisa ter instalado:

- **Node.js** versão 16+ [Download aqui](https://nodejs.org/)
- **npm** ou **yarn** (vem com Node.js)
- Uma conta no [Firebase](https://firebase.google.com/)

## 🚀 COMO RODAR O PROJETO (PASSO A PASSO)

### Passo 1: Clonar o Repositório

```bash
git clone https://github.com/persicoluiz1919-sketch/vet-study1.git
cd vet-study1
```

### Passo 2: Instalar Dependências

```bash
npm install
```

**Aguarde alguns minutos... a instalação pode levar um pouco**

### Passo 3: Configurar Variáveis de Ambiente

1. Na raiz do projeto, crie um arquivo chamado `.env.local`
2. Copie este conteúdo:

```env
VITE_FIREBASE_API_KEY=AIzaSyC1234567890abcdefghijklmnop
VITE_FIREBASE_AUTH_DOMAIN=seu-projeto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=seu-projeto-id
VITE_FIREBASE_STORAGE_BUCKET=seu-projeto.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef1234567890
```

**Como obter essas chaves:**
1. Acesse [Firebase Console](https://console.firebase.google.com/)
2. Clique em "Criar Projeto"
3. Preencha o nome: "vet-study"
4. Vá para Configurações do Projeto
5. Na aba "Geral", copie as credenciais do SDK

### Passo 4: Rodar a Aplicação

```bash
npm run dev
```

**A aplicação abrirá automaticamente em http://localhost:3000**

## 📖 COMO USAR A APLICAÇÃO

### 1️⃣ Criar uma Conta

1. Na tela de login, clique em **"Não tem conta? Cadastre-se"**
2. Preencha:
   - **Nome**: Seu nome completo
   - **Email**: Seu email
   - **Senha**: Uma senha com no mínimo 6 caracteres
3. Clique em **"Criar Conta"**

### 2️⃣ Fazer Login

- Digite seu email e senha
- Clique em **"Entrar"**

### 3️⃣ Navegar no Dashboard

Você verá:
- **Progresso Geral** - Sua média de progresso
- **Aulas Completadas** - Quantas aulas você fez
- **4 Disciplinas**:
  - 🦴 Anatomia Veterinária
  - 💊 Farmacologia
  - 🩺 Clínica Geral
  - 🧬 Patologia

### 4️⃣ Estudar uma Disciplina

1. Clique em qualquer disciplina
2. Veja o progresso e informações
3. Clique em **"Iniciar Quiz"**

### 5️⃣ Fazer um Quiz

1. Leia a pergunta com atenção
2. Clique em uma das 4 opções de resposta
3. Veja a explicação da resposta correta
4. Clique em **"Próxima Questão"** para continuar
5. Ao final, clique em **"Finalizar"**

### 6️⃣ Ver Seu Perfil

- Clique no seu nome (canto superior direito)
- Veja suas informações
- Clique em **"Sair"** para fazer logout

## 🏗️ Estrutura do Projeto

```
vet-study1/
├── src/
│   ├── components/         # Componentes React
│   │   ├── Navbar.tsx
│   │   ├── SubjectCard.tsx
│   │   ├── StatsCard.tsx
│   │   └── Loading.tsx
│   ├── pages/             # Páginas da aplicação
│   │   ├── Login.tsx      # Login/Cadastro
│   │   ├── Dashboard.tsx  # Tela inicial
│   │   ├── Study.tsx      # Disciplina
│   │   ├── Quiz.tsx       # Perguntas
│   │   └── Profile.tsx    # Perfil do usuário
│   ├── store/             # Gerenciamento de estado
│   │   ├── authStore.ts   # Autenticação
│   │   └── studyStore.ts  # Disciplinas
│   ├── config/
│   │   └── firebase.ts    # Configuração Firebase
│   ├── types/
│   │   └── index.ts       # Tipos TypeScript
│   ├── App.tsx            # App principal
│   ├── main.tsx           # Entrada
│   └── index.css          # Estilos
├── index.html             # HTML principal
├── package.json           # Dependências
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── postcss.config.js
```

## 🔧 Comandos Úteis

```bash
# Rodar servidor de desenvolvimento
npm run dev

# Criar build para produção
npm run build

# Ver o build funcionando localmente
npm run preview

# Instalar uma nova dependência
npm install nome-do-pacote
```

## 🎨 Design e Funcionalidades

- **Design Moderno** com gradientes e cores vibrantes
- **Interface Responsiva** (funciona em celular, tablet e desktop)
- **Animações Suaves** para melhor experiência
- **Ícones Profissionais** com Lucide Icons
- **Notificações em Tempo Real** (toasts)

## 📱 Disciplinas Disponíveis

### 🦴 Anatomia Veterinária
- 12 aulas de conteúdo
- Sistema muscular, ósseo e nervoso
- Anatomia de diferentes espécies

### 💊 Farmacologia
- 10 aulas de medicamentos
- Dosagem e posologia
- Efeitos colaterais

### 🩺 Clínica Geral
- 15 procedimentos clínicos
- Técnicas de exame
- Diagnóstico e tratamento

### 🧬 Patologia
- 14 doenças principais
- Sintomatologia
- Prevenção e cura

## 🚀 COLOCAR A APP NO AR (DEPLOY)

### Opção 1: Vercel (Mais Fácil)

1. Crie uma conta em [Vercel.com](https://vercel.com)
2. Instale a Vercel CLI:
```bash
npm i -g vercel
```
3. Na pasta do projeto, rode:
```bash
vercel
```
4. Siga as instruções na tela
5. Sua app estará online em poucos minutos!

### Opção 2: Netlify

1. Crie uma conta em [Netlify.com](https://netlify.com)
2. Instale o CLI:
```bash
npm i -g netlify-cli
```
3. Faça o build:
```bash
npm run build
```
4. Deploy:
```bash
netlify deploy --prod --dir=dist
```

### Opção 3: GitHub Pages

1. Faça push do código para GitHub
2. Vá para Settings do repositório
3. Em "Pages", selecione "GitHub Actions"
4. Selecione o workflow "Deploy"
5. Sua app estará online!

## 🐛 Problemas Comuns e Soluções

### "npm: comando não encontrado"
**Solução:** Instale Node.js em [nodejs.org](https://nodejs.org/)

### "Cannot find module"
**Solução:** 
```bash
rm -rf node_modules package-lock.json
npm install
```

### "VITE_FIREBASE_API_KEY is not defined"
**Solução:** Certifique-se de que o arquivo `.env.local` existe e tem as variáveis corretas

### "Porta 3000 já está em uso"
**Solução:**
```bash
npm run dev -- --port 3001
```

### Firebase não conecta
**Solução:**
1. Verifique as credenciais em `.env.local`
2. Ative a autenticação por Email no Firebase Console
3. Certifique-se de que o projeto Firebase foi criado

## 📚 Tecnologias Utilizadas

- **React 18** - Framework JavaScript
- **TypeScript** - Tipagem estática
- **Vite** - Build tool rápido
- **Firebase** - Backend e autenticação
- **Zustand** - Gerenciador de estado
- **Tailwind CSS** - Estilos CSS
- **React Router** - Navegação
- **Lucide Icons** - Ícones SVG
- **React Hot Toast** - Notificações

## 💡 Dicas para a Apresentação

1. **Demonstração ao Vivo**
   - Crie uma conta de teste
   - Faça um quiz completo
   - Mostre a interface responsiva no celular

2. **Destaque os Pontos Fortes**
   - Autenticação com Firebase (segurança)
   - Quiz com feedback instantâneo
   - Design moderno e profissional
   - Responsividade

3. **Fale sobre a Tecnologia**
   - React: biblioteca para criar interfaces
   - Firebase: backend na nuvem
   - Tailwind: CSS moderno
   - TypeScript: código mais seguro

4. **Mostre o Código**
   - Explique a estrutura de pastas
   - Mostre como os componentes funcionam
   - Fale sobre o state management

## 📞 Precisa de Ajuda?

1. Consulte a documentação oficial:
   - [React](https://react.dev/)
   - [Firebase](https://firebase.google.com/docs)
   - [Vite](https://vitejs.dev/)

2. Abra uma issue no GitHub

3. Consulte a comunidade

## 🎓 Créditos

Desenvolvido para apresentação de projeto em TI  
**Faculdade:** UFRN - Universidade Federal do Rio Grande do Norte  
**Curso:** Medicina Veterinária  
**Ano:** 2026

---

## ✅ Checklist antes da Apresentação

- [ ] Testei a app localmente (`npm run dev`)
- [ ] Criei uma conta de teste
- [ ] Fiz um quiz completo
- [ ] Testei o login/logout
- [ ] Verifiquei a responsividade no celular
- [ ] Preparei a apresentação
- [ ] Fiz o deploy (Vercel/Netlify)
- [ ] Copiei o link de apresentação
- [ ] Testei a app no ar

---

**Boa sorte com sua apresentação! 🎉🐾**

Desenvolvido com ❤️ para a comunidade veterinária brasileira