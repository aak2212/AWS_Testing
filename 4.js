function person(name) {

    function greeting() {
        console.log("hello " + name + "!");
    }

    function setAge(age) {
        this.age = age;
    }

    function getName() {
        return name;
    }

    function getAge() {
        return this.age;
    }

    return {greeting, setAge, getName, getAge};
}

var hemant = new person("Hemant Kumar");
hemant.greeting();
hemant.setAge(26);
console.log(hemant.getName());
console.log(hemant.getAge());

// function $(args) {
//     if(args) {
//         // console.log(args);
//         this.objects = args;
//     }
//     this.setScale = function(s) {
//         this.scale = s;
//         return this;
//     }

//     this.applyScale = function() {
//         this.objects = this.objects.map( x => (this.scale*x));
//         return this;
//     }
// }

// $.prototype.toString = function() {
//     return "$(" + JSON.stringify(this.objects)+")";
// }

// console.log((new $([1, 2, 3, 4, 5])).setScale(5).applyScale().toString());
// console.log((new $({old:1, new:2})).toString());
// console.log((new $(5.12)).toString());
