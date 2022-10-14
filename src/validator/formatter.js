function trim(str) {
    return str.trim()
}

function changeToUpperCase(uperstr){
   return uperstr.toUpperCase();
}

function changetoLowerCase(lowerstr){
    return lowerstr.toLowerCase();
}

module.exports.trim = trim("     Aman Prajpat     ")
module.exports.changetoUpperCase = changeToUpperCase("Aman Prajapat")
module.exports.changetoLowerCase = changetoLowerCase("Aman Prajapat")