<template>
  <h1>Home</h1>
  <!--<PieChart :data="pie"/>-->
  <apexchart type="pie" width="380" :options="chartOptions" :series="series"></apexchart>
</template>

<script>
  //import PieChart from '@/components/PieChart.js'
  export default {
    name: 'Home',
    components: {
      //PieChart
    },
    data() {
      return {
        pie: {
          body: [],
          data: [],
        },
        series: [44, 55, 13, 43, 22],
        chartOptions: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: ['Salaire', 'Loyer', 'Alimentaire', 'Electricité', 'Transport'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        }
      }
    },
    mounted() {
      var that = this;
      var d = new Date();
      console.log((d.getMonth() + 1) + "/" + d.getFullYear())
      that.axios.get('/api', {
        params: {
          period: (d.getMonth() + 1) + "/" + d.getFullYear()
        }
      }).then(function (response) {
        for (const property in response.data) {
          if (that.pie.body.includes(response.data[property].categorie)) {
            that.pie.data[that.pie.body.indexOf(response.data[property].categorie)] += parseFloat(response.data[
              property].prix);
          } else {
            that.pie.body.push(response.data[property].categorie);
            that.pie.data.push(parseFloat(response.data[property].prix))
          }
        }
        that.series = that.pie.data;
        that.chartOptions.labels = that.pie.body;
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
</script>