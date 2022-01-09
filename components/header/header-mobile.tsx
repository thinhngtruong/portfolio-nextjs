import React from 'react'
import { Typography } from 'antd';
import styles from '@/styles/common.module.scss';

const { Title } = Typography;

export interface HeaderMobileProps {
  
}

const Header = (props: HeaderMobileProps) => {
  return (
    <header className={styles.header}>
      <Title>Header Mobile</Title>
    </header>
  )
}

export default Header;