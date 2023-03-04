<template>
   

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    
    <a class="navbar-brand" href="#">Minuman Lezat</a>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/">Home</a>
         <a class="nav-link active" aria-current="page" href="/minuman">Minuman</a>
         <router-link class="nav-link" to="/keranjang">
                  Keranjang
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
</svg>
                  <b-icon-bag></b-icon-bag>
                  <span
                    class="badge badge-success ml-2"
                  >{{ updateKeranjang ? updateKeranjang.length : jumlah_pesanans.length }}</span>
                </router-link>
      </div>
    </div>
  </div>
</nav>


  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "Navbar",
    data() {
      return {
        jumlah_pesanans: [],
      };
    },
    props: ["updateKeranjang"],
    methods: {
      setJumlah(data) {
        this.jumlah_pesanans = data;
      },
    },
    mounted() {
      axios
        .get("http://localhost:3000/keranjangs")
        .then((response) => this.setJumlah(response.data))
        .catch((error) => console.log(error));
    },
  };
  </script>
  
  <style></style>