<template>
  <div>
    <p>"Your wings are ready." - John Assaraf</p>
    <section v-html='formatedDescription'></section>
  </div>
</template>

<script>
export default {
  name: 'about',
  props: ['description'],
  data () {
    return {
      quote: ''
    }
  },
  computed: {
    formatedDescription() {
      return this.description.replace(/\n/g, '<br />');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  p {
    margin-top: 0;
    margin-bottom: 25px;
    font-size: 21px;
    font-family: 'Cookie', 'Dancing Script', cursive;
  }
  section {
    max-width: 400px;
    margin: auto;
  }
</style>
