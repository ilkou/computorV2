import { isOperator, isWhiteSpace, isDigit, isIdentifier } from "../utils";

export class Lexer {
  private static tokens: (string | number)[] = [];
  private static i: number = 0;
  private static c: string;

  public static pushToken(token: string | number): (string | number)[] {
    Lexer.tokens.push(token);
    return Lexer.tokens;
  }

  public static printTokens(): void {
    console.log(Lexer.tokens);
  }

  public static lex(input: string): void {
    const advance = (): string => (Lexer.c = input[++Lexer.i]);

    while (Lexer.i < input.length) {
      Lexer.c = input[Lexer.i];
      if (isWhiteSpace(Lexer.c)) advance();
      else if (isOperator(Lexer.c)) {
        Lexer.pushToken(Lexer.c);
        advance();
      } else if (isDigit(Lexer.c)) {
        let num: string = Lexer.c;
        while (isDigit(advance())) num += Lexer.c;
        if (Lexer.c === ".") {
          do num += Lexer.c;
          while (isDigit(advance()));
        }
        let numFloat = parseFloat(num);
        if (!isFinite(numFloat))
          throw "Number is too large or too small for a 64-bit double.";
        Lexer.pushToken(numFloat);
      } else if (isIdentifier(Lexer.c)) {
        let idn = Lexer.c;
        while (isIdentifier(advance())) idn += Lexer.c;
        Lexer.pushToken(idn);
      }
    }
  }
}
