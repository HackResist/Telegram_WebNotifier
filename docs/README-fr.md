# 🚀Telegram WebNotifier🚀

## Description
Telegram WebNotifier est une extension de navigateur qui envoie des notifications en temps réel à votre compte Telegram chaque fois qu'une page web se charge. Il collecte et envoie divers détails, tels que le titre de la page web, l'URL, l'adresse IP, les coordonnées géographiques, les informations sur le système d'exploitation, le niveau et l'état de la batterie.

***Si vous appréciez mon travail, n'oubliez pas de me donner une étoile ! 🌟***

## Fonctionnalités
- Recevez des notifications en temps réel sur Telegram lorsque la page web se charge
- Envoie les informations suivantes :
  - Message personnalisé (optionnel)
  - Titre et URL de la page web
  - Adresse IP en utilisant [ipify](ipify.org)
  - Coordonnées géographiques via l'API de géolocalisation du navigateur
  - Informations sur le système d'exploitation
  - Niveau et état de la batterie
- Assure la confidentialité en utilisant un bot dédié et un ID de chat

## Exigences
1. Compte Telegram
2. Ordinateur portable ou de bureau (non compatible avec Android)
3. Bot pour recevoir les notifications
4. ID de chat pour voir les messages du bot

## Instructions d'installation
1. Clonez ou téléchargez ce dépôt.
2. Ouvrez votre navigateur.
3. Accédez aux extensions.
4. Activez le mode développeur dans le coin supérieur droit.
5. Cliquez sur "Charger une extension non empaquetée" et sélectionnez le répertoire où vous avez cloné ou téléchargé ce dépôt.

## Configuration du bot
Pour utiliser cette extension, vous devez configurer un bot dans votre navigateur pour recevoir les messages. Suivez les étapes ci-dessous :
1. Ouvrez Telegram.
2. Recherchez [BotFather](https://t.me/botfather) dans la barre de recherche ou accédez à BotFather.
3. Créez un bot et obtenez un jeton de bot (ex : `XXXXXXXXX:urbd2ueddxxxxxxx`).
4. Après la création du bot, recherchez 'get Chat ID' ou accédez à [Chat Id](https://web.telegram.org/k/#@chatIDrobot).
5. Appuyez sur `Start` et obtenez l'ID de chat.
6. Accédez au bot et appuyez sur `Start`.

## Configuration
Après avoir installé l'extension, cliquez sur l'icône de l'extension dans la barre d'outils du navigateur.

1. Entrez le jeton du bot et l'ID de chat pour recevoir les messages.
2. Optionnellement, configurez un message personnalisé à inclure dans les notifications.

## Utilisation
Telegram WebNotifier peut être utilisé à diverses fins :

- Surveiller les activités du navigateur lorsque vous transmettez le système à quelqu'un d'autre
- Suivre les activités de recherche
- Surveiller les activités de recherche du navigateur sans utiliser des applications tierces

## Environnements testés

| Navigateur | Cas de test |
|------------|-------------|
| Chrome     | Fonctionne  |
| Edge       | Fonctionne  |

## Contribuer
Les contributions sont les bienvenues ! Si vous avez des suggestions d'amélioration, ouvrez un problème ou soumettez une demande de tirage. Vous pouvez également forker ce dépôt.

## Crédit
- Cette extension utilise les API et services suivants :
  - [Telegram Bot API](https://core.telegram.org/bots/api)
  - [ipify](https://www.ipify.org/)
  - API de géolocalisation du navigateur
 <!-- - APIs des Extensions Chrome -->

## Licence
Ce projet est sous licence MIT. Pour plus de détails, veuillez consulter le fichier [LICENSE](LICENSE).

## Clause de non-responsabilité
Les auteurs de ce logiciel ne fournissent pas de support technique pour cette extension. Les utilisateurs sont responsables de l'utilisation de ce logiciel. Il est recommandé de ne pas s'engager dans des activités non éthiques en utilisant ce dépôt. Toute action considérée comme non éthique ou inappropriée est de la responsabilité de l'utilisateur, qui en assumera toutes les conséquences.
