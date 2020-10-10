
var app = new Vue({
    el: '#app',
    data: {
        menu_items: [
            {name:"Тендеры",sub:false},
            {name:"База подрядчиков",sub:false},
            {name:"Другие сервисы",sub:true},
        ],
        input:"",
        products:["мебель","ноутбук","пк","монитор","принтер","автомобиль","азбука","мед"],
        suggestions:[],
    },
    methods:{
        OnInput(){
            if(this.input.length>0)
                this.suggestions = this.products.filter(input => {return input.toLowerCase().startsWith(this.input.toLowerCase())});
            else this.suggestions=[];
        },
        ClickOutsideInput() {
            this.suggestions=[];
        },
        SetInput(input) {
            this.input = input;
            this.suggestions =[];
        },
    },
    mounted() {
        document.addEventListener('click',this.ClickOutsideInput)
    },
    destroyed() {
        document.removeEventListener('click',this.ClickOutsideInput)
    }
    
})