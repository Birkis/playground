<template>
  <div class="home">

    <h1>Playground V2</h1>
 
  <p>{{names}}</p>

  </div>
</template>

<script>
// @ is an alias to /src
//import firebase from 'firebase'
import db from '@/firebase/init'

export default {
  name: 'Home',
  data(){
    return{
      names:null
    }
  },
  created(){
    let ref = db.collection('playground').get()
    console.log(ref)
  }

}
</script>
