let phiN;
let pModulus = 0;
let publicParam;
let privateParam;


function gatedPrime(n){
    // a shortcut i designed to check for prime numbers, you are free to modify it to your need
    if (n == 2 || n == 3 ||n == 5 ){
       
    return true
    }
    else if(n % 2 == 0 || n % 3 == 0 || n % 5 == 0){
    return false
    } 
    else if (n % 6 == 1 || n % 6 == 5){
        return true
    }
}


function generatePrimeModulus(p1, p2){
    if (gatedPrime(p1) && gatedPrime(p2) == true){
        //console.log("They are both prime numbers"
      
        if (p1 !== p2 && p2 > p1){
            const primeModulus = p1 * p2;
            pModulus = primeModulus
            // calculating phi of N
            phiN = ((arguments[0]-1) * (arguments[1] - 1))
        }
        else{console.log("Can't use same prime numbers or first args greater than second args")}
        
    }else{
        console.log("Factors are not prime numbers");
    }

}
function generateKeys(e, _phiN){
    let d = modInverse(e, _phiN)
    publicParam = e;
    privateParam = d;


    return d;
}
// recommended value for e is 3
function modInverse(e,phi){
        let m = phi;
        let tempVar;
        let quotient;
        // check for tempVar
        n = m;
        //let quotient;
        let x = 0;
        let y = 1;
        if(phi == 1){
            return 0;
        }
        while (e > 1){
            quotient = Math.floor(e / phi);
            tempVar = phi;
          
            phi = e % phi;
            e = tempVar;
            tempVar = x;
            x = y - quotient * x;
            y = tempVar;}
        if( y < 0){
            y += m;
        }   
        return y
    
    }
    
//I designed this function to evaluate if a number is contains, works but for only positive numbers, i.e numbers > 0; 
// function isDecimal(n){
    // if (n % Math.trunc(n) > 0 ){
        // return true
    // }
    // else{
        // return false
    // }
// }
function encrypt(message){
    // to encrypt using RSA:
    // cipher text c = E(pk,m)
    //c = m^e mod primeModulus
   
    const cipher = (message ^ publicParam) % pModulus
    console.log(message, publicParam, pModulus, cipher)
   console.log((50^3) % 55)
    return cipher
}

function decrypt(cipher){
    const message =  (cipher ^ privateParam) % pModulus
    console.log(cipher, privateParam, pModulus, message)
    return message
}









































