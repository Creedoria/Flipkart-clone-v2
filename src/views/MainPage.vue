<template>
  <div >
    <Login />
     <!-- Header part --> 
     <!-- <Header /> -->
      <!-- Content Part -->
     <!-- <div >-->
        <!-- <ProductsList /> -->
         <!-- </div>  --> 
  </div>
</template>

<script>
// import Header from '../views/Header.vue';
// import ProductsList from '../views/ProductsList.vue'
import Login from '../views/Login.vue'
export default {
  components: {
    // Header,
    // ProductsList,
    Login
   },
  data()
  {
    return {
    //  products:[],
    }
  },
   mounted() {
    // this.productsApi()
  },
  methods: {
    // productsApi()
    // {
    //   const url = 'https://fakestoreapi.com/products';
    //   axios.get(url)
    //     .then((response) => {
    //       this.products = response.data;
    //   })
    // },
  },
}
</script>
