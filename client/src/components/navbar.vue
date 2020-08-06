<template>
    <b-container fluid class="topbar">
        <b-navbar toggleable="lg" type="dark">
            <b-navbar-brand href="#">TransBit24</b-navbar-brand>
            <b-navbar-toggle target="navCol"/>
            <b-collapse id="navCol" isNav>
                <b-navbar-nav>
                    <b-nav-item to="#">Główna</b-nav-item>
                    <b-nav-item to="#">Promocje</b-nav-item>
                    <b-nav-item to="#">O nas</b-nav-item>
                    <b-nav-item to="#">Kontakt</b-nav-item>
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
    background-color: rgb(52, 142, 207);
}
</style>