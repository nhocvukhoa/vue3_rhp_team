<template>
  <h1>Hello DOM</h1>
  <p>{{ title }}</p>
  <button @click="changeTitle">Change title</button>
  <hr />
  <nav-bar></nav-bar>
  <router-view></router-view>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  data() {
    return {
      content: "Lifecycle Hooks",
      title: "Vue",
    };
  },
  methods: {
    changeTitle() {
      this.title = "Vue JS";
    },
  },
  components: {
    NavBar,
  },
  // I. Giai đoạn khởi tạo
  // beforeCreate: hook chạy mỗi khi khởi tạo một instance. Tại thời điểm này, data, event chưa được thiết lập.
  beforeCreate() {
    console.log("1. Hook beforeCreate");
    // khi này this.content trả về undefined vì data chưa được nhận (observe)
    console.log("Demo hook beforeCreate: " + this.content);
  },
  // created: hook được chạy khi data, event đã thiết lập thành công.
  created() {
    console.log("2. Hook created");
    // khi này this.content trả về  "Lifecycle Hooks" vì quá trình observe data, thiết lập event đã hoàn thành.
    console.log("Demo hook created: " + this.content);
  },
  // II. Giai đoạn gắn kết DOM
  // beforeMount: hook sẽ chạy sau khi data, event được thiết lập và trước khi gắn kết vào DOM
  // Trong hook này chúng ta vẫn chưa - truy cập được phần tử trong DOM.
  beforeMount() {
    console.log("3. Hook beforeMount");
    // lỗi vì chưa gắn kết DOM vì vậy chưa thể truy cập đến các thành phần trong DOM
    console.log("Demo hook beforeMount: " + document.querySelector("h1"));
  },
  // mounted: giai đoạn này, mounted hook sẽ cho phép chúng ta có thể truy cập vào phẩn tử trong DOM. Tức là khi này, DOM đã được gắn kết.
  mounted() {
    console.log("4. Hook mounted");
    console.log(document.querySelector("h1")); // khi này this.$el đã gắn kết với DOM, lúc này có thể truy cập được tới các thành phần trong DOM
  },
  // III. Giai đoạn cập nhật DOM khi dữ liệu thay đổi
  // beforeUpdate: sau khi đối tượng đã được gắn vào DOM, khi dữ liệu thay đổi, và trước khi render, patch lại và hiển thị ra cho người dùng.
  beforeUpdate() {
    console.log("5. Hook beforeUpdate: " + this.title);
  },
  // updated hook : Chạy ngay sau khi beforeUpdate . Sử dụng khi bạn cần truy cập DOM sau khi thay đổi thuộc tính
  // Dữ liệu ở beforeUpdate và updated là như nhau
  updated() {
    console.log("6. Hook updated: " + this.title);
  },
  // IV. Giai đoạn hủy hook
  // beforeMount: là giai đoạn trước khi instance bị hủy. Đây là nơi để quản lý tài nguyên xóa tài nguyên, dọn dẹp các component.
  beforeUnmount() {
    this.title = null;
    delete this.title;
  },
  // unmounted: mọi thành phần đã được hủy bỏ hết.
  unmounted() {
    console.log(this.title);
  },
};
</script>
