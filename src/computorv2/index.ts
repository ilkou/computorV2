import { Lexer } from "../lexer";

export const calculate = (input: string) => {
  Lexer.lex(input);
  Lexer.printTokens();
};
