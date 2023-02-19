"use client";

import { Tab, Tabs } from "@fuego-ui/react";
import React from "react";

const Professional = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-left mb-6">Projects</h1>
      <Tabs scrollable={true}>
        <Tab label="Full Time">Bao wow</Tab>
        <Tab label="Contractor">Boom</Tab>
        <Tab label="Internship">Boom</Tab>
      </Tabs>
    </div>
  );
};

export default Professional;
