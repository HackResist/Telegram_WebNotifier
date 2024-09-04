# 🚀Telegram WebNotifier🚀

## Beschreibung
Telegram WebNotifier ist eine Browsererweiterung, die bei jedem Laden einer Webseite Echtzeit-Benachrichtigungen an Ihr Telegram-Konto sendet. Sie sammelt und sendet verschiedene Details wie den Titel der Webseite, die URL, die IP-Adresse, geographische Koordinaten, Systeminformationen, Batteriestatus und -level.

***Wenn Ihnen meine Arbeit gefällt, vergessen Sie nicht, eine Bewertung abzugeben! 🌟***

## Funktionen
- Erhalten Sie Echtzeit-Benachrichtigungen auf Telegram, wenn die Webseite geladen wird
- Sendet die folgenden Informationen:
  - Benutzerdefinierte Nachricht (optional)
  - Titel und URL der Webseite
  - IP-Adresse unter Verwendung von [ipify](ipify.org)
  - Geographische Koordinaten über die Geolokalisierungs-API des Browsers
  - Systeminformationen
  - Batteriestatus und -level
- Gewährleistet Datenschutz durch die Verwendung eines dedizierten Bots und einer Chat-ID

## Anforderungen
1. Telegram-Konto
2. Laptop oder Desktop (nicht kompatibel mit Android)
3. Bot, um Benachrichtigungen zu empfangen
4. Chat-ID, um die Nachrichten des Bots zu sehen

## Installationsanleitung
1. Klonen oder laden Sie dieses Repository herunter.
2. Öffnen Sie Ihren Browser.
3. Gehen Sie zu den Erweiterungen.
4. Aktivieren Sie den Entwicklermodus in der oberen rechten Ecke.
5. Klicken Sie auf "Entpackte Erweiterung laden" und wählen Sie das Verzeichnis aus, in dem Sie dieses Repository geklont oder heruntergeladen haben.

## Bot-Konfiguration
Um diese Erweiterung zu nutzen, müssen Sie einen Bot in Ihrem Browser konfigurieren, um die Nachrichten zu empfangen. Befolgen Sie diese Schritte:
1. Öffnen Sie Telegram.
2. Suchen Sie nach [BotFather](https://t.me/botfather) in der Suchleiste oder gehen Sie zu BotFather.
3. Erstellen Sie einen Bot und erhalten Sie ein Bot-Token (z.B. `XXXXXXXXX:urbd2ueddxxxxxxx`).
4. Nach der Erstellung des Bots suchen Sie nach 'get Chat ID' oder gehen Sie zu [Chat Id](https://web.telegram.org/k/#@chatIDrobot).
5. Drücken Sie `Start` und erhalten Sie die Chat-ID.
6. Gehen Sie zum Bot und tippen Sie auf `Start`.

## Einrichtung
Nachdem Sie die Erweiterung installiert haben, klicken Sie auf das Erweiterungssymbol in der Browser-Symbolleiste.

1. Geben Sie das Bot-Token und die Chat-ID ein, um Nachrichten zu empfangen.
2. Optional können Sie eine benutzerdefinierte Nachricht konfigurieren, die in den Benachrichtigungen enthalten sein soll.

## Nutzung
Telegram WebNotifier kann für verschiedene Zwecke verwendet werden:

- Überwachung der Browseraktivitäten, wenn Sie das System an jemand anderen weitergeben
- Verfolgen von Suchaktivitäten
- Überwachung der Browser-Suchaktivitäten ohne die Verwendung von Drittanbieter-Anwendungen

## Getestete Umgebungen

| Browser   | Teststatus |
|-----------|------------|
| Chrome    | Funktioniert |
| Edge      | Funktioniert |

## Mitwirken
Beiträge sind willkommen! Wenn Sie Verbesserungsvorschläge haben, öffnen Sie ein Issue oder reichen Sie einen Pull-Request ein. Sie können dieses Repository auch forken.

## Danksagung
- Diese Erweiterung verwendet die folgenden APIs und Dienste:
  - [Telegram Bot API](https://core.telegram.org/bots/api)
  - [ipify](https://www.ipify.org/)
  - Geolokalisierungs-API des Browsers
 <!-- - Chrome Extension APIs -->

## Lizenz
Dieses Projekt ist unter der MIT-Lizenz lizenziert. Weitere Details finden Sie in der [LICENSE](LICENSE)-Datei.

## Haftungsausschluss
Die Autoren dieser Software bieten keinen technischen Support für diese Erweiterung an. Die Nutzung dieser Software erfolgt auf eigenes Risiko. Es wird empfohlen, sich nicht an unethischen Aktivitäten zu beteiligen, indem Sie dieses Repository verwenden. Jegliche als unethisch oder unangemessen betrachtete Handlung liegt in der Verantwortung des Benutzers, der die volle Verantwortung dafür trägt.
