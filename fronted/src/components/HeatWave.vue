<template>
<div>
<div class="home-btn">
      <router-link to="/"><i class="fas fa-home"></i>Home</router-link></div></router-link>
<div class="heatwave-container">
    <h1 class="heatwave-heading">Heat Wave Prediction</h1>
    <form class="heatwave-form" @submit.prevent="submitForm">
      <div class="form-group">
        <label for="city">Select City:</label>
        <select id="city" class="form-control" v-model="selectedCity">
          <option disabled value="">Please select one</option>
          <option v-for="city in cities" :key="city">{{ city }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="date">Select Date:</label>
        <input type="text" id="date" class="form-control" v-model="selectedDate" placeholder="Select a date" />
      </div>
      </form>
      <button type="submit" class="btn btn-primary"  @click="submitForm()">Submit</button>
    
    <div v-if="showResult">
      <h2 class="result-heading">Heat Wave Prediction Result:</h2>
      <p class="result-text">{{ value_ }}:{{ result }}</p>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import Flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Header from '@/components/Header'
export default {
    name: 'HeatWave',
    components : {
        Header,
    },
   
  data() {
    return {
      cities: ["Adilabad", "Nizamabad", "Warangal", "Karimnagar", "Khammam"],
      selectedCity: "",
      selectedDate: "",
      value_: "",
      showResult: false,
      result: "",
    };
  },
  mounted() {
    const datePicker = new Flatpickr("#date", {
      enableTime: false,
      dateFormat: "Y-m-d",
    });
    datePicker.set("minDate", "2023-01-01");
    datePicker.set("maxDate", "2023-12-31");
  },
  methods: {
    submitForm() {
      if (this.selectedCity && this.selectedDate) {
        // Replace this dummy API URL with your actual API endpoint
        // http://127.0.0.1:5000/api/aqi/${this.selectedCity}/${this.selectedMonth}
        const apiUrl = `http://127.0.0.1:5000/api/heat_waves/${this.selectedCity}/${this.selectedDate}`;
        
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            this.value_ = data;
            this.result = data >= 40 ? "Heat-Wave" : "No Heat-Wave";
            this.showResult = true;
          })
          .catch((error) => {
            console.error("Error fetching heat wave prediction:", error);
          });
      }
    },
  },
    
};
</script>

<style scoped>
.heatwave-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  
    background-image: url("../assets/heat.jpg");
    background-size: cover;
  height: 100vh;
  width: 100vw;

}

.heatwave-heading {
  font-size: 36px;
  font-weight: bold;
  text-align: center;
}

.heatwave-form {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 50px;
}

.form-group {
  margin-bottom: 20px;
  color: rgb(0 0 0 / 90%);
}

.result-heading {
  font-size: 24px;
  font-weight: bold;
  margin-top: 50px;
  text-align: center;
}

.result-text {
  font-size: 18px;
  text-align: center;
}
.home-btn {
  position: absolute;
  top: 20px;
  left: 20px;
}
nav {
 
    padding: 0px;

}
</style>