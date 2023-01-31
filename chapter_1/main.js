const app = Vue.createApp({
    template: `<h1>Hello {{ teamName }} and {{ !isHello ? firstName + lastName : '' }}</h1>
        <button @click="onChangeName">Change name</button>
        <div class="modal" v-if="isShowModal">
            <h1>Modal content</h1>
        </div>`,
    data() {
        return {
            teamName: 'RHP Team',
            firstName: 'Anh',
            lastName: 'Khoa',
            isHello: false,
            isShowModal: false,
        }
    },
    methods: {
        onChangeName() {
            this.firstName = 'Ngọc';
            this.lastName = 'Anh';
            this.isShowModal = !this.isShowModal;
        }
    }
});

app.mount("#contact")
