import React from 'react'
import { Container } from '../../shared/ui'
import s from "./Footer.module.scss"

export const Footer = () => {
  return (
    <footer className={s.Footer}>
        <Container>
            Все права защищены, 2024 год
        </Container>
    </footer>
  )
}
