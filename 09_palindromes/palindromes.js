const palindromes = function (str) {
    let newstr = str.toLowerCase();
    newstr = newstr.split("");
    newstr = newstr.filter((char) => {
        if((char >= 'a' && char <='z') || (char >= '0' && char <= '9')){
            return true;
        }
        return false;
    });

    const reversedStr = newstr.map((item) => (item)).reverse();
    return reversedStr.join('') === newstr.join('');
};


// Do not edit below this line
module.exports = palindromes;



