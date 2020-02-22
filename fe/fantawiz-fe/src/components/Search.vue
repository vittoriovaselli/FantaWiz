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
    }),

    methods: {
      resetReserch(){
        this.$emit('close');
      }
    }
  }
</script>
