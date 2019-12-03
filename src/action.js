export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const MULTIPLICATION = "MULTIPLICATION";
export const DIVISION = "DIVISION";
export const RESET = "RESET";

export function increment() {
  return { type: INCREMENT };
}

export const decrement = () => ({ type: DECREMENT });

export const multiplication = () => ({ type: MULTIPLICATION });

export const division = () => ({ type: DIVISION });

export const reset = () => ({ type: RESET });
