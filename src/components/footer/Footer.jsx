import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Rocket Blogs</div>
      <div className={styles.text}>
        Rocket creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
