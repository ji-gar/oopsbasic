class numbermethod
{
    constructor()
    {
        console.log("parent called")
    }
    
    data(a:number)
    {
        console.log("called parent"+a)
    }
}
class stringmethod extends numbermethod
{
    constructor()
    {
       
        console.log("child called")
        super()
    }
    data(a:string)
    {
    
        console.log(typeof a)
        super.data("dddd")
        console.log(a)
    }
}
const obj=new stringmethod()
obj.data(5)