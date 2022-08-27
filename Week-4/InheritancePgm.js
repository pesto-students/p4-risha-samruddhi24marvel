var Person = function(name) {
    this.name = name;
    
};

Person.prototype.initialize=function()
{    console.log(this.name +"is now teaching1");
};

var Teacher = function(name,sub){
    Person.call(this,name);
    this.sub=sub;
};
Object.setPrototypeOf(Teacher.prototype,Person.prototype);

Teacher.prototype.initializeName = function(){
console.log(this.name + " is now teaching "+this.sub);
}

const a= new Teacher("Samantha","Maths");

a.initializeName();
