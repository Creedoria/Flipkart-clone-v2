<template>
    <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
            >
    <div>
        <q-layout view="lH lpr lFf" container style="height: 70px" class="shadow-2 rounded-borders" >
              <q-header elevated class="bg-blue-14">
                   <div class="row  justify-between">
                      <img :src="url" style="height:80px; width:150px;" dense >
                     <router-link :to="'/Login'"><q-btn color="white" text-color="blue-14" label="Login" class="text-h7 q-mr-xl q-mt-md" style="height:10px; width:100px;" /></router-link> 
                    </div>     
              </q-header>
              </q-layout>
              <div class="flex justify-center items-center q-mt-xl">
              <q-card  style="width:600px; height:500px" class="">
       <h4 class="text-center">Sign In</h4>



       <!-- Form for Sign up -->
        <form @submit.prevent="signUp" class="row justify-center q-mt-xl">
          <q-input outlined v-model="name" type="name" label="name" class="q-ml-xl q-mt-md" style="width:400px" />
         <div><q-input outlined v-model="email" type="email" label="email" class="q-ml-xl q-mt-md" style="width:400px" />
            <q-input outlined v-model="password" type="password" label="password" class="q-ml-xl q-mt-md" style="width:400px" />
            <q-btn class=" q-mt-md q-ml-xl bg-orange-10 text-white" style="width:400px" type="submit">Sign Up</q-btn>
            </div>
        </form>
        </q-card>
       
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import logo from '../assets/login.jpg'
export default {
    data()
    {
        return {
            url: logo,
            name: '',
            email:'',
            password:'',
        }
    },
    methods: {
        async signUp()
        { 
            const response = await axios.post('https://api.escuelajs.co/api/v1/users/', {
                name: this.name,
                email: this.email,
                password: this.password,
                avatar: "https://api.lorem.space/image/face?w=640&h=480&r=867",
            });
            console.log(response);
            
        },
        // async allData()
        // {
        //     const url = 'https://fakestoreapi.com/users';
        //     await axios.get(url)
        //         .then((response) => {
        //             console.log(response.data);
        //  })
        // },
    }
    
}
</script>

<style lang="scss" scoped>

</style>