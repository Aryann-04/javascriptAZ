// class brand {
//     constructor () {
//         this.name =""
//     }

//     greet () {
//         console.log("This is brand");
        
//     }
// }


// class USPA extends brand {
//     USPAGreet () {
//         console.log("This is USPA");
        
//     }
// }

// let obj = new brand ()

// obj.greet()
// obj.brandgreet()







// class car {
//     carspeak () {
//         console.log("This is Cars");
//     }
// }

// class BMW extends car {
//     BMWspeak (){
//         console.log("This is BMW");
//     }
// }

// class AMG extends BMW {
//     AMGspeak (){
//         console.log("This is AMG");
        
//     }

// }   

// let obj = new AMG();

// obj.carspeak ();
// obj.BMWspeak ();
// obj.AMGspeak ();





// class parent {
//     greet () {
//         console.log("I am Parent");
        
//     }
// }

// class child_1 extends parent {
//     childgreet (){
//         console.log("I'm the child one");
        
//     }
// }


// class child_2 extends parent {
//     childgreet (){
//         console.log("I'm the child Two");
        
//     }
// }

// let childone = new child_1();
// let childtwo = new child_2();

// childone.greet();
// childone.childgreet();
// childtwo.greet();
// childtwo.childgreet();





class watchbrand {
        watchbrandspeak () {
            console.log("This is watch brands");
        }
    }
    
    class TommyHilfiger extends watchbrand {
        TommyHilfigerspeak (){
            console.log("This is Tommy Hilfiger");
        }
    }
    
    class Armani extends TommyHilfiger {
        Armanispeak (){
            console.log("This is Armani");
            
        }
    
    }   
    
    let obj = new Armani();
    
    obj.watchbrandspeak ();
    obj.TommyHilfigerspeak ();
    obj.Armanispeak ();




    
// polymorphism

// class IncomeTax {
//     speak() {
//       console.log("The is income Tax slab.");
//     }
//   }
  
//   class zeortofourlakh extends IncomeTax {
//     speak() {
//       console.log("0 To 4 lakh= NIL.");
//     }
//   }
  
//   class fourtoeight extends IncomeTax {
//     speak() {
//       console.log("4 To 8 lakh= 5%.");
//     }
//   }
  
//   class Eighttotwelve extends IncomeTax {
//     speak() {
//       console.log("8 To 12 lakh= 10%.");
//     }
//   }

//   class Twelvetosixteen extends IncomeTax {
//     speak() {
//       console.log("12 To 16 lakh= 15%.");
//     }
//   }
 

//   class sixteentotwenty extends IncomeTax {
//     speak() {
//       console.log("16 To 20 lakh= 20%.");
//     }
//   }
 

//   class tewntrytotwentyfour extends IncomeTax {
//     speak() {
//       console.log("20 To 24 lakh= 25%.");
//     }
//   }
 

//   class Above24lakh extends IncomeTax {
//     speak() {
//       console.log("Above 24 lakh= 30%.");
//     }
//   }
 
  
  
//   const IncomeTaxs = [new zeortofourlakh(), new fourtoeight(), new Eighttotwelve(), new Twelvetosixteen(), new sixteentotwenty(),new tewntrytotwentyfour(),new Above24lakh()];
  
//   for (const IncomeTax of IncomeTaxs) {
//     IncomeTax.speak(); 
//   }