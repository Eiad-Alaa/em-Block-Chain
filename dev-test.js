const Block = require("./block");

const eiadBlock = Block.mineBlock(Block.genesis(), "eiad");

console.log(eiadBlock.toString());