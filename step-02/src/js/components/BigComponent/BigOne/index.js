import React from 'react'
import styles from './index.scss'

const BigOne = () => {
  return (
    <div>
      <h2 className={"font-size-16 mt10 " + styles.title}>
        这是1张大图开发(该图片&gt;10k,图片不转代码)master
      </h2>
      <div className={styles.bigImg}></div>
    </div>
  )
};

export default BigOne
