/* Write a function kebabize(input) to convert a camel case input string into a kebab case.

The function only needs to take care of lower- and upper-case alphabets. Non-alphabetical characters (e.g. numbers, punctuation (_ - + ? )) can be ignored

Examples:
kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
*/

function kebabize(input) {
    // var newStr = input.replace(/([A-Z])/g, '-$1').toLowerCase();
    // return newStr;

    var array = [];
    for(var i = 0; i<input.length;i++){
      if(input.charAt(i) === input.charAt(i).toUpperCase()){
        array.push('-');
        array.push(input.charAt(i).toLowerCase());
      }else{
        array.push(input.charAt(i))
      }
    }
    return array.join('');
}

module.exports = kebabize