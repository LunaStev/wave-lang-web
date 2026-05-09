import React from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import {ErrorCauseBoundary, useThemeConfig} from '@docusaurus/theme-common';
import {
    NavbarProvider,
    splitNavbarItems,
    useHideableNavbar,
    useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import NavbarItem from '@theme/NavbarItem';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarMobileSidebar from '@theme/Navbar/MobileSidebar';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarSearch from '@theme/Navbar/Search';
import SearchBar from '@theme/SearchBar';

import styles from './styles.module.css';

type NavbarItemConfig = Record<string, unknown>;

function NavbarItems({items}: {items: NavbarItemConfig[]}): JSX.Element {
    return (
        <>
            {items.map((item, index) => (
                <ErrorCauseBoundary
                    key={index}
                    onError={(error) =>
                        new Error(
                            `A theme navbar item failed to render.
Please check this item in themeConfig.navbar.items:
${JSON.stringify(item, null, 2)}`,
                            {cause: error},
                        )
                    }>
                    <NavbarItem {...(item as React.ComponentProps<typeof NavbarItem>)} />
                </ErrorCauseBoundary>
            ))}
        </>
    );
}

function NavbarContent(): JSX.Element {
    const {
        navbar: {hideOnScroll, items, style},
    } = useThemeConfig();

    const mobileSidebar = useNavbarMobileSidebar();
    const {navbarRef, isNavbarVisible} = useHideableNavbar(hideOnScroll);
    const [leftItems, rightItems] = splitNavbarItems(items);

    const searchBarItem = items.find(
        (item) => (item as {type?: string}).type === 'search',
    );

    return (
        <nav
            ref={navbarRef}
            aria-label={translate({
                id: 'theme.NavBar.navAriaLabel',
                message: 'Main',
                description: 'The ARIA label for the main navigation',
            })}
            className={clsx(
                'navbar',
                'navbar--fixed-top',
                styles.navbar,
                hideOnScroll && [
                    styles.navbarHideable,
                    !isNavbarVisible && styles.navbarHidden,
                ],
                {
                    'navbar--dark': style === 'dark',
                    'navbar--primary': style === 'primary',
                    'navbar-sidebar--show': mobileSidebar.shown,
                },
            )}>
            <div className={clsx('navbar__inner', styles.inner)}>
                <div className={clsx('navbar__items', styles.items, styles.itemsLeft)}>
                    {!mobileSidebar.disabled && (
                        <div className={styles.mobileOnly}>
                            <NavbarMobileSidebarToggle />
                        </div>
                    )}

                    <div className={styles.logo}>
                        <NavbarLogo />
                    </div>

                    <div className={styles.desktopOnly}>
                        <NavbarItems items={leftItems} />
                    </div>
                </div>

                <div
                    className={clsx(
                        'navbar__items',
                        'navbar__items--right',
                        styles.items,
                        styles.itemsRight,
                    )}>
                    <div className={styles.desktopOnly}>
                        <NavbarItems items={rightItems} />
                    </div>

                    <NavbarColorModeToggle className={styles.colorModeToggle} />

                    {!searchBarItem && (
                        <div className={styles.search}>
                            <NavbarSearch>
                                <SearchBar />
                            </NavbarSearch>
                        </div>
                    )}
                </div>
            </div>

            <div
                role="presentation"
                className={clsx('navbar-sidebar__backdrop', styles.backdrop)}
                onClick={mobileSidebar.toggle}
            />

            <NavbarMobileSidebar />
        </nav>
    );
}

export default function Navbar(): JSX.Element {
    return (
        <NavbarProvider>
            <NavbarContent />
        </NavbarProvider>
    );
}