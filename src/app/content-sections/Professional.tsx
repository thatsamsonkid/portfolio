"use client";

import { Tab, Tabs } from "@fuego-ui/react";
import React from "react";

const Professional = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-left mb-6">
        Professional Experience
      </h1>
      <Tabs fullWidth={true}>
        <Tab label="Full Time">
          <h2 className="mb-1">
            Amtrak –{" "}
            <span className="text-ocean-blue italic">
              Lead Software Engineer
            </span>
          </h2>
          <p className="text-xs mb-3">Aug 2018 – Present</p>
          <ul className="list-disc space-y-4">
            <li>
              Leading development for various projects primarily for
              Amtrak.com's booking flow
            </li>
            <li>
              Planning out app features and breaking down business requirements
              into workable stories for the team.
            </li>
            <li>
              Leading Tech workshops to further the team's development and
              knowledge of both our Applications and the underlying technologies
              that they run on
            </li>
            <li>
              Often conduct research and develop Proof of Concept's for new App
              features, libraries or tool integrations within our code base
            </li>
            <li>Leading efforts to improve Amtrak.com site Performance</li>
            <li>
              Developing internal tools to help improve Dev and QA process
            </li>
            <li>
              Working with the team to establish and uphold code quality and
              standards
            </li>
            <li>
              Developing new sites and migrating existing sites to the AEM
              platform
            </li>
            <li>
              Created technical diagrams to aid visualization of architecture
              and complex flows
            </li>
            <li>Developed web components and applications in Angular</li>
            <li>
              Co-lead Angular development efforts for Amtrak’s Style Guide and
              Component Library
            </li>
            <li>
              Working on the new version of Amtrak’s $4 billion booking site
            </li>
            <li>
              Developed and provided support for several Amtrak micro-sites
            </li>
            <li>Debugged and upgraded existing applications</li>
            <li>Provided development support for Amtrak’s Alexa App</li>
            <li>
              Recommended and executed both design and performance improvements
              on various Amtrak applications
            </li>
            <li>
              Worked closely with developers, UX designers, and stakeholders to
              accomplish project goals
            </li>
          </ul>
        </Tab>
        <Tab label="Contractor">
          <div className="mb-6">
            <h2 className="mb-1">
              Anheuser-Busch InBev –{" "}
              <span className="text-ocean-blue italic">Software Engineer</span>
            </h2>
            <p className="text-xs mb-3">Sep 2020 – Oct 2021</p>
            <ul className="list-disc ml-4 text-sm md:text-md space-y-4">
              <li>
                Lead development work to migrate brands sites in single
                mono-repo
              </li>
              <li>
                Lead development work to improve code base to pass Adobe
                Security testing and Cloud compatibility on Adobe Cloud.
              </li>
              <li>
                Created technical documents and process workflows to define
                Adobe Cloud development
              </li>
              <li>
                Developed several surveys to collect customer feedback and
                improve MyCooler experience for customers. (New Customer and
                Rewards Redemption)
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-1">
              Stantec –{" "}
              <span className="text-ocean-blue italic">Software Engineer</span>
            </h2>
            <p className="text-xs mb-3">Apr 2021 – May 2021</p>
            <ul className="list-disc ml-4">
              <li>
                Lead development work to resolve over 20k ADA issues site wide
                to up hold ADA compliance in accordance to Canadian regulations
              </li>
            </ul>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Professional;
