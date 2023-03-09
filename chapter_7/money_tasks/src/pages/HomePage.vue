<template>
  <div>
    <h1>Home Page: Ref and Reactive</h1>
    <input type="text" v-model="searchText" />
    <ul>
      <li v-for="(user, index) in usersFilter" :key="index">{{ user }}</li>
    </ul>
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from "vue";
export default {
  props: {
    theme: {
      type: String,
      default: "Light",
    },
  },
  setup(props, context) {
    console.log(props.theme);
    console.log(context);

    const searchText = ref("");
    const users = reactive(["Khoa", "Văn", "Thư"]);
    const usersFilter = computed(() =>
      users.filter((user) => user.includes(searchText.value))
    );

    watch(searchText, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    });

    // Tính năng như computed nhưng ko log ra dữ liệu
    watchEffect(() => {
      if (searchText.value) {
        console.log("changed");
      }
    });

    return {
      searchText,
      users,
      usersFilter,
    };
  },
};
</script>
