import ServiceCard from "components/ServiceCard";
import useMediaQuery from "hooks/useMediaQuery";
import React from "react";
import styles from "scss/layout/Services.module.scss";

function Services() {
  const isBellow1024px = useMediaQuery("(max-width : 64em)");

  return (
    <div className={styles.wrapper}>
      <ServiceCard
        title="UI/UX "
        icon="icons/uiuxIcon.svg"
        iconClass={`${styles.icon} ${styles.icon1}`}
      />
      <ServiceCard
        title="Design"
        icon="icons/designIcon.svg"
        iconClass={`${styles.icon} ${styles.icon2}`}
      />
      <ServiceCard
        title="Development"
        icon="icons/developmentIcon.svg"
        iconClass={`${styles.icon} ${styles.icon3}`}
      />
      <ServiceCard
        title="Tokens"
        icon="icons/tokensIcon.svg"
        iconClass={`${styles.icon} ${styles.icon4}`}
      />
      <ServiceCard
        title="Smart Contracts"
        icon="icons/smartcontractIcon.svg"
        iconClass={`${styles.icon} ${styles.icon5}`}
      />
      <ServiceCard
        title="DApps"
        icon="icons/dappIcon.svg"
        iconClass={`${styles.icon} ${styles.icon6}`}
      />
      <ServiceCard
        title="DeFi"
        icon="icons/defiIcon.svg"
        iconClass={`${styles.icon} ${styles.icon7}`}
      />
      <ServiceCard
        title="NFTs"
        icon="icons/nftIcon.svg"
        iconClass={`${styles.icon} ${styles.icon8}`}
      />
      <ServiceCard
        title="DEX"
        icon="icons/dexIcon.svg"
        iconClass={`${styles.icon} ${styles.icon9}`}
      />
      <ServiceCard
        title="Web3"
        icon="icons/web3Icon.svg"
        iconClass={`${styles.icon} ${styles.icon10}`}
      />
      <ServiceCard
        title="Blockchain"
        icon="icons/blockchainIcon.svg"
        iconClass={`${styles.icon} ${styles.icon11}`}
      />
      <ServiceCard
        title="Metaverse"
        icon="icons/metaverseIcon.svg"
        iconClass={`${styles.icon} ${styles.icon12}`}
      />
    </div>
  );
}

export default Services;
