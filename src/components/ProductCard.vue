<template>
  <div>
    <div class="w3-col l3 s6">
      <div class="w3-container">
        <div class="w3-display-container">
          <img src="/w3images/jeans2.jpg" style="width: 100%" />
          <span class="w3-tag w3-display-topleft">New</span>
          <div class="w3-display-middle w3-display-hover">
            <button class="w3-button w3-black">
              Buy now <i class="fa fa-shopping-cart"></i>
            </button>
          </div>
        </div>
        <p>
          <router-link :to="{ name: 'product', params: { id: 23 } }"
            >Ripped Jeans</router-link
          ><br /><b>$19.99</b>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>