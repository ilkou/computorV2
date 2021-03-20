import * as readline from "readline";
import { calculate } from "./computorv2";

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const computerv2 = (): void => {
  rl.question("computorv2 > ", (input) => {
    if (input === "exit" || input === "e") {
      rl.close();
    } else {
      calculate(input);
      computerv2();
    }
  });
};
computerv2();
