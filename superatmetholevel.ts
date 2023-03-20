class method1
{
    getDetails()
    {
        console.log("This is method1");
    }
}
class method2 extends method1
{
    getDetails(){
        super.getDetails();
        console.log("This is method2");
    }
}
class method3 extends method2
{
    getDetails(){
        super.getDetails();
        console.log("This is method3")
        
    }
}

let obob=new method3();
obob.getDetails();