<template>
  <v-card elevation="1">
    <v-card-title class="text-center">{{player.name}}</v-card-title>
    <v-card-subtitle v-if="player.isHome" class="text-center"><b>{{player.team}}</b> - {{player.versus}}</v-card-subtitle>
    <v-card-subtitle v-else class="text-center">{{player.versus}} - <b>{{player.team}}</b></v-card-subtitle>
    <v-divider></v-divider>
    <v-list class="d-flex">
      <v-list-item>
        <v-card-subtitle>Gazzetta</v-card-subtitle>
        <v-list-item-avatar>
          <v-img @click="openLegend(player.status[0]+1)" class="margin-20" width="48px" lazy-src :src="require('../assets/player-status/' + status[player.status[0]+1])"></v-img>
        </v-list-item-avatar>
      </v-list-item>
      <v-list-item>
        <v-card-subtitle>Sky</v-card-subtitle>
        <v-list-item-avatar>
          <v-img @click="openLegend(player.status[1]+1)" class="margin-20" width="48px" lazy-src :src="require('../assets/player-status/' + status[player.status[1]+1])"></v-img>
        </v-list-item-avatar>
      </v-list-item>
      <v-list-item>
        <v-card-subtitle>Fantacalcio</v-card-subtitle>
        <v-list-item-avatar>
          <v-img @click="openLegend(player.status[2]+1)" class="margin-20" width="48px" lazy-src :src="require('../assets/player-status/' + status[player.status[2]+1])"></v-img>
        </v-list-item-avatar>
      </v-list-item>
    </v-list>
    <v-card-actions class="d-flex align-center justify-center padding-20">
      <v-btn color="primary" @click="removeFromFavourites(player)"><v-icon>mdi-delete</v-icon> Rimuovi dai miei giocatori</v-btn>
    </v-card-actions>
  </v-card>
</template>



<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'player',
  props: [
    'player'
  ],
  computed: {
    ...mapState({
      status: state => state.common.status
    })
  },
  methods: {
    ...mapActions([
      'removeFromFavourites',
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
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }

  .padding-20{
    padding: 20px !important;
  }
</style>