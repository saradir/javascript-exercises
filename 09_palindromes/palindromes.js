const palindromes = function (str) {
    str = str.toLowerCase();
    let arr = str.split("");
    arr = arr.filter((char) => {
        if((char >= 'a' && char <='z') || (char >= '0' && char <= '9')){
            return true;
        }
        return false;
    });
    arr = arr.reverse().join("");
    return arr === str;
};

// Do not edit below this line
module.exports = palindromes;



