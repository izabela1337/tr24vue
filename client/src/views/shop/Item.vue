<template>
<span>
    <navBarShop />
    <b-container>
        <b-row class="itemView">
            <b-col md="5">
                <b-img fluid :src="'https://loremflickr.com/400/400?lock=' + itemData[0].id" />
            </b-col>
            <b-col md="7" class="itemDesc">
                <b-row>
                    <b-col md="6">
                        <h3>{{itemData[0].name}}</h3>
                        <p class="text-muted">{{itemData[0].categories[0]}}</p>
                    </b-col>
                    <b-col class="itemDescPrice">
                        <h2>{{itemData[0].price}} zł</h2>
                    </b-col>
                    <b-col md="12" class="itemDescAddToCart">
                        <label for="sb-inline">Podaj ilość</label>
                        <b-form-spinbutton id="sb-inline" style="width:30%" v-model="ItemQuantity"></b-form-spinbutton>
                        <hr>
                        <b-form-group label="Dodaj frytki do tego">
                        <b-form-checkbox-group
                            v-model="selected"
                            :options="options"
                            name="flavour-1a"
                        ></b-form-checkbox-group>
                        </b-form-group>
                        <hr>
                        <b-button>Dodaj do koszyka</b-button>
                    </b-col>
                </b-row>
            </b-col>
            <hr>
            <b-col md="12" class="itemBigDesc">
                <b-card no-body>
                    <b-tabs card>
                    <b-tab title="Opis" active>
                        <b-card-text>
                            <h1>{{itemData[0].desc}}</h1>
                            <b-img fluid src="https://ih1.redbubble.net/image.198627376.0114/flat,550x550,075,f.u5.jpg" />
                        </b-card-text>
                    </b-tab>
                    <b-tab title="Prawdziwy opis">
                        <b-card-text>
                            <h1>Nie, tak naprawdę ten produkt to ściema, nie kupujcie tego</h1>
                            <b-img fluid src="https://hookagency.com/wp-content/uploads/2018/02/grandma-with-gun-1200x675.jpg" />
                        </b-card-text>
                    </b-tab>
                    <b-tab title="Koszty dostawy czy coś idk">
                        <b-card-text>
                            <h1>test test 123</h1>
                        </b-card-text>
                    </b-tab>
                    </b-tabs>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</span>
</template>
<script>
import navBarShop from '@/components/navbarShop.vue';
import dbModule from "@/axios/dbModule.js";

export default {
    data() {
      return {
        ItemQuantity: 1,
        selected: [], // Must be an array reference!
        itemData: {},
        options: [
          { text: 'XL', value: 'XL' },
          { text: 'XXL', value: 'XXL' },
          { text: 'XXXL', value: 'XXXL' }
        ]
      }
    },
    methods: {
        fetchProdInfo(){
            dbModule.get("/products/item/" + this.$route.params.proID)
            .then(res => {
                this.itemData = res.data;
                console.log(this.itemData[0].id)
            }).catch(err => {
                console.log(err)
            })
        }
    },
    mounted(){
        this.fetchProdInfo()
    },
    components: {
        navBarShop
    }
}
</script>
<style lang="scss" scoped>
.itemView{
    margin: 20px;
}
.itemDesc{
    text-align: left;
    display: grid;
    place-items: center;
}
.itemDescPrice{
    text-align: right;
}
.itemDescAddToCart{
    background: #ece7f0;
    padding: 10px;
    border-radius: 10px;
}
.itemBigDesc{
    margin-top: 10px;
}
</style>