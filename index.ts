#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.black.bgBlueBright("\n\t\t", "=".repeat(60)));
console.log(
  chalk.black.bgGreenBright("\n\t", "<".repeat(15)),
  chalk.black.bgRedBright("<=== WELLCOME TO ADVENTURE GAME PROJECT ===>"),
  chalk.black.bgGreenBright(">".repeat(15))
);
console.log(chalk.black.bgBlueBright("\n\t\t", "=".repeat(60)), "\n");


class Player {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
  fuelIncrease() {
    this.fuel = 100;
  }
}
class Opponent {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
}
let player = await inquirer.prompt({
  type: "input",
  name: "name",
  message: chalk.black.bgBlue("\n\t--Please Enter Your Name ==>"),
});

let opponent = await inquirer.prompt({
  type: "list",
  name: "select",
  message: chalk.black.bgBlue("\t--Select Your Opponent ==>"),
  choices: ["Skeleton", "Assasin", "Zoombie"],
});
// Gather Data :
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);

// Skeleton :
do {
  if (opponent.select == "Skeleton") {
    let ask = await inquirer.prompt({
      type: "list",
      name: "opt",
      message: chalk.black.bgMagenta("\n\t--Select your Option ==>"),
      choices: ["Attack", "Drink Portion", "Run For Your Life..."]
    });
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(
          "\n\t\t ==>",
          chalk.black.bgHex("#FF8800")(
            `${p1.name} fuel is ${chalk.red.bgWhite(p1.fuel)}`
          )
        );
        console.log(
          "\n\t\t ==>",
          chalk.black.bgRgb(
            123,
            45,
            67
          )(`${o1.name} fuel is ${chalk.red.bgWhite(o1.fuel)}`)
        );
        if (p1.fuel <= 0) {
          console.log(
            chalk.black.bgRed("\n\t\t ==> You Loose, Better Luck Next Time !")
          );
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(
          "\n\t\t ==>",
          chalk.black.bgHex("#FF8800")(
            `${o1.name} fuel is ${chalk.red.bgWhite(o1.fuel)}`
          )
        );
        console.log(
          "\n\t\t ==>",
          chalk.black.bgRgb(
            123,
            45,
            67
          )(`${p1.name} fuel is ${chalk.red.bgWhite(p1.fuel)}`)
        );
        if (o1.fuel <= 0) {
          console.log(chalk.black.bgGreen("\n\t\t\t *** You Win ***"));
          process.exit();
        }
      }
    }
    if (ask.opt == "Drink Portion") {
      p1.fuelIncrease();
      console.log(
        "\n\t\t",
        chalk.black.bgGreen(
          `\n\t\t"==> Your Drink Health Portion Your Fuel is ==> ${chalk.black.bgWhite(
            p1.fuel
          )}"`
        )
      );
    }
    if (ask.opt == "Run For Your Life...") {
      console.log(
        chalk.black.bgRed("\n\t\t ==> You Loose, Better Luck Next Time !")
      );
      process.exit();
    }
  }

  // Aassasin :
  if (opponent.select == "Assasin") {
    let ask = await inquirer.prompt({
      type: "list",
      name: "opt",
      message: chalk.black.bgMagenta("\n\t--Select your Option ==> "),
      choices: ["Attack", "Drink Portion", "Run For Your Life..."]
    });
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(
          "\n\t\t ==>",
          chalk.black.bgHex("#FF8800")(
            `${p1.name} fuel is ${chalk.red.bgWhite(p1.fuel)}`
          )
        );
        console.log(
          "\n\t\t ==>",
          chalk.black.bgRgb(
            123,
            45,
            67
          )(`${o1.name} fuel is ${chalk.red.bgWhite(o1.fuel)}`)
        );
        if (p1.fuel <= 0) {
          console.log(
            chalk.black.bgRed("\n\t\t ==> You Loose, Better Luck Next Time !")
          );
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(
          "\n\t\t ==>",
          chalk.black.bgRgb(
            123,
            45,
            67
          )(`${o1.name} fuel is ${chalk.red.bgWhite(o1.fuel)}`)
        );
        console.log(
          "\n\t\t ==>",
          chalk.black.bgHex("#FF8800")(
            `${p1.name} fuel is ${chalk.red.bgWhite(p1.fuel)}`
          )
        );
        if (o1.fuel <= 0) {
          console.log(chalk.black.bgGreen("\n\t\t\t *** You Win ***"));
          process.exit();
        }
      }
    }
    if (ask.opt == "Drink Portion") {
      p1.fuelIncrease();
      console.log(
        chalk.black.bgGreen(
          `\n\t\t" ==> Your Drink Health Portion Your Fuel is ${chalk.black.bgWhite(
            p1.fuel
          )}"`
        )
      );
    }
    if (ask.opt == "Run For Your Life...") {
      console.log(
        chalk.black.bgRed("\n\t\t ==> You Loose, Better Luck Next Time !")
      );
      process.exit();
    }
  }
  // Zoombie
  if (opponent.select == "Zoombie") {
    let ask = await inquirer.prompt({
      type: "list",
      name: "opt",
      message: chalk.black.bgMagenta("\n\t--Select your Option ==>"),
      choices: ["Attack", "Drink Portion", "Run For Your Life..."],
    });
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(
          "\n\t\t ==>",
          chalk.black.bgHex("#FF8800")(
            `${p1.name} fuel is ${chalk.red.bgWhite(p1.fuel)}`
          )
        );
        console.log(
          "\n\t\t ==>",
          chalk.black.bgRgb(
            123,
            45,
            67
          )(`${o1.name} fuel is ${chalk.red.bgWhite(o1.fuel)}`)
        );
        if (p1.fuel <= 0) {
          console.log(
            chalk.black.bgRed("\n\t\t ==> You Loose, Better Luck Next Time !")
          );
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(
          "\n\t ==>",
          chalk.black.bgRgb(
            123,
            45,
            67
          )(`${o1.name} fuel is ${chalk.red.bgWhite(o1.fuel)}`)
        );
        console.log(
          "\n\t ==>",
          chalk.black.bgHex("#FF8800")(
            `${p1.name} fuel is ${chalk.red.bgWhite(p1.fuel)}`
          )
        );
        if (o1.fuel <= 0) {
          console.log(chalk.black.bgGreen("\n\t\t\t *** You Win *** "));
          process.exit();
        }
      }
    }
    if (ask.opt == "Drink Portion") {
      p1.fuelIncrease();
      console.log(
        chalk.black.bgGreen(
          `\n\t\t" ==> Your Drink Health Portion Your Fuel is ${chalk.red.bgWhite(
            p1.fuel
          )}"`
        )
      );
    }
    if (ask.opt == "Run For Your Life...") {
      console.log(
        chalk.black.bgRed("\n\t\t ==> You Loose, Better Luck Next Time !")
      );
      process.exit();
    }
  }
} while (true);

// THE END :
