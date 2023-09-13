import React from 'react'

import { Helmet } from 'react-helmet'

import AndrewCasparius from '../components/andrew-casparius'
import NavigationLinks from '../components/navigation-links'
import Nav from '../components/nav'
import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Andrew Casparius</title>
        <meta property="og:title" content="Page - Andrew Casparius" />
      </Helmet>
      <header data-role="Accordion" className="page-header">
        <img alt="image" src="/headshot%202-200w.jpg" className="page-image" />
        <AndrewCasparius rootClassName="andrew-casparius-root-class-name3"></AndrewCasparius>
        <div className="page-separator"></div>
        <div className="page-container1">
          <NavigationLinks rootClassName="rootClassName21"></NavigationLinks>
          <Nav
            rootClassName="nav-root-class-name5"
            className="page-resume"
          ></Nav>
        </div>
        <div data-role="AccordionContent" className="page-accordion-content">
          <div className="page-nav">
            <NavigationLinks rootClassName="rootClassName22"></NavigationLinks>
          </div>
        </div>
      </header>
      <div className="page-banner">
        <h2 className="page-text">
          Error 404 The page you were looking for could not be found.
        </h2>
      </div>
      <footer className="page-footer">
        <a
          href="https://mailto:andrewcasparius@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
          className="page-link"
        >
          <svg viewBox="0 0 1024 1024" className="page-icon">
            <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/andrew-casparius-a680aa241/"
          target="_blank"
          rel="noreferrer noopener"
          className="page-link1"
        >
          <svg viewBox="0 0 877.7142857142857 1024" className="page-icon2">
            <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
          </svg>
        </a>
      </footer>
    </div>
  )
}

export default Page
