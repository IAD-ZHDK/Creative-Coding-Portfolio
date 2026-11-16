<div align="center">
    <h1>Creative Coding Portfolio</h1>
</div>
 
Please refer to the following instructions in order to set up your portfolio page for the Creative Coding course.

## Github Pages 

- Download [Github Desktop](https://desktop.github.com/)
- Follow the instructions to create your [Github Pages website](https://pages.github.com/)
- Download this respository by clicking on Code -> Download ZIP
- Move the files inside of this repository into your Github Pages respository named xyz.github.io, where xyz is your username
- Commit and push the changes to your Github Pages repository using Github Desktop
- Go to your Github Pages website and check if everything is working correctly

## Repository Structure

```bash
│   ├── index.html          # split-screen intro page (links to the two projects)
│   ├── fonts
│   │   ├── Suisse.ttf       # custom font used by the intro page
│   ├── favicon
│   │   ├── favicon.ico
│   ├── projects
│   │   ├── project1 
│   │       ├── ....  
│   │   ├── project2 
│   │       ├── ....  
├── AI.md                   # your AI-usage documentation (template provided)
├── README.md
└── .gitignore
```

The intro page (`index.html`) is a self-contained split-screen that links directly to the two projects. To change which projects it shows, or their labels, edit the two `<a class="half">` blocks in `index.html`.

There are two project subfolders, **project1** and **project2**. Each one contains the following files: **IMPORTANT! The files have to be named exactly as below:**

```bash
│   ├── project1
│   │   ├── index.html
│   │   ├── sketch.js
│   │   ├── thumbnail.jpeg (.png or .jpg extension are also fine)
```

Other files such as `style.css` are optional.

<div align="center">
    <h1>Editing Your Projects</h1>
</div>

Each project already has an `index.html` and a `script.js`. You only need to edit `script.js` — do not touch `index.html`.

- **Edit `script.js`** — paste your sketch code (e.g. from **openprocessing**) into `script.js`. This is the only file you need to change.
- **Add fonts and other assets** (images, `.csv` data, `.otf`/`.ttf` fonts, …) directly inside the same project folder, next to `script.js`, and reference them by file name in your code.
- **Replace the thumbnail** — once your sketch looks the way you want, take a screenshot of it and save it over `thumbnail.png` in the project folder (keep the name `thumbnail.png`). This is the image shown for the project on the intro page.

<div align="center">
    <h1>Documenting Your AI Usage</h1>
</div>

Using AI tools is allowed — but you have to **document and explain how you used them**. There is one `AI.md` file at the top level of the repository, with a section for each project — just fill it in. If you did not use any AI tools for a project, say so under that project.

In `AI.md`, briefly answer for each project:

- **Which tools?** Name the AI tools you used (e.g. ChatGPT, Claude, GitHub Copilot, Midjourney, an image or sound generator, …).
- **What for?** Describe where AI helped — generating ideas, writing or debugging code, creating visual/audio assets, explaining a concept, refactoring, etc.
- **How?** Include the key prompts you used, or a short summary of the back-and-forth. Be specific enough that someone could follow your process.
- **Your contribution.** Explain what *you* decided, changed, rejected, or built on top of the AI's output. What creative and technical choices were yours?
- **Reflection.** One or two sentences: what worked well, what didn't, and what you learned about using AI as a creative tool.

Be honest and specific. The goal is not to hide AI usage but to make your process transparent and to show your own creative and critical thinking.

`AI.md` is a Markdown file. If you are unsure how to format text, headings, lists or links, see the [Markdown basic syntax guide](https://www.markdownguide.org/basic-syntax/).