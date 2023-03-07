<template>
    <Bar :data="chartData"  />
</template>
  
<script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Filler, PointElement, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

  ChartJS.register(Title, Tooltip, Legend, Filler, PointElement, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'LineChartHourly',
    components: { Bar },
    props:{
        dataset: Array,
    },
    mounted(){
      this.renderChart();
    },
    data() {
      return {
        chartData: {
          labels: "",
          datasets: [
          ]
        }
      }
    },
    methods:{
        renderChart(){
            setTimeout(()=>{
                this.chartData = {
                labels: this.dataset.map(d => d.time.split('T')[1].split(':')[0]),
                datasets: [
                    {
                    label: 'Temperature °C',
                    data: this.dataset.map(d=> d.temperature_2m),
                    borderColor:'rgb(214, 228, 240)',
                    backgroundColor:'rgb(214, 228, 240)',
                    }
                ]
                }
            },250)
        }
    }
}
</script>