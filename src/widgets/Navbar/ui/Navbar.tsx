import {classNames} from 'shared/lib/classNames/classNames';
import s from './Navbar.module.scss';
import React from "react";
import {AppLink} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface NavbarProps {
  className?: string
}

export const Navbar = ({className}: NavbarProps) => {
  return (
    <div className={classNames(s.Navbar, {}, [className])}>
      <div>
        <AppLink to={'/'}>Главная</AppLink>
        <AppLink to={'/about'}>О сайте</AppLink>
      </div>
      <ThemeSwitcher/>
    </div>
  );
};
