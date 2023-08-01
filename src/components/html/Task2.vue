<template>
  <div class="container">
    <h1>Задача № 2</h1>
    <div class="divider"></div>
    <p>Найти все положительные нечетные числа меньше N.</p>
    <div class="divider"></div>
    <label class="lblOne">
      <h4>Введите N:</h4>
      <input
        class="numInput"
        type="number"
        maxlength="2"
        size="2"
        tabindex="0"
        autofocus
        v-model="inputVal"
      />
      <label class="sortLbl">
        <input
          type="checkbox"
          id="checkSort"
          tabindex="1"
          v-model="inputSort"
        />
        {{ inputSort ? "Сортировать (ДA)" : "Сортировать (НЕТ)" }}
      </label>
      <button
        class="myBtn"
        tabindex="-1"
        @click="resultArray = calculateArray()"
        title="Рассчитать"
      >
        Вывести значения
      </button>
    </label>
    <div class="divider"></div>
    <label class="lblOne">
      <h4>Результат расссчета:</h4>
      <span class="spanClass" v-if="resultArray.length > 0">
        Всего чисел ({{ resultArray.length }})
      </span>
      <span v-if="resultArray.length < 1">Расчет не произведен!</span>
      <ul v-if="resultArray.length > 0">
        <li v-for="item in resultArray" :key="item">{{ item }}</li>
      </ul>
    </label>
    <div class="divider"></div>
  </div>
</template>

<script>
import { rangeRandomFrom } from "@/lib";
export default {
  name: "Task2",
  data() {
    return {
      inputVal: parseInt(rangeRandomFrom(8, 24)),
      resultArray: [],
      inputSort: false,
    };
  },
  watch: {
    inputVal() {
      if (this.inputVal > 2000) this.inputVal = 2000;
      if (this.inputVal < 1) this.inputVal = 1;
    },
  },
  methods: {
    calculateArray() {
      let num = parseInt(this.inputVal);
      let res = [];
      if (num > 0) {
        while (num >= 1) {
          num -= 1;
          if (!(num % 2 === 0)) {
            res.push(num);
          }
        }
      }
      if (this.inputSort) res.sort((a, b) => a - b);
      //   else {
      //     res.sort((a, b) => b - a);
      //   }
      return res;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/colors.scss";
.sortLbl {
  font-size: x-small;
  line-height: 1rem;
  font-weight: bold;
  color: $PrimaryColor;
  cursor: pointer;
  input[type="checkbox"] {
    cursor: pointer;
    &:focus {
      outline: 1px solid $AccentColor;
    }
  }
}
.spanClass {
  color: $PrimaryColor;
  font-size: smaller;
  font-weight: bold;
}
</style>
