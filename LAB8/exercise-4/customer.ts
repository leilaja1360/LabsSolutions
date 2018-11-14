export class Customer{

  private firstName:String;
  private lastName:String;
  private age:number;

    constructor(fname:String,lname:String,age:number){
        this.firstName=fname;
        this.lastName=lname;
        this.age=age;
    }


    public greeter(){
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }

    public getAge(){
        console.log(this.age);
    }
}
