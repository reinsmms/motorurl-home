MotorURL Home – Part 03 – Patch
Includes-based header, without breaking the existing app shell.

Changes applied to existing index.html:
- Adds <link rel="stylesheet" href="css/header.css" />
- Inserts <div id="header-include"></div> after <body>
- Removes the sidebar top 'brand' block (logo + Home text)
- Adds fetch() loader for /includes/header.html before existing scripts

New files:
- /includes/header.html
- /css/header.css

Install:
1) Copy the files from this zip into your repo, preserving folders.
2) Replace your existing index.html with this one (or merge the diff).
3) Live Server test, then commit + deploy.
