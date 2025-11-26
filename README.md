# Task App

App de gerenciamento de tarefas com estímulos visuais ao completar cada tarefa.

## Tecnologias

- **Frontend**: React Native
- **Backend**: Spring Boot
- **Banco**: H2 Database

## Como rodar

### Backend
1. Abra o projeto backend no IntelliJ
2. Execute a aplicação
3. Servidor rodará em `http://localhost:8080`

### Frontend
1. `npm install`
2. Configure o IP em `src/services/api.js`
3. `npx react-native run-android`

## Funcionalidades

- Criar tarefas
- Marcar como completas com animação
- Deletar tarefas
- Contador de pendentes/completas