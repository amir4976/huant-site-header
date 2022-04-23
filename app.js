// name fanctions

// function fbn(a,b) {
//     var result;
//     a>b ? result=["firstfraction",a]: result=["socondfraction",b];
//     return result;
// }

// var fractionresult=fbn(9/20,20);
// console.log("  fraction  " +fractionresult[0]+ "      with a value    " +fractionresult[1]+"   is biggest  ");







// immediately invoked function
// var thebiggest=(function (a,b) {
//     var result;
//     a>b ? result=["a",b]: result=["b",b];
//     return result;
// })(321,322);
// console.log(thebiggest);



// var tom = new Date().getMonth();
// var month;
// switch (tom) {
//     case 0:
//         month= 'january'
//         break;
//     case 1:
//         month= 'february'
//         break;
//     case 2:
//         month= 'march'
//         break;
//     case 3:
//         month= 'april'
//         break;
//     case 4:
//         month= 'may'
//         break;
//     case 5:
//         month= 'june'
//         break;
//     case 6:
//         month= 'july'
//         break;
//     case 7:
//         month= 'august'
//         break;
//     case 8:
//         month= 'septamber'
//         break;
//     case 9:
//         month= 'october'
//         break;
//     case 10:
//         month= 'novamber'
//         break;
//     case 11:
//         month= 'december'
//         break;
//     case 12:
//         month= 'january'
//         break;
// var amir=document.write('hi'+day);
// console.log(tom);
// }





// console.log(month);
// switch (today) {
//     case 0:
//         day="sunday"
//         break;   
//     case 1:
//         day="یکشنبه";
//         break;
//     case 2:
//         day="دوشنبه";
//         break;
//     case 3:
//         day="سشنبه";
//         break;
//     case 4:
//         day="چارشنبه";
//         break;
// }


// var amir = {
//     firstname:"amir",
//     lastname:"ahmadi",
//     age:"18",
//     views:0,
//     updeteviews:function ()
//      {
//         return ++amir.views;
//     }
    
    
//     }
//     console.log(amir.views);
// amir.updeteviews();



//     console.log(amir.views);

function course(title,teacher,level,isActive,views,_updateviews) {
    this.title=title,
    this.teacher=teacher,
    this.level=level,
    this.isActive=isActive,
    this.views=views,
    this.updateviews=function () {
        return ++this.views;
    }
}

var course1=new course("java","mohammadi",1,true,0);
var course2=new course("python","mohammadi ali",2,true,110);
var course3=new course("C#","mohammadi ali kly",2,true,120);


console.log(course1);
console.log(course2);
console.log(course3);