const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr=[]
    for (var i = 0; i < expr.length; i+=10) {
        arr.push(expr.slice(i, i+10))
    }
    let result=[]
    for (let i = 0; i < arr.length; i++){
        let subarr=[]
        for (let j = 0; j <= arr[i].length; j+=2) {
            if(arr[i][j]+arr[i][j+1]=='10') {
                subarr.push('.')
            }else if(arr[i][j]+arr[i][j+1]=='11') {
                subarr.push('-')
            }
        }
        result.push(subarr)
    }
    
    return result.map(i=>MORSE_TABLE[i.join('')]||' ').join('')
}
console.log(decode('00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010'))


module.exports = {
    decode
}