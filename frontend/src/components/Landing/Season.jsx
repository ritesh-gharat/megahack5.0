import React from 'react';
import { useTranslation } from 'react-i18next';
import { asparagus, beans, brinjal, cucumber, jamun, karela, lauki, mango, musk, okra, pineapple, watermelon } from '../../assets/assets';

export default function Season() {
  const { t } = useTranslation();

  return (
    <div>
      <section id="seasonal-produce" className="py-12 md:py-16 lg:py-20 bg-green-50 dark:bg-gray-800">
        <div className="container mx-auto px-4" id="el-cf0dof0v">
          <div className="text-center mb-12" id="el-1crlnezn">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 dark:text-green-300 mb-3" id="el-lk0yp3gt">
              {t('whats')} {t('in')} {t('season')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto" id="el-qa5puyor">
              {t('discover')} {t('the')} {t('freshest')} {t('seasonal')} {t('produce')} {t('available')} {t('at')} {t('your')} {t('local')} {t('farmers')} {t('markets')} {t('right')} {t('now')}
            </p>
          </div>

          {/* <!-- Category Filters --> */}
          <div className="flex overflow-x-auto pb-4 md:flex-wrap md:justify-center mb-8 no-scrollbar" id="el-jiv64t9u">
            <button className="whitespace-nowrap px-4 py-2 mx-1 mb-2 bg-green-600 hover:bg-green-700 text-white rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800" id="el-02mc052k">
              {t('all')} {t('produce')}
            </button>
            {/* <button className="whitespace-nowrap px-4 py-2 mx-1 mb-2 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800" id="el-vzbl79z4">
              {t('vegetables')}
            </button>
            <button className="whitespace-nowrap px-4 py-2 mx-1 mb-2 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800" id="el-3f7bhiey">
              {t('fruits')}
            </button> */}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6" id="el-z96ot3zn">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group" id="el-9q2pg17n">
              <div className="relative aspect-square bg-green-100 dark:bg-green-900 overflow-hidden" id="el-hycu0e1t">
                <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800" id="el-7ygg4gh4">
                  <img src={lauki} alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3" id="el-qjtvcdpp">
                  <span className="text-white text-sm" id="el-cf5t11ky">{t('peak')} {t('season')}</span>
                </div>
              </div>
              <div className="p-3 text-center" id="el-kitqgd76">
                <h3 className="font-semibold text-gray-900 dark:text-white" id="el-14b3a3qq">{t('lauki')}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400" id="el-ycg689pt">{t('april')} - {t('june')}</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group" id="el-gkq4k074">
              <div className="relative aspect-square bg-green-100 dark:bg-green-900 overflow-hidden" id="el-n5kup1h2">
                <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800" id="el-fgo8up52">
                  <img src={cucumber} alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3" id="el-123jnmz3">
                  <span className="text-white text-sm" id="el-mz34b9lj">{t('peak')} {t('season')}</span>
                </div>
              </div>
              <div className="p-3 text-center" id="el-52x5vqpv">
                <h3 className="font-semibold text-gray-900 dark:text-white" id="el-1oxfyxpa">{t('cucumber')}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400" id="el-br6599ia">{t('april')} - {t('june')}</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group" id="el-pzpxjsdm">
              <div className="relative aspect-square bg-green-100 dark:bg-green-900 overflow-hidden" id="el-f17esp8x">
                <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800" id="el-igo6u07r">
                  <img src={karela} alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3" id="el-zduvcytt">
                  <span className="text-white text-sm" id="el-lq0241i9">{t('just')} {t('starting')}</span>
                </div>
              </div>
              <div className="p-3 text-center" id="el-8aoa1vio">
                <h3 className="font-semibold text-gray-900 dark:text-white" id="el-sl01syyf">{t('karela')} ({t('bitter')} {t('gourd')})</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400" id="el-inbarq08">{t('march')} - {t('june')}</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group" id="el-cph74hzb">
              <div className="relative aspect-square bg-green-100 dark:bg-green-900 overflow-hidden" id="el-bewk55hc">
                <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800" id="el-oh3hnj83">
                  <img src={brinjal} alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3" id="el-guk0nwho">
                  <span className="text-white text-sm" id="el-ccymmuj7">{t('peak')} {t('season')}</span>
                </div>
              </div>
              <div className="p-3 text-center" id="el-4n61crq1">
                <h3 className="font-semibold text-gray-900 dark:text-white" id="el-gu3fy4y0">{t('brinjal')} ({t('baingan')})</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400" id="el-rtzor5iq">{t('march')} - {t('june')}</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group" id="el-9nbg2s8m">
              <div className="relative aspect-square bg-green-100 dark:bg-green-900 overflow-hidden" id="el-eovg1uq6">
                <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800" id="el-x59z7avy">
                  <img src={okra} alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3" id="el-3m4m6hc1">
                  <span className="text-white text-sm" id="el-0lcpw69g">{t('early')} {t('season')}</span>
                </div>
              </div>
              <div className="p-3 text-center" id="el-yi7ey6s1">
                <h3 className="font-semibold text-gray-900 dark:text-white" id="el-1agziu22">{t('okra')} ({t('bhindi')})</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400" id="el-17cir583">{t('march')} - {t('june')}</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group" id="el-ib2pvf8y">
              <div className="relative aspect-square bg-green-100 dark:bg-green-900 overflow-hidden" id="el-o6f02j4z">
                <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800" id="el-41oke0wh">
                  <img src={beans} alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3" id="el-u4j0q1l6">
                  <span className="text-white text-sm" id="el-jitxi52m">{t('just')} {t('starting')}</span>
                </div>
              </div>
              <div className="p-3 text-center" id="el-x8y5jv6n">
                <h3 className="font-semibold text-gray-900 dark:text-white" id="el-4xdbirhy">{t('green')} {t('beans')}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400" id="el-kbq7nuwv">{t('april')} - {t('june')}</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group" id="el-zp00s6uk">
              <div className="relative aspect-square bg-green-100 dark:bg-green-900 overflow-hidden" id="el-aozwzkjv">
                <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800" id="el-akm45ffr">
                  <img src={mango} alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3" id="el-grbu06rv">
                  <span className="text-white text-sm" id="el-rryrjef5">{t('early')} {t('season')}</span>
                </div>
              </div>
              <div className="p-3 text-center" id="el-ce7i0o5q">
                <h3 className="font-semibold text-gray-900 dark:text-white" id="el-hrjl0mxs">{t('mango')}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400" id="el-izs1mif0">{t('march')} - {t('may')}</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group" id="el-h6xi7lf3">
              <div className="relative aspect-square bg-green-100 dark:bg-green-900 overflow-hidden" id="el-7sxflkuf">
                <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800" id="el-x55hsmkj">
                  <img src={watermelon} alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3" id="el-h07iih6h">
                  <span className="text-white text-sm" id="el-rpvgqhbh">{t('early')} {t('season')}</span>
                </div>
              </div>
              <div className="p-3 text-center" id="el-bk57oeor">
                <h3 className="font-semibold text-gray-900 dark:text-white" id="el-a37ovrwg">{t('watermelon')}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400" id="el-3cmlq68v">{t('april')} - {t('october')}</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group" id="el-4esye2a6">
              <div className="relative aspect-square bg-green-100 dark:bg-green-900 overflow-hidden" id="el-nkv154ob">
                <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800" id="el-jkrh0ghi">
                  <img src={pineapple} alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3" id="el-xaugnahh">
                  <span className="text-white text-sm" id="el-rxhth5ed">{t('peak')} {t('season')}</span>
                </div>
              </div>
              <div className="p-3 text-center" id="el-iswv77ly">
                <h3 className="font-semibold text-gray-900 dark:text-white" id="el-s7wthup6">{t('pineapple')}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400" id="el-0351umpb">{t('march')} - {t('june')}</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group" id="el-70319v87">
              <div className="relative aspect-square bg-green-100 dark:bg-green-900 overflow-hidden" id="el-wbiz4k3q">
                <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800" id="el-jgxl1pam">
                  <img src={musk} alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3" id="el-j91flkvm">
                  <span className="text-white text-sm" id="el-5yxrkcnt">{t('early')} {t('season')}</span>
                </div>
              </div>
              <div className="p-3 text-center" id="el-gkkmsnqc">
                <h3 className="font-semibold text-gray-900 dark:text-white" id="el-3naoz4b3">{t('musk')} {t('melon')}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400" id="el-j3cqibk3">{t('march')} - {t('june')}</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group" id="el-3gg4m4bi">
              <div className="relative aspect-square bg-green-100 dark:bg-green-900 overflow-hidden" id="el-g19mldbl">
                <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800" id="el-8ayqvb27">
                  <img src={jamun} alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3" id="el-0q56u5xe">
                  <span className="text-white text-sm" id="el-witn0a3l">{t('just')} {t('starting')}</span>
                </div>
              </div>
              <div className="p-3 text-center" id="el-uj4voml2">
                <h3 className="font-semibold text-gray-900 dark:text-white" id="el-9w7w6tql">{t('jamun')}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400" id="el-pkd5cv03">{t('march')} - {t('may')}</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group" id="el-taf8b3d1">
              <div className="relative aspect-square bg-green-100 dark:bg-green-900 overflow-hidden" id="el-57jgl0kl">
                <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800" id="el-rxf338qe">
                  <img src={asparagus} alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3" id="el-cmm72ohz">
                  <span className="text-white text-sm" id="el-g8m4v0sd">{t('early')} {t('season')}</span>
                </div>
              </div>
              <div className="p-3 text-center" id="el-6tkb62ib">
                <h3 className="font-semibold text-gray-900 dark:text-white" id="el-arf7io02">{t('asparagus')}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400" id="el-l90s8k4c">{t('april')} - {t('june')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
