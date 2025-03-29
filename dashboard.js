document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("hashrateChart").getContext("2d");

    let chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: ["10 мин", "20 мин", "30 мин", "40 мин", "50 мин"],
            datasets: [{
                label: "Hashrate (TH/s)",
                data: [900, 910, 920, 940, 950],
                borderColor: "orange",
                borderWidth: 2
            }]
        },
        options: {
            animation: {
                duration: 1000
            }
        }
    });

    const socket = new WebSocket("wss://yourserver.com/socket");

    socket.onmessage = function (event) {
        const data = JSON.parse(event.data);
        chart.data.datasets[0].data.push(data.hashrate);
        chart.data.labels.push(`${new Date().getMinutes()} мин`);
        chart.update();
    };
});
