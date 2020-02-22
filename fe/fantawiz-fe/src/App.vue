<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title><h2>FantaWiz</h2></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Cerca giocatore"
        single-line
        hide-details
      ></v-text-field>
    </v-app-bar>

    <v-content>
      <Search :headers="headers" :search="search" @close="resetReserch"/>
      <Favourites :headers="headers"/>
    </v-content>
  </v-app>
</template>

<script>
import Search from './components/Search';
import Favourites from './components/Favourites';

export default {
  name: 'App',

  components: {
    Search,
    Favourites
  },

  data: () => ({
    headers: [
      {
        text: 'Giocatore',
        align: 'center',
        value: 'player'
      },
      { text: 'Prossima partita', value: 'prossimaPartita' },
      { text: 'Gazzetta', value: 'gazzetta' },
      { text: 'Corriere', value: 'corriere' },
      { text: 'Sky', value: 'sky' },
      { text: 'Fantacalcio', value: 'fantacalcio' }
    ],
    search: '',
  }),

  methods: {
    resetReserch(){
      this.search = '';
    }
  }
};
</script>
