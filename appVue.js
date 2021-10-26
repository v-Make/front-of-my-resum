const app = Vue.createApp({
    data() {
        return {
            item:{},
viewBlock : 0,
        }
    },
    methods: {
        Post: function(value) {
           this.viewBlock=value;
        }
    },
    mounted(){
        axios
        .get('content.php')
            .then((response) => {
                console.log(response.data);
                this.item = response.data;
            })
            .catch((error) => {
                console.log(error)
            });
    }
})
app.mount('#app')