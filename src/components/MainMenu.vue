<template>
  <div class="MenuWrapper">
    <div class="MainMenu">
      <MainMenuItem title="Главная" :to="toMain"></MainMenuItem>
      <MainMenuItem title="Задача 1" :to="toTask1"></MainMenuItem>
      <MainMenuItem title="Задача 2" :to="toTask2"></MainMenuItem>
    </div>
    <div class="BurgerBtn" @click="burgerClick"></div>
    <div class="imgContainer">
      <img src="@/assets/js.png" alt="JS logo" />
    </div>
  </div>
  <Teleport to="body">
    <aside class="leftSide" v-if="isLeftSideShow">
      <MainMenuItem
        title="Главная"
        :to="toMain"
        @click="burgerClick"
      ></MainMenuItem>
      <MainMenuItem
        title="Задача 1"
        :to="toTask1"
        @click="burgerClick"
      ></MainMenuItem>
      <MainMenuItem
        title="Задача 2"
        :to="toTask2"
        @click="burgerClick"
      ></MainMenuItem>
      <button class="closeBtn" @click="burgerClick">Закрыть</button>
    </aside>
  </Teleport>
</template>

<script>
import MainMenuItem from "./MainMenuItem.vue";
export default {
  name: "MainMenu",
  components: { MainMenuItem },
  data() {
    return {
      toMain: "/",
      toTask1: "/task1",
      toTask2: "/task2",
      isLeftSideShow: false,
    };
  },
  methods: {
    burgerClick() {
      this.isLeftSideShow = !this.isLeftSideShow;
    },
  },
  //   methods: {
  //     handleMainpage() {
  //       this.$router.push({ name: "main" });
  //     },
  //     handleTask1() {
  //       this.$router.push({ name: "task1" });
  //     },
  //   },
};
</script>

<style lang="scss">
@import "@/assets/css/colors.scss";

.MenuWrapper {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: space-around;
}

.MainMenu {
  width: 100%;
  background-color: $PrimaryColor;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 1rem;
  @media screen and (250px < width < 500px) {
    display: none;
  }
}
.imgContainer {
  width: 60px;
  height: 60px;
  object-fit: cover;
  object-position: center;
  margin-left: auto;
  align-self: flex-end;
  margin-right: 1rem;
  padding: 2px 2px;
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
  // @media screen and (250px < width < 500px) {
  //   margin: 0 auto;
  //   align-self: center;
  // }
}
.leftSide {
  min-width: 35%;
  min-height: 100%;
  background-color: $PrimaryColor;
  position: fixed;
  left: 0;
  top: 6%;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  animation-name: runMenu;
  animation-duration: 500ms;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);

  .closeBtn {
    background-color: transparent;
    color: $TextIconsColor;
    font-size: x-small;
    text-transform: uppercase;
    margin-top: 50%;
    align-self: flex-end;
    cursor: pointer;
    padding: 4px 4px;
    border: 1px solid $AccentColor;
  }
}
.BurgerBtn {
  display: none;
  color: $TextIconsColor;
  height: 6px;
  width: 30px;
  background-color: $DarkPrimaryColor;
  border: 1.5px solid $AccentColor;
  cursor: pointer;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 30px;
    height: inherit;
    background-color: $DarkPrimaryColor;
    top: -10px;
    left: -1px;
    border: 1.5px solid $AccentColor;
  }
  &::after {
    content: "";
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: $DarkPrimaryColor;
    top: 8px;
    left: -1px;
    border: 1.5px solid $AccentColor;
  }
  @media screen and (250px < width < 500px) {
    display: block;
    margin-left: 5px;
  }
}
@keyframes runMenu {
  0% {
    transform: translateX(-1200px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
