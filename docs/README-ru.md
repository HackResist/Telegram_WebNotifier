# 🚀Telegram WebNotifier🚀

## Описание
Telegram WebNotifier — это расширение браузера, которое отправляет уведомления в реальном времени на ваш аккаунт Telegram каждый раз, когда загружается веб-страница. Оно собирает и отправляет различные детали, такие как название страницы, URL, IP-адрес, географические координаты, информация о системе, уровень и состояние батареи.

***Если вам понравилась моя работа, не забудьте поставить звезду! 🌟***

## Функции
- Получайте уведомления в реальном времени в Telegram при загрузке веб-страницы
- Отправляет следующую информацию:
  - Пользовательское сообщение (по желанию)
  - Название и URL веб-страницы
  - IP-адрес с помощью [ipify](ipify.org)
  - Географические координаты через API геолокации браузера
  - Информация о системе
  - Уровень и состояние батареи
- Обеспечивает конфиденциальность с помощью выделенного бота и ID чата

## Требования
1. Аккаунт Telegram
2. Ноутбук или настольный компьютер (не совместимо с Android)
3. Бот для получения уведомлений
4. ID чата для просмотра сообщений от бота

## Инструкции по установке
1. Клонируйте или загрузите этот репозиторий.
2. Откройте браузер.
3. Перейдите к расширениям.
4. Включите режим разработчика в правом верхнем углу.
5. Нажмите "Загрузить распакованное расширение" и выберите каталог, в который вы клонировали или загрузили этот репозиторий.

## Настройка бота
Для использования этого расширения вам нужно настроить бота в вашем браузере для получения сообщений. Следуйте этим шагам:
1. Откройте Telegram.
2. Найдите [BotFather](https://t.me/botfather) в строке поиска или перейдите к BotFather.
3. Создайте бота и получите токен бота (например, `XXXXXXXXX:urbd2ueddxxxxxxx`).
4. После создания бота найдите 'get Chat ID' или перейдите по ссылке [Chat Id](https://web.telegram.org/k/#@chatIDrobot).
5. Нажмите `Start` и получите ID чата.
6. Перейдите к боту и нажмите `Start`.

## Настройка
После установки расширения нажмите на значок расширения в панели инструментов браузера.

1. Введите токен бота и ID чата для получения сообщений.
2. По желанию, настройте пользовательское сообщение для включения в уведомления.

## Использование
Telegram WebNotifier можно использовать для различных целей:

- Мониторинг активности браузера при передаче системы другому человеку
- Отслеживание поисковой активности
- Мониторинг активности поиска в браузере без использования сторонних приложений

## Протестированные среды

| Браузер  | Случай тестирования |
|----------|---------------------|
| Chrome   | Работает            |
| Edge     | Работает            |

## Вклад
Ваш вклад приветствуется! Если у вас есть предложения по улучшению, откройте проблему или отправьте запрос на вытягивание. Вы также можете форкать этот репозиторий.

## Кредиты
- Это расширение использует следующие API и сервисы:
  - [Telegram Bot API](https://core.telegram.org/bots/api)
  - [ipify](https://www.ipify.org/)
  - API геолокации браузера
 <!-- - Chrome Extension APIs -->

## Лицензия
Этот проект лицензирован под лицензией MIT. Подробности см. в файле [LICENSE](LICENSE).

## Отказ от ответственности
Авторы этого программного обеспечения не предоставляют техническую поддержку для этого расширения. Пользователи несут ответственность за использование этого программного обеспечения. Рекомендуется не заниматься неэтичными действиями при использовании этого репозитория. Любое действие, считающееся неэтичным или неподобающим, является ответственностью пользователя, который берет на себя все последствия.
