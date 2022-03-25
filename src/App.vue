<template>
  <section :class="{ dark : $store.state.darkIsOn }">
    <header :class="{ 'mb-0' : $store.state.articleLoaded }">
      <div class="row">
        <div class="col-4">
          <a class="btn" href="https://github.com/rubanero14/CP-Vue-Test">View Source Code</a>
        </div>
        <div class="col-4">
          <h1 class="text-center">Articles</h1>
        </div>
        <div class="col-4">
          <button class="btn toggle" @click="toggleDarkMode" v-if="$store.state.darkIsOn">Light Mode <i class="bi bi-brightness-high"></i></button>
          <button class="btn toggle" @click="toggleDarkMode" v-else>Dark Mode <i class="bi bi-moon"></i></button>
        </div>
      </div>
    </header>
    <div class="row">
      <div class="col-12">
        
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12" v-if="!$store.state.articleLoaded">
          <div class="card">
            <div class="d-flex justify-content-center align-items-center">
              <p>Click below to load the latest articles</p>
            </div>
          </div>
          <div class="text-center" v-if="$store.state.isLoading">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
        <div class="col-12">
          <hr v-if="$store.state.articleLoaded"/>
          <div class="row" v-if="$store.state.articleLoaded">
              <transition-group class="col-12 col-md-6 col-lg-4" tag="div" v-for="todo in $store.state.todos" :key="todo.id" :id="todo.id">
                <div class="card text-center">
                    <p> {{ todo.title }} </p>
                </div>
              </transition-group>
          </div>
          <hr v-if="$store.state.articleLoaded"/>
        </div>
      </div>
      <div class="col-12">
        <div class="text-center">
          <button v-if="!$store.state.articleLoaded" class="btn" @click="loadArticles">Click Here</button>
          <button v-if="$store.state.articleLoaded" class="btn" @click="resetPage">Back</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return{};
  },
  methods:{
    loadArticles(){
      this.$store.commit('loadData');
    },
    resetPage(){
      this.$store.commit('resetApp');
    },
    toggleDarkMode(){
      return this.$store.state.darkIsOn = !this.$store.state.darkIsOn;
    },
  },
  computed:{},
  watch:{},
  props:{},
  components:{},
  provide:{},
  inject:{},
}
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css");
@Import url('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css');
:root {
  --theme-color: #003479;
  --theme-color-primary: #0B74B9;
  --theme-color-dark: #001E45;
  --theme-color-grey: #d3d3d3;
  --theme-color-grey-light: #E0E0E0;
  --theme-color-grey-dark: #828282;
  --font-color-primary: #373737;
  --font-color-light: #ffffff;
  --font-size-lg: 15px;
  --font-size-md: 13px;
  --font-size-sm: 12px;
  --font-weight-100: 100;
  --font-weight-300: 300;
  --font-weight-400: 400;
  --font-weight-500: 500;
  --font-weight-700: 700;
  --btn-padding: 10px 30px;
  --input-padding: 8px 15px;
  --border-radius-sm: 4px;
  --border-radius-lg: 12px;
  --line-height-sm: 1.1;
  --line-height-md: 1.2;
  --line-height-lg: 1.3;
  --line-height-xl: 1.5;
  --font-Roboto: 'Roboto', sans-serif;
  --box-shadow-input: 0px 5px 12px rgba(0, 0, 0, 0.15);
  --box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.20);
  --support-success: #198754;
  --support-success-dark: #157347;
  --support-error: #D84E4E;
  --support-error-dark: #bb2d3b;
}

ul, ol, p {
  padding: 0;
  margin: 0;
  list-style: none;
}

header {
  margin-bottom: 30px;
}

header, section {
  background: var(--theme-color-grey-light);
}

section {
  height: 100vh;
  overflow: auto;
  padding: 30px;
}

header h1 {
 font-family: var(--font-Roboto);
 font-weight: 700;
 color: var(--font-color-primary);
}

.btn {
  color: var(--font-color-light);
  background: #9c9c9c;
  padding: 5px 10px;
}

.btn:hover, .btn:focus, .btn:focus-visible {
  background: var(--theme-color-grey-dark);
  box-shadow: 0px 1px 4px 0px rgba(0,0,0, 0.2);
  color: var(--font-color-light);
}

hr {
  background-color: var(--theme-color-grey-dark);
  margin-bottom: 25px;
}

.card {
  border-radius: var(--border-radius-lg);
  padding: 20px;
  box-shadow: 0px 1px 4px 0px rgba(0,0,0, 0.2);
  margin-bottom: 10px;
  color: var(--font-color-primary);
}

hr:not([size]) {
  height: 5px;
  border-radius: 5px;
}

/*Dark Theme*/
.dark header, section.dark {
  background: #333333 !important;
  padding: 0;
}

section.dark {
  height: 100vh;
  overflow: auto;
  padding: 30px;
}

.dark h1 {
    color: var(--font-color-light);
} 

.dark .card {
  background: #434343;
  box-shadow: 0px 1px 4px 0px rgba(255,255,255, 0.2) !important;
  color: var(--font-color-light) !important;
}

.dark hr {
  background-color: var(--theme-color-grey-light);
  margin-bottom: 25px;
}

.dark .btn {
  color: var(--font-color-primary);
  background: var(--theme-color-grey-light);
  padding: 5px 10px;
}

.dark .btn:hover, .dark .btn:focus, .dark .btn:focus-visible {
  background: var(--theme-color-grey);
  box-shadow: 0px 1px 4px 0px rgba(0,0,0, 0.2);
  color: var(--font-color-primary) !important; 
}

.v-enter-from, .v-leave-to {
  /* transform: rotateX(0deg); */
  opacity: 0;
}

.v-enter-active, .v-leave-active {
  transition: all 3s ease-out;
}

.v-enter-to, .v-leave-from {
  /* transform: rotateX(3600deg); */
  opacity: 1;
}
</style>