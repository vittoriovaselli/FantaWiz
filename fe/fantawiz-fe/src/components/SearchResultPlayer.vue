<template>
  <v-card elevation="1">
    <v-card-title class="text-center">{{player.name}}</v-card-title>
    <v-card-subtitle class="text-center">{{player.isHome ? `${player.team}-${player.versus}` : `${player.versus}-${player.team}`  }}</v-card-subtitle>
    <v-divider></v-divider>
    <v-list class="d-flex">
      <v-list-item >
        <v-card-subtitle>Gazzetta</v-card-subtitle>
      </v-list-item>
      <v-list-item>
        <v-card-subtitle>Sky</v-card-subtitle>
      </v-list-item>
      <v-list-item>
        <v-card-subtitle>Fantacalcio</v-card-subtitle>
      </v-list-item>
    </v-list>
    <v-list class="d-flex" flat>
      <v-list-item>
        <v-list-item-avatar>
          <v-img @click="openLegend(player.status[0].playerStatus)" class="margin-20" width="48px" lazy-src :src="require('../assets/icons/player-status/' + status[player.status[0].playerStatus])"></v-img>
        </v-list-item-avatar>
      </v-list-item>
      <v-list-item>
        <v-list-item-avatar>
          <v-img @click="openLegend(player.status[1].playerStatus)" class="margin-20" width="48px" lazy-src :src="require('../assets/icons/player-status/' + status[player.status[1].playerStatus])"></v-img>
        </v-list-item-avatar>
      </v-list-item>
      <v-list-item>
        <v-list-item-avatar>
          <v-img @click="openLegend(player.status[2].playerStatus)" class="margin-20" width="48px" lazy-src :src="require('../assets/icons/player-status/' + status[player.status[2].playerStatus])"></v-img>
        </v-list-item-avatar>
      </v-list-item>
    </v-list>
    <v-card-actions class="d-flex align-center justify-center padding-20">
      <v-btn color="primary" :disabled="inMyPlayers(player)" @click="addToFavourites(player)"><v-icon v-if="!inMyPlayers(player)">mdi-plus</v-icon>{{inMyPlayers(player) ? 'Aggiunto ai miei giocatori' : 'Aggiungi ai miei giocatori'}}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'search-player',
  props: [
    'player'
  ],
  computed: {
    ...mapState({
      status: state => state.common.status
    }),
    ...mapGetters([
      'inMyPlayers'
    ])
  },
  methods: {
    ...mapActions([
      'addToFavourites',
    ]),
    ...mapMutations([
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

<style>
  .v-card__title{
    justify-content: center;
  }

  .v-list-item{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .padding-20{
    padding: 20px !important;
  }

  .v-application--is-ltr .v-list-item__avatar{
    margin-right: 0 !important;
  }
</style>