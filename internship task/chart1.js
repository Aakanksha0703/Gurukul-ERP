
  const ctx1 = document.getElementById('barChart');

  new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
      datasets: [{
        label: '# collage overview',
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
