const app = Vue.createApp({
    data() {
        return {
            item:{},
viewBlock : 0,
        }
    },
    methods: {
        Post1: function() {
           this.viewBlock=1;
        },
        Post2:function() {
            this.viewBlock=2;
         },
         Post3:function() {
            this.viewBlock=3;
         },
         Post4:function() {
            this.viewBlock=4;
         },
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