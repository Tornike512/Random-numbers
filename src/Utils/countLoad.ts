let seconds: number = 0;
export let milliseconds: number = 0;

export const countSeconds = setInterval(() => {
  seconds++;
}, 1000);

export const countMilliseconds = setInterval(() => {
  milliseconds++;
  if (milliseconds === 100) {
    milliseconds = 0;
  }
}, 10);

export const stopCounting = () => `${seconds}.${milliseconds}`;
