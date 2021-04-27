function translate (string) {
    string = string.toLowerCase();

    let vowels = ["a", "e", "i", "o", "u"]

    if (vowels.indexOf(string[0]) > -1) { 
        return string + "way";
    } else {
        
    }
    
}
 
module.exports.translate = translate;