<template>
<div>
<Header></Header>
  <div class="container">
  


    <h2>Frequently Asked Questions</h2>
    <div class="accordion" id="faq-accordion">
    <centre>
    <div class="row">
    <div class="col">
      
        <div class="card-header" id="question1">
          <h5 class="mb-0">
            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#answer1" aria-expanded="true" aria-controls="answer1">
              What is Air Quality Index (AQI)?
            </button>
          </h5>
        </div>

        <div id="answer1" class="collapse show" aria-labelledby="question1" data-parent="#faq-accordion">
          <div class="card-body">
            AQI is an index for reporting daily air quality. It tells you how clean or polluted your air is, and what associated health effects might be a concern for you. The AQI focuses on health effects you may experience within a few hours or days after breathing polluted air.
          </div>
        </div>
      </div>
      
      <div class="col">

     
        <div class="card-header" id="question2">
          <h5 class="mb-0">
            <button class="btn btn-link " type="button" data-toggle="collapse" data-target="#answer2" aria-expanded="false" aria-controls="answer2">
              How is AQI calculated?
            </button>
          </h5>
        </div>
        <div id="answer2" class="collapse show" aria-labelledby="question2" data-parent="#faq-accordion">
          <div class="card-body">
            AQI is calculated based on five major air pollutants regulated by the Clean Air Act: ground-level ozone, particulate matter (PM2.5 and PM10), carbon monoxide, sulfur dioxide, and nitrogen dioxide. The highest value of these pollutants is used to determine the AQI for a particular location.
          </div>
        </div>
      
      </div>

<div class="w-100"></div>
    <div class="col">
        <div class="card-header" id="question3">
          <h5 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#answer3" aria-expanded="false" aria-controls="answer3">
              What are the health effects of air pollution?
            </button>
          </h5>
        </div>
        <div id="answer3" class="collapse show" aria-labelledby="question3" data-parent="#faq-accordion">
          <div class="card-body">
            Air pollution can have various health effects, depending on the level and duration of exposure. Short-term exposure to high levels of air pollution can cause irritation of the eyes, nose and throat, coughing, wheezing, shortness of breath and chest pain. Long-term exposure can lead to chronic respiratory and cardiovascular diseases, cancer and premature death.
          </div>
        </div>
      </div>
    

<div class="col">

     
        <div class="card-header" id="question4">
          <h5 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#answer4" aria-expanded="false" aria-controls="answer4">
              What is a heat wave?
            </button>
          </h5>
        </div>
        <div id="answer4" class="collapse show" aria-labelledby="question4" data-parent="#faq-accordion">
          <div class="card-body">
          A heat wave is a prolonged period of excessively hot weather, which may be accompanied by high humidity. Heat waves can occur in both dry and humid climates, and they can cause a variety of health problems, such as dehydration, heat exhaustion, and heatstroke. Heat waves can also cause damage to crops and infrastructure, and they can increase the risk of wildfires.
           </div>
           </div>
           
           
           
           </div>
           
           </div>
           </centre>
           </div>
           </div>
           </div>


</template>


<script>
import Header from '@/components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
    name: 'FAQs',
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
</style>