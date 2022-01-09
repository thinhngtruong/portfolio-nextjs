import React from 'react'
import { Typography } from 'antd';
import styles from '@/styles/common.module.scss';

const { Title } = Typography;

export interface HeaderProps {
  
}

export const Header = (props: HeaderProps) => {
  return (
    <header className={styles.header}>
      <Title >Header</Title>
    </header>
  )
}
