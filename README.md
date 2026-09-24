<div align="center">

# UniPlace

### Sistema de Agendamento de Salas e Laboratórios

Projeto acadêmico desenvolvido em **2024**, durante a graduação em Sistemas de Informação, para organizar o cadastro, a reserva e o acompanhamento de salas e laboratórios.

<br>

<img src="https://img.shields.io/badge/PROJETO-ACAD%C3%8AMICO-64748B?style=for-the-badge" alt="Projeto acadêmico" />

<br><br>

<img src="https://skillicons.dev/icons?i=nodejs,express,mysql,js,html,css" alt="Node.js, Express, MySQL, JavaScript, HTML e CSS" />

</div>

---

## Sobre o projeto

O **UniPlace** foi desenvolvido como projeto de uma disciplina da graduação em Sistemas de Informação.

A proposta foi criar uma aplicação para apoiar a organização e o agendamento de salas e laboratórios, separando o fluxo entre **administradores** e **professores**.

O projeto trabalha conceitos de desenvolvimento web, integração com banco de dados, autenticação, sessões, validação de dados e regras de negócio.

> Este repositório preserva a proposta original do projeto acadêmico e foi posteriormente organizado e documentado para fins de portfólio.

---

## Interface do sistema

<table>
  <tr>
    <td width="50%" align="center">
      <strong>1. Tela de Login</strong><br><br>
      <img src="docs/screenshots/ChatGPT%20Image%2019%20de%20set.%20de%202026,%2002_05_49%20(1).png" alt="Tela de login do UniPlace" width="100%">
      <br><br>
      Acesso ao sistema por matrícula, senha e perfil de usuário.
    </td>
    <td width="50%" align="center">
      <strong>2. Painel Administrativo</strong><br><br>
      <img src="docs/screenshots/ChatGPT%20Image%2019%20de%20set.%20de%202026,%2002_05_49%20(2).png" alt="Painel administrativo do UniPlace" width="100%">
      <br><br>
      Visão geral de salas, professores, pendências e calendário.
    </td>
  </tr>
  <tr>
    <td width="50%" align="center">
      <strong>3. Agendamento de Sala</strong><br><br>
      <img src="docs/screenshots/ChatGPT%20Image%2019%20de%20set.%20de%202026,%2002_05_49%20(3).png" alt="Tela de agendamento de salas do UniPlace" width="100%">
      <br><br>
      Seleção de sala, data, horário e confirmação da reserva.
    </td>
    <td width="50%" align="center">
      <strong>4. Histórico de Agendamentos</strong><br><br>
      <img src="docs/screenshots/ChatGPT%20Image%2019%20de%20set.%20de%202026,%2002_05_49%20(4).png" alt="Histórico de agendamentos do UniPlace" width="100%">
      <br><br>
      Consulta das reservas realizadas e seus respectivos status.
    </td>
  </tr>
</table>

---

## Funcionalidades

### Administrador

- Login por matrícula e senha
- Cadastro de professores
- Cadastro de salas
- Visualização de informações administrativas
- Acompanhamento de calendário e pendências

### Professor

- Login por matrícula e senha
- Visualização dos dados do usuário logado
- Agendamento de salas
- Verificação de conflito de horários
- Consulta de agendamentos por data
- Histórico de agendamentos
- Logout da sessão

---

## Tecnologias utilizadas

### Backend

<p>
  <img src="https://skillicons.dev/icons?i=nodejs,express,mysql" alt="Node.js, Express e MySQL" />
</p>

- **Node.js**
- **Express.js**
- **MySQL**
- **mysql2**
- **express-session**
- **bcrypt**
- **dotenv**
- **body-parser**

### Frontend

<p>
  <img src="https://skillicons.dev/icons?i=html,css,js" alt="HTML, CSS e JavaScript" />
</p>

- **HTML5**
- **CSS3**
- **JavaScript**
- **FullCalendar**

---

## Conceitos aplicados

- Integração entre frontend e backend
- Rotas HTTP com Express
- Persistência de dados com MySQL
- Autenticação por matrícula e senha
- Hash de senhas com bcrypt
- Gerenciamento de sessão
- Consultas parametrizadas ao banco
- Validação de campos
- Regra para evitar conflito de horários
- Separação de fluxos por tipo de usuário

---

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

---

## Como executar

### Pré-requisitos

- Node.js
- MySQL
- Git

### 1. Clone o repositório

```bash
git clone https://github.com/heliwelton12/agendamento-de-salas.git
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

### 4. Inicie o servidor

```bash
node index.js
```

A aplicação utiliza por padrão:

```text
http://localhost:3001
```

Página de login:

```text
http://localhost:3001/login
```

---

## Fluxo principal

```text
Login
  ├── Administrador
  │   ├── Painel administrativo
  │   ├── Cadastro de professores
  │   └── Cadastro de salas
  │
  └── Professor
      ├── Agendamento de sala
      ├── Consulta de reservas
      └── Histórico de agendamentos
```

---

## Observação sobre o projeto

Este é um projeto acadêmico de **2024** mantido como parte do portfólio. Algumas telas utilizam dados demonstrativos e a execução completa das funcionalidades que dependem de persistência requer uma instância **MySQL** configurada.

---

## Autor

<div align="center">

**Heliwelton Fernandes**

<br>

<a href="https://github.com/heliwelton12">
  <img src="https://img.shields.io/badge/GITHUB-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
</a>
&nbsp;
<a href="https://www.linkedin.com/in/heliweltondev/">
  <img src="https://img.shields.io/badge/LINKEDIN-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
</a>
&nbsp;
<a href="https://www.instagram.com/heliwelton.codes/">
  <img src="https://img.shields.io/badge/INSTAGRAM-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram" />
</a>

</div>
