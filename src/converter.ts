// Create Phonetic Alphabet Array
const phon: { [key: string]: string } = {
    'A': 'Alpha',   'B': 'Bravo',    'C': 'Charlie',
    'D': 'Delta',   'E': 'Echo',     'F': 'Foxtrot',
    'G': 'Golf',    'H': 'Hotel',    'I': 'India',
    'J': 'Juliett', 'K': 'Kilo',     'L': 'Lima',
    'M': 'Mike',    'N': 'November', 'O': 'Oscar',
    'P': 'Papa',    'Q': 'Quebec',   'R': 'Romeo',
    'S': 'Sierra',  'T': 'Tango',    'U': 'Uniform',
    'V': 'Victor',  'W': 'Whiskey',  'X': 'X-ray',
    'Y': 'Yankee',  'Z': 'Zulu',
    '0': 'Zero',    '1': 'One',      '2': 'Two',
    '3': 'Three',   '4': 'Four',     '5': 'Five',
    '6': 'Six',     '7': 'Seven',    '8': 'Eight',
    '9': 'Nine', ' ': 'space'
};

// Export Function to convert to Phonetic Alphabet
// (input: string): string specifies the parameter and return type
export function convertToPhonetic(text: string): string {
    // Convert text to uppercase to match Phonetic Alphabet Array Keys
    return text.toUpperCase()
    // Split the word into individual letters
    .split('')
    // take each letter that was split and map it onto the phon array using the uppercase letter as the key and grab the corresponding string
    // If the letter does not match a key in the array, the function returns the letter
    .map(letter => phon[letter] || letter)
    // Puts the array back together in string format with spaces in between each word
    .join(' ');
    
}
