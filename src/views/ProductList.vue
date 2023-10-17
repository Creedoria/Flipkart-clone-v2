

      <template>
        <link  rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
      <div class="q-pa-md" style="background:#f1f3f6">
        <q-layout view="lHh lpr lFf" container style="height: 700px" class="shadow-2 rounded-borders">
                   <q-header elevated class="bg-white row">
                    <q-toolbar class="flex ">
                      <img :src="url" style="height:80px; width:100px;" dense >

                     <q-input outlined v-model="text" label="Search for Products,Brands and More" class="
 shadow-2 rounded-borders q-mt-md q-mb-md q-ml-xl " dense
                     style="width:50%; "  />
                      <!-- <q-btn flat round dense icon="whatshot" /> -->
                       <div class="q-mt-xs q-ml-xl">
                              <q-breadcrumbs  style="font-size: 10px" class="row">
                                <q-breadcrumbs-el label="Home" icon="home" to="/ProductsList" class="text-black"/>
                                <q-breadcrumbs-el :label="apiData.title" icon="local_grocery_store"  class="text-black"/>
                              </q-breadcrumbs>
                            </div>
                    </q-toolbar>
                  </q-header>
          <!-- <q-header elevated class="bg-cyan row justify-around" style="height:130px; background:rgb(6, 190, 223);" >
            <img :src="url" style="height:130px; width:120px;"/>
              <h6 class="q-pl-md">{{apiData.category
                      }}</h6>
            <div class="q-mt-xl q-ml-lg">
              <q-breadcrumbs active-color="white" style="font-size: 16px">
                <q-breadcrumbs-el label="Home" icon="home" to="/"/>
                <q-breadcrumbs-el :label="apiData.title" icon="local_grocery_store" :to="'/ProductList/'+id"/>
              </q-breadcrumbs>
            </div>
          </q-header> -->

          <q-page-container  >
            <q-page class="q-pa-lg row">
                <q-card class="" style="width:300px;" >
              <img :src="image" style="height: 400px;" class="q-pa-md"/>
              <!-- <div class=" justify-center">
                             <p class="text-h6 q-pl-lg">Rating{{" "}}:{{' '+apiData?.rating?.rate + ' / 5.0' }}</p>
                              <p class="text-h6 q-pl-lg">Count{{" "}}:{{" "+apiData?.rating?.count }}</p>
                            </div> -->
              </q-card>
               <q-card class="col q-ml-md">
              <h4 class="q-pl-xl">{{ apiData.title}}</h4>
              <nav><h5 class="q-ml-xl q-pb-xl">Price :{{ " "+'$' + apiData.price }}</h5></nav>
              <h6 class="q-pl-md" ><p class="text-h5 q-pl-md"> Description :</p>{{apiData.description}}</h6>
              </q-card>
            </q-page>
          </q-page-container>

          <q-footer class=" row justify-center bg-white" >
              <p class="q-pt-md text-black">Copy-Rights @2023</p>
          </q-footer>
        </q-layout>
      </div>
    </template>



    <!-- <div class="row ">
      <q-card class="col" style="width:auto; background:lightcyan; " >
         <img class="q-mt-lg q-mb-lg" :src="apiData.image" style="height:400px; width:300px;"/>
        <div class="col">
         <p class="text-h4 ">{{ apiData.title }}</p>
         <p class="text-h5">{{ '$' + apiData.price }}</p>
         </div>
         <h6>{{apiData.description}}</h6>

         <div class="col">
         <p class="text-h6">ratings:{{ apiData?.rating?.rate + '/5.0' }}</p>
          <p class="text-h6">count:{{ apiData?.rating?.count}}</p>
        </div>
        </q-card>
    </div> -->


<script>
import axios from 'axios';
import image from '../assets/flipkart_logo.png';
export default {
    data() {
        return {
            apiData: '',
            id: this.$route.params.id,
            id1: '',
            url:image,
        }
    },
    watch: {
        id: function (newValue, oldValue) {
           
            if (newValue != oldValue)
            {
            this.fetchList();
            }
      }   
    },
    mounted()
    {
        this.fetchList();
    },
    methods: {
      fetchList() {
        this.$q.loading.show();
            const productId = this.id;
            axios.get('https://api.storerestapi.com/products/'+  productId)
                .then((response) => {
                  this.apiData = response.data;  
                    this.$q.loading.hide();   
                })
        }
    },
 }
</script>