<template>
  <v-overlay
    :value="overlay"
  >
    <v-card v-if="overlay" light class="padding-20">
      <div class="btn-container">
        <v-btn x-small text fab color="primary" @click="toggleOverlay"><v-icon>mdi-close</v-icon></v-btn>
      </div>
      <div class="icon-container d-flex align-center">
        <v-img class="margin-20" width="64px" lazy-src :src="require('../assets/icons/player-status/' + status[selectedIcon])"></v-img>
        <p class="margin-20"><b>{{legend[selectedIcon]}}</b></p>
      </div>
    </v-card>
  </v-overlay>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'icon-legend',
  data: () => ({
    //
  }),

  computed: {
    ...mapState({
      status: state => state.common.status,
      selectedIcon: state => state.common.selectedIcon,
      legend: state => state.common.legend,
      overlay: state => state.common.overlay,
    })
  },

  methods: {
    ...mapMutations([
      'toggleOverlay'
    ])
  }
}
</script>

<style scoped>
  .margin-20{
    margin: 0 20px;
  }

  .padding-20{
    padding: 10px;
  }

  .btn-container{
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .icon-container{
    padding: 10px 0 30px 0;
  }

</style>