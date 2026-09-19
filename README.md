# Sistema de Agendamento de Salas

Projeto acadêmico desenvolvido em **2024**, durante a graduação em Sistemas de Informação, para uma disciplina da faculdade.

O sistema foi criado para organizar o cadastro, a reserva e o acompanhamento de salas, com áreas separadas para administradores e professores.

O projeto permite autenticar usuários, cadastrar professores e salas, realizar agendamentos, consultar reservas por data e visualizar o histórico de agendamentos.

## Funcionalidades

### Administrador
- Login por matrícula e senha
- Cadastro de professores
- Cadastro de salas
- Visualização de informações administrativas

### Professor
- Login por matrícula e senha
- Visualização dos dados do usuário logado
- Agendamento de salas
- Verificação de conflito de horários
- Consulta de agendamentos por data
- Histórico de agendamentos
- Logout da sessão

## Tecnologias utilizadas

### Backend
- Node.js
- Express.js
- MySQL
- mysql2
- express-session
- bcrypt
- dotenv
- body-parser

### Frontend
- HTML
- CSS
- JavaScript

## Segurança

O projeto utiliza algumas práticas para evitar a exposição de dados sensíveis:

- Credenciais do banco de dados armazenadas em variáveis de ambiente
- Arquivo `.env` ignorado pelo Git
- Senhas de usuários armazenadas com hash utilizando bcrypt
- Consultas parametrizadas ao banco de dados
- Sessões de usuário com `express-session`

> Nunca coloque senhas reais ou chaves secretas no arquivo `.env.example`.

## Estrutura do projeto

```text
agendamento-de-salas/
├── public/
│   ├── css/
│   ├── images/
│   ├── js/
│   ├── styles/
│   └── login.html
├── views/
│   ├── admin.html
│   ├── agendar_sala.html
│   ├── cadastrar_professor.html
│   ├── cadastrar_sala.html
│   ├── historico_agendamento.html
│   └── professor.html
├── docs/
│   └── screenshots/
├── .env.example
├── .gitignore
├── criptografar.js
├── index.js
├── package.json
└── README.md
```

## Como executar o projeto

### Pré-requisitos

Antes de começar, tenha instalado:

- Node.js
- MySQL
- Git

### 1. Clone o repositório

```bash
git clone https://github.com/heliwelton12/agendamento-de-salas.git
```

Entre na pasta:

```bash
cd agendamento-de-salas
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com base no `.env.example`:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
SESSION_SECRET=sua_chave_secreta
```

A aplicação utiliza tabelas relacionadas a administradores, professores, salas e agendamentos no MySQL.

### 4. Inicie o servidor

```bash
node index.js
```

O servidor será iniciado em:

```text
http://localhost:3001
```

Página de login:

```text
http://localhost:3001/login
```

## Fluxo principal

```text
Login
  ├── Administrador
  │     ├── Cadastro de professores
  │     └── Cadastro de salas
  │
  └── Professor
        ├── Agendamento de sala
        ├── Consulta de reservas
        └── Histórico de agendamentos
```

## Sobre o projeto

O UniPlace foi desenvolvido como **projeto acadêmico em 2024**, com foco em aplicar conhecimentos de desenvolvimento web, integração com banco de dados, autenticação, sessões e regras de negócio.

Entre os pontos trabalhados estão validação de campos, autenticação de usuários, cadastro de salas e professores e prevenção de reservas conflitantes para uma mesma sala e horário.

O código foi posteriormente organizado e documentado para fins de **portfólio**, preservando a proposta original do projeto acadêmico.

## Status

Projeto acadêmico concluído em 2024 e mantido neste repositório como parte do portfólio. Alguns dados exibidos nas telas são demonstrativos e a execução completa depende de uma instância MySQL configurada.

## Autor

**Heliwelton Fernandes**

Bacharel em Sistemas de Informação e desenvolvedor web em formação.

- GitHub: [@heliwelton12](https://github.com/heliwelton12)
- LinkedIn: [heliweltondev](https://www.linkedin.com/in/heliweltondev)
- Instagram: [@heliwelton.codes](https://www.instagram.com/heliwelton.codes/)
