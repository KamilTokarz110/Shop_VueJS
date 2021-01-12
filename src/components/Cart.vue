<template>
  <div>
    <!-- <div class="w3-right w3-dropdown-hover">
      <button class="w3-button">
        <router-link to="/Item"
          ><i class="fa fa-shopping-cart w3-margin-right"></i
        ></router-link>
      </button>
      <div class="w3-dropdown-content w3-bar-block w3-border">
        <span class="w3-dropdown-content w3-black">0 Cart</span>
        <span class="">Item</span>
      </div>
      <i class="fa fa-search"></i>
    </div> -->

    <div class="w3-right w3-dropdown-hover">
      <div class="container" style="font-size: 1.1rem">
        <h4 style="padding: 0px 5px">
          Cart
          <span class="price" style="color: black">
            <i class="fa fa-shopping-cart"></i>
            <b style="padding: 10px 5px">4</b>
          </span>
        </h4>
        <div
          class="w3-dropdown-content w3-bar-block w3-border"
          style="width: 200px"
        >
          <p>
            <a href="#">Product 1</a> <span class="price">$15</span>
            <span class="remove">Remove</span>
          </p>
          <p>
            <a href="#">Product 2</a> <span class="price">$5</span>
            <span class="remove">Remove</span>
          </p>
          <p>
            <a href="#">Product 3</a> <span class="price">$8</span>
            <span class="remove">Remove</span>
          </p>
          <p>
            <a href="#">Product 4</a> <span class="price">$2</span>
            <span class="remove">Remove</span>
          </p>
          <hr />
          <p>
            Total <span class="price" style="color: black"><b>$30</b></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.remove {
  padding: 10px;
  display: block;
  cursor: pointer;
  width: 100%;
}
</style>
