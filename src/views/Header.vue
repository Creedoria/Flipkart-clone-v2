<template>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    >
    <!-- <div  style="height:100px; width:100%; background:black; " class="row inline justify-around">
        <img style="height:100px;" :src="url"/>
        <q-input filled v-model="text" label="Search for products here" class="q-mt-lg" style="background:white;height:50px; width:500px;"/>
         <options class="q-mt-md" />
         <q-btn  class="q-mt-lg" color="primary" glossy icon="local_grocery_store" style="height:50px"/>
     </div> -->

     
        <q-layout view="lH lpr lFf" container style="height: 70px" class="shadow-2 rounded-borders" >
          <q-header elevated class="bg-white">
            <q-toolbar class="row justify-between">
               <div >
                  <img :src="url" style="height:80px; width:150px;" dense >
                  
                 </div>
                
             <q-input outlined v-model="text" label="Search for Products,Brands and More" class="
 shadow-2 rounded-borders q-mt-xs q-mb-md q-ml-xl "
             style="width:50%;background:#f1f3f6 " />
              <!-- <q-input borderless v-model="text" label="Search for Products,Brands and More" class="
 shadow-2 rounded-borders q-mt-xs q-mb-md q-ml-xl "
               style="width:50%;background:#f1f3f6 "/> -->
              <!-- <q-btn flat round dense icon="whatshot" /> -->
      
               <router-link :to="'/Login'"><q-btn color="white" text-color="blue-14" label="Logout" class="text-h7 q-mb-md q-mr-md" style="height:10px; width:100px;" /></router-link> 

            </q-toolbar>
                      </q-header>
          </q-layout>
</template>

<script>
// import logo from '../assets/logo.jpg'
// import logo1 from '../assets/cart.png'
import { onMounted } from 'vue';
import logo from '../assets/flipkart_logo.png'
// import Optionslist from '../views/Options.vue'
import { useProductsStore } from '../stores/ProductsStore'
const ProductsStore = useProductsStore();
console.log(ProductsStore)
export default {
  data() {
    return {
      text: '',
      url: logo,
    }
  },
      onMounted()
    {
      ProductsStore.getADP();
  },
  computed: {
    filterProducts() {
      return this.ProductsStore.ProductsData.title.filter(product => product.title.includes(this.text));
    },
  },
  }
</script>

<style lang="scss" scoped>

</style>