<template>
<div>
<Header></Header>
  <div class="home">
    <div class="cards">
      <div class="card card-aqi" @click="goToAQI">
        <h2>Air Quality Index</h2>
      </div>
      <div class="card card-heat-wave" @click="goToHeatWave">
        <h2>Heat Wave</h2>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'Home',
  components: {
        Header,
       
        
    },
  methods: {
    goToAQI() {
      this.$router.push('/aqi');
    },
    goToHeatWave() {
      this.$router.push('/heat-wave');
    }
  }
};
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80");
  background-repeat: no-repeat;
  background-size: cover;
}

h1 {
  font-size: 4rem;
  color: #fff;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px #0f33e9;
}

.cards {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 60%;
  max-width: 1000px;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #acb6d9;
  width: 45%;
  height: 250px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.card:hover {
  transform: translateY(-10px);
}

/*.card-aqi:hover {
  background-image: url('https://images.unsplash.com/photo-1613323115830-9a4edbd2d56d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
}

.card-heat-wave:hover {
  background-image: url('https://images.unsplash.com/photo-1603983896960-f9be44a5f6a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
} 
*/

h2 {
  font-size: 3rem;
  color: #333;
}
</style>
