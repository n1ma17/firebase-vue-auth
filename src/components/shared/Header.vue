<template>
  <div class="header">
    <button @click="signOut">sign out</button>
  </div>
</template>

<script>
import { getAuth, signOut , onAuthStateChanged} from "firebase/auth";
export default {
  data() {
    return {};
  },
  created(){
onAuthStateChanged(getAuth(), (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid);
  } else {
    this.signOut()
  }
});
  },
  methods: {
    signOut() {
      signOut(getAuth())
        .then(() => {
          console.log('signout');
          this.$router.replace({name: 'login'})
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped lang='scss'>
.header{
    width: 100%;
    height: 100px;
    background-color: red;
}
</style>