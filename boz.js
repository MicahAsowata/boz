import { input, select } from "@inquirer/prompts";
const game = {};
const player = {};
game.name = await input({ message: "Enter the name of the game" });
game.players = [];
for (;;) {
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
    ],
  });
  switch (choice) {
    case "n":
      console.log("Creating a new player");
      player.id = game.players.length + 1;
      player.name = await input({ message: "What is the player's name" });
      player.score = parseInt(
        await input({ message: `What did ${player.name} score` })
      );
      game.players.push(player);
      break;
    case "u":
      console.log("Updating a player score");
      const playerId = parseInt(await input({ message: "Enter player id" }));
      if (playerId <= game.players.length) {
        game.players[playerId - 1].score = parseInt(
          await input({ message: "Enter new score" })
        );
        console.log(game.players);
      } else {
        console.log("That player does not exist");
      }
      break;
    case "d":
      console.log("removing a player");
      const playerIndex = parseInt(await input({ message: "Enter player id" }));
      if (playerIndex <= game.players.length) {
        game.players.splice(playerIndex - 1, player + 1);
        console.log(game.players[playerIndex]);
      } else {
        console.log("That player does not exist");
      }
      break;
    default:
      console.log(`You are viewing the ${game.name} leaderboard. Do something`);
      break;
  }
  console.log(game.players);
}
