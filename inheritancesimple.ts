class info
{
  name:string="parent"
  constructor()
  {
    

  }

}
class infocollection extends info{
  name:string="child"
  constructor(name:string)
  {
    super()
    this.name=name
    // console.log("hello word")

  }
  getName()
  {
    console.log(this.name)
  }
}

const  infocollectionobject=new infocollection("hello")
infocollectionobject.name="acesss"
infocollectionobject.getName()