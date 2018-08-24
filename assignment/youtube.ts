class Video{
    id:string;
    name:String;
    channel:string;
    like:number;
    dislike:number;
    description:string;
    publishDate:Date;
    comment:string[];
    subscription:number;
    views:number;
    tags:string

constructor(id:string,name:String,channel:string,like:number,dislike:number,description:string,publishDate:Date,comment:string[],tags:string,subscription:number,views:number,duration?:TimeRanges,shares?:number ){

this.id=id;
this.name=name;
this.channel=channel;
this.like=like;
this.dislike=dislike;
this.description=description;
this.publishDate=publishDate;
this.comment=comment;
this.tags=tags
this.subscription=subscription;
this. views= views;

}//end of constructor

getName= ()=>{
    return this.name;
}
getComment= ()=>{
    return this.comment;
}
getChannel= ()=>{
    return this.getChannel;
}
getLike= ()=>{
    return this.like;
}
getDislike= ()=>{
    return this.dislike;
}
getChannelName= ()=>{
    return this.channel;
}
getDescription= ()=>{
    return this.description;
}
getTags= ()=>{
    return this.tags;
}
setComment= (newcommnet:string)=>{
     this.comment.push(newcommnet);
}
setLike= (like:number)=>{
     this.like=like;
}
setDislike= (dislike:number)=>{
     this.dislike=dislike;
}

setChannelName= (newChannelName:string)=>{
   this.channel=(newChannelName);
}
setTags= (newTags:string)=>{
    this.tags=newTags;
 }
}

let objVideo =new Video("IJ6781256","Raozana Naam Shabana","Music Industry",78,89,"Music Industry",new Date(2018,11,17),["Nice Video"],"Music",35,200);

console.log(objVideo.getName());
console.log(objVideo.getComment());
console.log(objVideo.getLike());
console.log(objVideo.getLike());
console.log(objVideo.getChannelName());
console.log(objVideo.getTags());

objVideo.setComment("User has no choice");
objVideo.setComment("Mindblowing");


class Utube extends Video{
 
constructor(id:string,name:String,channel:string,like:number,dislike:number,description:string,publishDate:Date,comment:string[],tags:string,subscription:number,views:number,duration?:TimeRanges,shares?:number){
super(id,name,channel,like,dislike,description,publishDate,comment,tags,subscription, views);


}
getPublishDate= ()=>{
  let pubDate=`${this.publishDate.getFullYear()}/${this.publishDate.getMonth()}/${this.publishDate.getDate()}`;
// return  this.getPublishDate.getDate();
  return pubDate;
}
getViews= ()=>{
   return this.views;
    }

setViews= (newViews:number)=>{
this.views=newViews;
}

getSubscription= ()=>{
    return this.subscription;
     }
 
 setSubscription= (newSubscription:number)=>{
 this.subscription=newSubscription;
 }

}

let objUtube= new Utube("Igh789Rte","Harry Kitchen","Blog & travel",67,34,"cooking related",new Date(2017,7,17),["Thanks for sharing"],"harry|cooking|more",45,780);

console.log(objUtube.getPublishDate());
console.log(objUtube.getName());
objUtube.setViews(307);
objUtube.setSubscription(100);
console.log(objUtube.getViews());
console.log(objUtube.comment);
console.log(objUtube.getSubscription());
console.log(objUtube.getDescription());
