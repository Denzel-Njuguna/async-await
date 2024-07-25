const readline = require('readline') ;

const service = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
const flavors  = ({
    fruits:['chocolate','vanilla','mango','plain'],
    toppings:['chocolate','sprinkles','peanuts'],
    holder:['cup','cone']
});

service.question((`enter the topping of your choice ${flavors.toppings}\n` ),async (topping)=>{
try{
    await order(topping);
}catch(error){
    console.log(error)
}finally{
    service.close()
}

})
const topping_choice = (topping)=>{
    return new Promise((resolve,reject)=>{
        const normalanswer = topping.trim().toLowerCase();
        setTimeout(()=>{
           if(flavors.toppings.includes(normalanswer)){            
            resolve(
                    console.log('your choice toppings is '+ normalanswer)
              ) 
        }else{
            reject(
                   console.log('you did not choose a valid option')
              )  
        }     
            },10000)
            console.log('process d')
    })
};

async function order (topping){
    console.log('process a');
    console.log('process b');
    console.log('process c');
    await topping_choice(topping);
    
}
    
