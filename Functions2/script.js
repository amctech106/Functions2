//first Class Function -------------------------------------
///یہ وہ فنکشن ہوتاہے جس کو ویلیو کی طرح ٹریٹ کیا جائے ۔ 


/* function abc(val){
val();
}

abc(function(){
console.log("Aslaam o Alaikum");
}) */



//Higher Order Function--------------------------------------
//یہ وہ فنکشن ہے جو یا تو ایک فنکشن کو پیرامیٹر میں قبول کرے یا پھر ایک فنکشن کو ریٹرن کرے 


/* function abcd(){
    return function(){
console.log("Aslaam o Alaikum kia Hal he ");
    }
}

abcd()(); */


//---Pure vs Impure Function --------------------------------
//پیور فنکشن وہ فنکشن ہوتاہے جو باہر کی ویلیو کو نہ بدلے ۔


/* let a =12;

function abc(){
 console.log("hello")
}
 */


//امپیور فنکشن وہ فنکشن ہوتاہے جو باہر کی ویلیو کو بدل دے ۔ 


/* let a = 12; 

function abcd(){
    a++;
  console.log(a);
}
  
 abcd(); */



 //Closure -----------------------------------------------------
 //ایک ایسا فنکشن جو ریٹرن کرے ایک فنکشن اور ریٹرن ہونے والا فنکشن پرینٹ فنکشن کے کسی ویری ایبل کو استعمال کرے ۔ 


/*  function abc(){

let a =3;
    return function(){
        console.log(a);

    }
 }
 */


 //Lexical Scoping ---------------------------------------------
 //فنکشن کے اندر کئی فنکشن ہوں اور ہرایک میں ایک ویری ایبل ہو اور اس ویری ایبل کو صرف اسی فنکشن کے بلاک میں ایکسز کیا جا سکتا ہے جس کے اندر وہ ہے ۔ 

/*  function abc(){
    let a =2;
    function def(){
        let b = 3;
        function ghi(){
            let c =4;
        }
    }
 }

  */


 //Immedaitely Invoked Function Expression System ------------------
 //وہ فنکشن جو بغیر نام کے ہو اور بریکٹز میں ریپ ہو وہ فورا چل جاتاہے ۔
 
 
/*  (function(){
    console.log("kia Hal he");
 }) 

 (); */


// hoisting Between Function decleration & Funtion Expression  -------
// ہوایسٹنگ کا مطلب ہے کسی بھی فنکشن یا ویری ایبل کو بنانے سے پہلے چلانا یہ فنکشن ڈکلیریشن میں تو چل جاتاہے لیکن ایکسپریشن میں نہیں چلتا ۔ 


/* abc();
function abc(){
    console.log("kese ho")
} 
یہ چل جائے گا     
*/



/* 
abc();
let abc = function (){
    console.log("kese ho")
}
یہ ارر دے گا 
 */





