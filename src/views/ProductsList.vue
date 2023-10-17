<template> 
     <Header />
    <div class="q-gutter-x-md q-mt-lg row justify-between" >
       <!-- <q-input outlined v-model="text" label="Search for Products,Brands and More" class="
 shadow-2 rounded-borders q-mt-xs q-mb-md q-ml-xl "
                 style="width:50%;background:#f1f3f6 " /> -->
<div class="q-gutter-md ">
    <q-btn push color="white" text-color="primary" label="Low-High" @click="asortByPrices()"/>   
    <q-btn push color="white" text-color="primary" label="High-Low" @click="dsortByPrices()"/>
  </div>          
     <div class="q-pa-md">
              <q-btn-dropdown color="white" text-color="blue-14" label="catogery">
                  <q-list>
                     <q-item clickable v-close-popup @click="onItemClick('products')">
                                  <q-item-section>
                                      <q-item-label color="white" text-color="blue-14">All Products</q-item-label>
                                  </q-item-section>
                              </q-item>
                       <q-item clickable v-close-popup @click="onItemClick('mens-fashion')" >
                          <q-item-section >
                              <q-item-label >Mens-Fashion</q-item-label>
                          </q-item-section>
                      </q-item>
                        <q-item clickable v-close-popup @click="onItemClick('womens-fashion')">
                                  <q-item-section>
                                      <q-item-label>Womens-Fashion</q-item-label>
                                  </q-item-section>
                              </q-item> 
                      <q-item clickable v-close-popup @click="onItemClick('jewlary-and-watches')">
                          <q-item-section>
                              <q-item-label>jewlary-and-watches</q-item-label>
                          </q-item-section>
                      </q-item>

                      <q-item clickable v-close-popup @click="onItemClick('bags-and-shoes')">
                          <q-item-section>
                              <q-item-label>bags-and-shoes</q-item-label>
                          </q-item-section>
                      </q-item>

                        <q-item clickable v-close-popup @click="onItemClick('phone-and-tablets')">
                              <q-item-section>
                                  <q-item-label>phone-and-tablets</q-item-label>
                              </q-item-section>
                          </q-item>

                           <q-item clickable v-close-popup @click="onItemClick('tools-and-hardware')">
                                  <q-item-section>
                                      <q-item-label>tools-and-hardware</q-item-label>
                                  </q-item-section>
                              </q-item>
                  </q-list>
              </q-btn-dropdown>
          </div>
          </div>
    <div class="row justify-center q-gutter-xl q-mt-lg q-mb-md bg-blue-grey-2" style="background:#f1f3f6">
     <q-card class=" " v-for="product in store" :key="product.id"  style="height:auto; width:300px; ">
         <router-link :to="'/ProductList/'+product.slug"  @click="showLoading" class="q-link text-black">
        <div class="col-2">
              <span class="col align-center">
                <span class="row q-ml-xl">
                    <q-img :src="url"  style="height:60px; width:70px"/>

                <h2 class="text-h4 text-bold q-ml-xl">{{" "+'$'+" "+product.price }}</h2></span>
                    <h3 class="text-h6 text-center">{{ product.title }}</h3> 
            </span> 
            </div>
            </router-link>
            <router-view />
              </q-card>

     
              <div class="flex"> 
               <q-pagination
            v-model="currentPage"
            :max="totalPages"
            direction-links
            flat
            color="grey"
            active-color="primary"
            @click="pagenation(currentPage, perPage)"
            class="q-mb-md"
          />
          </div>

              </div>
</template>

<script>
// import { createRouter, createWebHistory } from "vue-router";
import demo from '../assets/flipkart_logo.png' 
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import axios from 'axios'
import { onBeforeUnmount } from 'vue'
import Header from '../views/Header.vue'
import Options from '../views/Options.vue'
// import ProductsAcess from '../stores/ProductsStore'
export default {

    setup() {
        const $q = useQuasar()
        let timer
        onBeforeUnmount(() => {
            if (timer !== void 0) {
                clearTimeout(timer)
                $q.loading.hide()
            }
        })

        return {
            showLoading() {
                $q.loading.show()

                // hiding in 2s
                timer = setTimeout(() => {
                    $q.loading.hide()
                    timer = void 0
                }, 2000)
            },
            currentPage: ref(1),
            perPage: ref(6)
        }
    },
    components: {
        Header,
        Options,
    },
    data() {
        return {
            products: [],
            Clothes: 1,
            Electronics: 2,
            Furniture: 3,
            Nuevo_name: 4,
            Others: 5,
            url:demo,
            totalPages: 19 / 6,
            store: [],
            text: '',
            storing_catogery:''
        }
    },
    mounted() {
        // this.pagenation(this.currentPage, this.perPage);
        this.pagenation(this.currentPage, this.perPage);
        // this.productsApi();
    },
    computed: {
        //  filterProducts() {
        //     return this.ProductsAcess.ProductsData.filter(product => product.title.includes(this.text));
        // },
    },
    methods: {
        //  Get all the products from the Api's
        async productsApi() {
            const url = 'https://api.storerestapi.com/products';
            const response = await axios.get(url)
            this.products = response.data.data;
            console.log(this.products);
        },
        //       For catogery of the products...
        // async onItemClick(item) {
        //     const url = `https://api.storerestapi.com/categories/${item}`;
        //     const response = await axios.get(url);
        //     this.filterProducts = response.data.data;
        //     console.log(this.filterProducts);
        // },

        // Below function for the assecnding and desending of the products ...
        asortByPrices() {
            this.store.sort((a, b) => a.price - b.price);
        },
        dsortByPrices() {
            this.store.sort((a, b) => b.price - a.price);
        },

        //  Limiting the products to 40
        async pagenation(currentPage, perPage) {
            this.$q.loading.show();
            const url = `https://api.storerestapi.com/products?limit=${perPage}&page=${currentPage}`;
            const response = await axios.get(url);
            this.store = response.data.data;
            this.$q.loading.hide();
        },
        // async getCatogeries()
        // {
        //     const url = `https://api.storerestapi.com/categories`;
        //     const response = await axios.get(url);
        //     this.storing_catogery = response.data;
        //     console.log(this.storing_catogery);
        // },
    }
}
</script>

<style lang="scss" scoped>
.router-link {
  text-decoration: none;
}

</style>


