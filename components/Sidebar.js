import React from "react";
import styles from "scss/components/Sidebar.module.scss";
import SidebarHeader from "./SidebarHeader";
import { AiOutlineSearch } from "react-icons/ai";
import UserCard from "./UserCard";
import dynamic from "next/dynamic";

const DynamicMetaMask = dynamic(() => import("./MetaMaskDetails"), {
  ssr: false,
});

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={`${styles.container}`}>
        <SidebarHeader />
      </div>

      <div className={styles.usersCardsWrapper}>
        <div className={styles.container2}>
          <header className={styles.userHeader}>
            <h1 className="fs-30px black weight-7 lh-1">Live Now</h1>
            <button>
              <AiOutlineSearch size={24} className="gray" />
            </button>
          </header>
        </div>
        <main className={styles.usersCards}>
          <UserCard
            notify={true}
            img="peoples/user1.png"
            name="Mike Taylor"
            skill="Solidity Expert"
          />
          <UserCard
            notify={true}
            img="peoples/user2.png"
            name="James Green"
            skill="Solidity Expert"
          />
          <UserCard
            notify={true}
            img="peoples/user3.png"
            name="Carmen Lewis"
            skill="Solidity Expert"
          />
          <UserCard
            notify={true}
            img="peoples/user4.png"
            name="Michael Richard"
            skill="Solidity Expert"
          />
          <UserCard
            img="peoples/user1.png"
            name="Nicole James"
            skill="Solidity Expert"
          />
          <UserCard
            img="peoples/user2.png"
            name="Carmen Lewis"
            skill="Solidity Expert"
          />
          <UserCard
            img="peoples/user4.png"
            name="Michael Richard"
            skill="Solidity Expert"
          />
          <UserCard
            img="peoples/user1.png"
            name="Nicole James"
            skill="Solidity Expert"
          />
          <UserCard
            img="peoples/user2.png"
            name="Carmen Lewis"
            skill="Solidity Expert"
          />
          <UserCard
            img="peoples/user4.png"
            name="Michael Richard"
            skill="Solidity Expert"
          />
          <UserCard
            img="peoples/user1.png"
            name="Nicole James"
            skill="Solidity Expert"
          />
          <UserCard
            img="peoples/user2.png"
            name="Carmen Lewis"
            skill="Solidity Expert"
          />
          <UserCard
            img="peoples/user4.png"
            name="Michael Richard"
            skill="Solidity Expert"
          />
          <UserCard
            img="peoples/user1.png"
            name="Nicole James"
            skill="Solidity Expert"
          />
          <UserCard
            img="peoples/user2.png"
            name="Carmen Lewis"
            skill="Solidity Expert"
          />
        </main>
      </div>

      <div className={styles.container}>
        <DynamicMetaMask />
      </div>

      <button className={styles.commentIcon}>
        {/* IF YOU WANT TO USE IT, YOU CAN UNCOMMENT IT ============= */}
        {/* <IKImage
          path="icons/commentYellowIcon.svg"
          alt=""
          loading="lazy"
          lqip={{ active: true }}
        /> */}
      </button>
    </div>
  );
}

export default Sidebar;
