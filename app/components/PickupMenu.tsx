import Link from 'next/link';
import Image from 'next/image';
import styles from './PickupMenu.module.css';

const featuredMenus = [
  {
    id: 'potenza',
    title: 'ポテンザ',
    description: '高周波治療による肌の若返り',
    image: '/images/potenza.jpg',
  },
  {
    id: 'rejuran',
    title: 'レジュラン',
    description: '肌の再生を促進する治療',
    image: '/images/rejuran.jpg',
  },
  {
    id: 'hydrafacial',
    title: 'ハイドラフェイシャル',
    description: '深層洗浄と保湿を同時に行う施術',
    image: '/images/hydrafacial.jpg',
  },
];

const PickupMenu = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>おすすめメニュー</h2>
      <div className={styles.grid}>
        {featuredMenus.map((menu) => (
          <Link href={`/menu/${menu.id}`} key={menu.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={menu.image}
                alt={menu.title}
                width={400}
                height={300}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h3 className={styles.menuTitle}>{menu.title}</h3>
              <p className={styles.description}>{menu.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PickupMenu; 