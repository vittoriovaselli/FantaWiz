<template>
  <v-app>
    <v-app-bar app color="primary" dark>
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
    <CustomFooter/>
  </v-app>
</template>

<script>
import Search from './components/Search';
import Favourites from './components/Favourites';
import IconLegend from './components/IconLegend';
import CustomFooter from './components/CustomFooter';

import { mapActions, mapMutations } from 'vuex';

export default {
  name: 'App',

  components: {
    Search,
    Favourites,
    IconLegend,
    CustomFooter
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
      'resetEnterPressed',
      'getAllPlayersFromApi'
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
  },
  created(){
    this.getAllPlayersFromApi();
  }
};
</script>

<style>

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