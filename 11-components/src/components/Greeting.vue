<template>
  <p v-if="age >= 25">{{ msg }}</p>
  <p v-else>You must be 25 years or older to view the secret message.</p>
</template>

<script>
export default {
    name: "Greeting",
    props: ["age"],
    data() {
      return {
        msg: "This is a special hidden message",
      }
    }
  };
</script>

<!-- Scoped only adds styles to the current component -->
<!-- lang="scss" lets the app know that we want to use sass for compiling our styles -->
<style scoped lang="scss">
  $color: desaturate(darken(lavender, 50%), 50%);

  p{
    color: $color;
    font-size: 1.2rem;
    font-family: arial;
  }
</style>