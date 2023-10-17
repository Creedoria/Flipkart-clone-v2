import { defineStore } from 'pinia';

export const useProductsStore = defineStore('ProductsStore', {
    state: () => ({
        ProductsData: [],
    }),
    actions: {
        async getADP() {
            try {
                const api = 'https://api.storerestapi.com/products';
                const response = await axios.get(api);
                this.ProductsData = response.data;
            }
            catch (err) {
                console.error(err);
            }
        }
    }
} )