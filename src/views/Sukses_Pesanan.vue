<template>
    <div class="pesanan-sukses">
      <Navbar />
      <div class="container">
        <div class="row justify-content-center mt-5">
          <div class="col text-center">
            <img src="../assets/images/cafe.png" width="600" />
            <h2><strong>Sukses!!</strong></h2>
            <h4>Pesanan Anda segera diproses <br> Selamat Menunggu</h4>
            <br> mohon sabar
            <br> Terima kasih :)
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from "@/components/Navbar.vue";
  
  export default {
    name: "Sukses_Pesanan",
    components: {
      Navbar,
    },
  };
  </script>
  
  <style>
  </style>