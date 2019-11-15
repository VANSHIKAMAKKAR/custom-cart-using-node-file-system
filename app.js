var express=require('express')
var cors=require('cors')
var fs=require('fs')
var product=new Array()
var app=express()


app.use(express.json())
app.use(cors())
app.use(express.urlencoded({
	isextended: false
}))

if(fs.readFileSync('product.txt','utf-8')!="")
{
product=JSON.parse(fs.readFileSync('product.txt','utf-8'))
}
else
{
	var pro = new Array();
	product = pro;
}


app.get('/getproduct',function(req,res){
    res.send(product)
})


app.post('/add',function(req,res){
	console.log(req.body)
	var data=req.body
	product.push(data);
	fs.writeFile('product.txt',JSON.stringify(product),function(err){
		if(err)
		{
			console.log(err)
		}
		else
		{
			console.log("product data saved")
		}
	})
})


app.listen(3000,function(err){
	console.log("App running on port 3000")
})