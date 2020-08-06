<template>
  <b-container fluid class="backgroundContainer">
    <b-container class="whiteNigga">
      <b-carousel
      class="carousel-center"
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      img-width="100%"
      img-height="100%">
        <b-carousel-slide
          img-src="@/assets/header2.jpg">
            <div class="d-flex h-100 align-items-center justify-content-center">
              <div>
                <h1>NazwaFirmy</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
          </b-carousel-slide>
      </b-carousel>
      <b-container>
        <b-row class="padinBoxes">
          <b-col md='6'>
            <img src="@/assets/supplies.png" style="width:95%;height:auto;">
          </b-col>
          <b-col md='6' class="vCenter">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa inventore voluptatum fugiat excepturi, modi aliquam dignissimos sit dolor porro ullam consequuntur accusantium atque nostrum animi perferendis officia. Reprehenderit ut ullam, provident harum impedit perferendis laborum libero, voluptatibus delectus suscipit doloribus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, vitae voluptatum fuga nam facilis necessitatibus illo consequatur error hic consectetur.</p>
          </b-col>
        </b-row>
      </b-container>
      <b-container>
        <b-row style="background: rgb(244,244,244)" class="padinBoxes">
          <b-col md='6' class="vCenter">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa inventore voluptatum fugiat excepturi, modi aliquam dignissimos sit dolor porro ullam consequuntur accusantium atque nostrum animi perferendis officia. Reprehenderit ut ullam, provident harum impedit perferendis laborum libero, voluptatibus delectus suscipit doloribus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, vitae voluptatum fuga nam facilis necessitatibus illo consequatur error hic consectetur.</p>
          </b-col>
          <b-col md='6'>
            <img src="@/assets/ink.png" style="width:95%;height:auto;">
          </b-col>
        </b-row>
      </b-container>
      <b-container>
        <b-row class="padinBoxes">
          <b-col md='6'>
            <img src="@/assets/laptop.png" style="width:95%;height:auto;">
          </b-col>
          <b-col md='6' class="vCenter">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa inventore voluptatum fugiat excepturi, modi aliquam dignissimos sit dolor porro ullam consequuntur accusantium atque nostrum animi perferendis officia. Reprehenderit ut ullam, provident harum impedit perferendis laborum libero, voluptatibus delectus suscipit doloribus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, vitae voluptatum fuga nam facilis necessitatibus illo consequatur error hic consectetur.</p>
          </b-col>
        </b-row>
        <b-row style="background: rgb(244,244,244)" class="padinBoxes">
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
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>
<style lang="scss" scoped>
.backgroundContainer{
  height: 100%;
  background: rgb(66,55,205);
  background: linear-gradient(90deg, rgb(102, 95, 194) 10%, rgba(0,212,255,1) 75%);
}
.whiteNigga{
  padding: 0;
  height: 100%;
  width: 80%;
  background: white;
}
.vCenter{
  display: grid;
  place-items: center;
}
.padinBoxes{
  padding: 1rem
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
