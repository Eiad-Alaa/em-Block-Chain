const Blockchain = require("./blockchain");
const Block = require("./block");

describe('Blockchain', () => {
  let blch;

  beforeEach(() => { 
    blch = new Blockchain();
  }
  );

  it('starts with genesis block', () => {
    expect(blch.chain[0]).toEqual(Block.genesis());
  }
  );
  it('adds a new block', () => {
    const data = 'eiad';
    blch.addBlock(data);
    expect(blch.chain[blch.chain.length - 1].data).toEqual(data);
  }
  );
}
);