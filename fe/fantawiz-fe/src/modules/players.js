const state = {
  players: [
    {
      player: 'Petagna',
      prossimaPartita: 'juve-spal',
      gazzetta: 0,
      sky: 0,
      fantacalcio: 0,
    },
    {
      player: 'Ronaldo',
      prossimaPartita: 'juve-spal',
      gazzetta: 0,
      sky: 0,
      fantacalcio: 1,
    },
    {
      player: 'Gomez',
      prossimaPartita: 'atalanta-sampdoria',
      gazzetta: 3,
      sky: 3,
      fantacalcio: 3,
    },
    {
      player: 'Zaniolo',
      prossimaPartita: 'fiorentina-roma',
      gazzetta: 2,
      sky: 2,
      fantacalcio: 2,
    },
  ],
  filteredPlayers: [  ],
  myPlayers: [ ],
  enterPressed: false,
};

const getters = {
  inMyPlayers: (state) => (player) => {
    return state.myPlayers.find(element => element.player === player.player) ? true : false;
  }
};

const mutations = {
  clearSearchTable(state){
    state.filteredPlayers = [];
  },
  getMyPlayers(state){
    state.myPlayers = JSON.parse(localStorage.getItem('myPlayers')) || [];
  }
};

const actions = {
  removeFromFavourites ({state}, player) {
    state.myPlayers.splice(state.myPlayers.indexOf(player),1);
    localStorage.setItem('myPlayers', JSON.stringify(state.myPlayers));
  },

  addToFavourites ({state}, player) {
    if(state.myPlayers.indexOf(player) == -1){
      state.myPlayers.push(player);
      localStorage.setItem('myPlayers', JSON.stringify(state.myPlayers));
    }
  },
  searchTerm({ state, commit }, search){
    state.enterPressed = true;

    commit('clearSearchTable');
    for(let i=0; i<state.players.length; i++){
      if(state.players[i].player.toLowerCase().includes(search)){
        let player = state.players[i];
        state.filteredPlayers.push(player);
        state.enterPressed = false;
      }
    }
  },
  resetEnterPressed({ state }, search){
    if(search === '')
      state.enterPressed = false;
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}