let input = `addx 1
addx 4
addx 1
noop
addx 4
addx 3
addx -2
addx 5
addx -1
noop
addx 3
noop
addx 7
addx -1
addx 1
noop
addx 6
addx -1
addx 5
noop
noop
noop
addx -37
addx 7
noop
noop
noop
addx 5
noop
noop
noop
addx 9
addx -8
addx 2
addx 5
addx 2
addx 5
noop
noop
addx -2
noop
addx 3
addx 2
noop
addx 3
addx 2
noop
addx 3
addx -36
noop
addx 26
addx -21
noop
noop
noop
addx 3
addx 5
addx 2
addx -4
noop
addx 9
addx 5
noop
noop
noop
addx -6
addx 7
addx 2
noop
addx 3
addx 2
addx 5
addx -39
addx 34
addx 5
addx -35
noop
addx 26
addx -21
addx 5
addx 2
addx 2
noop
addx 3
addx 12
addx -7
noop
noop
noop
noop
noop
addx 5
addx 2
addx 3
noop
noop
noop
noop
addx -37
addx 21
addx -14
addx 16
addx -11
noop
addx -2
addx 3
addx 2
addx 5
addx 2
addx -15
addx 6
addx 12
addx -2
addx 9
addx -6
addx 7
addx 2
noop
noop
noop
addx -33
addx 1
noop
addx 2
addx 13
addx 15
addx -21
addx 21
addx -15
noop
noop
addx 4
addx 1
noop
addx 4
addx 8
addx 6
addx -11
addx 5
addx 2
addx -35
addx -1
noop
noop`;

let inputSplit = input.split(/\r?\n/).map(e => e.split(' '));
let cycle = 0;
let x = 1;
let log = [];

for (let command of inputSplit) {
    let obj = {};
    let sameObj = () => {
        cycle++
        obj.cycle = cycle;
        obj.during = x;
        obj.after = x;
        log.push(obj);
    }
    if (command[0] === 'noop') {
        sameObj();
    } else {
        sameObj();
        cycle++;
        let newObj = JSON.parse(JSON.stringify(obj));
        newObj.cycle = cycle;
        newObj.during = x;
        x += parseInt(command[1]);
        newObj.after = x;
        log.push(newObj);
    }
}

console.log(log.filter(e => (e.cycle+20)/40 === Math.round((e.cycle+20)/40)).map(e => e.cycle * e.during).reduce((a,b) => a+b,0))