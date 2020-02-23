const state = {
  players: [
   
  ],
};

const getters = {

};

const mutations = {

  getMyPlayers(state){
    state.players = JSON.parse(localStorage.getItem('myPlayers')) || [];
  },

  removeFromFavourites (state, player) {    
    state.players.splice(state.players.indexOf(player),1);
    localStorage.setItem('myPlayers', JSON.stringify(state.players));
  },

  addToFavourites (state, player) {
    state.players.push(player);
    localStorage.setItem('myPlayers', JSON.stringify(state.players));
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