
//acesss constructor
interface info1
{
    getInfo():void
}
interface info2 extends info1

{
    getName():void
}
class info3 implements info2

{
  constructor()
  {
    console.log("Called")
  }
  getInfo(){
    
        console.log("I am getInfo")
    }
  
    getName(){
    
        console.log("I am fine")
    }
    
}
class info4 extends info3
{
  constructor()
  {
    super()
    console.log("parent")
  }
}
let calledob=new info4()
calledob.getName()
