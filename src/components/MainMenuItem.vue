<template>
  <div class="MenuItem">
    <RouterLink :to="itemTo">{{ MenuName }}</RouterLink>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: { title: String, to: String },
  data() {
    return {
      MenuName: this.$props.title,
      itemTo: this.$props.to,
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/css/colors.scss";

.MenuItem {
  text-decoration: none;
  padding: 0.5rem 0.5rem;
  color: $TextIconsColor;
  text-transform: uppercase;
  cursor: pointer;
  a {
    // font-weight: bold;
    color: $TextIconsColor;
    text-decoration: inherit;

    &.router-link-exact-active {
      color: $AccentColor;
    }
  }
}
</style>
