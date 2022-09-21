import ChatModel from "components/ChatModel";
import Sidebar from "components/Sidebar";
import useMediaQuery from "hooks/useMediaQuery";
import React from "react";
import { useSelector } from "react-redux";
import styles from "scss/layout/DashboardLayout.module.scss";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { toggleState } from "reduxState/slices/blackScreenSlice";
import { useRouter } from "next/router";
import { toggleModel } from "reduxState/slices/chatModel";
import { FiMaximize2 } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

function Dashboardlayout(props) {
  const { children, showSidebar = true, pagename } = props;
  const isBellow1024px = useMediaQuery("(max-width : 64em)");
  const { modelState } = useSelector((state) => state.chatModel);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(toggleState(modelState ? true : false));

    if (modelState) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [modelState]);

  return (
    <div
      {...props}
      className={`${styles.dashboard} ${showSidebar ? styles.showSidebar : ""}`}
    >
      <div className={styles.left}>
        <header>
          <Navbar pagename={pagename} />
        </header>

        <main>{children}</main>
      </div>

      {/* var(--color-bg-white) -> coming from "scss\globals\_globals-vars.scss" file */}
      <ChatModel
        bg="var(--color-bg-white)"
        HeaderRightComponent={() => {
          return (
            <>
              <button
                className="fs-24px black pointer flex"
                onClick={() => {
                  router.push("/chat");
                  dispatch(toggleModel(false));
                }}
              >
                <FiMaximize2 />
              </button>
              <button
                className="fs-32px black pointer flex"
                onClick={() => {
                  dispatch(toggleModel(false));
                }}
              >
                <IoMdClose />
              </button>

              {/* we can have as many buttons as we can.... */}
            </>
          );
        }}
      />

      {showSidebar ? (
        !isBellow1024px ? (
          <div className={`${styles.sidebar} dashboard-sidebar`}>
            <Sidebar />
          </div>
        ) : (
          ""
        )
      ) : (
        ""
      )}
    </div>
  );
}

export default Dashboardlayout;
