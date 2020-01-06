<template>
  <div>
    <v-container>
      <v-flex xs12>
        <v-parallax :src="require('../assets/chicken.jpg')" height="500"></v-parallax>
        <h1>{{msg}}</h1>
      </v-flex>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Prop from 'vue-property-decorator'

@Component({
  props: {
    msg: String
  }
})
export default class HelloWorld extends Vue {

}
</script>
