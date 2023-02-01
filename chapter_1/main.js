const app = Vue.createApp({
    // template: `<h1>Hello {{ teamName }} and {{ !isHello ? firstName + lastName : '' }}</h1>
    //     <button @click="onChangeName">Change name</button>
    //     <div class="modal" v-if="isShowModal">
    //         <h1>Modal content</h1>
    //     </div>`,
    data() {
        return {
            teamName: 'RHP Team',
            firstName: 'Anh',
            lastName: 'Khoa',
            isHello: false,
            isShowModal: false,
            x: 0,
            y: 0,
        }
    },
    methods: {
        onChangeName() {
            this.firstName = 'Ngọc';
            this.lastName = 'Anh';
            this.isShowModal = !this.isShowModal;
        },
        onLogEvent(event) {
            console.log('running event...', event);
        },
        onMouseMoveEvent(event) {
            console.log('running mouse move event...', event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
});

app.mount("#contact")
