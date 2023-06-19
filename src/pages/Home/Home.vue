<template>
  <div class="container">
    <h1 class="title">User Roles Management</h1>

    <div class="inputs-container">

      <form>
        <input placeholder="search" id="job-title" type="text" @input="onInputRole" v-model="inputValue" />
        <select v-model="selectedValue" id="status-select" @change="onSelectInput">
          <option v-for="option in options" :key="option.index">{{ option.value }}</option>
        </select>
      </form>
      <button id="create-role-button">CREATE NEW ROLE</button>
    </div>
    <CardsComponent :cards="cards"/>
  </div>
</template>

<script>
import './Home.css';
import CardsComponent from '../../components/CardsComponent/CardsComponent.vue';

export default {
  name: 'HelloWorld',
  components: {
    CardsComponent
  },
  data() {
    return {
      cards: [],
    
      options: [
        {
          index: 0,
          value: "Active"
        },
        {
          index: 1,
          value: "Inactive"
        },
        {
          index: 2,
          value: "Active and inactive"
        },
      ],
      selectedValue: null,
      inputValue: null,
    }
  },
  mounted() {
    this.cards = this.$store.state.cards;

    console.log(this.$store.state.cards);
    this.selectedValue = this.options[2].value;
  },
  methods: {
    onSelectInput() {
      console.log(this.selectedValue);
      this.$store.dispatch('filterCardsByStatus', this.selectedValue);

      this.cards = this.$store.getters.getFilteredCards;
    },
    onInputRole() {
      this.$store.dispatch('filterCardsByTitle', this.inputValue);

      this.cards = this.$store.getters.getFilteredCards;
    }
  },
  
}
</script>
