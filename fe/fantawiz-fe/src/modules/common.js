  const state = {
    status: [
      'error.svg',
      'football-field.svg',
      'bench.svg',
      'cross.svg',
      'red-card.svg'
    ],
    legend: {
      0: "Informazione non disponibile. Riprova più tardi.",
      1: "Titolare",
      2: "Riserva",
      3: "Infortunato",
      4: "Squalificato"
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