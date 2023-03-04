<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <Background />


      <div class="row mt-4">
        <div class="col">
          <h2>
            
            Best    
            <strong>minuman</strong>
          </h2>
        </div>
        <div class="col">
          <router-link to="/minuman" class="btn btn-warning float-right">
            <b-icon-eye></b-icon-eye>Lihat Semua
          </router-link>
        </div>
      </div>

      <div class="row mb-4">
        <div class="col-md-4 mt-4" v-for="minuman in minuman" :key="minuman.id">
          <Card :minuman="minuman"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Background from "@/components/Background.vue";
import Card from "@/components/Card.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Navbar,
    Background,
    Card,
  },
  data() {
    return {
      minuman: [],
    };
  },
  methods: {
    setminuman(data) {
      this.minuman = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/minuman_terbaik")
      .then((response) => this.setminuman(response.data))
      .catch((error) => console.log(error))
  },
};
</script>
