import React from 'react';
import aboutImage from '../../assets/images/Account.png';
import './AboutPage.scss';
import { PageInfo } from '../../components/PageInfo/PageInfo';
import { Timeline } from '../../components/Timeline/Timeline';
import { SkillsContainer } from '../../components/SkillsContainer/SkillsContainer';

const pageInfo = {
  header: 'About me.',
  text: 'Long story short. A few words about myself.',
  image: aboutImage,
};

export const AboutPage: React.FC = () => {
  return (
    <section className="about-page-container">
      <PageInfo {...pageInfo}></PageInfo>
      <Timeline />
      <SkillsContainer />
    </section>
  );
};
