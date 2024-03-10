document.addEventListener('DOMContentLoaded', function () {
  const saveSettingsButton = document.getElementById('saveSettingsButton');
  saveSettingsButton.addEventListener('click', saveSettings);
});

function saveSettings() {
  const botToken = document.getElementById('botToken').value;
  const chatId = document.getElementById('chatId').value;
  const customMessage = document.getElementById('customMessage').value;

  chrome.storage.sync.set({ botToken, chatId, customMessage }, function() {
      console.log('Settings saved successfully.');
      console.log('Bot Token:', botToken);
      console.log('Chat ID:', chatId);
      console.log('Custom Message:', customMessage);
    
       chrome.extension.getBackgroundPage().alert('Settings saved successfully.\n' + 
       'Bot Token: ' + botToken + '\n' +
       'Chat ID: ' + chatId + '\n' +
       'Custom Message: ' + customMessage);
  });
}
