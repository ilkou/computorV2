export const isOperator = (c: string): boolean => {
  return /[+\-*\/\^%=(),]/.test(c);
};

export const isDigit = (c: string): boolean => {
  return /[0-9]/.test(c);
};

export const isWhiteSpace = (c: string): boolean => {
  return /\s/.test(c);
};

export const isIdentifier = (c: string): boolean => {
  return (
    typeof c === "string" && !isOperator(c) && !isDigit(c) && !isWhiteSpace(c)
  );
};
