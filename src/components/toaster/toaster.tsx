import classNames from "classnames";
import { ShieldCloseIcon } from "lucide-react";
import toast from "react-hot-toast";

import styles from "./Toaster.module.css";

export const notify = (message: string, title?: string) =>
  toast.custom(
    (t) => (
      <div
        className={classNames([
          styles.notificationWrapper,
          t.visible ? "top-0" : "-top-96",
        ])}
      >
        {/* <div className={styles.iconWrapper}>
          <HiLightningBolt />
        </div> */}
        <div className={styles.contentWrapper}>
          {title && <h1>{title}</h1>}
          <p>{message}</p>
        </div>
        <div
          className={styles.closeIcon}
          onClick={() => {
            toast.dismiss(t.id);
          }}
        >
          <ShieldCloseIcon />
        </div>
      </div>
    ),
    { id: "unique-notification", position: "top-center" },
  );
