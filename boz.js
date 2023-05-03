import { input, select } from "@inquirer/prompts";
console.log("Welcome to Boz");
const game = {};
const player = {};
game.name = await input({ message: "Enter the name of your game" });
game.players = [];
for (;;) {
  const choice = await select({
    message: "What do you want to do",
    choices: [
      {
        name: "create",
        value: "create",
        description: "Create a new player",
      },
      {
        name: "update",
        value: "update",
        description: "Update a current player",
      },
      {
        name: "delete",
        value: "delete",
        description: "Delete a player",
      },
    ],
  });
  switch (choice) {
    case "create":
      console.log("Creating a player");
      player.id = game.players.length + 1;
      player.name = await input({ message: "Enter player's name" });
      player.score = parseInt(
        await input({ message: `Enter ${player.name}'s score` })
      );
      game.players.push(player);
      break;
    case "update":
      console.log("Update a player");
      const playerToUpdateID = parseInt(
        await input({ message: "Enter player id" })
      );
      if (playerToUpdateID <= game.players.length) {
        game.players[playerToUpdateID - 1].score = parseInt(
          await input({ message: "Enter new score" })
        );
        console.log(game.players);
      } else {
        console.log("Player does not exist");
      }
      break;
    case "delete":
      console.log("Delete a player");
      const playerToDeleteID = parseInt(
        await input({ message: "Enter player id" })
      );
      if (playerToDeleteID <= game.players.length) {
        game.players.splice(playerToDeleteID - 1, playerToDeleteID + 1);
        console.log(game.players[playerToDeleteID]);
      } else {
        console.log("Player does not exist");
      }
      break;
    default:
      console.log(`You are viewing the ${game.name} leaderboard. Do something`);
      break;
  }
  console.log(game.players);
}
