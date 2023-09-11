// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
     const len= str.length;
     let newstr="";
     for(i=len;i>=0;i--)
     {
        newstr= newstr+str[i]
     }
     console.log(newstr)
     return newstr
}

module.exports = reverse;
