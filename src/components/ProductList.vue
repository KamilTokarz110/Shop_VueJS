<template>
  <div>
    <div class="w3-container w3-text-grey" id="jeans">
      <p>8 items</p>
    </div>
    <div class="w3-row w3-grayscale">
      <product-card />
      <product-card />
      <product-card />
      <product-card />
    </div>
  </div>
</template>



<script>
import ProductCard from "./ProductCard";
export default {
  components: { ProductCard },
};
</script>


<style>
</style>