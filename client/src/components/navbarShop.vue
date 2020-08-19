<template>
    <b-container fluid class="topbar">
        <b-navbar toggleable="lg" type="dark">
            <b-navbar-brand href="#">Sklep TransBit24</b-navbar-brand>
            <b-navbar-toggle target="navCol"/>
            <b-collapse id="navCol" isNav>
                <b-navbar-nav>
                    <b-nav-item to="/shop">Główna</b-nav-item>
                    <b-nav-item to="/bebnis">Dostawa</b-nav-item>
                    <b-nav-item to="/cart" class="cartLink">Koszyk <b-icon-cart3 /></b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item to="/">Wróć do strony głównej</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </b-container>  
</template>
<script>
import {BIconCart3} from 'bootstrap-vue';

export default {
    components: {
        BIconCart3
    }    
}
</script>
<style lang="scss" scoped>
.topbar{
    background-color: #5C55AF;
}
.router-link-active{
    color: white!important;
}
.cartLink .nav-link{
    color: #A8AF55!important;
}
</style>