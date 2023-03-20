class A{
    //data members
    getInfo()
    {
        console.log("hello")
    }
}
interface interTest{
    getName():any
}
class B implements  A{
    getInfos()
    {
        console.log("child is called")
    }
}
let data=new B()
data.getInfo()