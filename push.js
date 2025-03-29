// Запрос разрешения на отправку уведомлений
if ("Notification" in window && Notification.permission !== "granted") {
    Notification.requestPermission();
}

// Функция отправки уведомления
function sendNotification(title, message) {
    if (Notification.permission === "granted") {
        new Notification(title, { body: message, icon: "/assets/icon.png" });
    }
}

// Пример использования: получаем события через WebSocket
const socket = new WebSocket("wss://yourserver.com/notifications");

socket.onmessage = function (event) {
    const data = JSON.parse(event.data);
    sendNotification("Майнинговый пул", data.message);
};
