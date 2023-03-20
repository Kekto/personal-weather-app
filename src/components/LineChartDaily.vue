<template>
    <Line :data="chartData"  />
</template>
  
<script>
  import { Line } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Filler, PointElement, Legend, LineElement, CategoryScale, LinearScale } from 'chart.js'

  ChartJS.register(Title, Tooltip, Legend, Filler, PointElement, LineElement, CategoryScale, LinearScale)
  
  export default {
    name: 'LineChartDaily',
    components: { Line },
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
                labels: this.dataset.map(d => d.time),
                datasets: [
                    {
                    label: 'Maximum Temperature °C',
                    data: this.dataset.map(d=> (d.temperature_2m_max)),
                    borderColor:'rgb(214, 228, 240)',
                    tension: 0.3,
                    fill: {
                      target: 'origin',
                      above: 'rgb(214, 228, 240, 0.6)',   
                      below: 'rgb(168, 194, 230, 0.5)' 
                    }
                    },
                    {
                    label: 'Minimum Temperature °C',
                    data: this.dataset.map(d=> (d.temperature_2m_min)),
                    borderColor:'rgb(214, 228, 240)',
                    tension: 0.3,
                    fill: {
                      target: 'origin',
                      above: 'rgb(214, 228, 240, 0.6)',   
                      below: 'rgb(168, 194, 230, 0.5)' 
                    }
                    }
                ]
                }
            },250)
        }
    }
}
</script>