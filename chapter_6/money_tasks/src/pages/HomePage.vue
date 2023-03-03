<template>
  <div>
    <h1>Home Page: Ref and Reactive</h1>
    <p>{{ firstName }}</p>
    <p>Ref object: {{ city }}</p>
    <p>Reactive object: {{ car }}</p>
    <button @click="onChangeSomeThing">Change something</button>
    <button @click="onChangeValueOject">Change value</button>
    <hr />
    <p>Count by Ref: {{ stateRef }}</p>
    <p>Count by Reactive: {{ stateReactive.count }}</p>
    <button @click="increaseCountReactive">Increase count reactive</button>
    <button @click="increaseCountRef">Increase count ref</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  setup() {
    const firstName = ref("Khoa");
    const city = ref({
      name: "Hội An",
      number: 92,
    });
    let car = reactive({
      price: 100000,
      name: "Mẹt",
    });
    const stateRef = ref(0);
    const stateReactive = reactive({ count: 0 });

    function increaseCountRef() {
      stateRef.value++;
    }

    function increaseCountReactive() {
      stateReactive.count++;
    }

    // Chung quy: cả 2 thằng đều theo dõi sự thay đổi của dữ liệu
    // Thay một phần dữ liệu
    function onChangeSomeThing() {
      // Khác nhau: ref muốn đổi data phải truy cập thông qua value để đổi, chỉ phù hợp với kiểu string, number, boolean
      // nếu ref là object phải truy cập phức tạp: object.value.property
      // còn reactive phù hợp với object hơn vì chỉ cần object.property
      // ref firstName
      firstName.value = "Anh Khoa";
      // ref city
      city.value.name = "Đà Nẵng";
      // reactive car
      car.price = 300000;
    }

    // Thay toàn bộ dữ liệu
    function onChangeValueOject() {
      // ref: bộ set get nằm ngoài nên có thể biến đổi
      city.value = {
        name: "Đà Nẵng",
        number: 43,
      };

      // reactive: bộ set get nằm trong nghĩa là chỉ set get thuộc tính của object
      car = {
        price: 500000,
        name: "mẹt xi đét",
      };

      console.log(city);
      console.log(car);
    }

    return {
      firstName,
      car,
      city,
      onChangeSomeThing,
      onChangeValueOject,
      stateRef,
      increaseCountRef,
      stateReactive,
      increaseCountReactive,
    };
  },
};
</script>
