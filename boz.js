import { input, select } from "@inquirer/prompts";

const adminUser = {};
adminUser.name = await input({ message: "What is your name?" });
const choice = await select({
  message: "What do you want to do",
  choices: [
    {
      name: "n",
      value: "n",
      description: "add a new player to the leader board",
    },
    {
      name: "u",
      value: "u",
      description: "update the score of a current player",
    },
    {
      name: "d",
      value: "d",
      description: "remove a player from the leader board",
    },
    {
      name: "a",
      value: "a",
      description: "see all players",
    },
  ],
});
console.log(adminUser);
console.log(choice);
