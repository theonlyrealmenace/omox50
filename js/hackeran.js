function ok(n) {



     
    let array3=[]
    let array5=[]
    
        for (let index = 3; index <= 200000; index+3) {
          array3.push(index)
            
        }
    
    
        for (let index = 5; index <= 200000; index+5) {
            array5.push(index)
              
          }
    for (let i = 1; i == n; i++) {
        
   
          
    let multiple3=array3.includes(i)
    let  multiple5=array5.includes(i)
    
    if(multiple3==true & multiple5===true) {
        console.log('fizzBuzz');
    }
        
    if (multiple3 &!multiple5) {
        console.log('fizz');
    }
    
    if (multiple5 &!multiple3) {
        console.log('buzz');
    }
    
    if (multiple3==false &multiple5==false) {
        console.log(i);
    }
    }
    
    
}