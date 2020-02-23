  const state = {
    status: [
      'football-field.svg',
      'bench.svg',
      'cross.svg',
      'red-card.svg'
    ],
    legend: {
      0: "Titolare",
      1: "Riserva",
      2: "Infortunato",
      3: "Squalificato"
    },
    selectedIcon: null,
    overlay: false
  };
  
  const getters = {
  
  };
  
  const mutations = {
    toggleOverlay(state){
      state.overlay = !state.overlay;
    },
    setIcon(state, icon){
      state.selectedIcon = icon;
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