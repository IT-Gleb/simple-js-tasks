<template>
  <div class="container">
    <div class="divider"></div>
    <h1>Задача № 1</h1>
    <div class="divider"></div>
    <p>
      Написать функцию, которая принимает два аргумента и возвращает все числа,
      которые деляться на данный делитель.
    </p>
    <p>Первый аргумент массив чисел. Второй - делитель.</p>
    <pre>
  divideBy([1,2,4,7,8,11,12,23], 2)==[2,4,8,12]
    </pre>
    <h3>Поехали:</h3>
    <div class="divider"></div>
    <label class="lblOne">
      <div class="info">
        <h4>Исходный массив чисел:</h4>
        <span class="infoSpan" v-if="firstArray.length > 0"
          >Всего чисел ({{ firstArray.length }})
        </span>
      </div>
      <button class="myBtn" @click="updateArray">Обновить массив</button>
    </label>
    <div class="divider"></div>
    <ul>
      <li
        v-for="item in firstArray"
        :key="item"
        :class="resultArray.includes(item) ? 'activeLi' : ''"
      >
        {{ item }}
      </li>
    </ul>
    <div class="divider"></div>
    <label class="lblOne">
      <h5>Делитель:</h5>
      <input
        type="number"
        v-model="divider"
        size="2"
        maxlength="2"
        class="numInput"
      />
      <button class="myBtn" @click.prevent="calculateArray">Рассчитать</button>
    </label>
    <div class="divider"></div>
    <div class="info">
      <h4>Результат:</h4>
      <span class="infoSpan" v-if="resultArray.length > 0"
        >Всего чисел ({{ resultArray.length }})
      </span>
    </div>
    <div class="divider"></div>
    <ul>
      <li v-for="item in resultArray" :key="item">{{ item }}</li>
    </ul>
    <h3 v-if="resultArray.length < 1">Нет данных!</h3>
    <div class="divider"></div>
  </div>
</template>

<script>
import { rangeRandomFrom, randomArray } from "@/lib";
export default {
  name: "Task1",
  data() {
    return {
      firstArray: randomArray(),
      resultArray: [],
      divider: parseInt(rangeRandomFrom(2, 9)),
    };
  },

  watch: {
    divider() {
      if (this.divider < 1) this.divider = 1;
      if (this.divider > 99) this.divider = 99;
    },
  },

  methods: {
    updateArray() {
      this.resultArray = [];
      // this.firstArray = [];
      this.firstArray = randomArray();
    },
    calculateArray() {
      this.resultArray = [];
      if (this.firstArray.length < 1) {
        throw new Error("Слишком большой исходный массив");
        return false;
      }
      let tmpSet = new Set();
      this.firstArray.forEach((item) => {
        if (item % this.divider === 0) {
          tmpSet.add(item);
        }
      });
      if (tmpSet.size > 0) this.resultArray = Array.from(tmpSet);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/colors.scss";

.activeLi {
  color: $TextIconsColor;
  background-color: $PrimaryColor;
}
.info {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
}
.infoSpan {
  display: inline;
  color: $PrimaryColor;
  font-size: x-small;
  line-height: 1.4rem;
}
</style>
