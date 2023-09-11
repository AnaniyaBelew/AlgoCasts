// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) 
{
    let dict={};
    let max=0;
    let maxchar='';
    for(let char of str)
    {
        dict[char]=dict[char]+1 || 1

    }
   for(let char in dict)
   {
    if(dict[char]>max)
    {
        max=dict[char];
        maxchar=char;
    }
   }
   return maxchar
}

module.exports = maxChar;
