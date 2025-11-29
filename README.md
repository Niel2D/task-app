# Task App

Uma aplicação de gerenciamento de tarefas que utiliza estímulos visuais e de recompensa inspirados em estratégias utilizadas por cassinos — com o objetivo positivo de ajudar usuários a criarem hábitos melhores.
Este projeto está em desenvolvimento e serve como fonte de estudo sobre códigos, gamificação e condicionamento de comportamento.

## Tecnologias

- **Frontend**: React Native
- **Backend**: Spring Boot
- **Banco**: H2 Database

## Como rodar

### Backend
1. Abra o projeto backend no IntelliJ ou SpringBoot
2. Execute a aplicação
3. Servidor rodará em `http://localhost:8081` <sub>Por motivos desconhecidos atualmente minha maquina estar com problema na porta: 8080, mas podem usar na sua normalmente</sub>

### Frontend
1. `npm install`
2. Configure o IP em `src/services/api.js`
3. `npx react-native run-android`

## Funcionalidades

- Criar tarefas
- Marcar como completas com animação
- Deletar tarefas
- Contador de pendentes/completas
