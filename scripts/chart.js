const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "12-01-2020",
      "01-01-2021",
      "02-01-2021",
      "03-01-2021",
      "04-01-2021",
      "05-01-2021",
      "06-01-2021",
      "07-01-2021",
      "08-01-2021",
      "09-01-2021",
      "10-01-2021",
      "11-01-2021",
      "12-01-2021",
      "01-01-2022",
      "02-01-2022",
      "03-01-2022",
      "04-01-2022",
      "05-01-2022",
      "06-01-2022",
      "07-01-2022",
      "08-01-2022",
      "09-01-2022",
    ],
    datasets: [
      {
        data: [
          622, 622, 426, 471, 365, 365, 238, 324, 288, 206, 324, 324, 500, 409,
          409, 273, 232, 273, 500, 570, 767, 808,
        ],
        borderWidth: 4,
        borderColor: "rgba(91, 140, 235)",
        pointRadius: 1,
        tension: 0.3,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false,
        },
        gridLines: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      layout: {
        padding: 0,
      },
      legend: {
        display: false,
      },
    },
  },
});
