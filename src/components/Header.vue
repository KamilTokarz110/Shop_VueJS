<template>
  <div>
    <!-- Top header -->
    <header class="w3-container w3-xlarge">
      <p class="w3-left">Jeans</p>
      <div>
        <Cart />
      </div>
    </header>
  </div>
</template>
<script>
import Cart from "./Cart.vue";
export default {
  components: { Cart },
};
</script>
<style>
</style>