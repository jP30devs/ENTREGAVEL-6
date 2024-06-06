function arabicToRoman(number) {
    if (number < 1 || number > 3999) {
        throw new Error("O número deve estar entre 1 e 3999");
    }

    const romanNumerals = [
        ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400],
        ['C', 100], ['XC', 90], ['L', 50], ['XL', 40],
        ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]
    ];

    let romanString = '';
    for (const [numeral, value] of romanNumerals) {
        while (number >= value) {
            romanString += numeral;
            number -= value;
        }
    }

    return romanString;
}

// USO
const arabicNumber = parseInt(prompt("8"));
try {
    const romanNumeral = arabicToRoman(arabicNumber);
    console.log(`O número ${arabicNumber} em algarismos romanos é ${romanNumeral}`);
} catch (error) {
    console.error(error.message);
}