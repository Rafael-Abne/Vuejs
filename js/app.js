const app = new Vue({
    el: '#app',
    data: {
        cont: 0
    },
    methods: {
       upConter: function () {
           app2.value = 555
       }
    }
    
})

const app2 = new Vue({
    el: '#app2',
    data: {
        value: ''
    }
    
    
})
