# 📝 Teste Desenvolvedor Front-End - Stoom

## 📃 Sobre o projeto

Este é um projeto baseado no **teste** para o cargo de **Desenvolvedor Front-End**, na empresa **Stoom**. <br/>
O objetivo do teste é criar uma **aplicação de pizzaria**. 🍕

O teste possui diversos **requisitos**, dentre eles estão:

- mostrar **passos** para a **criação de um pedido**, selecionando as opções relacionadas às pizzas;
- os **dados** das pizzas devem vir **mockados** de um **backend**;
- apresentar ao usuário uma **recomendação do dia**, que dará pontos a ele;

### ⚙️ Tecnologias utilizadas

- React
- HTML
- CSS
- Typescript
- React Router **(controle de roteamento das páginas da aplicação)**
- localStorage **(utilizado para persistência de dados)**
- React Testing Library e Jest **(utilizado para testes unitários)**
- Json-Server **(criação de endpoints fakes)**
- React-Icons **(ícones do projeto)**
- Axios **(comunicação de dados de APIs)**

### 🔎 Outras informações

O projeto foi criado pensando na **responsividade**, possibilitando ao usuário a utilização da aplicação partindo de qualquer **dispositivo**! 📱💻

Antes de executar o projeto em si, será necessário rodar o comando `npx json-server --watch .\src\data\db.json --port 3031`, que irá subir os endpoints fakes.

Logo após, execute o comando `yarn dev`, acessando o projeto em http://localhost:5173.

### 🚀 Melhorias

- Aplicar mais testes unitários
- Componentizar alguns elementos
- Botão na Navbar para atualizar os pontos sem precisar do refresh da página
- Refatorar a view ReviewOrder
- Separar os componentes em View e Container, para promover mais organização, separação de tarefas e melhoria na arquitetura

### 🙋‍♀️ Autor

**Mariana Alvares da Silva Pinto** - _Desenvolvedora Front-end Júnior_ </br>
✉️ **E-mail**: alvares.mariana.p@gmail.com </br>
📞 **Telefone/Whatsapp:** (24) 999987-7010 </br>
📌 **Link para acessar o projeto:** https://senfinanca-one.vercel.app/
