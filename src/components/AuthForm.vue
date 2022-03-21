<template>
  <v-card color="#560bad" class="auth-card">
    <div class="auth-card__content">
      <form @submit.prevent="submited" class="auth-card__content__form">
        <span class="auth-card__content__form__title">{{ title }}</span>
        <v-row class="mt-6">
          <v-col cols="12" md="12">
            <v-text-field
              label="Email"
              v-bind="attrs"
              v-model="email"
              type="email"
              name="email"
              id="email"
            />
          </v-col>
          <v-col cols="12" md="12">
            <v-text-field
              label="Password"
              v-bind="attrs"
              v-model="password"
              type="password"
              name="password"
              id="pass"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12">
            <span v-if="type === 'register'"
              >Already have an accoint? <a href="/">Login</a></span
            >
          </v-col>
          <v-col cols="12" md="12" class="text-center">
            <Button loading type="submit" />
          </v-col>
        </v-row>
      </form>
      <div class="auth-card__content__description">
        <span>This is firebase authentication</span>
      </div>
    </div>
  </v-card>
</template>

<script>
import Button from "../components/shared/Button.vue";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
export default {
  name: "AuthForm",
  components: { Button },
  props: {
    type: {
      type: String,
      default: "login",
    },
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      error: "",
      email: "",
      password: "",
      attrs: {
        outlined: true,
        color: "#560bad",
      },
    };
  },
  methods: {
    submited() {
      const api =
        this.type === "login"
          ? signInWithEmailAndPassword
          : createUserWithEmailAndPassword;
      api(getAuth(), this.email, this.password)
        .then(() => {
          // const user = userCredential;
          // console.log(user.user.email);
          this.$router.replace({
            name: "secret",
          });
        })
        .catch((e) => {
          console.log({ e });
        });
    },
  },
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #560bad !important;
}
.auth-card {
  width: 100%;
  &__content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;

    &__form {
      width: 50%;
      background-color: #fff;
      padding: 30px;
      &__title {
        font-size: 30px;
        font-weight: 600;
        width: 100%;
        color: #560bad !important;
      }
    }
    &__description {
      width: 50%;
      height: 100%;
      color: #fff;
      font-size: 34px;
      font-weight: 700;
      display: flex;
      align-items: flex-start;
      justify-content: center;
    }
  }
}
</style>