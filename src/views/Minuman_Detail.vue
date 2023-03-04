<template>
    <div class="minuman-detail">
      <Navbar />
      <div class="container">
        <!-- breadcrumb -->
        <div class="row mt-4">
          <div class="col">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <router-link to="/" class="text-dark">Home</router-link>
                </li>
                <li class="breadcrumb-item">
                  <router-link to="/minuman" class="text-dark">minuman</router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">minuman Order</li>
              </ol>
            </nav>
          </div>
        </div>
  
        <div class="row mt-3">
          <div class="col-md-6">
            <img :src=" '../assets/images/' + minuman.gambar " class="img-fluid shadow" />
          </div>
          <div class="col-md-6">
            <h2>
              <strong>{{ minuman.nama }}</strong>
            </h2>
            <hr />
            <h4>
              Harga :
              <strong>Rp. {{ minuman.harga }}</strong>
            </h4>
            <form class="mt-4" v-on:submit.prevent>
              <div class="form-group">
                <label for="jumlah_pemesanan">Jumlah Pesan</label>
                <input type="number" class="form-control" v-model="pesan.jumlah_pemesanan" />
              </div>
              <div class="form-group">
                <label for="keterangan">Keterangan</label>
                <textarea
                  v-model="pesan.keterangan"
                  class="form-control"
                  placeholder="contoh keterangan : Manis,Pake Es .."
                ></textarea>
              </div>
              <br>
  
              <button type="submit" class="btn btn-success" @click="pemesanan">
                <b-icon-cart></b-icon-cart>Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from "@/components/Navbar.vue";
  import axios from "axios";
  
  export default {
    name: "Minuman_Detail",
    components: {
      Navbar,
    },
    data() {
      return {
        minuman: {},
        pesan: {},
      };
    },
    methods: {
      setminuman(data) {
        this.minuman = data;
      },
      pemesanan() {
        if (this.pesan.jumlah_pemesanan) {
          this.pesan.minuman = this.minuman;
          axios
            .post("http://localhost:3000/keranjangs", this.pesan)
            .then(() => {
              this.$router.push({ path: "/keranjang"})
              this.$toast.success("Sukses Masuk Keranjang", {
                type: "success",
                position: "top-right",
                duration: 3000,
                dismissible: true,
              });
            })
            .catch((err) => console.log(err));
        } else {
          this.$toast.error("Jumlah Pesanan Harus diisi", {
            type: "error",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          });
        }
      },
    },
    mounted() {
      axios
        .get("http://localhost:3000/minuman/" + this.$route.params.id)
        .then((response) => this.setminuman(response.data))
        .catch((error) => console.log(error));
    },
  };
  </script>
  
  <style>
  </style>