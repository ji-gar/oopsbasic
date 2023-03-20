class A{
    getInfo()
    {
        console.log("hello")
    }
    getNumber()
    {
        console.log("number")
    }

}
interface interTest{
    getName():any
}
class B implements interTest extends A{
   
}
let b=new B()
b.getNumber()