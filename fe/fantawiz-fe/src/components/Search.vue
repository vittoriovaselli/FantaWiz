<template>
   <v-container v-if="players.length > 0">
     <h2>Risultati della Ricerca per: 
      <v-chip close color="secondary" 
        @click:close="resetReserch"
      >
      {{search}}
      </v-chip>
    </h2>

    <div class="d-flex wrap">
      <SearchResultPlayer :key="player.player" v-for="player in players" :player="player"/>
    </div>
  </v-container>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex';
  import SearchResultPlayer from './SearchResultPlayer'

  export default {
    name: 'Search',
    props: [
      'search',
      'reload',
    ],
    components: {
      SearchResultPlayer
    },

    data: () => ({

    }),
    
    computed: {
      ...mapState({
        players: state => state.players.filteredPlayers,
        myPlayers: state => state.players.myPlayers,
        status: state => state.common.status,
        selectedIcon: state => state.common.selectedIcon,
        loading: state => state.players.loading,
      })
    },
    methods: {
      resetReserch(){
        this.$emit('close');
        this.clearSearchTable();
      },
      ...mapMutations([
        'toggleOverlay',
        'setIcon',
        'getAllPlayers',
        'clearSearchTable'
      ]),
      ...mapActions([
        'addToFavourites',
      ]), 
      openLegend(icon){
        this.setIcon(icon);
        this.toggleOverlay();
      },
      beforeMount(){
        this.getAllPlayers();
      },
      add(player){
        const index = this.players.indexOf(player);
        this.addToFavourites(player);
        this.players[index].disableButton = true;
        console.log(this.players[index]);
      }
    },
  }
</script>

<style scoped>
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
</style>
