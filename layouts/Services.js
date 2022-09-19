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
        style={{ "--icon-width": "34%" }}
      />
      <ServiceCard
        title="Design"
        icon="icons/designIcon.svg"
        iconClass={`${styles.icon} ${styles.icon2}`}
        style={{ "--icon-width": "30%" }}
      />
      <ServiceCard
        title="Development"
        icon="icons/developmentIcon.svg"
        iconClass={`${styles.icon} ${styles.icon3}`}
        style={{ "--icon-width": "30%" }}
      />
      <ServiceCard
        title="Tokens"
        icon="icons/tokensIcon.svg"
        iconClass={`${styles.icon} ${styles.icon4}`}
        style={{ "--icon-width": "22%" }}
      />
      <ServiceCard
        title="Smart Contracts"
        icon="icons/smartcontractIcon.svg"
        iconClass={`${styles.icon} ${styles.icon5}`}
        style={{ "--icon-width": "38%" }}
      />
      <ServiceCard
        title="DApps"
        icon="icons/dappIcon.svg"
        iconClass={`${styles.icon} ${styles.icon6}`}
        style={{ "--icon-width": "32%" }}
      />
      <ServiceCard
        title="DeFi"
        icon="icons/defiIcon.svg"
        iconClass={`${styles.icon} ${styles.icon7}`}
        style={{ "--icon-width": "36%" }}
      />
      <ServiceCard
        title="NFTs"
        icon="icons/nftIcon.svg"
        iconClass={`${styles.icon} ${styles.icon8}`}
        style={{ "--icon-width": "36%" }}
      />
      <ServiceCard
        title="DEX"
        icon="icons/dexIcon.svg"
        iconClass={`${styles.icon} ${styles.icon9}`}
        style={{ "--icon-width": "34%" }}
      />
      <ServiceCard
        title="Web3"
        icon="icons/web3Icon.svg"
        iconClass={`${styles.icon} ${styles.icon10}`}
        style={{ "--icon-width": "36%" }}
      />
      <ServiceCard
        title="Blockchain"
        icon="icons/blockchainIcon.svg"
        iconClass={`${styles.icon} ${styles.icon11}`}
        style={{ "--icon-width": "36%" }}
      />
      <ServiceCard
        title="Metaverse"
        icon="icons/metaverseIcon.svg"
        iconClass={`${styles.icon} ${styles.icon12}`}
        style={{ "--icon-width": "36%" }}
      />
    </div>
  );
}

export default Services;
