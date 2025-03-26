import Image from 'next/image';
import styles from './DoctorProfile.module.css';

const DoctorProfile = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/doctor.jpg"
            alt="院長プロフィール"
            width={400}
            height={500}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>院長プロフィール</h2>
          <div className={styles.profile}>
            <h3 className={styles.name}>山田 太郎</h3>
            <p className={styles.credentials}>
              医学博士 / 美容外科専門医 / 形成外科専門医
            </p>
            <div className={styles.experience}>
              <h4>経歴</h4>
              <ul>
                <li>東京大学医学部卒業</li>
                <li>東京大学医学部附属病院 形成外科</li>
                <li>美容外科クリニック勤務</li>
                <li>ヨヨギビューティークリニック開設</li>
              </ul>
            </div>
            <div className={styles.message}>
              <h4>ご挨拶</h4>
              <p>
                20年以上の美容外科経験を活かし、お一人お一人に最適な治療をご提案させていただきます。
                自然な美しさを引き出すことを心がけ、安全で確実な治療を提供いたします。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile; 