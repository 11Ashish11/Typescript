# Typescript Linkedin Course

# Use tsc to compile typscript file

# We can also add types to js files
# Write this below lines in comments in top of the page of variables you want to have type
# /**
# * @param {number} variableName
# * @returns
# */

# Importing third-party Types
# You can import them from github repo .. Name -> DefinatelyTyped
# Or install them by using  @type in npm officail page


# Exercise
# How will you convery an existing js file to ts (In the name specifed folder) and same vice versa
# You can do this by writing this 2 below lines the tsconfig file under compilerOptions
# "target": "ES6", 
# "outDir": "build",


# Ok now compiling for webApplications is not as straight forward.
# It cannot be done with as simple as just adding some property in tsconfig.js file
# for compiling for web Applications, we need webpack or parcel
# Read more about them to know more


