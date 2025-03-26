"use client";

import { useState } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, addMonths, isBefore, isAfter } from "date-fns";
import { ja } from "date-fns/locale";
import Link from "next/link";
import styles from './calendar.module.css'
import { FaCalendarAlt, FaClock, FaInfoCircle } from 'react-icons/fa'

// 診療時間データ
type ClinicHoursType = {
  [key: number]: { open: string; close: string } | null;
};

const CLINIC_HOURS: ClinicHoursType = {
  1: { open: "11:00", close: "17:00" }, // 月曜
  2: { open: "11:00", close: "17:00" }, // 火曜
  3: { open: "11:00", close: "17:00" }, // 水曜
  4: { open: "11:00", close: "17:00" }, // 木曜
  5: { open: "18:00", close: "22:00" }, // 金曜
  6: { open: "11:00", close: "20:00" }, // 土曜（土曜のみ20時まで）
  0: null, // 日曜（休診）
};

// 診療時間の説明
const CLINIC_HOURS_DESCRIPTION = {
  weekday: "11:00〜17:00",
  friday: "18:00〜22:00",
  saturday: "11:00〜20:00",
  sunday: "休診"
};

// 特別診療日データ
type SpecialHoursType = {
  [key: string]: { open: string; close: string; note: string };
};

const SPECIAL_HOURS: SpecialHoursType = {
  "2024-03-02": { open: "11:00", close: "17:00", note: "特別診療日" }, // 日曜診療
  "2024-03-23": { open: "11:00", close: "17:00", note: "特別診療日" }, // 日曜診療
  "2024-03-30": { open: "11:00", close: "17:00", note: "特別診療日" }, // 日曜診療
  "2024-03-04": { open: "17:00", close: "22:00", note: "診療時間変更" }, // 火曜日変更
  "2024-03-06": { open: "11:00", close: "20:00", note: "診療時間変更" }, // 木曜日変更
};

// 2024年の休診日データ
const HOLIDAYS = [
  // 年末年始
  "2024-01-01", // 元日
  "2024-01-02", // 年始休暇
  "2024-01-03", // 年始休暇
  
  // 祝日
  "2024-01-08", // 成人の日
  "2024-02-11", // 建国記念の日
  "2024-02-12", // 振替休日
  "2024-02-23", // 天皇誕生日
  "2024-03-20", // 春分の日
  "2024-04-29", // 昭和の日
  "2024-05-03", // 憲法記念日
  "2024-05-04", // みどりの日
  "2024-05-05", // こどもの日
  "2024-05-06", // 振替休日
  "2024-07-15", // 海の日
  "2024-08-11", // 山の日
  "2024-08-12", // 振替休日
  "2024-08-13", // 夏季休暇
  "2024-08-14", // 夏季休暇
  "2024-08-15", // 夏季休暇
  "2024-09-16", // 敬老の日
  "2024-09-22", // 秋分の日
  "2024-09-23", // 振替休日
  "2024-10-14", // スポーツの日
  "2024-11-03", // 文化の日
  "2024-11-04", // 振替休日
  "2024-11-23", // 勤労感謝の日
  "2024-12-30", // 年末休暇
  "2024-12-31"  // 年末休暇
];

// 休診日の説明
type HolidayDescriptionsType = {
  [key: string]: string;
};

const HOLIDAY_DESCRIPTIONS: HolidayDescriptionsType = {
  "2024-01-01": "元日",
  "2024-01-02": "年始休暇",
  "2024-01-03": "年始休暇",
  "2024-01-08": "成人の日",
  "2024-02-11": "建国記念の日",
  "2024-02-12": "振替休日",
  "2024-02-23": "天皇誕生日",
  "2024-03-20": "春分の日",
  "2024-04-29": "昭和の日",
  "2024-05-03": "憲法記念日",
  "2024-05-04": "みどりの日",
  "2024-05-05": "こどもの日",
  "2024-05-06": "振替休日",
  "2024-07-15": "海の日",
  "2024-08-11": "山の日",
  "2024-08-12": "振替休日",
  "2024-08-13": "夏季休暇",
  "2024-08-14": "夏季休暇",
  "2024-08-15": "夏季休暇",
  "2024-09-16": "敬老の日",
  "2024-09-22": "秋分の日",
  "2024-09-23": "振替休日",
  "2024-10-14": "スポーツの日",
  "2024-11-03": "文化の日",
  "2024-11-04": "振替休日",
  "2024-11-23": "勤労感謝の日",
  "2024-12-30": "年末休暇",
  "2024-12-31": "年末休暇"
};

export default function CalendarPage() {
  const today = new Date();
  const [currentDate] = useState(today);
  
  // 3ヶ月分のカレンダーデータを生成
  const calendarMonths = [0, 1, 2].map(i => {
    const targetDate = addMonths(currentDate, i);
    const monthStart = startOfMonth(targetDate);
    const monthEnd = endOfMonth(targetDate);
    return {
      date: targetDate,
      days: eachDayOfInterval({ start: monthStart, end: monthEnd })
    };
  });

  const getClinicHours = (date: Date) => {
    // 過去の日付は「終了」と表示
    if (isBefore(date, today) && !isToday(date)) {
      return "終了";
    }
    
    const dateStr = format(date, "yyyy-MM-dd");
    
    // 特別診療日チェック
    if (SPECIAL_HOURS[dateStr]) {
      const { open, close, note } = SPECIAL_HOURS[dateStr];
      return `${open} - ${close}（${note}）`;
    }
    
    const dayOfWeek = date.getDay();
    
    // 休診日チェック
    if (HOLIDAYS.includes(dateStr) || !CLINIC_HOURS[dayOfWeek]) {
      const description = HOLIDAY_DESCRIPTIONS[dateStr];
      return description ? `休診（${description}）` : "休診日";
    }
    
    return `${CLINIC_HOURS[dayOfWeek].open} - ${CLINIC_HOURS[dayOfWeek].close}`;
  };

  // monthDataの型を定義
  type MonthDataType = {
    date: Date;
    days: Date[];
  };

  const renderMonth = (monthData: MonthDataType) => (
    <div key={format(monthData.date, 'yyyy-MM')} className={styles.calendarContainer}>
      <div className={styles.calendarHeader}>
        <h2 className={styles.monthTitle}>
          {format(monthData.date, "yyyy年 M月", { locale: ja })}
        </h2>
      </div>

      <div className={styles.calendarGrid}>
        {/* Weekday Headers */}
        {["日", "月", "火", "水", "木", "金", "土"].map((day, index) => (
          <div
            key={day}
            className={`${styles.weekdayHeader} ${
              index === 0 ? styles.sunday :
              index === 6 ? styles.saturday : ""
            }`}
          >
            {day}
          </div>
        ))}

        {/* Calendar Days */}
        {monthData.days.map((day, index) => {
          const clinicHours = getClinicHours(day);
          const isHoliday = clinicHours.includes("休診") || clinicHours === "終了";
          const dateStr = format(day, "yyyy-MM-dd");
          const holidayName = HOLIDAY_DESCRIPTIONS[dateStr];
          const isSpecialDay = SPECIAL_HOURS[dateStr];
          
          return (
            <div
              key={index}
              className={`${styles.calendarDay} ${
                isToday(day) ? styles.today : ""
              } ${
                isHoliday ? styles.holiday :
                isSpecialDay ? styles.specialHours :
                isSameMonth(day, monthData.date) ? styles.regularHours : ""
              }`}
            >
              <div className={styles.dayNumber}>
                {format(day, "d")}
              </div>
              <div className={styles.clinicHours}>
                {clinicHours}
              </div>
              {holidayName && (
                <div className={styles.holidayName}>
                  {holidayName}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <div className={`${styles.legendColor} ${styles.regularHours}`}></div>
          <span>通常診療（11:00〜17:00）</span>
        </div>
        <div className={styles.legendItem}>
          <div className={`${styles.legendColor} ${styles.specialHours}`}></div>
          <span>金曜（18:00〜22:00）</span>
        </div>
        <div className={styles.legendItem}>
          <div className={`${styles.legendColor} ${styles.holiday}`}></div>
          <span>休診日</span>
        </div>
      </div>
    </div>
  );

  return (
    <main className={styles.container}>
      {/* ヒーローセクション */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>診療予約</h1>
          <p>オンラインで簡単予約</p>
        </div>
      </section>

      {/* 予約方法セクション */}
      <section className={styles.reservationSection}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>予約方法</h2>
          
          <div className={styles.reservationMethods}>
            <a 
              href="https://page.line.me/368ztrwg" 
              className={styles.methodCard}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>LINE予約</h3>
              <p>LINEでカンタン予約<br />24時間受付可能</p>
              <button className={styles.methodButton}>LINEで予約する</button>
            </a>

            <a 
              href="https://connect.kireipass.jp/clinics/yoyogi-biyou/menus" 
              className={styles.methodCard}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>WEB予約</h3>
              <p>ウェブサイトから<br />24時間予約可能</p>
              <button className={styles.methodButton}>WEBで予約する</button>
            </a>
          </div>
        </div>
      </section>

      {/* 診療時間セクション */}
      <section className={styles.scheduleSection}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>診療時間</h2>
          
          <div className={styles.scheduleTable}>
            <table>
              <thead>
                <tr>
                  <th>診療時間</th>
                  <th>月</th>
                  <th>火</th>
                  <th>水</th>
                  <th>木</th>
                  <th>金</th>
                  <th>土</th>
                  <th>日</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10:00-13:00</td>
                  <td>○</td>
                  <td>○</td>
                  <td>○</td>
                  <td>○</td>
                  <td>○</td>
                  <td>○</td>
                  <td>休</td>
                </tr>
                <tr>
                  <td>14:00-18:00</td>
                  <td>○</td>
                  <td>○</td>
                  <td>○</td>
                  <td>○</td>
                  <td>○</td>
                  <td>△</td>
                  <td>休</td>
                </tr>
              </tbody>
            </table>
            <div className={styles.scheduleNote}>
              △：13:00まで
            </div>
          </div>
        </div>
      </section>

      {/* 注意事項セクション */}
      <section className={styles.noticeSection}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>予約に関する注意事項</h2>
          
          <div className={styles.noticeList}>
            <div className={styles.noticeItem}>
              <h3>予約のキャンセルについて</h3>
              <p>予約のキャンセルは前日までにご連絡ください。当日のキャンセルはキャンセル料が発生する場合があります。</p>
            </div>
            <div className={styles.noticeItem}>
              <h3>初診の方へ</h3>
              <p>初めての方は、予約時間の10分前までにご来院ください。問診票のご記入をお願いしております。</p>
            </div>
            <div className={styles.noticeItem}>
              <h3>遅刻について</h3>
              <p>予約時間に遅れる場合は、必ずご連絡ください。状況により施術時間を短縮、もしくは予約の変更をお願いする場合があります。</p>
            </div>
          </div>
        </div>
      </section>

      {calendarMonths.map(monthData => renderMonth(monthData))}
    </main>
  );
} 