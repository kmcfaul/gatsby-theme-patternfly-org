---
title: Design with PatternFly
---
import './get-started.css';

Whether you are converting from a PatternFly 3 application or starting fresh with the latest and greatest PatternFly design system, this document is intended to help provide designers with information regarding resources and support available.

## Getting the design kit

### Before you begin
The design kit works with Sketch libraries.

 To use it, you need to install [Sketch](https://www.sketch.com/) version 47 or above. For users who do not have access to Sketch, a subset of functionality from our Sketch files, like symbols and fonts, can be imported and used in the free design tool, [Figma](https://www.figma.com/). Learn more about importing Sketch files in [the Figma documentation](https://help.figma.com/article/81-import).

### Download the template file
1. Access the [PatternFly template file](https://sketch.cloud/s/R9k28) on Sketch cloud.
2. Click **Download Document** to open the file. Then, click **File** →  **Save as template**.

![sketch-cloud](./img/sketch-cloud.png)

### Add the symbol library
3. Access the [PatternFly design library](https://sketch.cloud/s/gb1ka) on Sketch cloud.
4. Click Add library to Sketch on the bottom right to add the library. You'll be prompted with a modal. Click Add library to Sketch again. Sketch will show you the library in your preferences window.

### Download the font
5. PatternFly currently uses the Overpass font. To download it, go to https://overpassfont.org/ and select **Desktop OTF files**.

## What's in the design kit?

### The template file

The template file contains complex components and demos like charts and forms that make it faster and easier for you to add common design patterns to your wireframes. To view template examples click [here](https://www.patternfly.org/v4/documentation/core/demos/aboutmodal).

The contents of the template file are organized alphabetically by component or demo name. If you want to use any of the artboards in the template file to create custom designs, you should follow these rules:
1. Unhide “padding” group (this group contains all of the spacers we use to create the design)
2. Edit the design as desired using the spacers as your guide

### The symbol library
The PatternFly symbol library contains individual components like buttons, alerts, and badges, that can be combined in any number of ways to solve common design problems. If you’re unfamiliar with Sketch symbols, it might be helpful to skim [this guide](https://www.sketch.com/docs/libraries/library-symbols) before you get started.

You can use any symbol offered in the Sketch symbol library to create your design. If you have any questions or need any clarification, you can post to the [PatternFly forum](https://forum.patternfly.org/). If you have any feedback about certain features or encounter a bug, you can file an issue against [patternfly-design-kit](https://github.com/patternfly/patternfly-design-kit/issues) on GitHub.

#### Navigating the symbol library
There are two kinds of symbols - library symbols and document symbols. Library symbols are available in any Sketch document, while document symbols are specific to the document in which they are found.

From the top toolbar in Sketch, select Insert → Symbols → Patternfly 4 to add symbols onto your page.

PatternFly symbols are designed to be as flexible and adaptable as possible. As such, designers should avoid detaching symbols from the library. However, there are rare instances where this may be necessary. Just know that once a symbol is detached, that symbol will no longer automatically update with new releases.

![Symbol-library](./img/symbol-library.png)

## Using the design kit
It’s important to understand some specific aspects about the design kit and the assets contained inside to make the most of the design system.

* [Spacers](#spacers)
* [Layers styles](#layer-styles)
* [Text styles](#text-styles)

### Spacers
The layout for all visual elements in Patternfly is determined by spacers. The spacers are used as padding between elements to ensure consistent layout and placement of components into a design that adhere to PatternFly guidelines. All symbols in the symbol library and templates have been made using spacers which are built-in to ensure correct use of elements.

The [template library](https://sketch.cloud/s/R9k28) also contains examples of spacer use to clarify where elements should be placed within a given page or design.  These templates have been created in a way that reduces a user’s need to think about spacers. An example of a Login form template can be seen here with different sized spacers - demonstrated by their different colors - used to separate each symbol/component within the layout.

To see more information about spacers and their use please click [here](https://www.patternfly.org/v4/design-guidelines/styles/spacers).

### Layer styles
Symbols in the symbol are organized by component; after selecting a component, you’ll see the variations and states of that component.

For some components, you will have the option to customize them to your need by overriding certain layer styles and text labels from the sidebar on the right.

Layer styles are color selections for symbols in Sketch.

![layer-styles](./img/layer-styles.png)

Colors in PatternFly are carefully considered, and custom layer styles are discouraged. There are specific color options to choose from for backgrounds, borders, icons and states, as well as an expansive color library for other elements that do not necessarily fit into a certain category.

Note that there is a difference between regular color options and chart color fill options. When changing a color in a chart, you should only use the colors in the chart fill “dropdown”, which includes fills for donut charts, line charts and regular bar charts. When changing the color of other elements, you should use the general color palette if the component does not fit into the other offered category options.

### Text styles
Currently, all PatternFly text styles use Overpass font. If you have not done so already, make sure to download [here](https://overpassfont.org/) before starting your designs.

When inserting text into your design, always assign it a text style by selecting the text item, followed by selecting a text style from the appearance menu on the right toolbar.

## Designing with PatternFly
PatternFly offers a variety of resources to help you make the most of the design system, including design guidelines for style, content, and component usage and behavior. You can use these assets in combination with the design kit to create consistent and usable product experiences.

### Style guidelines
What typography should you be using? What about colors? Spacing? Check out styles to learn everything you need to know about our foundational design elements.

[**View styles**](/design-guidelines/styles/colors) <i class="ws-content-blueArrow fas fa-arrow-right pf-u-mx-sm"></i>

### Get familiar with usage and behavior guidelines.
Should you use a wizard or a form to solve this problem? How do you write a good button label? Which navigation makes the most sense? Check out our design guidelines to choose and use the right components for your use case.

[**Usage and behavior guidelines**](/design-guidelines/usage-and-behavior/about-modal) <i class="ws-content-blueArrow fas fa-arrow-right pf-u-mx-sm"></i>

### Content guidelines
How do you write great microcopy and text for your user interface? Read our content guidelines for general principles, guidance on voice, and a style guide to help you with everything from capitalization to date and time formats.
View content guidelines

[**View content guidelines**](https://www.patternfly.org/v4/design-guidelines/content/writing) <i class="ws-content-blueArrow fas fa-arrow-right pf-u-mx-sm"></i>



### Start building with components.
What does a toolbar look like? What about a filter chip? Components are the building blocks of the design system. Check out individual component pages to view examples, understand states and behaviors, and check out the code samples (if you’re into that kind of thing).

[**View HTML/CSS components**](/documentation/core) <i class="ws-content-blueArrow fas fa-arrow-right pf-u-mx-sm"></i>

[**View React components**](/documentation/react) <i class="ws-content-blueArrow fas fa-arrow-right pf-u-mx-sm"></i>

### Still feeling unsure?
 See all the pieces working together with demos.

[**View HTML/CSS demos**](/documentation/core/demos) <i class="ws-content-blueArrow fas fa-arrow-right pf-u-mx-sm"></i>

[**View React demos**](/documentation/react/demos) <i class="ws-content-blueArrow fas fa-arrow-right pf-u-mx-sm"></i>


## Staying up to date
Adjustments and bug fixes are made to the kit on a regular basis. When we make a change to any of the libraries, you will be notified via a purple pop-up in the top right corner of the Sketch window that says “Shared Library Update Available”. To update, simply click on the pop-up and followed by “download” to update your library.

We recommend that you keep your kit as up to date as possible. Once a change is accepted, you will not be able to revert to the previous version.

Please note that the Patternfly template will NOT be automatically updated as the symbol library is. Therefore, we have added a date to the top of the artboard on the “About this document” page to track the most recently updated version. Every time this template file is updated, you will need to re-download and re-save this as a template.

Did you use the old versions of the symbols that were updated in files already? No problem -  you will receive another notification in the top right of that specific Sketch file that will allow you to update them.
