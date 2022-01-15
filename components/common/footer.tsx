import React from 'react'
import { Typography } from 'antd';
import styles from '@/styles/common.module.scss';

const { Title } = Typography;

interface FooterProps {
  
}

export const Footer = (props: FooterProps) => {
  return (
    <footer className={styles.footer}>
      {/* <Title>Footer</Title> */}
    </footer>
  )
}