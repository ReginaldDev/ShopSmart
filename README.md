
# 🛒 ShopSmart

Projeto Fullstack de E-commerce desenvolvido com foco em boas práticas, integração com APIs reais e testes automatizados.

## ⚙️ Tecnologias Utilizadas

- **Frontend**: React + Vite + TailwindCSS
- **Backend**: Node.js + Express
- **Banco de Dados**: MongoDB (Mongoose)
- **Integrações**:
  - API ViaCEP (consulta de frete)
  - Mercado Pago (pagamento)
  - Cloudinary (upload de imagens)
- **Testes**:
  - Cypress (E2E)
  - Jest (API)
- **CI/CD**:
  - GitHub Actions
  - Vercel (frontend)
  - Render/Railway (backend)

## 📦 Funcionalidades

- 🛍️ Listagem e busca de produtos
- 🛒 Carrinho de compras com persistência
- 🧾 Finalização de pedido com integração Mercado Pago
- 🚚 Consulta de frete por CEP
- 🔑 Login e cadastro com JWT
- ⚙️ Painel administrativo (CRUD de produtos)
- ✅ Testes automatizados com Cypress

## 🏁 Como rodar o projeto localmente

### 🔹 Backend
```bash
cd backend
npm install
npm run dev
```

### 🔹 Frontend
```bash
cd frontend
npm install
npm run dev
```

## 🚀 Deploy

- Frontend: [https://shopsmart.vercel.app](https://shopsmart.vercel.app)
- Backend: [https://shopsmart-api.render.com](https://shopsmart-api.render.com)

## ✅ Testes E2E com Cypress

```bash
cd frontend
npx cypress open
```

## 📂 Organização

```plaintext
/shopsmart
├── frontend/
├── backend/
└── .github/
    └── workflows/
```

---

## 🤝 Contribuição

1. Fork o projeto
2. Crie sua branch (`git checkout -b feature/MinhaFeature`)
3. Commit suas alterações (`git commit -m 'feat: Minha nova feature'`)
4. Push para sua branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request 🚀

---
