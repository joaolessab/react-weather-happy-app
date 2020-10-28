# Weather-Happy--App
## Bem-vindos ao repositório do projeto "Weather-Happy-App";
- Esse projeto foi desenvolvido tendo com a principal funcionalidade: exibir a temperatura de locais;
- Existem duas formas da temperatura ser capturada:
- 1. Via localização automática (para isso, deve-se permitir que o navegador ou dispositivo compartilhe a sua localização);
- 2. Digitando um endereço no campo de busca;

- Também é possível atualizar as temperaturas clicando no botão "Atualizar" (porém, é tão rápido, que o texto "Atualizando..." na maioria das vezes, nem é exibido. Depende da sua conexão);

## Mas João, quero visualizar a aplicação funcionando! Como faço?
- [Basta clicar aqui](https://jvlessa.github.io/Weather-Happy--App/);

## João, qual foi a tecnologia utilizada para buscar / gerar a temperatura?
- Utilizamos a biblioteca [OpenWeather API](https://openweathermap.org/);
- Para saber mais como o OpenWeather API funciona, [clique aqui](https://openweathermap.org/guide);
- Para consultar a documentação de desenvolvimento, [basta entrar nesse link](https://openweathermap.org/api);

## E na parte do React, o que você utilizou?
- O pacote [Node SASS](https://yarnpkg.com/package/node-sass) para o CSS:

``yarn add node-sass``

- O pacote [GH Pages](https://yarnpkg.com/package/gh-pages) para realizar o deploy final:

``yarn add gh-pages``

## E esse tal de Deploy, como foi feito?

- Na pasta do projeto:

``git remote rm origin``

``git remote add originin "SSHCODE"``

- No arquivo "package.json", foram adicionadas as linhas:

``"homepage": "https://jvlessa.github.io/Weather-Happy--App"``

``"scripts": {
    "predeploy": "yarn build",
    "deploy": "gh-pages -d build"
}``

- Executado o comando a seguir para o predeploy (ele mesmo irá executar o deploy posteriormente e automaticamente):

``yarn deploy``

- Git solicitará as credenciais e basta apenas commitar as alterações:

``git add -A``

``git commit -m 'gh-pages'``

``git push``
