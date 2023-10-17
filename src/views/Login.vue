<template>
     <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        >
   <div class="row justify-center q-mt-xl ">
    <q-card class="bg-blue-14 box-shadow" style="height:600px; width:400px;">
    <h4 class="text-white q-ml-lg ">Login</h4>
     <h6 class="text-white q-ml-lg q-mr-lg text-center">Get access to your Orders, Wishlist and Recommendations</h6>
     <img :src="url">
    </q-card>
    <q-card >
    <q-form class=" row items-center shadow" style="height:600px; width:500px;">  
      <form @submit.prevent="login">
             <q-input outlined v-model="email" label=" email" class="q-ml-xl"  style="width:400px"  :rules="[val => val && val.length >0 || 'Enter username']"/>
             <q-input outlined v-model="password" type="password" label="password" class="q-ml-xl q-mt-md" style="width:400px" :rules="[val => val && val.length > 0 || 'Enter password']"/>
      
        <q-btn  label="login" class="bg-orange-9 text-white q-ml-xl q-mt-lg" @click=" getLogin()" style="width:400px" type="submit" ></q-btn>     
        <!-- :to="'/ProductsList'" -->
           <div class="row justify-end q-mt-md text-h6">
            <router-link :to="'/signup'" class="q-link">sign up</router-link>
              
          </div>
          </form>
    </q-form>
    </q-card>
   <!-- <router-view /> -->
   </div>
</template>

<script>
import axios from 'axios'
import login from '../assets/login.jpg'
import Options from './Options.vue'
import { useQuasar } from 'quasar'
import { onBeforeUnmount } from 'vue'
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
        $q.loading.show({
          message: 'Some important process  is in progress. Hang on...'
        })

        // hiding in 3s
        timer = setTimeout(() => {
          $q.loading.hide()
          timer = void 0
        }, 3000)
      }
    }
  },
    data() {
        return {
            url: login,
            username: '',
          password: '',
          data: '',
        }
  },
  compoenets: {
    Options
  },
  methods: {
    getLogin()
    {
      axios.get(' https://api.escuelajs.co/api/v1/users ').
        then((response) => {
          console.log(response.data);
        })
    },
    async login()
    {
      try
      {
        this.$q.loading.show();
        const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login', { 
          email: this.email,
          password: this.password,
        })
          .then((response) => {
           
            if (response.status == 201)
             {
              console.log(response.data);

              this.$router.push('/ProductsList');
              this.$q, loading.hide();
            }
            else {
              console.log("Login failed");
            }
            // console.log(response)
         })
        
      }
      catch (err)
      {
        console.log("error occured :" + err);
        }
      }
    }
}
</script>

<style lang="scss" scoped>

</style>