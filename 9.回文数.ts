var isPalindrome = function(x) {
    let temp = String(x)
    const n = Math.floor(temp.length/2)
    for(let i = 0; i < n; i++){
        if(temp[i] != temp[temp.length - i - 1]) return false
    }
    return true
};
