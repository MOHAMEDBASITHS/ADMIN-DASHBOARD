/* TOGGLE BUTTON CRAETE */ 

var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  document.querySelector("body").classList.toggle("active");
});

/* CRAETE LINE CHART DRAW */

var xValues = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
var yValues = ["5k", "10k", "15k", "20k", "25k"];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        data: [10, 5, 10, 13, 10, 19],
        borderColor: "#B5B3FB",
        text: " #43425D",
        fill:  false,
      },
      {
        data: [14.5, 2, 12, 8, 13, 5],
        borderColor: "#80E2FF",
        fill: false,
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      yAxes: [
        {
          ticks: {
            max: 25,
            steps: 5,
            beginAtZero: true,
            callback: function (value, index, ticks) {
              if (value > 20) {
                return null;
              } else return "$" + (value + 5);
            },
          },
        },
      ],
    },
  },
});

// CREATE DOUGHNUT CHART

var xValues = [];
var yValues = [200, 130, 160, 170];
var barColors = ["#80E2FF", "#F49FA8", "#FFDF94", "#B5B3FB"];

new Chart("donut-Chart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "",
    },
  },
});
