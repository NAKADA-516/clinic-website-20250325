import React from 'react';
import Image from 'next/image';
import styles from '../page.module.css';

const DoctorProfile = () => {
  return (
    <div className={styles.doctorContainer}>
      <div className={styles.doctorImage}>
        <Image
          src="/images/doctor/doctor-new.jpg"
          alt="院長 吉川 とも子"
          width={400}
          height={500}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className={styles.doctorInfo}>
        <h3 className={styles.doctorName}>院長 吉川 とも子</h3>
        <p className={styles.doctorTitle}>代々木駅前美容クリニック院長</p>
        <div className={styles.doctorCredentials}>
          <p className={styles.credential}>ボトックスビスタ認定医</p>
          <p className={styles.credential}>ジュビダームビスタ認定医</p>
          <p className={styles.credential}>山口大学医学部卒</p>
        </div>
        <div className={styles.doctorMessage}>
          代々木駅前美容クリニックは2023年6月に開業しました。以前は熊本県の美容皮膚科クリニックで院長を務めていましたが、2024年3月より当院の院長に就任させていただきました。<br /><br />
          診療科目は美容皮膚科です。美容エステサロンとは異なり、医師が美容面のお悩み相談にも細かく丁寧に対応しているのが当院の特徴の一つです。また、内服や注射、こだわりのスキンケア商品も取り扱っております。
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile; 