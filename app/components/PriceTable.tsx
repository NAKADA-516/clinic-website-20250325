import React from 'react';
import styles from './PriceTable.module.css';

interface PriceItem {
  name: string;
  price: string;
}

interface PriceTableProps {
  title: string;
  items: PriceItem[];
}

const PriceTable: React.FC<PriceTableProps> = ({ title, items }) => {
  return (
    <div className={styles.priceTable}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.items}>
        {items.map((item, index) => (
          <div key={index} className={styles.item}>
            <span className={styles.name}>{item.name}</span>
            <span className={styles.price}>{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceTable; 