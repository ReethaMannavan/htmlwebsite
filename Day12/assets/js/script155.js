// 155. Remove a specific object from an array by property. 




let a = [{ id: 1, name: 'Daryl' },
{ id: 2, name: 'Neha' },
{ id: 3, name: 'Charu' }
];


let rem = a.findIndex(a => a.id === 2);
if (rem !== -1) {
    a.splice(rem, 1);
}
console.log(a);
