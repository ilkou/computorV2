import { Lexer } from "../lexer";

export const calculate = (input: string) => {
  try {
    Lexer.lex(input);
  } catch (e) {
    console.error(e);
  }

  Lexer.printTokens();
};
