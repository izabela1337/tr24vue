<template>
    <b-container>
        <b-row class="itemView">
            <b-col md="5">
                <b-img fluid src="https://s.tcdn.co/4a4/f28/4a4f2880-e005-3f8f-ab47-2bb189e7d263/2.png" />
            </b-col>
            <b-col md="7" class="itemDesc">
                <b-row>
                    <b-col md="6">
                        <h3>Nazwa produktu</h3>
                        <p class="text-muted">kategoria produktu</p>
                    </b-col>
                    <b-col class="itemDescPrice">
                        <h2>21.37 + vat + akcyzja + pensja dla miliona urzędników</h2>
                    </b-col>
                    <b-col md="12" class="itemDescAddToCart">
                        <label for="sb-inline">Podaj ilość</label>
                        <b-form-spinbutton id="sb-inline" style="width:20%"></b-form-spinbutton>
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
                            <h1>Bardzo fajny produkt polecam</h1>
                            <b-img fluid src="https://ih1.redbubble.net/image.198627376.0114/flat,550x550,075,f.u5.jpg" />
                        </b-card-text>
                    </b-tab>
                    <b-tab title="Prawdziwy opis">
                        <b-card-text>
                            <h1>Nie, tak naprawdę ten produkt to ściema, nie kupujcie tego</h1>
                            <b-img fluid src="https://hookagency.com/wp-content/uploads/2018/02/grandma-with-gun-1200x675.jpg" />
                        </b-card-text>
                    </b-tab>
                    </b-tabs>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
export default {
    data() {
      return {
        selected: [], // Must be an array reference!
        options: [
          { text: 'XL', value: 'orange' },
          { text: 'XXL', value: 'apple' },
          { text: 'XXXL', value: 'pineapple' },
          { text: 'XXXXXL', value: 'grape' }
        ]
      }
    }
}
</script>
<style lang="scss" scoped>
.itemView{
    margin: 20px;
}
.itemDesc{
    text-align: left;
    display: inline-block;
    vertical-align: middle;
    // place-items: center;
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