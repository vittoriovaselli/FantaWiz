<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>FantaWiz</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Cerca giocatore"
        single-line
        hide-details
        @keypress="searchResult"
        @input="resetEnterPressed"
      ></v-text-field>
    </v-app-bar>

    <v-content>
      <Search :search="search" @close="resetReserch"/>
      <Favourites />
      <IconLegend/>
    </v-content>
    <v-footer color="primary" id="footer">
      <div id="credits">
        <p> Fonti: </p>
        <a target="_blank" href="https://www.gazzetta.it/">
          <v-img src="../src/assets/icons/logos/gazzetta.jpg" width="30px"></v-img>
        </a>
        <a target="_blank" href="https://www.fantacalcio.it/">
          <v-img src="../src/assets/icons/logos/fanta-gazzetta.png" width="30px"></v-img>
        </a>
        <a target="_blank" href="https://sport.sky.it/">
          <v-img src="../src/assets/icons/logos/sky-sport.png" width="30px"></v-img>
        </a>
      </div>
      <div>Icons made by <a target="_blank" href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a target="_blank" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </v-footer>
  </v-app>
</template>

<script>
import Search from './components/Search';
import Favourites from './components/Favourites';
import IconLegend from './components/IconLegend';
import { mapActions, mapMutations } from 'vuex';

export default {
  name: 'App',

  components: {
    Search,
    Favourites,
    IconLegend
  },

  data: () => ({
    search: '',
  }),

  methods: {
    resetReserch(){
      this.search = '';
    },
    ...mapActions([
      'searchTerm',
      'resetEnterPressed'
    ]),
    ...mapMutations([
      'clearSearchTable'
    ]),
    searchResult(event){
      if(this.search === ''){
        this.clearSearchTable();
        this.$forceUpdate();
      }
      if (event.keyCode === 13) {
        event.preventDefault();
        this.searchTerm(this.search.trim().toLowerCase());
      }
    },
  }
};
</script>

<style>

#credits{
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

 #footer{
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   font-size: small;
   color: white;
 }

a{
  cursor: pointer;
  color: lightgray !important;
}

#credits a{
  margin-left: 10px;
}

a div{
  opacity: 0.85;
}

a div:hover{
  opacity: 1;
}

h2{
  margin-bottom: 20px;
}

.v-application p{
  margin-bottom: 0 !important;
}

.v-image{
  border-radius: 50% !important;
  cursor: pointer;
}

.v-content__wrap{
  background-color: #E8F5E9;
}
</style>