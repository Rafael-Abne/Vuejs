const app = new Vue({
    el: '#app',
    data: {
        text: 'Treinaweb'
    },
    filters: {
       Upper: function (text) {
           return text.toUpperCase();
       },
       reverse: function (text) {
           return text.split('').reverse().join('');
       }

    }
    
})

