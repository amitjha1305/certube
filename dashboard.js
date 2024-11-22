// Example: Chart.js for Growth Report
document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("growthChart").getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jul", "Aug", "Sep", "Oct", "Nov"],
        datasets: [
          {
            label: "Monthly Lecture Completion",
            data: [20, 60, 90, 70, 50],
            borderColor: "#ff62c3",
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  });
  