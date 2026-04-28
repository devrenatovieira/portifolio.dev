# Renato Vieira Portfolio Backend

API REST em Node.js, Express e MongoDB para autenticação admin, projetos, serviços, mensagens de contato e configurações do portfólio.

## Instalação

```bash
cd backend
npm install
cp .env.example .env
npm run seed
npm run dev
```

## Variáveis

- `PORT`: porta da API.
- `MONGO_URI`: conexão MongoDB.
- `JWT_SECRET`: segredo do JWT.
- `JWT_EXPIRES_IN`: validade do token.
- `FRONTEND_URL`: origem permitida no CORS.
- `ADMIN_EMAIL` e `ADMIN_PASSWORD`: dados usados pelo seed.

O seed cria `renato.vieira@renato.com` com senha `Transire2022`. Altere essa senha em produção ou pelo painel em `/admin/configuracoes`.
