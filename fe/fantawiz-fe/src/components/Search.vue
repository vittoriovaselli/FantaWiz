<template>
  <v-container v-if="search!=''">
    <h2>Risultati della Ricerca per: 
      <v-chip close color="secondary" 
      @click:close="resetReserch"
      >{{search}}</v-chip></h2>
    <v-data-table
      :headers="headers"
      :items="players"
      :search="search"
      class="elevation-1"
    >
      <template v-slot:item.gazzetta="{ item }">
        <v-spacer></v-spacer>
        <v-img @click="openLegend(item.gazzetta)" width="48px" lazy-src :src="require('../assets/icons/player-status/' + status[item.gazzetta])"/>
        <v-spacer></v-spacer>
      </template>
      <template v-slot:item.corriere="{ item }">
        <v-img @click="openLegend(item.corriere)" width="48px" lazy-src :src="require('../assets/icons/player-status/' + status[item.corriere])"/>
      </template>
      <template v-slot:item.sky="{ item }">
        <v-img @click="openLegend(item.sky)" width="48px" lazy-src :src="require('../assets/icons/player-status/' + status[item.sky])"/>
      </template>
      <template v-slot:item.fantacalcio="{ item }">
        <v-img @click="openLegend(item.fantacalcio)" width="48px" lazy-src :src="require('../assets/icons/player-status/' + status[item.fantacalcio])"/>
      </template>
      <template v-slot:item.azione="{item}">
        <v-btn color="primary" @click="addToFavourites(item)"><v-icon>mdi-plus</v-icon>Aggiungi ai miei giocatori</v-btn>
      </template>
    </v-data-table>
    
  </v-container>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';

  export default {
    name: 'Search',
    props: [
      'headers',
      'search'
    ],

    data: () => ({
      //
    }),

    computed: mapState({
      players: state => state.searches.players,
      status: state => state.common.status,
      selectedIcon: state => state.common.selectedIcon,
    }),

    methods: {
      resetReserch(){
        this.$emit('close');
      },
      ...mapMutations([
        'addToFavourites',
        'toggleOverlay',
        'setIcon'
      ]),
      openLegend(icon){
        this.setIcon(icon);
        this.toggleOverlay();
      }
    }
  }
</script>

<style scoped>
  .v-image{
    margin: 10px 0 !important;
  }
</style>
