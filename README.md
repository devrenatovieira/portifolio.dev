# Portfólio Renato Vieira

Portfólio pessoal de Renato Vieira com frontend e backend separados.

```text
/frontend  React + Vite + Tailwind + Framer Motion
/backend   Node.js + Express + MongoDB + Mongoose + JWT
```

## Rodar o backend

```bash
cd backend
npm install
cp .env.example .env
npm run seed
npm run dev
```

Variáveis necessárias em `backend/.env`:

```env
PORT=4000
MONGO_URI=mongodb://127.0.0.1:27017/renato_portfolio
JWT_SECRET=troque_este_segredo_em_producao
JWT_EXPIRES_IN=7d
FRONTEND_URL=https://seu-dominio.com
ADMIN_EMAIL=renato.vieira@renato.com
ADMIN_PASSWORD=Transire2022
```

O seed cria o admin inicial:

- Email: `renato.vieira@renato.com`
- Senha: `Transire2022`

Altere a senha e o `JWT_SECRET` antes de usar em produção. Depois do primeiro acesso, o email e a senha do admin também podem ser alterados em `/admin/configuracoes`.

## Rodar o frontend

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

Variável necessária em `frontend/.env`:

```env
VITE_API_URL=/api
```

Se o backend estiver em outro domínio, use a URL pública dele, por exemplo `https://api.seu-dominio.com/api`.

## Rotas principais

- Público: `/`, `/sobre`, `/servicos`, `/projetos`, `/projetos/:slug`, `/processo`, `/contato`
- Admin: `/admin/login`, `/admin/dashboard`, `/admin/projetos`, `/admin/servicos`, `/admin/mensagens`, `/admin/configuracoes`

## Deploy

Frontend na Vercel:

1. Configure o projeto apontando para a pasta `frontend`.
2. Build command: `npm run build`.
3. Output directory: `dist`.
4. Adicione `VITE_API_URL` com a URL pública do backend.

Backend no Render/Railway:

1. Configure o serviço apontando para a pasta `backend`.
2. Start command: `npm start`.
3. Adicione as variáveis do `.env`.
4. Use MongoDB Atlas ou outro MongoDB gerenciado em `MONGO_URI`.
5. Rode `npm run seed` uma vez para criar dados iniciais e admin.

## API

Auth:

- `POST /api/auth/login`
- `GET /api/auth/me`

Projetos:

- `GET /api/projects`
- `GET /api/projects/featured`
- `GET /api/projects/:slug`
- `POST /api/projects`
- `PUT /api/projects/:id`
- `DELETE /api/projects/:id`

Serviços:

- `GET /api/services`
- `POST /api/services`
- `PUT /api/services/:id`
- `DELETE /api/services/:id`

Contato:

- `POST /api/contact`
- `GET /api/contact`
- `GET /api/contact/:id`
- `PATCH /api/contact/:id/read`
- `DELETE /api/contact/:id`

Configurações:

- `GET /api/settings`
- `PUT /api/settings`
