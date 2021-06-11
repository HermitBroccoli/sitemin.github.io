/// <reference path="./jquery-3.6.0.js" />
/// <reference path="./jquery-3.6.0.min.js" />

Vue.createApp({
    data() {
        return {
            name: 'В разработке',
            rez: 1
        }
    },
    mounted() {
        setInterval(() => {
            this.rez++
        }, 1000)
    }
}).mount('#app');