<template>
    <div class="q-pa-md">
        <q-btn-dropdown color="primary" label="catogery">
            <q-list>
                <q-item clickable v-close-popup @click="onItemClick(men)">
                    <q-item-section>
                        <q-item-label>Men's clothing</q-item-label>
                    </q-item-section>
                </q-item>
                 <q-item clickable v-close-popup @click="onItemClick(women)">
                            <q-item-section>
                                <q-item-label>women's clothing</q-item-label>
                            </q-item-section>
                        </q-item>
                <q-item clickable v-close-popup @click="onItemClick(jew)">
                    <q-item-section>
                        <q-item-label>jewelery</q-item-label>
                    </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick(electronics)">
                    <q-item-section>
                        <q-item-label>electronics</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-btn-dropdown>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            products: [],
            men: "men's clothing",
            women: "women's clothing",
            jew: "jewelery",
            electronics:"electronics",
        }
     },
    methods: {
        // async onItemClick(catogery)
        // {
        //     const url='https://fakestoreapi.com/products//category/'+catogery
        //     await axios.get(url)
        //         .then((response => {
        //             this.products = response.data;
        //             console.log(this.products); 
        //     }))
        // }
    },
}
</script>

<style lang="scss" scoped>

</style>