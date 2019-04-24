let convertToRupee = (dollor) => {
    if (typeof dollor === 'number') {
        return dollor * 68.65
    } else {
        throw Error('Enter amount in numbers')
    }
}
try {
    console.log(convertToRupee('fifty'));
} catch (error) {
    console.log(error);
}
