const app = Vue.createApp({
    data() {
        return {
            item: { },
viewBlock : false
        }
    },
    methods: {
        Post: function() {
            axios.post('content.php')
                .then((response) => {
                    this.viewBlock=true;
                    console.log(response.data);
                    this.item = response.data;
                })
                .catch((error) => {
                    console.log(error)
                });
        },
    },
})
app.mount('#app')