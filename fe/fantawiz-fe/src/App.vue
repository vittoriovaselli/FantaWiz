<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>FantaWiz</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <Search :headers="headers"/>
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
          text: 'Giocatori',
          align: 'center',
          value: 'player',
        },
        { text: 'Gazzetta', value: 'gazzetta' },
        { text: 'Corriere', value: 'corriere' },
        { text: 'Sky', value: 'sky' },
        { text: 'Fantacalcio', value: 'fantacalcio' }
      ]
  }),
};
</script>
