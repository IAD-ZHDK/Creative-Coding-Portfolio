<div align="center">
    <h1>👨‍💻 Creative Coding Portfolio 👩‍💻</h1>
</div>
 
Please refer to the following instructions in order to set up your portfolio page for the Creative Coding course.

## Github Pages 

- Download [Github Desktop](https://desktop.github.com/)
- Follow the instructions to create your [Github Pages website](https://pages.github.com/)
- Download this respository by clicking on Code --> Download ZIP
- Move the files inside of this repository into your Github Pages respository named xyz.github.io, where xyz is your username
- Commit and push the changes to your Github Pages repository
- Go to your Github Pages website and check if everything is working correctly

## Repository Structure

```bash
│   ├── index.html
│   ├── student.json  
│   ├── css
│   │   ├── style.css
│   │   ├── utilities.css
│   ├── favicon
│   │   ├── favicon.ico
│   ├── projects
│   │   ├── 01variables
│   │   │   ├── project1 
│   │   │   ├── ....  
│   │   ├── 02functions
│   │   ├── 03conditionals
│   │   ├── 04loops
│   │   ├── 05arrays
│   │   ├── 06easing functions
│   │   ├── 07coordinate system
│   │   ├── 08oop
│   │   ├── 09libraries
│   │   ├── 10vectors
│   │   ├── 11images
│   │   ├── 12other
│   │   ├── 13main assignments
│   ├── script
│   │   ├── script.js
├── README.md
└── .gitignore
```

Depending on the number of projects you have, in each of the folder you have to create a project subfolder. The subfolder should be named **project1, project2, etc**. Inside of each project subfolder, you should have the following files. **IMPORTANT! The files have to be named exactly as below:**

```bash
│   ├── project1
│   │   ├── index.html
│   │   ├── sketch.js
│   │   ├── thumbnail.jpeg (.png or .jpg extension are also fine)
```

Other files such as `style.css` are optional.

## JSON file

In student.json you have to add your personal information.  

```bash
"name": "Max Muster" *put your name here*
    "projects": [ 
        {
        "folder": "01variables", 
        "projectNumber": "3" *put the number of projects you have in 01variables folder  
        },
        ....
    ]      
```

For example, if you created three subfolders like this:
    
    ```bash
    │   ├── 01variables
    │   │   ├── project1
    │   │   ├── project2
    │   │   ├── project3
    ```

Then you have to put the number **3** in the `projectNumber` field.

<div align="center">
    <h1>✨ p5.js Project Page ✨</h1>
</div>

- In order to create a project page, go to extensions tab (in the panel on the left side) and search for **p5 Project Creator**. 
- Install the extension.
- Open projectXYZ folder, where XYZ is any number.
- Inside of projectXYZ create a new p5.js project by pressing <kbd>cmd</kbd> +<kbd>⇧</kbd>+<kbd>p</kbd> (Mac) or <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>p</kbd> (Windows). In the pop-up window type **p5**. Select **Create P5 Project**. 
- Give your project any name. This name will appear as the title when you open it in a new tab.

Now you have a folder consiting of `index.html` and `sketch.js` files. Do not change anything in `index.html` except if you want to work with external libraries or add DOM elements. 

Copy your code from **openprocessing** inside of `sketch.js`.

## Adding images

Please make sure that you add a screenshot of your sketch and name it **thumbnail**. The extension of the image must be **.jpeg**, **.png** or **.jpg**. You can ignore all **404 (Not Found)** that refer to thumbnail in the console.
