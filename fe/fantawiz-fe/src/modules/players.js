import getAllPlayers from '../api/api';

const state = {
  players: [ ],
  filteredPlayers: [  ],
  myPlayers: [ ],
  enterPressed: false,
  loading: false
};

const getters = {
  inMyPlayers: (state) => (player) => {
    return state.myPlayers.find(element => element.name === player.name) ? true : false;
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
      if(state.players[i].name.toLowerCase().includes(search)){
        let player = state.players[i];
        state.filteredPlayers.push(player);
        state.enterPressed = false;
      }
    }
  },
  resetEnterPressed({ state }, search){
    if(search === '')
      state.enterPressed = false;
  },
  getAllPlayersFromApi({state}){
    state.loading = true;
    getAllPlayers().then((response)=>{
      state.players = [...response];
      state.loading = false;
    }).catch(error => {
      console.log(error);
      state.loading = false;
    })
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}