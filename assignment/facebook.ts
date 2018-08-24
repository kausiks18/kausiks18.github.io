class FacebookAbout
{
   

    constructor(public Name:string,public birthday:Date,private age:number,
    public school:string,public college:string,public city:string,private mobile:number,
   protected email: string, public working: boolean,public work:string, private familymembers:number,
public livesin:string,public quotes:string,public followed:number,public freinds:number )
{
    this.Name = Name;
    this.birthday = birthday;
    this.age = age;
    this.school = school;
    this.college = college;
    this.city = city;
    this.mobile = mobile;
    this.email = email;
    this.working = working;
    this.work = work;
    this.familymembers = familymembers;
    this.livesin = livesin;
    this.quotes = quotes;
    this.followed=followed;
    this.freinds=freinds;

}

 getname = ()=>
 {
     return this.Name;
 }
   getmobile = ()=>
   {
       return this.mobile;
   }
 getknowworking = ()=>
 {
     return this.working;
 }
 getage = ()=>
   {
       return this.age;
   }



setLivesin= (newLivesin:string)=>{
    this.livesin=newLivesin;
}
getLivesin= ()=>{
   return this.livesin;
}

setFollowed= (newFollowed:number)=>{
    this.followed=newFollowed;
}
getFollowed= ()=>{
   return this.followed;
}
setFreinds= (newFreinds:number)=>{
    this.freinds=newFreinds;
}
getFreinds= ()=>{
   return this.freinds;
}
 setname = (newname:string)=>
 {
     this.Name = newname;
 }

 setMobile = (newmobile:number)=>
 {
     this.mobile = newmobile;
 }
 getMobile = ()=>
 {
     return this.mobile;
 }
 getEmail = ()=>
 {
     return this.email;
 }
}

let fbabt = new FacebookAbout("Kausik Seal",new Date(1990,12,31),27,"Union Institution","Pondicherry University",
"Pondicherry",6778904567,"ks@gmail.com",true,"Software Engineer",7,"Kolkata","waiting for bullseye",59,863)

console.log(fbabt.getmobile());
console.log(fbabt.getname());
fbabt.setname("Sonai");
fbabt.setFreinds(890);
fbabt.setFollowed(45);
fbabt.setMobile(678903425);
fbabt.setLivesin("Bangalore");
console.log(fbabt.getFollowed());
console.log(fbabt.getage());
console.log(fbabt.getFreinds());
console.log(fbabt.getEmail());
console.log(fbabt.getknowworking());
console.log(fbabt.getLivesin());