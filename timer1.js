const finalTimes = process.argv.slice(2);

const timer = (timeSelection) => {                          
  setTimeout(() => {
    process.stdout.write('BEEP \n')
  }, timeSelection * 1000);

};

const timeDoer = (finalTimes) => {
  for (let i = 0; i < finalTimes.length; i++) {
    if (isNaN(finalTimes[i]) || finalTimes[i] < 0) {
      return
    } else {
      timer(finalTimes[i]);
    }
  }
};
timeDoer(finalTimes)


// previous attempts..that didnt work out//

// for (let i = 0; i < timeSelection; i++) {

  //   console.log(timeSelection, typeof timeSelection);

  //   if (i === timeSelection) {
  //     time = timeSelection

  //     console.log(timeSelection[i]); /// why are you NOTHING

  //      setTimeout(() => {
  //       process.stdout.write('BEEP')
  //     }, time * 1000)
  //   } 
  // }