export class Adventure {
  
  ID:number = 0;
  author:string = "";
  categories:Array<string> = [];
  content:string = "";
  date:string = "";
  image:string = "";
  title:string = "";

  constructor(ID:number = 0, author:string = "", categories:Array<string> = [], content:string = "", date:string = "", image:string = "", title:string = "") {

    this.ID = ID;
    this.author = author;
    this.categories = categories;
    this.content = content;
    this.date = date;
    this.image = image;
    this.title = title;
  }
}