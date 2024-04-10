
  const ctx2 = document.getElementById('doughnut');

  new Chart(ctx2, {
    type: 'doughnut',
    data: {
      labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
      datasets: [{
        label: '# of Votes',
        data: [8, 9, 10, 11, 12, 19],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });