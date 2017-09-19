<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'home',

  data () {
    return {
      msg: 'Welcome to DS Paintings',
      tumblr: null,
      client: null,
    }
  },

  mounted() {
    
    // Authenticate via OAuth
    /*this.client = this.createClient({
      consumer_key: 'Alvx8ino78UP490HjWk2VJ3KQyslXhWAH1a3pWcKYZyjpNqXOJ',
      consumer_secret: 'SBuw66Liq7P1QEUgd7VBvD8Ku0RL0sWroE49I3cv0J4Ra1TnbV',
      token: 'OnFfQ6ARxmGpzXl2Qa66NoXJysxLHFw2szeWBqee5tyL3I1gw5',
      token_secret: 'iC7I3rUXXGRsWnyPhACukJIyoDHW0dcCPQOuufem6XAKnra7g9'
    });

    // Make the request
    this.client.userInfo(function (err, data) {
      // ...
    });*/
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
