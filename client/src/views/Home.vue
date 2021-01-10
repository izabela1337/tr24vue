<template>
<b-container fluid style="margin:0;padding:0">
  <navBar />
  <b-container fluid class="backgroundContainer">
    <b-container class="whiteNigga">
      <b-carousel
      class="carousel-center"
      id="carousel-fade"
      style="text-shadow: 0px 0px 5px #000"
      fade
      indicators
      img-width="800px"
      img-height="300px">
        <b-carousel-slide
          img-src="@/assets/header2wide.jpg">
            <div class="d-flex h-100 align-items-center justify-content-center">
              <div>
                <h1>NazwaFirmy</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
          </b-carousel-slide>
        <b-carousel-slide
          img-src="@/assets/header.jpg">
            <div class="d-flex h-100 align-items-center justify-content-center">
              <div>
                <h1>Cacao</h1>
                <p>Deco moreno. Najwyższa jakość.</p>
              </div>
            </div>
          </b-carousel-slide>
      </b-carousel>
      <b-container class="strpped">
        <b-row class="padinBoxes">
          <b-col md='6'>
            <img src="@/assets/supplies.png" style="width:95%;height:auto;">
          </b-col>
          <b-col md='6' class="vCenter">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa inventore voluptatum fugiat excepturi, modi aliquam dignissimos sit dolor porro ullam consequuntur accusantium atque nostrum animi perferendis officia. Reprehenderit ut ullam, provident harum impedit perferendis laborum libero, voluptatibus delectus suscipit doloribus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, vitae voluptatum fuga nam facilis necessitatibus illo consequatur error hic consectetur.</p>
          </b-col>
        </b-row>
      </b-container>
      <b-container class="strpped">
        <b-row class="padinBoxes strip-dark">
          <b-col md='6' class="vCenter">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa inventore voluptatum fugiat excepturi, modi aliquam dignissimos sit dolor porro ullam consequuntur accusantium atque nostrum animi perferendis officia. Reprehenderit ut ullam, provident harum impedit perferendis laborum libero, voluptatibus delectus suscipit doloribus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, vitae voluptatum fuga nam facilis necessitatibus illo consequatur error hic consectetur.</p>
          </b-col>
          <b-col md='6'>
            <img src="@/assets/ink.png" style="width:95%;height:auto;">
          </b-col>
        </b-row>
      </b-container>
      <b-container class="strpped">
        <b-row class="padinBoxes">
          <b-col md='6'>
            <img src="@/assets/laptop.png" style="width:95%;height:auto;">
          </b-col>
          <b-col md='6' class="vCenter">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa inventore voluptatum fugiat excepturi, modi aliquam dignissimos sit dolor porro ullam consequuntur accusantium atque nostrum animi perferendis officia. Reprehenderit ut ullam, provident harum impedit perferendis laborum libero, voluptatibus delectus suscipit doloribus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, vitae voluptatum fuga nam facilis necessitatibus illo consequatur error hic consectetur.</p>
          </b-col>
        </b-row>
        <b-row class="padinBoxes strip-dark">
          <b-col md='6' class="vCenter">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa inventore voluptatum fugiat excepturi, modi aliquam dignissimos sit dolor porro ullam consequuntur accusantium atque nostrum animi perferendis officia. Reprehenderit ut ullam, provident harum impedit perferendis laborum libero, voluptatibus delectus suscipit doloribus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, vitae voluptatum fuga nam facilis necessitatibus illo consequatur error hic consectetur.</p>
          </b-col>
          <b-col md='6'>
            <img src="@/assets/security.jpg" style="width:95%;height:auto;">
          </b-col>
        </b-row>
      </b-container>
    </b-container>
  </b-container>
</b-container>
</template>

<script>
import navBar from '@/components/navbar.vue';

export default {
  name: 'Home',
  components: {
    navBar
  }
}
</script>
<style lang="scss" scoped>
.backgroundContainer{
  height: 100%;
  background: #3777CD;
  // background: linear-gradient(90deg, rgb(102, 95, 194) 10%, rgba(0,212,255,1) 75%);
}
.whiteNigga{
  padding: 0;
  height: 100%;
  width: 90%;
  min-width: 80%;
  background: white;
}
.vCenter{
  display: grid;
  place-items: center;
}
.padinBoxes{
  padding: 1rem;
  margin:0;
}
.strip-dark{
  background: #6ABECF;
  color: white;
}
.strpped{
  margin: 0;
  padding: 0;
  min-width: 100%;
}
.carousel .carousel-inner .carousel-item .carousel-caption{
  bottom:40%!important;
}
.carousel-center {
  .carousel-caption {
    bottom: 200px!important;
  }
}
</style>
