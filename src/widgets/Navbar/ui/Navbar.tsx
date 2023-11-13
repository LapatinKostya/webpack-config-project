import {classNames} from 'shared/lib/classNames/classNames';
import s from './Navbar.module.scss';
import React from "react";
import {AppLink} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";

interface NavbarProps {
  className?: string
}

export const Navbar = ({className}: NavbarProps) => {
  const {t} = useTranslation()

  return (
    <div className={classNames(s.Navbar, {}, [className])}>
        <AppLink to={'/'}>{t('Main page')}</AppLink>
        <AppLink to={'/about'}>{t('About page')}</AppLink>
    </div>
  );
};
