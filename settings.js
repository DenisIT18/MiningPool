document.addEventListener("DOMContentLoaded", async function () {
    const devicesList = document.getElementById("devices");
    const aiOptimization = document.getElementById("ai-optimization");
    const saveButton = document.getElementById("save-settings");

    // Загружаем список устройств пользователя
    const response = await fetch("https://yourserver.com/api/devices", {
        headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
    });
    const data = await response.json();

    devicesList.innerHTML = "";
    data.devices.forEach(device => {
        const li = document.createElement("li");
        li.textContent = `${device.name} (Хешрейт: ${device.hashrate} TH/s)`;
        devicesList.appendChild(li);
    });

    // Сохраняем настройки
    saveButton.addEventListener("click", async function () {
        await fetch("https://yourserver.com/api/settings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({ aiOptimization: aiOptimization.checked })
        });
        alert("Настройки сохранены!");
    });
});
