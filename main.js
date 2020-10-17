Vue.use(window.vuelidate.default)
const { required, minLength ,numeric ,between, helpers } = window.validators
console.log(window.vuelidate.default)
Vue.config.devtools= true;

const phone = helpers.regex('phone', /^[0-9]{10}$/)

let app = new Vue({
  el: "#app",
  data: {
      name: '',
      secondName: '',
      thirdName:'',
      birthDay: Date,
      phoneNumber:'',
      gender:'',
      clientGroup:[],
      clientGroupOptions:['VIP','Проблемные','ОМС'],
      doctor:'',
      doctorList:['','Иванов','Захаров','Чернышева'],
      sendSMS:true,
      index:'',
      country:'',
      region:'',
      city:'',
      street:'',
      home:'',
      documentTypes: ['Паспорт', 'Свидетельство о рождении', 'Вод. удостоверение'],
      documentType :'',
      documentSeries:'',
      documentNumber:'',
      documentGivedBy:'',
      documentGivedDate:Date,
      submitStatus: null,
  },
  validations: {
    name: {
    	required,
    },
    secondName: {
        required,
    },
    birthDay : {
        required,
    },
    phoneNumber : {
        required,
        phone,
    },
    clientGroup : {
        required,
    },
    city :{
        required,
    },
    documentType :{
        required
    },
    documentGivedDate : {
        required
    }
  },
  methods: {
  	status(validation) {
    	return {
            dirty: validation.$dirty,
            error: validation.$error,
        }
    },
    submit() {
        console.log(this.validations)
        this.$v.$touch()
        console.log(this.$v.$invalid)
        if(!this.$v.$invalid) {
            this.submitStatus = "submit"
        }
        else this.submitStatus = "invalid"
        console.log(this.submitStatus)
    }
  }
})
