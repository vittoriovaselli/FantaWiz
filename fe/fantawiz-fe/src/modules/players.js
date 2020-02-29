const state = {
  players: [
    {
      name: 'Petagna',
      team: 'spal',
      versus: 'juve',
      status: [
        {
          source: 0,
          playerStatus: 0,
        },
        {
          source: 1,
          playerStatus: 0
        },
        {
          source: 2,
          playerStatus: 0
        }
      ],
      isHome: true
    },
    {
      name: 'Ronaldo',
      team: 'juve',
      versus: 'spal',
      status: [
        {
          source: 0,
          playerStatus: 0,
        },
        {
          source: 1,
          playerStatus: 0
        },
        {
          source: 2,
          playerStatus: 1
        }
      ],
      isHome: false
    },
    {
      name: 'Gomez',
      team: 'Atalanta',
      versus: 'Sampdoria',
      status: [
        {
          source: 0,
          playerStatus: 3,
        },
        {
          source: 1,
          playerStatus: 3
        },
        {
          source: 2,
          playerStatus: 3
        }
      ],
      isHome: true
    },
    {
      name: 'Zaniolo',
      team: 'roma',
      versus: 'fiorentina',
      status: [
        {
          source: 0,
          playerStatus: 2,
        },
        {
          source: 1,
          playerStatus: 2
        },
        {
          source: 2,
          playerStatus: 2
        }
      ],
      isHome: false
    }
  ],
  filteredPlayers: [  ],
  myPlayers: [ ],
  enterPressed: false,
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
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}