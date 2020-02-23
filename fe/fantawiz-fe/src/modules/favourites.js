const state = {
  players: [
    {
      player: 'Petagna',
      prossimaPartita: 'juve-spal',
      gazzetta: 0,
      corriere: 0,
      sky: 0,
      fantacalcio: 0,
    },
    {
      player: 'Zaniolo',
      prossimaPartita: 'fiorentina-roma',
      gazzetta: 2,
      corriere: 2,
      sky: 2,
      fantacalcio: 2,
    }
  ],
};

const getters = {

};

const mutations = {
  removeFromFavourites (state, player) {
    state.players.splice(state.players.indexOf(player),1);
  },

  addToFavourites (state, player) {
    state.players.push(player);
  }
};

const actions = {

};

export default {
  state,
  getters,
  mutations,
  actions
}