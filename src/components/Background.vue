<template>
    <div class="Background">
      <!-- Desktop -->
     

      <div class="d-none d-md-block">
        <div class="row mt-4">
          <div class="col-md-6">
            <div class="d-flex h-50">
              <div class="justify-content-center align-self-left">
                <h2>
                  <strong>Menu Minuman Nikmat,</strong>
                  
                  
                </h2>
                <p>Ayo segera pilih dan pesan minuman favorit Anda</p>
                <!-- <router-link class="btn btn-lg btn-success" to="/minuman">
                  <b-icon-arrow-right></b-icon-arrow-right>Pesan
                </router-link> -->
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <img src="../assets/cafe.png" width="100%" />
          </div>
        </div>
      </div>
  
      <!-- Mobile -->
      <div class="d-sm-block d-md-none">
        <div class="row mt-4">
          <div class="col-md-6 mb-3">
            <img src="../assets/images/cafe.png" width="100%" />
          </div>
          <div class="col-md-6">
            <div class="d-flex h-100">
              <div class="justify-content-center align-self-center">
                <h2>
                  <strong> Menu Minuman Lezat,</strong>
                  <br />in Your Gadget
                </h2>
                <p>Ayo segera pilih dan pesan minuman favorit Anda</p>
                <!-- <button class="btn btn-lg btn-success">
                  <b-icon-arrow-right></b-icon-arrow-right>Pesan
                </button> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    name: "Background",
  };
  </script>
  
  <style>
  </style>