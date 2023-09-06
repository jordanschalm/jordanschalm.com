import Moment from 'moment'

const DATE_F = 'YYYY-MM-DD'
const MONTH_F = 'YYYY-MM'

export default {
  writing: [
    {
      name: 'Upgrading Flow\'s Consensus Follower',
      emoji: '🧲',
      highlight: false,
      url: 'https://flow.com/engineering-blogs/upgrading-flows-consensus-follower-to-boost-attack-resilience-and-processing-speed',
      date: Moment('2023-05-30', MONTH_F),
      short: `An article about improving resilience and laying the foundation for extremely efficient light clients.`,
      long: `
Upgrading Flow's consensus algorithm to Jolteon enabled several improvements to the Consensus Follower.
This article outlines how these changes improve attack resilience and lay the foundation for extremely efficient light clients.
`
    },
    {
      name: 'Jolteon: Advancing Flow\'s Consensus',
      emoji: '⚡️',
      highlight: true,
      url: 'https://flow.com/engineering-blogs/jolteon-advancing-flows-consensus-algorithm',
      date: Moment('2023-04-14', MONTH_F),
      short: `An article for Flow's engineering blog about upgrading our consensus algorithm to Jolteon.`,
      long: `
Alongside Flow's consensus team, I spent nearly a year researching, designing, and implementing an upgrade to Flow's core consensus algorithm.
The upgrade decreased finality time by about 30% and enabled automated recovery from DOS attacks, networking outages, and partitions. 
In addition to a summary of technical changes, my goal with this article is to provide a high-level intuition for how and why the HotStuff family of consensus algorithms work.`
    },
    {
      name: 'Designing Dapper',
      url: 'https://medium.com/dapperlabs/designing-dapper-48c50fcfb063',
      emoji: '📖',
      date: Moment('2019-10-01', DATE_F,),
      short: `An article describing the design and security architecture of [Dapper Wallet](https://meetdapper.io).`,
      long: `
_Designing Dapper_ is an article I wrote describing the design decisions
that enable many of [Dapper's](https://meetdapper.io) features while improving upon the security of
existing wallets.`
    },
    {
      name: 'ERC998',
      url: 'https://eips.ethereum.org/EIPS/eip-998',
      emoji: '🎩',
      date: Moment ('2018-07', MONTH_F),
      short: 'A standards proposal I co-authored for composable NFTs on Ethereum.',
      long: `
After releasing CryptoKitties, we thought it might be neat if you could put a hat on your cat.
After researching different approaches and discussing with other teams, I co-authored ERC998 as a standard for NFTs owning other NFTs.
ERC998 is used in production by a few projects, but it never really caught on as a broadly used standard.`
    },
  ],
  presentations: [
    {
      name: 'Building a Better Interface',
      url: 'https://www.youtube.com/watch?v=daRmJrqfHv8',
      emoji: '🏙',
      date: Moment('2018-05-18', DATE_F),
      short: `A presentation I gave at ETHNewYork 2018 about how to improve the user experience in decentralized apps.`,
      long: `
ETHNewYork is a Ethereum hackathon in Brooklyn, NYC. I presented
a tech talk about the open source smart contract architecture underlying
[Dapper](http://www.meetdapper.io). I discussed the authorization system, which enables multi-device
2FA and arbitrary on-chain or off-chain transaction validation, as well as
the recovery system, which enables regaining access to Dapper in the case
that all devices are lost or compromised.`
    },
    {
      name: 'Cat Ownership in the 21st Century',
      url: 'https://www.youtube.com/watch?v=29W67cSPnRc',
      emoji: '📽',
      date: Moment('2018-03-03', DATE_F),
      short: `A presentation I gave at TEDxUBC 2018 about the story of CryptoKitties.`,
      long: `
TEDxUBC is an independently organized TED event. 
My talk, titled _Cat Ownership in the 21st Century_, told the story of CryptoKitties.
I discussed how blockchain technology can be used to solve problems of digital ownership,
create new asset classes, and incentivize more open digital spaces.`,
    },
    {
      name: 'Intro to Blockchain',
      emoji: '🧱',
      date: Moment('2018-03-24', DATE_F),
      url: 'https://docs.google.com/presentation/d/1m_QU1NWzE0yPk7wVUEqBBn_FCTvB4kt52XUupjMihEw/edit?usp=sharing',
      short: `A presentation for UBC Launch Pad Tech Talks about the technical details of blockchains.`,
    },
    {
      name: 'Cumulus: Implementing a Cryptocurrency',
      emoji: '☁️',
      date: Moment('2017-11-04', DATE_F),
      url: 'https://docs.google.com/presentation/d/1h8fB5PGuWnmV33jGY3WWFz9SIDyC9Kx8gVhvqvzBdp8/edit?usp=sharing',
      short: `A presentation of cryptocurrency implementation hosted by UBC Blockchain Club.`,
    },
    {
      name: 'Intro to React',
      emoji: '👨‍🏫',
      date: Moment('2017-03-27', DATE_F),
      url: 'https://www.facebook.com/events/676299582548975/permalink/679400582238875/',
      short: `A presentation for UBC Launch Pad Tech Talks about targeting different platforms with Electron and React Native.`,
    },
    {
      name: 'Intro to Modern Web Development',
      emoji: '👨‍💻',
      date: Moment('2016-03-04', DATE_F),
      url: 'https://docs.google.com/presentation/d/1eHXmA_mMeKXemRjTf7ty3h7HCDNUpbJrDxvKmvvZwh0/edit?usp=sharing',
      short: `An interactive workshop at BizHacks 2016, a hackathon, introducing business students to modern web development tools.`,
    },
  ],
  projects: [
    {
      name: 'Flow',
      emoji: '🌊',
      highlight: true,
      url: 'https://withflow.org',
      date: {
        start: Moment('2019-10'),
      },
      short: `Flow is a fast, secure, and developer-friendly blockchain built to support the next generation of games, apps, and digital assets.`,
      long: `
Flow is a fast, secure, and developer-friendly blockchain built to support the next generation of games, apps, and digital assets.
It pioneered many breakthroughs in decentralized technology, including: 

- Separating consensus from compute to achieve high performance without compromising global state atomicity.
- [Cadence](https://developers.flow.com/cadence/index), the most ergonomic and safe-by-default programming language available for smart contract development.
- Accounts with error-resistant addresses, built-in smart contracts, and multi-sig.

I have worked on Flow through 3 code-names and 4 years, starting in 2019.
Some of my notable contributions are the [Jolteon consensus algorithm](https://flow.com/engineering-blogs/jolteon-advancing-flows-consensus-algorithm), 
the distributed key generation protocol, the Collection Node, and the automated node operator selection system.`,
    },
    {
      name: 'Dapper',
      url: 'https://meetdapper.io',
      emoji: '👾',
      date: {
        start: Moment('2018-09', MONTH_F),
        end: Moment('2019-10', MONTH_F),
      },
      short: `A smart contract wallet for Ethereum.`,
      long: `
We developed Dapper Wallet after experiencing first-hand how painful the user experience
was using decentralized applications in 2018. Dapper Wallet leverages a unique [smart contract design](https://medium.com/dapperlabs/designing-dapper-48c50fcfb063) 
familiar email/password authentication, per-device authentication keys, transaction fee abstraction, and account recovery.`
    },
    {
      name: 'CryptoKitties',
      url: 'https://cryptokitties.co',
      emoji: '🐈',
      highlight: true,
      date: {
        start: Moment('2017-07', MONTH_F),
        end: Moment('2018-09', MONTH_F),
      },
      short: `A simple game about breeding cats which broke Ethereum, coined the term NFT, and defined the ERC721 standard.`,
      long: `
CryptoKitties is the world's furriest blockchain experience.
It defined the [standard for non-fungible tokens](https://www.youtube.com/channel/UCfF9ZO8Ug4xk_AJd4aeT5HA/playlists),
coined the term "NFT", and accidentally broke Ethereum when it launched.

I prototyped the product with the initial team of 4, launched the alpha at the inaugural ETHWaterloo hackathon, 
and developed the [smart contracts](https://www.gettoby.com/p/448v6x9p6tgs), among other things.
CrypoKitties has been covered in the
[BBC](http://www.bbc.com/news/technology-42237162),
[New York Times](https://www.nytimes.com/2017/12/28/style/cryptokitties-want-a-blockchain-snuggle.html),
[Wall Street Journal](https://blogs.wsj.com/cio/2017/12/07/ethereum-network-copes-with-surge-of-activity-as-virtual-kitten-game-goes-viral/),
and [many others](https://cryptokitties.co/press).`,
    },
    {
      name: 'UBC Launch Pad',
      url: 'https://ubclaunchpad.com',
      emoji: '🚀',
      date: {
        start: Moment('2015-08', MONTH_F),
        end: Moment('2018-05', MONTH_F),
      },
      short: `Launch Pad is UBC's largest student-run software engineering club.`,
      long: `
Launch Pad is [UBC's](https://www.ubc.ca/) largest student-run software engineering club. 
It provides an environment for students to build creative projects in small, multidisciplinary teams
with process similar to an early-stage startup.
After spending some time as a member, I joined the leadership team to focus on fund-raising, event-planning, and strategy.
Some cool projects built during my tenure include
a [speaker diarization API](https://github.com/ubclaunchpad/minutes),
a [self-hosted continuous deployment tool](https://github.com/ubclaunchpad/inertia),
and a [collaborative Etch-a-Sketch](https://github.com/ubclaunchpad/etch.io).`,
    },
    {
      name: 'ETHWaterloo',
      url: 'https://ethwaterloo.com/',
      emoji: '🔨',
      date: Moment('2017-10-15', DATE_F),
      short: `My team [won](https://www.newswire.ca/news-releases/cats-invade-worlds-largest-ethereum-hackathon-651263343.html) 
with a [smart contract analytics tool](https://rufflet.cryptokitties.co/) while polishing off and launching the 
[CryptoKitties beta](https://motherboard.vice.com/en_us/article/bj78jv/cryptokitties-blockchain-cats-axiom-zen-game).`,
      long: `
ETHWaterloo was the world's largest Ethereum hackathon, with over 400 participants. 
My team [won](https://www.newswire.ca/news-releases/cats-invade-worlds-largest-ethereum-hackathon-651263343.html)
with [Rufflet](https://rufflet.cryptokitties.co/), a Mixpanel-style analytics tool for smart contracts. 
At the same time we were polishing off the beta version of CryptoKitties and releasing it for the hackers at ETHWaterloo to 
[play with](https://motherboard.vice.com/en_us/article/bj78jv/cryptokitties-blockchain-cats-axiom-zen-game).`,
    },
    {
      name: 'Rocket',
      url: 'https://github.com/ubclaunchpad/rocket',
      emoji: '🤖',
      date: {
        start: Moment('2017-06', MONTH_F),
        end: Moment('2017-08', MONTH_F),
      },
      short: `A Slack bot for automating team and project management at [Launch Pad](https://ubclaunchpad.com).`,
      long: `
Rocket is a Slack bot I built to help with onboarding and project management at [Launch Pad](https://ubclaunchpad.com).
New members add their information by talking to Rocket in Slack. From there, Rocket automatically updates our website roster,
adds members to our GitHub organization, and allows team leads to manage access to our various resources.`,
    },
    {
      name: 'Cumulus',
      url: 'https://github.com/ubclaunchpad/cumulus',
      emoji: '💸',
      date: {
        start: Moment('2017-05', MONTH_F),
        end: Moment('2017-08', MONTH_F),
      },
      short: `An open-source proof-of-work blockchain I built with a team at Launch Pad.`,
      long: `Cumulus is an open-source cryptocurrency implementation
modelled after Bitcoin and Ethereum that I built with a group of
friends at [Launch Pad](https://ubclaunchpad.com). Everything from
the blockchain, peer-to-peer networking, and consensus was built
from the ground up.`,
    },
    {
      name: 'Guerrilla',
      url: 'https://github.com/flashmob/go-guerrilla',
      date: Moment('2017-02', MONTH_F),
      emoji: '✉️',
      short: `An open-source SMTP server in Golang, to which I contributed an analytics dashboard.`,
      long: `
Guerrilla is an open-source, extensible SMTP mail server written in Go.
My main contribution was implementing an analytics dashboard for monitoring mail traffic.`,
    },
    {
      name: 'The Ubyssey',
      date: {
        start: Moment('2015-08', MONTH_F),
        end: Moment('2015-12', MONTH_F),
      },
      url: 'https://ubyssey.ca',
      emoji: '📰',
      short: `UBC's student newspaper, where I operated the website and publishing platform.`,
      long: `
The Ubyssey is UBC's student newspaper and the largest student newspaper in Western Canada.
While working there I contributed to [Dispatch](https://github.com/ubyssey/dispatch), the open-source publishing platform that powers [ubyssey.ca](https://ubyssey.ca).`,
    },
  ],
}
