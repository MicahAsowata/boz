import { input, select } from "@inquirer/prompts";

const game = {};
game.name = await input({ message: "Enter the name of the game" });
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
game.users = [];

switch (choice) {
  case "n":
    console.log("Creating a new player");
    break;
  case "u":
    console.log("Updating a player score");
    break;
  case "d":
    console.log("removing a player");
    break;
  case "a":
    console.log("fetching all existing players");
    break;
  default:
    console.log(`You are viewing the ${game.name} leaderboard. Do something`);
    break;
}
// console.log(game);
// console.log(choice);
