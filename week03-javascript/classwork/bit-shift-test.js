function solution(N) {
    var largest = 0;
    var shift = 0;
    var temp = N;
    for (var i = 1; i < 30; ++i) {
        var index = (temp & 1);
        console.log("temp: ", temp, "index: ", index)
        console.log("temp>>1: ", temp >> 1, "index<<29: ", (index << 29));

        temp = ((temp >> 1) | (index << 29));
        if (temp > largest) {
            largest = temp;
            shift = i;
        }
    }
    return shift;
}

function testIt() {
    var shift = solution(9736);

    console.log(shift);
}