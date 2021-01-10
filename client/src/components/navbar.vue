<template>
    <b-container fluid class="topbar">
        <b-navbar toggleable="lg" type="dark">
            <b-navbar-brand to="/">TransBit24</b-navbar-brand>
            <b-navbar-toggle target="navCol"/>
            <b-collapse id="navCol" isNav>
                <b-navbar-nav>
                    <b-nav-item to="/">Główna</b-nav-item>
                    <b-nav-item to="/promo">Promocje</b-nav-item>
                    <b-nav-item to="/about">O nas</b-nav-item>
                    <b-nav-item to="/contact">Kontakt</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item to="/shop">Sklep <b-badge>nowe!</b-badge></b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </b-container>  
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.topbar{
    background-color: #296A77;
}
.router-link-exact-active{
    color: white!important;
}
</style>