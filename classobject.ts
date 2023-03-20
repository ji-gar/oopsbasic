class data
{
    name=""
    constructor()
    {
       console.log("hello")
    }
    

}
class child extends data
{     
    id=""
    data=""
    constructor()
    {
        super()
    }
    
    getData()
    {
        console.log(`the  ${this.id} ${this.name},${this.data}`)
    }
}
const ob=new child()

 ob.getData()
