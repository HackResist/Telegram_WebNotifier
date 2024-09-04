# 🚀Telegram WebNotifier🚀

## Descrição
O Telegram WebNotifier é uma extensão de navegador que envia notificações em tempo real para sua conta do Telegram sempre que uma página web é carregada. Ele coleta e envia diversos detalhes, como o título da página, a URL, o endereço IP, as coordenadas geográficas, informações sobre o sistema operacional, o nível e o status da bateria.

***Se você gosta do meu trabalho, não se esqueça de me dar uma estrela! 🌟***

## Funcionalidades
- Receba notificações em tempo real no Telegram quando a página web for carregada
- Envia as seguintes informações:
  - Mensagem personalizada (opcional)
  - Título e URL da página web
  - Endereço IP usando [ipify](ipify.org)
  - Coordenadas geográficas usando a API de geolocalização do navegador
  - Informações sobre o sistema operacional
  - Nível e status da bateria
- Garante a privacidade usando um bot dedicado e um ID de chat

## Requisitos
1. Conta do Telegram
2. Computador portátil ou desktop (não compatível com Android)
3. Bot para receber as notificações
4. ID de chat para visualizar as mensagens do bot

## Instruções de Instalação
1. Clone ou baixe este repositório.
2. Abra seu navegador.
3. Acesse as extensões.
4. Ative o modo de desenvolvedor no canto superior direito.
5. Clique em "Carregar extensão descompactada" e selecione o diretório onde você clonou ou baixou este repositório.

## Configuração do Bot
Para usar esta extensão, você precisa configurar um bot em seu navegador para receber as mensagens. Siga estas etapas:
1. Abra o Telegram.
2. Pesquise por [BotFather](https://t.me/botfather) na barra de pesquisa ou acesse o BotFather.
3. Crie um bot e obtenha um token de bot (ex: `XXXXXXXXX:urbd2ueddxxxxxxx`).
4. Após criar o bot, pesquise por 'get Chat ID' ou acesse [Chat Id](https://web.telegram.org/k/#@chatIDrobot).
5. Toque em `Start` e obtenha o ID do chat.
6. Vá até o bot e toque em `Start`.

## Configuração
Após instalar a extensão, clique no ícone da extensão na barra de ferramentas do navegador.

1. Insira o token do bot e o ID do chat para receber as mensagens.
2. Opcionalmente, configure uma mensagem personalizada para incluir nas notificações.

## Uso
O Telegram WebNotifier pode ser usado para diversas finalidades:

- Monitorar a atividade do navegador quando você estiver passando o sistema para outra pessoa
- Rastrear atividades de pesquisa
- Monitorar a atividade de pesquisa do navegador sem usar aplicativos de terceiros

## Ambientes Testados

| Navegador | Caso de Teste |
|-----------|---------------|
| Chrome    | Funcionando   |
| Edge      | Funcionando   |

## Contribuições
Contribuições são bem-vindas! Se você tiver sugestões de melhorias, abra um problema ou envie um pedido de pull. Você também pode fazer um fork deste repositório.

## Créditos
- Esta extensão usa as seguintes APIs e serviços:
  - [Telegram Bot API](https://core.telegram.org/bots/api)
  - [ipify](https://www.ipify.org/)
  - API de geolocalização do navegador
 <!-- - APIs de Extensões do Chrome -->

## Licença
Este projeto está licenciado sob a licença MIT. Para mais detalhes, consulte o arquivo [LICENSE](LICENSE).

## Isenção de Responsabilidade
Os autores deste software não fornecem suporte técnico para esta extensão. Os usuários são responsáveis pelo uso deste software. É recomendado não se envolver em atividades não éticas ao usar este repositório. Quaisquer ações consideradas não éticas ou inadequadas são de responsabilidade do usuário, que arcará com todas as consequências.
