function addtocart(isaddded){
    return new Promise((resolve,reject)=>{
        if(isaddded)
        {
            resolve("sucessful")
        }
        else{
            reject("failed to add product inside the cart")
        }
     } )
}
function checkpayment(iscartadded)
{
    return new Promise((resolve,reject)=>{
        if(iscartadded)
        {
            resolve("sucessful payment done")
        }
     } )
}
function checkdelivery(ispaymentdone)
{
    return new Promise((resolve,reject)=>{
        if(ispaymentdone)
        {
            resolve(" sucessful delivery done")
        }
        else{
            reject("unsucessful delivery")
        }
     } )
}
async function data()
{
    try{
        const add=await addtocart(true)
        console.log(add)
        const payment=await checkpayment(false)
        console.log(payment)
        //below promise does not execute because above promise is not resolved
        const delivery=await checkdelivery(true)
        console.log(delivery)
    }
    catch(error)
    {
        console.log(error)
    }
}
data()