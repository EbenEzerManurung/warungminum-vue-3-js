<template>
    <div class="card shadow card-minuman">
      <img :src=" 'assets/images/' + minuman.gambar " class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ minuman.nama }}</h5>
        <p
          class="card-text"
        >Harga : Rp. {{ minuman.harga }}</p>
        <router-link class="btn btn-warning" :to="'/minuman/'+minuman.id"><b-icon-cart></b-icon-cart> Pesan</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Card",
    props: ["minuman"],
  };
  </script>
  
  <style>
  </style>