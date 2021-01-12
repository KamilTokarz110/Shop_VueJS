<template>
  <div class="w3-content">
    <div class="w3-row w3-margin">
      <div class="w3-third">
        <img
          src="/w3images/jeans2.jpg"
          style="width: 100%; min-height: 200px"
        />
      </div>
      <div class="w3-twothird w3-container">
        <h2>Product Title</h2>
        <div class="w3-row w3-margin w3-content" style="padding: 10px 10px">
          <br /><b class="w3-half">$19.99</b>
          <input class="w3-quarter" style="width: 50px" type="text" />
          <button class="w3-quarter" style="margin: 0px 10px">Add</button>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
};
</script>

<style>
</style>