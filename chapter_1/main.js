const app = Vue.createApp({
    data() {
        return {
            teamName: 'RHP Team',
            firstName: 'Anh',
            lastName: 'Khoa',
            isHello: false,
        }
    },
    methods: {
        onChangeName() {
            this.firstName = 'Ngọc';
            this.lastName = 'Anh';
        }
    }
});

app.mount("#contact")
