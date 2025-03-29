document.addEventListener("DOMContentLoaded", function () {
    const socket = new WebSocket("wss://yourserver.com/socket");

    socket.onmessage = function (event) {
        const data = JSON.parse(event.data);
        document.getElementById("hashrate").textContent = `${data.hashrate} TH/s`;
        document.getElementById("miners").textContent = `${data.miners} активных майнеров`;
        document.getElementById("blocks").textContent = `${data.blocks} найденных блоков`;
    };

    socket.onopen = function () {
        console.log("✅ WebSocket подключен!");
    };

    socket.onerror = function (error) {
        console.error("❌ Ошибка WebSocket:", error);
    };

    socket.onclose = function () {
        console.warn("⚠️ WebSocket отключен, переподключаемся...");
        setTimeout(() => location.reload(), 5000);
    };
});
