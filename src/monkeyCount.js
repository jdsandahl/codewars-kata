const monkeyCount = numMonkeys => {
    array = []
    for (let i = 0; i < numMonkeys; i++){
        let monkey = 1 + i;
        array.push(monkey);
    }
    return array;
};

module.exports = monkeyCount;