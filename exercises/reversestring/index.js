// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reduce(
        (revr,char)=>char+revr,'')
}
module.exports = reverse;
//   let newstr="";
//     for(const x of str)
//     {
//         newstr=x+newstr
//     }
//     return newstr

// return str.split('').reverse().join('')
