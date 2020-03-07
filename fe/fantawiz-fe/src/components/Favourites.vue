<template>
  <div class="container">
    <h2>I miei giocatori</h2>
    <div class="d-flex wrap" v-if="players.length > 0">
      <Player :key="player.player" v-for="player in players" :player="player"/>
    </div>
    <div v-else class="d-flex wrap empty-favourites">
      <h4>Non ci sono giocatori nei preferiti, cerca un giocatore per iniziare.</h4>
    </div>
  </div>
</template>

<script>
import Player from './Player';
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'Favourites',
  
  props: [
    'headers'
  ],
  
  components: {
    Player
  },

  data: () => ({

  }),

  computed: {
    ...mapState({
      players: state => state.players.myPlayers,
      status: state => state.common.status,
    })
  },

  methods: {
    ...mapMutations([
      'getMyPlayers',
      'toggleOverlay',
      'setIcon'
    ]),
    ...mapActions([
      'removeFromFavourites',
    ]), 
    openLegend(icon){
      this.setIcon(icon);
      this.toggleOverlay();
    }
  },
  beforeMount(){
    this.getMyPlayers();
  }
}

</script>

<style lang="scss" scoped>
  .v-image{
    margin: 10px 0 !important;
  }

  .wrap{
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .v-card{
    margin-bottom: 20px;
  }

  .empty-favourites{
    display: flex;
    align-items: center;
    text-align: center;
    h4{
      margin: 100px 0;
    }
  }
</style>
