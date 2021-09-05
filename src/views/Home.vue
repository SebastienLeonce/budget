<template>
  <h1>Home</h1>
  <apexchart type="donut" :options="chartOptions" :series="series"></apexchart>
</template>

<script>
  export default {
    name: 'Home',
    components: {
      
    },
    data() {
      return {
        chartOptions: {
          labels: ['a', 'b', 'c', 'd', 'e'],
          tooltip: {
            enabled: false
          },
          dataLabels: {
            enabled: false
          },
          legend: {
            position: "top"
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  name: {
                    show: true,
                  },
                  value: {
                    show: true,
                    formatter: function (val) {
                      return val + " €"
                    }
                  },
                  total: {
                    show: true,
                    label: 'Total',
                    color: "#000000",
                    formatter: function (w) {
                      return w.globals.seriesTotals.reduce((a, b) => {
                        return a + b
                      }, 0) + " €"
                    }
                  }
                },
              }
            }
          }
        },
        series: [44, 55, 41, 17, 15],
      }
    },
    mounted() {
      var that = this;
      var d = new Date();

      that.axios.get('/api', {
        params: {
          //TODO RAOUTER +1
          period: (d.getMonth() + 0) + "/" + d.getFullYear()
        }
      }).then(function (response) {
        let labels = [];
        let data = [];

        for (const property in response.data) {
          if (labels.includes(response.data[property].categorie)) {
            data[labels.indexOf(response.data[property].categorie)] += parseInt(response.data[property].prix);
          } else {
            labels.push(response.data[property].categorie);
            data.push(parseInt(response.data[property].prix))
          }
        }
        that.series = data;
        that.chartOptions = {
          labels: labels
        };
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
</script>