<template>
<div id="about">
<Header></Header>



  <div class="container mt-5">
    <h1>About Us</h1>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <h3>Who We Are</h3>
        <p>We are a team of environmental enthusiasts who are passionate about creating awareness on environmental issues and providing predictive solutions using data science.</p>
        <p>Our team consists of four members well versed in data science, design, and technology who have come together to create a platform that provides predictive solutions for environmental issues.</p>
      </div>
      <div class="col-md-6">
        <h3>Our Mission</h3>
        <p>Our mission is to use data science and technology to create a sustainable future by predicting environmental issues and providing solutions to prevent them from occurring.</p>
        <p>We believe that by creating awareness and providing predictive solutions, we can create a better future for ourselves and for the generations to come.</p>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-md-6">
        <h3>Contact Us</h3>
        <ul class="list-unstyled">
          <li><i class="fas fa-map-marker-alt"></i> Dummy Address</li>
          <li><i class="fas fa-envelope"></i> dummy@predictiveprodigies.com</li>
          <li><i class="fas fa-phone"></i> 555-555-5555</li>
        </ul>
      </div>
      <div class="col-md-6">
        <h3>Follow Us</h3>
        <ul class="list-unstyled">
          <li><a href="#"><i class="fab fa-facebook fa-2x"></i></a></li>
          <li><a href="#"><i class="fab fa-twitter fa-2x"></i></a></li>
          <li><a href="#"><i class="fab fa-instagram fa-2x"></i></a></li>
        </ul>
      </div>
    </div>
  



</div>
</div>



</template>

<script>
import Header from '@/components/Header'
export default {
    name: 'About',
    components : {
        Header
    }
}
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 50px auto;
  overflow: auto;
  min-height: 500px;
  border: 2px solid steelblue;
  
  border-radius: 15px;
}
.logo a{
    color: #000000;
    font-size: 35px;
    font-weight: 600;
}
.logo a span{
    color: #323c96;
    transition: all 0.3s ease;
}

</style>