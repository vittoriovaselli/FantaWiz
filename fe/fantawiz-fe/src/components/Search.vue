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
        <v-img width="48px" lazy-src :src="require('../assets/icons/player-status/' + status[item.gazzetta])"/>
        <v-spacer></v-spacer>
      </template>
      <template v-slot:item.corriere="{ item }">
        <v-img width="48px" lazy-src :src="require('../assets/icons/player-status/' + status[item.corriere])"/>
      </template>
      <template v-slot:item.sky="{ item }">
        <v-img width="48px" lazy-src :src="require('../assets/icons/player-status/' + status[item.sky])"/>
      </template>
      <template v-slot:item.fantacalcio="{ item }">
        <v-img width="48px" lazy-src :src="require('../assets/icons/player-status/' + status[item.fantacalcio])"/>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex';

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
    }),

    methods: {
      resetReserch(){
        this.$emit('close');
      }
    }
  }
</script>

<style scoped>
  .v-image{
    margin: 10px 0 !important;
  }
</style>
