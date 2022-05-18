const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/taxdb', { useNewUrlParser: true ,useUnifiedTopology: true });
//mongoose.connect('mongodb+srv://pk:pk@cluster0-yxuce.mongodb.net/onlineexamdb?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true });
//mongodb+srv://pk:<password>@cluster0-yxuce.mongodb.net/test?retryWrites=true&w=majority
//mongodb+srv://pk:<password>@cluster0-yxuce.mongodb.net/test?retryWrites=true&w=majority

const Schema = mongoose.Schema;
var NewUserSchema = new Schema({
    date : String,
    duedate : String,
    invoiceid: String ,
    reference: String  ,
    products: [],
    totalamount: Number,
    autototalamount:Number,
    additionaldetails:String ,
    count:Number,
    whose:String,
    customerid:String,
    customername:String,
    allocatedDetails:[],
    allocatedAmount:Number,
    allocated:Boolean
});
var CustomerInvoiceDraft = mongoose.model('customerinvoicedraft', NewUserSchema);                        //UserData is the model and NewBookData is the schema
module.exports = CustomerInvoiceDraft;

