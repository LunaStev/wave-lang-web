import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

type Action = {
  label: string;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary';
};

type Card = {
  title: string;
  description: string;
  to?: string;
  href?: string;
  badge?: string;
};

type Section = {
  kicker: string;
  title: string;
  lead?: string;
  cards: Card[];
};

type Props = {
  eyebrow: string;
  title: string;
  lead: string;
  actions: Action[];
  sections: Section[];
  asideTitle: string;
  asideBody: string;
  asideCode?: string;
};

export default function SectionPage(props: Props): JSX.Element {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.eyebrow}>{props.eyebrow}</p>
              <Heading as="h1" className={styles.title}>
                {props.title}
              </Heading>
              <p className={styles.lead}>{props.lead}</p>

              <div className={styles.actions}>
                {props.actions.map((action) => (
                  <Link
                    key={`${action.to ?? action.href}-${action.label}`}
                    className={clsx(
                      'button',
                      action.variant === 'secondary' ? styles.secondaryAction : styles.primaryAction,
                    )}
                    {...(action.href ? {href: action.href} : {to: action.to})}>
                    {action.label}
                  </Link>
                ))}
              </div>
            </div>

            <aside className={styles.aside}>
              <Heading as="h2">{props.asideTitle}</Heading>
              <p>{props.asideBody}</p>
              {props.asideCode ? (
                <pre>
                  <code>{props.asideCode}</code>
                </pre>
              ) : null}
            </aside>
          </div>
        </div>
      </section>

      {props.sections.map((section, index) => (
        <section
          key={`${section.kicker}-${section.title}`}
          className={clsx(styles.section, index % 2 === 1 && styles.altSection)}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <p className={styles.sectionKicker}>{section.kicker}</p>
              <Heading as="h2" className={styles.sectionTitle}>
                {section.title}
              </Heading>
              {section.lead ? <p className={styles.sectionLead}>{section.lead}</p> : null}
            </div>

            <div className={styles.cardGrid}>
              {section.cards.map((card) => {
                const content = (
                  <>
                    {card.badge ? <span>{card.badge}</span> : null}
                    <Heading as="h3">{card.title}</Heading>
                    <p>{card.description}</p>
                  </>
                );

                if (card.href) {
                  return (
                    <Link key={card.title} href={card.href} className={styles.card}>
                      {content}
                    </Link>
                  );
                }

                if (card.to) {
                  return (
                    <Link key={card.title} to={card.to} className={styles.card}>
                      {content}
                    </Link>
                  );
                }

                return (
                  <article key={card.title} className={styles.card}>
                    {content}
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
