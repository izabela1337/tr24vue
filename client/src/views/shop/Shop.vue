<template>
<span>
    <navBarShop />
    <b-container class="mainContainer">
        <b-row>
            <b-col cols="3">
                <b-container class="sideBar">
                    <label>Szukaj po nazwie</label>
                    <b-form-input v-model="text" placeholder="Wyszukajcośtam"></b-form-input>
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
                v-model="slide"
                :interval="4000"
                controls
                indicators
                background="#ababab"
                img-width="1024"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333; margin: 10px 0 10px"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd">
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
                            Being alive is suffering. On the other side, you don't have to be alive, so thats good.
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
import {BIconCaretDownFill, BIconCaretUpFill} from 'bootstrap-vue';

export default {
    data(){
        return{
            items: [],
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
            dbModule.get("/product")
            .then(response => {
                this.items = response.data;
            }).catch(err => {
                console.log(err);
            })
        }
    },
    mounted(){
        this.fechItems();
    },
    components: {
        navBarShop,
        BIconCaretDownFill,
        BIconCaretUpFill
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
</style>