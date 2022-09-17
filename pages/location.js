import Address from "layouts/Address";
import DashboardLayout from "layouts/DashboardLayout";
import styles from "scss/pages/location.module.scss";
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ContactCard from "components/ContactCard";
import { IKImage } from "imagekitio-react";

export default function AddressPage() {
  return (
    <div className={styles.page} data-units="vw">
      <DashboardLayout showSidebar={false} pageName="Location">
        <Address />
      </DashboardLayout>

      <div className={styles.contactDetailsWrapper}>
        <div className={styles.contactDetails}>
          <IKImage
            path="images/cities.png"
            className={styles.cities}
            loading="lazy"
            lqip={{ active: true }}
            alt=""
          />
          <div className={styles.cards}>
            <ContactCard icon={<IoMdCall />} title="+971-4-4388222" />
            <ContactCard icon={<FaWhatsapp />} title="+971-4-4388222" />
            <ContactCard icon={<MdEmail />} title="team@uni.bond" />
          </div>
        </div>
        <div className={styles.places}>
          <div>
            <IKImage
              path="cities/city1.png"
              className={styles.place1}
              loading="lazy"
              lqip={{ active: true }}
              alt=""
            />
          </div>
          <div>
            <IKImage
              path="cities/city2.png"
              className={styles.place2}
              loading="lazy"
              lqip={{ active: true }}
              alt=""
            />
          </div>
          <div>
            <IKImage
              path="cities/city3.png"
              className={styles.place3}
              loading="lazy"
              lqip={{ active: true }}
              alt=""
            />
          </div>
          <div>
            <IKImage
              path="cities/city4.png"
              className={styles.place4}
              loading="lazy"
              lqip={{ active: true }}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
