const words = ['non', 'banan', 'mashina', 'asal', 'olma', 'aziza', 'Gul'];

const withN = words.filter(word => word.toLowerCase().includes('n'));
const withoutN = words.filter(word => !word.toLowerCase().includes('n'));

console.log(withN, "'n' harfi ishtirok etgan so'zlar");
console.log(withoutN, "'n' harfi ishtirok etmagan so'zlar");