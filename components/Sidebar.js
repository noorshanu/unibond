import React from "react";
import styles from "scss/components/Sidebar.module.scss";
import SidebarHeader from "./SidebarHeader";
import { AiOutlineSearch } from "react-icons/ai";
import UserCard from "./UserCard";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { toggleModel } from "reduxState/slices/chatModel";

const DynamicMetaMask = dynamic(() => import("./MetaMaskDetails"), {
  ssr: false,
});

function Sidebar() {
  const { isDark } = useSelector((state) => state.themeState);
  const dispatch = useDispatch();

  return (
    <div className={styles.sidebar}>
      <div className={`${styles.container}`}>
        <SidebarHeader />
      </div>

      <div className={styles.usersCardsWrapper}>
        <div className={styles.container2}>
          <header className={`${styles.userHeader} fs-26px`}>
            <h1 className="fs-inherit black weight-7 lh-1">Live Now</h1>
            <button style={{ fontSize: ".8em" }}>
              <AiOutlineSearch className={isDark ? "white" : "gray"} />
            </button>
          </header>
        </div>
        <main className={styles.usersCards}>
          {new Array(20).fill("").map((item, index) => (
            <button
              key={index}
              className="pointer"
              onClick={() => dispatch(toggleModel(true))}
            >
              <UserCard
                notify={true}
                img="peoples/user1.png"
                name="Mike Taylor"
                skill="Solidity Expert"
              />
            </button>
          ))}
          {/* <UserCard
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
          /> */}
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
