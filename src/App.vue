<template>

  <router-view/>
  
  <ui-bottom-navigation content-selector=".container" stacked>
    <ui-tabs
      v-model="active"
      type="textWithIcon"
      :items="items"
      stacked
      @click="onChange"
    ></ui-tabs>
  </ui-bottom-navigation>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: 'Home',
          icon: 'home',
          url: '/'
        },
        {
          text: 'Edit',
          icon: 'edit',
          url: '/edit'
        },
        {
          text: 'Add',
          icon: 'add',
          url : "/add"
        }
      ],
      active: 0
    };
  },
  methods: {
    onChange() {
      this.$router.push(this.items[this.active].url)
    }
  }
};
</script>


<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
