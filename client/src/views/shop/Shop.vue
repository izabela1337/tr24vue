<template>
<span>
    <navBarShop />
    <b-container class="mainContainer">
        <b-container class="filtersInfoBox">
            <b-tabs content-class="mt-3" fill>
                <b-tab title="Kategoria 1" style="text-align:left;">
                    <b-row>
                        <b-col md="4"> 
                            <h6>{{catConfig.cat1}} </h6>
                            <ul>
                                <li><router-link to="/shop">Siała baba mak</router-link></li>
                                <li>Nie wiedziała jak</li>
                                <li>A dziad wiedział</li>
                                <li>Nie powiedział</li>
                            </ul>
                        </b-col>
                        <b-col md="4"> 
                            <h6>Podkategoria 2</h6>
                            <ul>
                                <li>Siała baba mak</li>
                                <li>Nie wiedziała jak</li>
                                <li>A dziad wiedział</li>
                                <li>Nie powiedział</li>
                            </ul>
                        </b-col>
                        <b-col md="4"> 
                            <h6>Podkategoria 3</h6>
                            <ul>
                                <li>Siała baba mak</li>
                                <li>Nie wiedziała jak</li>
                                <li>A dziad wiedział</li>
                                <li>Nie powiedział</li>
                            </ul>
                        </b-col>
                    </b-row>
                </b-tab>
                <b-tab title="Kategoria 2"><p>I'm the second tab</p></b-tab>
                <b-tab title="Kategoria 3"><p>I'm a disabled tab!</p></b-tab>
                <b-tab title="Kategoria 3"><p>I'm a disabled tab!</p></b-tab>
            </b-tabs>
        </b-container>
        <b-row>
            <b-col cols="3">
                <b-container class="sideBar">
                    <label>Szukaj po nazwie</label>
                    <b-form-input v-model="query" placeholder="Wyszukajcośtam" v-on:keyup.enter="filterResults" style="margin-bottom:10px"></b-form-input>
                    <b-button type="submit" v-on:click="filterResults">Wyszukaj</b-button>
                    <hr>
                    <b-collapse id="collapse-1" class="mt-2" visible>
                        <b-form-group label="Wybierz opcje filtru 1">
                            <b-form-checkbox-group
                                v-model="selected"
                                :options="options"
                                name="flavour-2a"
                                stacked>
                            </b-form-checkbox-group>
                        </b-form-group>
                    </b-collapse>
                    <b-button v-b-toggle.collapse-1 class="m-1">Filtr 1 <b-icon-caret-up-fill /></b-button>
                    <hr/>
                    <b-collapse id="collapse-2" class="mt-2">
                        <b-form-group label="Wybierz opcje filtru 2">
                            <b-form-checkbox-group
                                v-model="selected"
                                :options="options"
                                name="flavour-2a"
                                stacked>
                            </b-form-checkbox-group>
                        </b-form-group>
                    </b-collapse>
                    <b-button v-b-toggle.collapse-2 class="m-1">Filtr 2 <b-icon-caret-down-fill /></b-button>
                    <hr/>
                    <b-collapse id="collapse-3" class="mt-2">
                        <b-form-group label="Wybierz opcje filtru 3">
                            <b-form-checkbox-group
                                v-model="selected"
                                :options="options"
                                name="flavour-2a"
                                stacked>
                            </b-form-checkbox-group>
                        </b-form-group>
                    </b-collapse>
                    <b-button v-b-toggle.collapse-3 class="m-1">Filtr 3 <b-icon-caret-down-fill /></b-button>
                </b-container>
            </b-col>
            <b-col cols="9" class="mainContent">
                <b-carousel
                id="carousel-1"
                :interval="4000"
                controls
                indicators
                background="#ababab"
                img-width="1024"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333; margin: 10px 0 10px">
                <!-- v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd" -->
                <b-carousel-slide
                    caption="First slide"
                    text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                    img-src="https://i.kym-cdn.com/entries/icons/facebook/000/016/546/hidethepainharold.jpg"
                ></b-carousel-slide>
                <b-carousel-slide
                    caption="Second slide"
                    text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                    img-src="https://i.kym-cdn.com/entries/icons/facebook/000/016/546/hidethepainharold.jpg"
                ></b-carousel-slide>
                </b-carousel>
                <b-container fluid v-if="searchTitle != undefined" class="filtersInfoBox" style="position:sticky;top:10px; z-index:99;background:white;">
                    <h4>Aktywne filtry:</h4> 
                        <h5>Nazwa: <b-button v-on:click="clearFilter">{{searchTitle}}<b-icon-x /></b-button></h5>
                </b-container>
                <b-row>
                    <b-col lg="3" cols="6" v-for="(items, index) in items" :key="index">
                        <b-card
                        img-src="https://pbs.twimg.com/profile_images/814599911060766724/0ainlmNK_400x400.jpg"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2">
                            <b-card-text>
                                <h4>{{items.name}}</h4>
                                <h5><b>{{items.price}}</b></h5>
                                {{items.desc}}
                            </b-card-text>
                        <b-button to="/shop/item" variant="primary">Buy shit</b-button>
                        </b-card>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </b-container>
</span>
</template>
<script>
import navBarShop from '@/components/navbarShop.vue';
import dbModule from "@/axios/dbModule.js";
import {BIconCaretDownFill, BIconCaretUpFill, BIconX} from 'bootstrap-vue';

export default {
    data(){
        return{
            catConfig : Object,
            query: '',
            searchTitle: '',
            items: [],
            allItems: [],
            selected: [],
            options: [
                { text: 'Orange', value: 'orange' },
                { text: 'Apple', value: 'apple' },
                { text: 'Pineapple', value: 'pineapple' },
                { text: 'Grape', value: 'grape' }
                ]
            };
    },
    methods: {
        fechItems(){
            dbModule.get("/product?limit=8")
            .then(response => {
                this.items = response.data;
            }).catch(err => {
                console.log(err);
            })
        },
        fechConfig(){
            dbModule.get('/config')
            .then(response => {
                this.catConfig = response.data;
                console.log(typeof(this.catConfig))
            }).catch(err => {
                console.log(err);
            })
        },
        filterResults(){
            let nameQuery = this.query;
            this.allItems = this.items;
            dbModule.get("/product/search/" + nameQuery)
            .then(response => {
                this.items = response.data;
                this.searchTitle = nameQuery;
            }).catch(err => {
                console.log(err);
            })
        },
        clearFilter(){
            this.searchTitle = undefined;
            this.items = this.allItems;
        }
    },
    mounted(){
        this.searchTitle = undefined;
        this.fechConfig();
        this.fechItems();
    },
    components: {
        navBarShop,
        BIconCaretDownFill,
        BIconCaretUpFill,
        BIconX
    }
}
</script>
<style lang="scss" scoped>
.sideBar{
    margin: 10px 0 10px 0;
    position: sticky;
    top: 10px;
    padding: 10px;
    text-align: left;
    background: #ece7f0;
}
.mainContent{
    // background: #3777CD;
    text-align: left;
    margin: 0;
    padding: 0;
}
.filtersInfoBox{
    border: 1px solid rgba(0,0,0,.125);
    margin: 10px 0 10px 0;
    padding: 10px;
    h5{
        margin: 0;
    }
}
ul {
  list-style-type: circle;
}
</style>