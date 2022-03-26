import { createApp } from 'vue';
import App from './App.vue';
import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
    state(){
        return {
            todos: [],
            isLoading: false,
            articleLoaded: false,
            darkIsOn: false,
            articleNumber: 10,
        };
    },
    actions:{},
    mutations:{
        loadData(state){
            state.isLoading = true; 
            axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                    state.isLoading = false; 
                    state.todos.push(...response.data); //flattened the array and pushing to todos array
                    console.log(state.todos);
                    state.todos.length = state.articleNumber; // to remove any excess data > 10 inside array
                    state.articleLoaded = true;
                }
            );
        },
        resetApp(state){
            state.isLoading = true;
            state.articleLoaded = false;
            state.todos = [];
            state.isLoading = false;
        },
        setArticleNumber(state, payload){
            state.articleNumber = payload;
        },
    },
});

const app = createApp(App);

app.use(store);

app.mount('#app');


