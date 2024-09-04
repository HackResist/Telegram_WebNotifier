# 🚀Telegram WebNotifier🚀

## Descripción
Telegram WebNotifier es una extensión de navegador que envía notificaciones en tiempo real a tu cuenta de Telegram cada vez que se carga una página web. Recoge y envía diversos detalles, como el título de la página web, la URL, la dirección IP, las coordenadas geográficas, la información del sistema operativo, el nivel y el estado de la batería.

***¡Si te gusta mi trabajo, no olvides darme una estrella! 🌟***

## Funcionalidades
- Recibe notificaciones en tiempo real en Telegram cuando se cargue la página web
- Envía la siguiente información:
  - Mensaje personalizado (opcional)
  - Título y URL de la página web
  - Dirección IP usando [ipify](ipify.org)
  - Coordenadas geográficas usando la API de geolocalización del navegador
  - Información del sistema operativo
  - Nivel y estado de la batería
- Garantiza la privacidad utilizando un bot dedicado y un ID de chat

## Requisitos
1. Cuenta de Telegram
2. Ordenador portátil o de escritorio (no compatible con Android)
3. Bot para recibir las notificaciones
4. ID de chat para ver los mensajes del bot

## Instrucciones de instalación
1. Clona o descarga este repositorio.
2. Abre tu navegador.
3. Ve a las extensiones.
4. Activa el modo de desarrollador en la esquina superior derecha.
5. Haz clic en "Cargar extensión sin empaquetar" y selecciona el directorio donde has clonado o descargado este repositorio.

## Configuración del bot
Para usar esta extensión, debes configurar un bot en tu navegador para recibir los mensajes. Sigue estos pasos:
1. Abre Telegram.
2. Busca [BotFather](https://t.me/botfather) en la barra de búsqueda o ve a BotFather.
3. Crea un bot y obtén un token del bot (por ejemplo: `XXXXXXXXX:urbd2ueddxxxxxxx`).
4. Después de crear el bot, busca 'get Chat ID' o ve a [Chat Id](https://web.telegram.org/k/#@chatIDrobot).
5. Pulsa `Start` y obtén el ID de chat.
6. Ve al bot y pulsa `Start`.

## Configuración
Después de instalar la extensión, haz clic en el ícono de la extensión en la barra de herramientas del navegador.

1. Introduce el token del bot y el ID de chat para recibir los mensajes.
2. Opcionalmente, configura un mensaje personalizado para incluir en las notificaciones.

## Uso
Telegram WebNotifier se puede utilizar para varios propósitos:

- Monitorizar la actividad del navegador cuando transfieres el sistema a otra persona
- Rastrear las actividades de búsqueda
- Monitorear la actividad de búsqueda del navegador sin usar aplicaciones de terceros

## Entornos probados

| Navegador | Caso de prueba |
|-----------|----------------|
| Chrome    | Funciona       |
| Edge      | Funciona       |

## Contribuir
¡Se agradecen las contribuciones! Si tienes sugerencias de mejora, abre un problema o envía una solicitud de extracción. También puedes bifurcar este repositorio.

## Créditos
- Esta extensión utiliza las siguientes API y servicios:
  - [Telegram Bot API](https://core.telegram.org/bots/api)
  - [ipify](https://www.ipify.org/)
  - API de geolocalización del navegador
 <!-- - APIs de Extensiones de Chrome -->

## Licencia
Este proyecto está bajo la licencia MIT. Para más detalles, consulta el archivo [LICENSE](LICENSE).

## Descargo de responsabilidad
Los autores de este software no ofrecen soporte técnico para esta extensión. Los usuarios son responsables del uso de este software. Se recomienda no participar en actividades poco éticas utilizando este repositorio. Cualquier acción considerada poco ética o inapropiada es responsabilidad del usuario, quien asumirá todas las consecuencias.
