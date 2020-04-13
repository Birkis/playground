<template>
  <v-container class="home">

  <h1>Playground V2</h1>
 
  <p>{{names.name}}</p>
  <p>{{payload}}</p>
  <v-btn @click.prevent="playIt">
    clickMe
  </v-btn>


  </v-container>
</template>

<script>
/* eslint-disable no-unused-vars */

// @ is an alias to /src
import firebase from 'firebase/app'
import db from '@/firebase/init'
import functions from 'firebase/functions'



export default {
  name: 'Home',
  data(){
    return{
      names:'',
      payload:''
    }
  },
  methods:{
    playIt(){
        let testFunc = firebase.functions().httpsCallable('someFunction')
        testFunc().then(result => {
            this.payload = result.data
          })
    }

  },
  created(){
  db.collection('playground').get().then( data =>{
    data.forEach( result => {
      this.names = result.data()
      })
    })


  }

}
</script>
