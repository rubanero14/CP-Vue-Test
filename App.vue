<template>
  <section :class="{ dark : $store.state.darkIsOn }">
    <header class="mb-0">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="text-center mb-3">Articles</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <div class="row">
      <div class="col-12 col-md-2">
        <transition mode="out-in">
          <a class="btn w-100 mb-2" href="https://github.com/rubanero14/CP-Vue-Test"><i class="bi bi-file-earmark-code"></i> Source Code</a>
        </transition>
      </div>
      <div class="col-12 col-md-2 text-lg-end">
        <transition mode="out-in">
          <button class="btn w-100 mb-4" @click="toggleDarkMode" v-if="$store.state.darkIsOn"><i class="bi bi-brightness-high"></i> Light Mode</button>
          <button class="btn w-100 mb-4" @click="toggleDarkMode" v-else><i class="bi bi-moon"></i> Dark Mode</button>
        </transition>
      </div>
    </div>
      <div class="row">
        <div class="col-12" v-if="!$store.state.articleLoaded">
          <div class="card text-center" @click="loadArticles">
            <p>Click below to load the latest articles</p>
          </div>
          <div class="text-center" v-if="$store.state.isLoading">
            <div class="spinner-border" :class="{ 'text-dark': !$store.state.darkIsOn, 'text-light' : $store.state.darkIsOn }" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
        <div class="col-12">
          <hr v-if="$store.state.articleLoaded"/>
          <div class="row" v-if="$store.state.articleLoaded">
              <transition-group class="col-12 col-md-6 col-lg-4" name="list" tag="div" mode="in-out" v-for="todo in $store.state.todos" :key="todo.id" :id="todo.id">
                <div class="card list text-center">
                    <p> {{ todo.title }} </p>
                </div>
              </transition-group>
          </div>
          <hr v-if="$store.state.articleLoaded"/>
        </div>
        <div class="col-12 col-md-2">
          <div class="text-center">
            <transition mode="out-in">
              <button v-if="!$store.state.articleLoaded" class="btn w-100" @click="loadArticles"><i class="bi bi-arrow-clockwise"></i> Load Articles</button>
              <button v-else class="btn w-100" @click="resetPage"><i class="bi bi-arrow-left"></i> Back</button>
            </transition>
          </div>
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
}
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css");
@Import url('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css');
:root {
  --theme-color-grey: #d3d3d3;
  --theme-color-grey-light: #E0E0E0;
  --theme-color-grey-dark: #828282;
  --font-color-primary: #373737;
  --font-color-light: #ffffff;
  --font-size-lg: 15px;
  --font-size-md: 13px;
  --font-size-sm: 12px;
  --font-weight-700: 700;
  --border-radius-sm: 4px;
  --border-radius-lg: 12px;
  --font-Roboto: 'Roboto', sans-serif;
  --box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.20);
}

ul, ol, p {
  display: inline-block;
  padding: 0;
  margin: auto 0;
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
  background: #686868;
  padding: 5px 10px;
  font-size: var(--font-size-md);
  white-space: nowrap;
  animation:  slide-fade 1s ease-out;
}

.btn:hover, .btn:focus, .btn:focus-visible {
  background: #454545;
  box-shadow: 0px 1px 4px 0px rgba(0,0,0, 0.2);
  color: var(--font-color-light);
}

hr {
  background-color: var(--theme-color-grey-dark);
  margin: 0 0 25px 0;
}

.card {
  border-radius: var(--border-radius-lg);
  box-shadow: 0px 1px 4px 0px rgba(0,0,0, 0.2);
  margin-bottom: 30px;
  color: var(--font-color-primary);
  height: 90px;
  transform: rotateX(0deg);
  transition: transform 2s ease-in-out;
}

.card.list:hover {
  transform: rotateX(3600deg);
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
  background: #686868;
  color: var(--font-color-light) !important;
}

.dark .card:hover {
  box-shadow: 0px 0px 5px 0px rgb(255 255 255 / 90%) !important;
}

.dark hr {
  background-color: var(--theme-color-grey-light);
  margin-bottom: 25px;
}

.v-enter-from {
  opacity: 0;
  transform: translateX(-50px);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(50px);
}

.v-enter-active {
  transition: all 0.3s ease-out;
}

.v-leave-active {
  transition: all 0.3s ease-in;
}

.v-enter-to, .v-leave-from {
  opacity: 1;
  transform: translateX(0);
}

@media (max-width: 992px){
  a.btn, button.btn {
    font-size: var(--font-size-sm);
  }
}
</style>