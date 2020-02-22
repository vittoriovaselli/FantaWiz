<template>
  <v-container>
    <h2>Preferiti</h2>
    
    <v-data-table
      :headers="headers"
      :items="players"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Favourites',
  props: [
    'headers'
  ],
  data: () => ({
  }),
  computed: mapState({
    players: state => state.favourites.players,
  }),
}

</script>

<style>
  
</style>