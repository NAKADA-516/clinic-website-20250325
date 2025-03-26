import React from 'react';
import styles from './PriceTable.module.css';

interface PriceItem {
  name: string;
  price: string;
}

interface PriceTableProps {
  title: string;
  items: PriceItem[];
  notes?: string[];
}

export default function PriceTable({ title, items, notes }: PriceTableProps) {
  return (
    <div className={styles.priceSection}>
      <h2 className={styles.priceTitle}>{title}</h2>
      <div className={styles.priceItems}>
        {items.map((item, index) => (
          <div key={index} className={styles.priceItem}>
            <span className={styles.itemName}>{item.name}</span>
            <span className={styles.itemPrice}>{item.price}</span>
          </div>
        ))}
      </div>
      {notes && notes.length > 0 && (
        <div className={styles.notes}>
          {notes.map((note, index) => (
            <p key={index} className={styles.note}>{note}</p>
          ))}
        </div>
      )}
    </div>
  );
} 