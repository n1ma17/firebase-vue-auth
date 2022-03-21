<template>
  <AuthForm type="register" title="Register" />
</template>

<script>
import AuthForm from "@/components/AuthForm";
export default {
  name: "Register",
  components: { AuthForm },
};
</script>

<style lang="scss" scoped>
input {
  margin: 20px;
  padding: 10px;
}
</style>
