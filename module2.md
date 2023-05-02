# if i run tsc index.ts file then it will make a equivalent javascript code.

# to run typescript install typescript config file . cmd: [tsc --init]

**> to restart the server automatically, use nodemone .
for this , first create a package.json file by [npm init -y]
then [npm i -D nodemon] .**

# To run typescript into the node environment install ts-node-dev package. [npm i ts-node-dev]

# using "ts-node-dev --respawn --transpile-only index.ts" at start , there will be no need for nodemon .

**We can set src folder for typescript code at tsconfig file then at [rootDir] and choose the dist folder where js code will be complied at[outDir]**
