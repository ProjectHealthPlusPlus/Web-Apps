<template>
  <div></div>
</template>


<script>
import 'material-design-icons-iconfont/dist/material-design-icons.css'

export default {
  name: "content",
  data(){
    return {
      appTitle: 'Awesome App',
      sidebar: false,
      menuItems: [
        { title: 'Home', path: '/home', icon: 'home' },
        { title: 'Sign Up', path: '/signup', icon: 'face' },
        { title: 'Sign In', path: '/signin', icon: 'lock_open' }
      ]
    }
  },
};
</script>


<style scoped>

</style>
