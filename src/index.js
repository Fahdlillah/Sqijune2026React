let userObj = {
    name: 'tunji',
    age: 30,
    gender: 'male'
}
const {name, age, gender} = userObj



fetch("https://fakestoreapi/products")

.then((res)=>{
    res.json()

    .then((data)=>{
        console.log(data);
        
    })
}).catch((error)=>{
    console.log(error.message);
    
})