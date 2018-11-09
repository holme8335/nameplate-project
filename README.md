# nameplate-project


step 1
-------------
Include Images folder in assets folder.

step 2
------------------
include svg component in app folder.

step 3
----------------------
open package.json

	"scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "svgp": "node .\\src\\assets\\Images\\im-svg-preview.js"
  },

  add "svgp": "node .\\src\\assets\\Images\\im-svg-preview.js" 

step 4
---------------------
use case
	html
	<app-svg sIconId="im-np-storageOneDrive" class="im-np-storageOneDrive"></app-svg>

	styling in scss

 	.im-np-storageOneDrive ::ng-deep svg{
    		width:50px;
    		height: 50px;
    		--primary-color: red;
    		--secondary-color : green;
	}

	.im-np-storageOneDrive:hover ::ng-deep svg{
    
    		--primary-color: green;
    		--secondary-color : red;
	}

Note: please follow the steps, paths are referenced accordingly.

step 5:
----------------------
'npm run svgp' is the command to see the image preview. Type this command in project terminal.
