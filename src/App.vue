<script>
export default {
  //
};
</script>

<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Fórum</h1>
        <RouterView />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "~bulma";

$size: 40px;
$position: 50%;
.is-loading {
  position: relative;
  &::after {
    @extend %loader;
    position: absolute;
    border-width: 5px;
    width: $size;
    height: $size;
    top: $position;
    left: $position;
    margin-left: -$size / 2;
    margin-top: -$size / 2;
  }
}
a i {
  margin-right: 5px;
}
</style>
