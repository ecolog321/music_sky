export function secondsToMs(d: number) {
    const m: number = Math.floor((d % 3600) / 60);
    const s: number = Math.floor((d % 3600) % 60);

    const mDisplay = m > 10 ? m : "0" + m;
    const sDisplay = s > 10 ? s : "0" + s;
    return mDisplay + ":" + sDisplay;
  }