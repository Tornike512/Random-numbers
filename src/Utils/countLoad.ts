let seconds: number = 0;
let milliseconds: number = 0;

const countSeconds = setInterval(() => {
  seconds++;
}, 1000);

const countMilliseconds = setInterval(() => {
  milliseconds++;
  if (milliseconds === 100) {
    milliseconds = 0;
  }
}, 10);

export const stopCounting = () => `${seconds}.${milliseconds}`;
