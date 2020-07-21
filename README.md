# Mobiauto tabela fipe Front-end
Projeto feito para a mobiauto para desenvolvedores Frontend

## STACK
O Frontend web desse projeto teve seus arquivos divididos em seus seções, explicadas a seguir. `Components` onde são guardados os inputs, cards de post, cards de comentários e afins. Os `Containers` são as páginas que guardam a lógica de união entre componentes para mostrar na tela. As `Actions` armazenam as requisições feitas pela API. As Pasta `Images` armazena o logotipo utilizado no header. O `Reducer` contém as informações que foram requisitadas nas actions de tal forma que possam ser usadas globalmente no projeto. Por fim, o `Style` armazena o thema do material-ui utilizado no projeto.

## Tecnologias e serviços utilizadas
Nesse projeto foram utilizados: ReactJs, Redux, Redux-thunk, javascript, Material-ui, HTML, CSS, styled-components, jest, react-test-renderer, react-router, netflify para o hosting do site e gerenciadores de pacotes do Nodejs: yarn e npm.

## Sobre
Esse é um projeto frontend que busca consumir os dados da API ***http://deividfortuna.github.io/fipe/***. Esse projeto tinha como objetivo filtrar o dados da tabela fipe, e no final retornar todos os dados do veículo escolhido. Ele possui um select que trás as marcas. Ao selecionar a marca, o usuário pode selecionar o modelo do veículo e por último, selecionar o ano do veículo. Após o usuário selecionar o três campos, os dados completos do veículo selecionado são renderizados dentro de um card. 
***OBS: O usuário só poderá selecionar o modelo, caso tenha selecionado a marca e só poderá selecionar o ano caso tenha selecionado a marca e o modelo.***

## Instruções para rodar
Por ser um projeto com ReactJS, há a necessidade do NodeJS. Com ele em sua máquina, basta abrir o ***TERMINAL*** e navegar até o repositório clonado e rodar:
1. `cd MobiautoCase/` para navegar até o repositório clona;
1. `npm install`, `npm i` ou `yarn` para instalar todas as dependências;
1. `npm run start` ou `yarn start` para rodar localmente o projeto;
1. `npm run build` ou `yarn build` para gerar uma versão estática do projeto (que ficará na pasta `build`);
1. `npm run test` ou `yarn test` para rodas os testes feitos;

## Deploy do projeto
link do deploy: ***https://mobiautocase.netlify.app/***
