<template>
<div class="aqii">
<div class="home-btn">
      <router-link to="/" class="home-link"><i class="fas fa-home"></i>Home</router-link></div></router-link>

  <div class="aqi-page">
  <br><br><br>
  
    <h1 class="animate__animated animate__fadeInDown">Air Quality Index</h1>
    <div class="dropdowns">
      <select v-model="selectedCity">
        <option disabled value="">Select a city</option>
        <option v-for="city in cities" :value="city">{{ city }}</option>
      </select>
      <select v-model="selectedMonth">
        <option disabled value="">Select a month</option>
        <option v-for="month in months" :value="month">{{ month }}</option>
      </select>
      
    </div>
    <button class="btn btn-primary" @click="fetchAQIData()">Submit</button>
    <div v-if="aqiData" class="aqi-data">
      <h2 class="animate__animated animate__fadeInLeft">Air Quality Index: {{ aqiData }}</h2>
      <h3 class="animate__animated animate__fadeInRight">{{ aqiMessage }}</h3>
    </div>
    <br>
    <div class="chart-wrapper">
<div>


    <canvas id="aqi-chart" style="width: 600px; height: 400px;"></canvas>
  </div>
  </div>

  </div>
  
  </div>
</template>


<script>

import 'animate.css';
import Chart from 'chart.js/auto';
import Header from '@/components/Header'

export default {
    name: 'AQI',
  data() {
    return {
      cities: ["Adilabad", "Nizamabad", "Warangal", "Karimnagar", "Khammam"],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      selectedCity: "",
      selectedMonth: "",
      aqiData: null
    };
  },
  components : {
        Header,
    },

//   },
  
  computed: {
    aqiMessage() {
      if (this.aqiData >= 0 && this.aqiData <= 50) {
        return "Good";
      } else if (this.aqiData >= 51 && this.aqiData <= 100) {
        return "Satisfactory";
      } else if (this.aqiData >= 101 && this.aqiData <= 200) {
        return "Moderately Polluted";
      } else if (this.aqiData >= 201 && this.aqiData <= 300) {
        return "Poor";
      } else if (this.aqiData >= 301 && this.aqiData <= 400) {
        return "Very Poor";
      } else if (this.aqiData >= 401 && this.aqiData <= 500) {
        return "Severe";
      } else {
        return "";
      }
    },
  },
  methods: {
    async fetchAQIData() {
      // Make API request here and set this.aqiData to response data
      // For example:
      const response = await fetch(`http://127.0.0.1:5000/api/aqi/${this.selectedCity}/${this.selectedMonth}`)
      const data = await response.json()
      this.aqiData = data.aqi
      // this.aqiData = 98.5; // Dummy data for example purposes
    },
    async createChart() {
    const response = await fetch('http://localhost:5000/api/aqis');
    const data = await response.json();
    
    const labels = Object.keys(data);
    const values = Object.values(data).map(value => Math.round(value));

    const chart = new Chart('aqi-chart', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'AQI Current Month',
          data: values,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
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
  },
  },
  mounted() {
  this.createChart();
},

};
</script>

<style>
@import '~@fortawesome/fontawesome-free/css/all.css';
.aqi-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.aqii {
    background-image: url("../assets/blue_sky.jpg");
    background-size: cover;
  height: 100vh;
  width: 100vw;
}
.dropdowns {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2rem;
}

.dropdowns select {
  margin: 0 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  outline: none;
}
.home-btn {
  position: absolute;
  top: 30px;
  left: 30px;
 

  
}

.chart-wrapper {
  background-color: #ffffff; /* set the background color to white */
}
.home-link {
  color: #061c3c;
}
nav {
 
    padding: 0px;

}
</style>