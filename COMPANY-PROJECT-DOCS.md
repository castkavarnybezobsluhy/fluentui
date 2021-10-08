# Company project - documentation

## Introduction
The goal of my internship at Microsoft was to deliver a documentation system for beta version of a component library Fluent UI React v9. My contribution consists of the following parts. Each is described in more detail in the rest of the document:
1. Proposing changes to internal RFC about using Storybook
2. Button documentation
3. Export to CodeSandbox
4. New design for Storybook

The main deliverable is a significantly improved version of [Fluent UI React v9 documentation site](https://fluentuipr.z22.web.core.windows.net/pull/19983/react-components/storybook/index.html?path=/docs/components-badge--default).

## 1. Proposing changes to internal RFC about using Storybook
[Storybook](https://storybook.js.org) is an open-source system, which is used by component library developers to organize examples of component usage. The development team of Fluent UI React v9 was already using Storybook for this purpose. My work was to determine what needs to be changed for us to use Storybook as a documentation system. 

The result of this is an extended version of an internal RFC - a document that lists conventions and best practices that every developer in the team needs to follow when examples of how to use components.

The most recent version of the RFC is accessible here:
https://github.com/PeterDraex/fluentui/blob/rfc/authoring-stories2/rfcs/convergence/authoring-stories.md

## 2. Button documentation
After setting conventions and best practices for using Storybook, I've rewritten [documentation page for Button component](https://fluentuipr.z22.web.core.windows.net/pull/19983/react-components/storybook/index.html?path=/docs/components-button--default). I went through multiple interations of the documentation, taking use case of other components into account. This documentation serves as an example to other developers for writing documentation for their components.

## 3. Export to CodeSandbox
The next part of my work was to create a Storybook addon, which enables export of code examples from the documentation to CodeSandbox. To enable development of this plugin within reasonable timeframe, we require that each code example is placed in it's own file. Then, we use a babel plugins to make source code of this file accessible from the Storybook addon, while avoiding the need to duplicate the source code. Storybook addon then uses CodeSandbox API to generate an URL which creates a sandbox with the code example.

User documentation and source code of this addon are accessible at:
https://github.com/microsoft/fluentui-storybook-addons/tree/main/storybook-addon-export-to-codesandbox

Addon usage can be seen here:
https://github.com/microsoft/fluentui/pull/19583/files

## 4. New graphic design
During the last week of my internship I had a chance to cooperate with designers to improve appreance of the documentation. The work was done by adding CSS styles to an iframe where the documentation pages are displayed. The results of my work can be seen on the [Button documentation page](https://fluentuipr.z22.web.core.windows.net/pull/19983/react-components/storybook/index.html?path=/docs/components-button--default).

## Conclusion
My internship was set in a complex environment, where I got to cooperate with developers, designers and program managers from four continents. My original plan for the project suffered from the classical problems of underestimation of time necessary for development. The documentation system I've delivered is far from perfect, and will require my former colleagues to continue in the work, but I've moved the documentation forward and am leaving a path for the future work in [GitHub project 51](https://github.com/microsoft/fluentui/projects/51). This work was done over course of 3 months of full time work, with 13 days of overtime. The company was very satisfied with my performance, as illustrated by an excerpt from my performance review:
> Thank you for your contribution during the internship. You really brought the documentation to great level, right in time for the beta release. Besides excellent engineering and technical skills, you demonstrated strong drive for results. In a complex environment, where we collaborate closely with OXO team, designers, PMs and various consuming teams of the library, this one is especially helpful. [...] For an intern, you demonstrated unusual maturity and experience
