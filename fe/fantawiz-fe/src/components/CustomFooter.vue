<template>
  <v-footer color="primary" id="footer">
    <div id="credits">
      <p> Fonti: </p>
      <a target="_blank" href="https://www.gazzetta.it/Calcio/prob_form/">
        <v-img src="../assets/icons/logos/gazzetta.jpg" width="20px"></v-img>
      </a>
      <a target="_blank" href="https://www.fantacalcio.it/probabili-formazioni-serie-a">
        <v-img src="../assets/icons/logos/fanta-gazzetta.png" width="20px"></v-img>
      </a>
      <a target="_blank" href="https://sport.sky.it/calcio/serie-a/probabili-formazioni">
        <v-img src="../assets/icons/logos/sky-sport.png" width="20px"></v-img>
      </a>
    </div>
    <div>Icons made by <a target="_blank" href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a target="_blank" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
  </v-footer>
</template>

<script>
export default {
  name: 'custom-footer'
}
</script>

<style scoped>
#credits{
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

#footer{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: x-small;
  color: white;
}

a{
  cursor: pointer;
  color: white !important;
}

#credits a{
  margin-left: 10px;
}

a div:hover{
  opacity: 0.85;
}

</style>