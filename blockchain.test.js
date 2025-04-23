const Blockchain = require("./blockchain");
const Block = require("./block");

describe('Blockchain', () => {
  let blch, blch2;

  beforeEach(() => { 
    blch = new Blockchain();
    blch2 = new Blockchain();
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

  it('validates a valid chain', () => {
    blch2.addBlock('eiad');
    blch2.addBlock('eiad2');
    expect(blch.isValidChain(blch2.chain)).toBe(true);
  }
  );

  it('validates a chain with a corrupt genesis block', () => {
    blch2.chain[0].data = 'zongo data';
    expect(blch.isValidChain(blch2.chain)).toBe(false);
  }
  );

  it('invalidates a corrupt chain', () => {
    blch2.addBlock('eiad');
    blch2.chain[1].data = 'zongo data';
    expect(blch.isValidChain(blch2.chain)).toBe(false);
  }
  );
}
);