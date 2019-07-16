const cards = [
  {
    name: 'Bitcoin',
    desc: 'A Peer-to-Peer Electronic Cash System',
    fact: 'Named in homage to bitcoins creator, a satoshi is the smallest amount within bitcoin representing 0.00000001 bitcoins',
    img_url: 'https://en.wikipedia.org/wiki/Bitcoin#/media/File:Bitcoin_logo.svg',
  },
  {
    name: 'Ethereum',
    desc: 'A blockchain-based distributed computing platform and operating system',
    fact: 'Ethereums block time is 14 to 15 seconds, compared with 10 minutes for bitcoin.',
    img_url: 'https://en.wikipedia.org/wiki/Ethereum#/media/File:Ethereum_logo_2014.svg',
  },
];

exports.seed = knex => knex('cards').del()
  .then(() => knex('cards').insert(cards));
