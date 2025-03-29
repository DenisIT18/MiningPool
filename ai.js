document.addEventListener("DOMContentLoaded", async function () {
    const aiPrediction = document.getElementById("ai-suggestion");

    try {
        const response = await fetch("https://yourserver.com/api/ai-predictions");
        const data = await response.json();
        aiPrediction.textContent = `Прогноз: сложность сети ${data.predictedDifficulty} через 24 часа`;
    } catch (error) {
        aiPrediction.textContent = "Ошибка загрузки AI-прогнозов.";
        console.error(error);
    }
});
