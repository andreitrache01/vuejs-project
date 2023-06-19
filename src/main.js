import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from "vuex";

const app = createApp(App);
const store = createStore({
    state: {
        cards: [
            {
                id: 0,
                roleName: 'Company Administrator',
                roleType: 'Administrator Role',
                roleDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
                images: ['test', 'test'],
                createdDate: "11/01/2019",
                editable: true,
                active: false,
            },
            {
                id: 1,
                roleName: 'Property Administrator',
                roleType: 'Administrator Role',
                roleDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
                images: ['test', 'test'],
                createdDate: "11/01/2019",
                editable: true,
                active: true,

            },
            {
                id: 2,
                roleName: 'Real estate Agent',
                roleType: 'Administrator Role',
                roleDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
                images: ['test', 'test'],
                createdDate: "11/01/2019",
                editable: false,
                active: false,

            },
            {
                id: 3,
                roleName: 'Company Administrator',
                roleType: 'Administrator Role',
                roleDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
                images: ['test', 'test'],
                createdDate: "11/01/2019",
                editable: false,
                active: true,

            }
        ],
        filteredCards: [],
    },
    mutations: {
        SET_FILTERED_CARDS(state, filteredCards) {
            state.filteredCards = filteredCards;
        }
    },
    actions: {
        filterCardsByTitle({ commit, state }, searchTitle) {
            const lowerCaseSearchTitle = searchTitle.toLowerCase();

            const filteredCards = state.cards.filter(card =>
                card.roleName.toLowerCase().includes(lowerCaseSearchTitle)
              );
            commit('SET_FILTERED_CARDS', filteredCards);
        },
        filterCardsByStatus({ commit, state }, status) {
            var filteredCards = [];
            if(status != 'Active and inactive'){
                filteredCards = state.cards.filter(card =>
                    card.active == (status == 'Active' ? true : false)
                  );
            } else {
                filteredCards = state.cards;
            }
           
            commit('SET_FILTERED_CARDS', filteredCards);
        },
        increment(context) {
            context.commit('increment');
        },
        decrement(context) {
            context.commit('decrement');
        },
    },
    getters: {
        getFilteredCards: state => state.filteredCards
    }
});

app.use(store);

app.mount('#app');
