Now we know


<div id="register" class="right">

external css links (subject to css specificity)
    <link rel="stylesheet" href="css/grid.css">        #register   background:
    <link rel="stylesheet" href="css/resume.css">      .right   background:

structure of tables (great for tabular data) => spreadsheet
    <table>
        <tr>
            <th>Title</th>
            <th>Price</th>
        </tr>
        <tr>
            <td>VW Bug</td>
            <td>2000</td>
        </tr>
        <tr>
            <td>AMC Rambler</td>
            <td>1500</td>
        </tr>
    </table>
bootstrap is a css library
    - one of many (foundation, materialize, material design, w3)
    - using a css library means finding an example of what you want (layout-wise)
    - using the html structure and class names the docs tell you to

box size: border-box
    - means that width property will include content width and padding and border. 

floats: break elements out of the normal flow of the document
two use cases for floats:
- floating text around an image
- layout (pay attention to css grid and flexbox)

syntax errors
    - great when you get some notification them
    - CSS syntax errors just don't render the css nearby

vertically centering is stupidly difficult
    - https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook/Center_an_element
    - or use utility class in a css framework

css :root (use to specify css variables)

offsets and grids   -> grids are powerful and offsets are helpful
anchor tags -> there is no www without anchor tags
git add             stages which files we want to add to a commit
git commit -m       sealing and timestamping those changes in an envelope
git push            uploading the envelope of commit(s) to a remote

don't do a bunch of git inits:
    - do once per project when you're starting from scratch
    - if you "git clone", the git init already happened

label your inputs
    -> good practice that people and search engines love

media query min screen and max screen size
    -> allow if your screen is a specific size or range, then apply this CSS