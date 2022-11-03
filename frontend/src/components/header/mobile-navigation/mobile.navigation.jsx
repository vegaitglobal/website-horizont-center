import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "./mobile.navigation.module.scss";
import { tabItems } from "../tabItems";
import { LogoButton } from "../logo-button/logo.button";

function MobileMenu({ onItemClick, onLogout }) {

	const logout = useCallback(async () => {
		onLogout();
		onItemClick();
	}, [onItemClick, onLogout]);

	function MenuItems() {
		let menuItems = [...tabItems];
		if (!onLogout) {
			menuItems = menuItems.concat([
				{
					name: "Login",
					pathname: "/login",
					active: false,
				},
				{
					name: "Register",
					pathname: "/registration",
					active: false,
				}
			]);
		}

		const menuItemsJSX = menuItems.map((tab, index) => (
			<Link key={index} href={tab.pathname} passHref>
				<div className={styles.tabItem} onClick={onItemClick}>
					<span className={styles.tabLabel}>{tab.name}</span>
				</div>
			</Link>
		));

		if (onLogout) {
			menuItemsJSX.push(
				<div key={menuItems.length} className={styles.tabItem} onClick={logout}>
					<span className={styles.tabLabel}>Logout</span>
				</div>
			);
		}

		return menuItemsJSX;
	}

	return (
		<div className={styles.mobileMenu}>
			<MenuItems/>
		</div>
	);
}

export const MobileNavigation = ({ isOpened, onToggle, onLogout }) => {
	return (
		<nav className={styles.mobileNavigation}>
			<LogoButton/>
			{!isOpened && (
				<div className={styles.openMobileMenuButton} onClick={onToggle}>
					<FontAwesomeIcon icon={faBars}/>
				</div>
			)}
			{isOpened && (
				<div className={styles.closeMobileMenuButton} onClick={onToggle}>
					<FontAwesomeIcon icon={faXmark}/>
				</div>
			)}
			{isOpened && (
				<MobileMenu
					onItemClick={onToggle}
					onLogout={onLogout}
				/>
			)}
		</nav>
	);
};