interface multipleinheritance
{
    getName():any
}
interface info2 

{
    getName():any
}
class info3 implements multipleinheritance,info2
{
    getName(){
    
        console.log("I am fine")
    }
}
const objectofinfo3=new info3()
objectofinfo3.getName()
