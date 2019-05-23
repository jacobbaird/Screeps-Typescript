function clearCreepMemory(){
  // Automatically delete memory of missing creeps
  for (const name in Memory.creeps) {
    if (!(name in Game.creeps)) {
      delete Memory.creeps[name];
    }
  }
}

function mainLoop(){
  //do stuff
  clearCreepMemory();
}

export const loop = mainLoop();
