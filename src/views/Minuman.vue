<template>
    <div>
      <Navbar />
      <div class="container">
        <div class="row mt-4">
          <div class="col">
            <h2>
              Daftar
              <strong>minuman</strong>
            </h2>
          </div>
        </div>
  
        <div class="row mt-3">
          <div class="col">
            <div class="input-group mb-3">
              
              <input
                v-model="search"
                type="text"
                class="form-control"
                placeholder="Cari minuman Kesukaan Anda .."
                aria-label="Cari"
                aria-describedby="basic-addon1"
                @keyup="searchFood"
              />
  
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  <b-icon-search></b-icon-search>
                </span>
              </div>
            </div>
          </div>
        </div>
  
        <div class="row mb-4">
          <div class="col-md-4 mt-4" v-for="minuman in minuman" :key="minuman.id">
            <Card :minuman="minuman" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import Navbar from "@/components/Navbar.vue";
  import Card from "@/components/Card.vue";
  import axios from "axios";
  
  export default {
    name: "Minuman",
    components: {
      Navbar,
      Card,
    },
    data() {
      return {
        minuman: [],
        search: '',
      };
    },
    methods: {
      setminuman(data) {
        this.minuman = data;
      },
      searchFood() {
        axios
        .get("http://localhost:3000/minuman?q="+this.search)
        .then((response) => this.setminuman(response.data))
        .catch((error) => console.log(error));
      }
    },
    mounted() {
      axios
        .get("http://localhost:3000/minuman")
        .then((response) => this.setminuman(response.data))
        .catch((error) => console.log(error));
    },
  };
  </script>
  <style>
  </style>