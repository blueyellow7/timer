const argv = process.argv;
let timesArray = argv.slice(2);

for (const time of timesArray) {
  if (time > 0 && !NaN) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time * 1000);
  } else {
    continue;
  }
};
