<template>
  <h1>Home</h1>
  <apexchart type="donut" :options="chartOptions" :series="series"></apexchart>
  <div>
    <p :class="$tt('overline')"> 
      Entrée: <span style="color: blue">{{ entree }}</span>
      Sortie: <span style="color: red">{{ sortie }}</span>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    components: {

    },
    data() {
      return {
        chartOptions: {
          labels: [],
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
        series: [],
        entree: "",
        sortie: ""
      }
    },
    mounted() {
      var that = this;
      var d = new Date();

      that.axios.get('/api', {
        params: {
          period: (d.getMonth() + 1) + "/" + d.getFullYear()
        }
      }).then(function (response) {
        let labels = [];
        let data = [];
        let entree = 0;
        let sortie = 0;

        for (const property in response.data) {
          if (!response.data[property].in) {
            sortie += parseInt(response.data[property].prix);
            if (labels.includes(response.data[property].categorie)) {
              data[labels.indexOf(response.data[property].categorie)] += parseInt(response.data[property].prix);
            } else {
              labels.push(response.data[property].categorie);
              data.push(parseInt(response.data[property].prix))
            }
          } else {
            entree += parseInt(response.data[property].prix);
          }
        }
        that.entree = entree + " €";
        that.sortie = sortie + " €";
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