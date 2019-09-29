<template>
  <div id="app">

    <router-view/>

    <footer>
      <p>Footer</p>
    </footer>
  </div>
</template>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
footer
   position fixed
   left 0
   bottom 0
   width 100%
   background-color #901CD8
   color white
   text-align center
</style>
