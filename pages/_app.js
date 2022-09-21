import "scss/index.scss";
import { IKContext } from "imagekitio-react";
import IconsSidebar from "layouts/IconsSidebar";
import LoginScreen from "components/LoginScreen";
import { Provider } from "react-redux";
import { store } from "reduxState/store";
import BlackScreen from "components/BlackScreen";
import ReduxStateProvider from "HOC/ReduxStateProvider";

{
  /* <IKImage
        path="/images/partners-card-img.png"
        className="w-full"
        
        loading="lazy"
        lqip={{ active: true }}
        alt=""
      /> */
}

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <IKContext urlEndpoint="https://ik.imagekit.io/l4k8brcjb/uniBond/">
        <IconsSidebar />
        <LoginScreen />
        <ReduxStateProvider />
        <BlackScreen />
        <Component {...pageProps} />
      </IKContext>
    </Provider>
  );
}

export default MyApp;
