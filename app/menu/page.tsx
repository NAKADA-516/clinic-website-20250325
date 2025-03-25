"use client";

import styles from './menu.module.css'

export default function MenuPage() {
  return (
    <main className={styles.container}>
      {/* ヒーローセクション */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>メニュー・料金表</h1>
          <p>美容医療の豊富なメニューをご用意しております</p>
        </div>
      </section>

      {/* メニューセクション */}
      <section className={styles.menuSection}>
        <div className={styles.menuContainer}>
          {/* 幹細胞エクソソーム */}
          <div className={styles.menuBlock}>
            <h2 className={styles.menuTitle}>幹細胞エクソソーム</h2>
            <div className={styles.menuList}>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>乳歯髄点滴10cc １回</span>
                <span className={styles.itemPrice}>¥100,000</span>
              </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>乳歯髄点滴10cc ５回コース</span>
                <span className={styles.itemPrice}>¥440,000</span>
              </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>maxNFC 筋注 １回</span>
                <span className={styles.itemPrice}>¥165,000</span>
                      </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>maxNFC 筋注 ３回コース</span>
                <span className={styles.itemPrice}>¥396,000</span>
                      </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>maxNFC 筋注 ５回コース</span>
                <span className={styles.itemPrice}>¥577,500</span>
                    </div>
                  </div>
                </div>

          {/* ヒアルロン酸 */}
          <div className={styles.menuBlock}>
            <h2 className={styles.menuTitle}>ヒアルロン酸</h2>
            <div className={styles.menuList}>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>１本</span>
                <span className={styles.itemPrice}>¥77,000</span>
                      </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>３本</span>
                <span className={styles.itemPrice}>¥210,000</span>
                      </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>追加分</span>
                <span className={styles.itemPrice}>¥70,000</span>
                      </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>ボライト １本</span>
                <span className={styles.itemPrice}>¥55,000</span>
                    </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>ボライト ２本</span>
                <span className={styles.itemPrice}>¥100,000</span>
                  </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>ボライト 追加分</span>
                <span className={styles.itemPrice}>¥50,000</span>
              </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>ヒアルロニダーゼ</span>
                <span className={styles.itemPrice}>¥33,000</span>
                </div>
              </div>
            </div>

          {/* ボトックス */}
          <div className={styles.menuBlock}>
            <h2 className={styles.menuTitle}>ボツリヌストキシン注射</h2>
            <div className={styles.menuList}>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>ボツラックス 顔 １ヶ所</span>
                <span className={styles.itemPrice}>¥14,800</span>
              </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>ボツラックス 顔 ４ヵ所</span>
                <span className={styles.itemPrice}>¥49,800</span>
              </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>ボツラックス 顔 １ヶ所 追加分</span>
                <span className={styles.itemPrice}>¥7,800</span>
                      </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>ボツラックス 脇・身体</span>
                <span className={styles.itemPrice}>¥49,800</span>
                      </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>ボツラックス 脇・身体 追加分</span>
                <span className={styles.itemPrice}>¥25,000</span>
                      </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>エラ １ヶ所 ４回</span>
                <span className={styles.itemPrice}>¥160,000</span>
                      </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>オビソート 1回</span>
                <span className={styles.itemPrice}>¥14,800</span>
                      </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>オビソート 3回</span>
                <span className={styles.itemPrice}>¥29,800</span>
                    </div>
                  </div>
                </div>

          {/* オプション麻酔 */}
          <div className={styles.menuBlock}>
            <h2 className={styles.menuTitle}>オプション麻酔</h2>
            <div className={styles.menuList}>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>オプション 表面麻酔 パーツ</span>
                <span className={styles.itemPrice}>¥3,300</span>
                      </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>オプション 表面麻酔 全顔</span>
                <span className={styles.itemPrice}>¥5,500</span>
                      </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>オプション 笑気麻酔</span>
                <span className={styles.itemPrice}>¥6,600</span>
                    </div>
                  </div>
                </div>

          {/* ジュベルック */}
          <div className={styles.menuBlock}>
            <h2 className={styles.menuTitle}>ジュベルック</h2>
            <div className={styles.menuList}>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>１回</span>
                <span className={styles.itemPrice}>¥77,000</span>
                      </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>３回</span>
                <span className={styles.itemPrice}>¥198,000</span>
                      </div>
                    </div>
                  </div>

          {/* リジュラン */}
          <div className={styles.menuBlock}>
            <h2 className={styles.menuTitle}>リジュラン</h2>
            <div className={`${styles.menuList} ${styles.comingSoon}`}>
              <div className={styles.comingSoonText}>
                近日開始！！
              </div>
              </div>
            </div>

                {/* ダーマペン */}
          <div className={styles.menuBlock}>
            <h2 className={styles.menuTitle}>ダーマペン</h2>
            <div className={styles.menuList}>
              <div className={styles.menuSubCategory}>スタンダード</div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>トライアル</span>
                <span className={styles.itemPrice}>¥19,250</span>
              </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>１回</span>
                <span className={styles.itemPrice}>¥27,500</span>
                      </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>６回コース</span>
                <span className={styles.itemPrice}>¥137,500</span>
                      </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>１２回コース</span>
                <span className={styles.itemPrice}>¥264,000</span>
                      </div>

              <div className={styles.menuSubCategory}>ヴェルベットスキン</div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>トライアル</span>
                <span className={styles.itemPrice}>¥24,360</span>
                      </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>１回</span>
                <span className={styles.itemPrice}>¥34,800</span>
                    </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>６回コース</span>
                <span className={styles.itemPrice}>¥174,000</span>
                  </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>１２回コース</span>
                <span className={styles.itemPrice}>¥334,080</span>
                </div>

              <div className={styles.menuSubCategory}>ヒト幹細胞エクソソーム</div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>トライアル</span>
                <span className={styles.itemPrice}>¥70,000</span>
                      </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>１回</span>
                <span className={styles.itemPrice}>¥100,000</span>
                      </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>６回コース</span>
                <span className={styles.itemPrice}>¥500,000</span>
                      </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>１２回コース</span>
                <span className={styles.itemPrice}>¥960,000</span>
                    </div>
                  </div>
                </div>

          {/* メディカルエステ */}
          <div className={styles.menuBlock}>
            <h2 className={styles.menuTitle}>メディカルエステ</h2>
            <div className={styles.menuList}>
              <div className={styles.menuSubCategory}>エレクトロポレーション</div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>1回</span>
                <span className={styles.itemPrice}>¥15,000</span>
                      </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>6回コース</span>
                <span className={styles.itemPrice}>¥75,000</span>
                      </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>12回コース</span>
                <span className={styles.itemPrice}>¥144,000</span>
                      </div>

              <div className={styles.menuSubCategory}>ヒト幹細胞エクソソーム</div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>1回</span>
                <span className={styles.itemPrice}>¥90,000</span>
                    </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>6回コース</span>
                <span className={styles.itemPrice}>¥450,000</span>
              </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>12回コース</span>
                <span className={styles.itemPrice}>¥864,000</span>
            </div>

              <div className={styles.menuSubCategory}>マッサージピール</div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>トライアル</span>
                <span className={styles.itemPrice}>¥10,500</span>
                    </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>1回</span>
                <span className={styles.itemPrice}>¥15,000</span>
                    </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>6回コース</span>
                <span className={styles.itemPrice}>¥75,000</span>
              </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>12回コース</span>
                <span className={styles.itemPrice}>¥144,000</span>
            </div>

              <div className={styles.menuSubCategory}>ハイドラフェイシャル</div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>1回</span>
                <span className={styles.itemPrice}>¥15,000</span>
                      </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>6回コース</span>
                <span className={styles.itemPrice}>¥75,000</span>
                      </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>12回コース</span>
                <span className={styles.itemPrice}>¥144,000</span>
                </div>

              <div className={styles.menuSubCategory}>コンビネーション</div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>マッサージピール ＋ エレクトロポレーション 1回</span>
                <span className={styles.itemPrice}>¥28,000</span>
                      </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>ハイドラフェイシャル ＋ エレクトロポレーション 1回</span>
                <span className={styles.itemPrice}>¥28,000</span>
                      </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>ハイドラフェイシャル ＋ エレクトロポレーション 6回</span>
                <span className={styles.itemPrice}>¥140,000</span>
                      </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>ハイドラフェイシャル ＋ エレクトロポレーション 12回コース</span>
                <span className={styles.itemPrice}>¥268,800</span>
                    </div>
                  </div>
                </div>

          {/* 注射・点滴 */}
          <div className={styles.menuBlock}>
            <h2 className={styles.menuTitle}>注射・点滴</h2>
            <div className={styles.menuList}>
              <div className={styles.specialNotice}>
                6回コースは5回分の価格で購入できます！（1回分無料）
              </div>
              
              <div className={styles.menuSubCategory}>栄養療法</div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>栄養療法（血液検査含む）</span>
                <span className={styles.itemPrice}>¥30,000</span>
            </div>

              <div className={styles.menuSubCategory}>注射</div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>ビタミンC 注射 静注 １回</span>
                <span className={styles.itemPrice}>¥1,500</span>
                      </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>にんにく注射 静注 １回</span>
                <span className={styles.itemPrice}>¥2,200</span>
                      </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>プラセンタ注射 ２A １回</span>
                <span className={styles.itemPrice}>¥2,200</span>
                      </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>にんにく注射プラスC １回</span>
                <span className={styles.itemPrice}>¥3,300</span>
                    </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>疲労回復スペシャル注射 １回</span>
                <span className={styles.itemPrice}>¥5,500</span>
                  </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>ケナコルト注射 1回</span>
                <span className={styles.itemPrice}>¥10,000</span>
                </div>

              <div className={styles.menuSubCategory}>点滴</div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>疲労回復スペシャル点滴 １回</span>
                <span className={styles.itemPrice}>¥7,700</span>
                      </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>白玉点滴 600㎎ １回</span>
                <span className={styles.itemPrice}>¥5,500</span>
                      </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>白玉点滴 1200㎎ １回</span>
                <span className={styles.itemPrice}>¥9,900</span>
                      </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>白雪点滴 １回</span>
                <span className={styles.itemPrice}>¥7,700</span>
                    </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>エルサ点滴 １回</span>
                <span className={styles.itemPrice}>¥7,700</span>
                  </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>エルサ点滴プラス １回</span>
                <span className={styles.itemPrice}>¥9,900</span>
                </div>
              <div className={styles.menuItem}>
                <span className={styles.itemName}>高濃度ビタミンC 点滴 １回</span>
                <span className={styles.itemPrice}>¥11,000</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 注意書き */}
      <section className={styles.noticeSection}>
        <div className={styles.noticeContainer}>
          <p className={styles.noticeText}>
            ※ 表示価格はすべて税込です<br />
            ※ 注射・点滴 6回コースは5回分の価格で購入できます（1回分無料）
          </p>
        </div>
      </section>
    </main>
  );
} 
