import { faArrowRightArrowLeft, faCloudBolt, faStore } from "@fortawesome/free-solid-svg-icons";
import { iAbout } from "../interface/about.interface";

export const abouts: iAbout[] = [
    {
      icon: faArrowRightArrowLeft,
      name: 'P2P Marketplace',
      description: 'Shardible is a modern decentralized NFT marketplace where people can easily buy and sell any NFT tokens. Our team implements all smart contracts with a passion for safety and a decentralization spirit. All listings, bids and transfers occur on our unique smart contract on a chain so users can be sure that their funds and NFTs are safe and secure.'
    },
    {
      icon: faCloudBolt,
      name: 'SaaS for NFT Projects',
      description: 'NFT smart contract factory, minting and token gating are just a part of Shardible. The platform provides comprehensive functionality and a set of tools which help creators, artists, and developers start their NFT projects. Our mission is to simplify NFT creation and enable it for everyone,'
    },
    {
      icon: faStore,
      name: 'NFT Primary Market ',
      description: 'Create your own NFT store, schedule a launch, and promote your project through various promotion tools provided by the platform: store landing page, event calendar, pre-sales, featured projects, statistics, and analytics.  '
    }
  ];