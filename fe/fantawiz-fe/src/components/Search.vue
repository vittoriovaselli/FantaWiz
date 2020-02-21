<template>
  <v-container>
    <h2>Search</h2>

    <v-card outlined>
      <v-card-title>
        Search Player
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
    </v-card>

    <v-data-table
      :headers="headers"
      :items="players"
      :items-per-page="5"
      class="elevation-1"
      :search="search"
    ></v-data-table>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'Search',
    props: [
      'headers'
    ],

    data: () => ({
      search: ''
    }),

    computed: mapState({
      players: state => state.searches.players,
    })
  }
</script>
