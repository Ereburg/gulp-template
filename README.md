# HTML5 Template (Pug, SCSS, JS)
This is starter template for HTML development.
It includes Pug, Sass/SCSS, JS compilers and image convertors. It uses best practices for responsive images optimizing.

### How to use: 
All output files already are compressed, prefixed, minified and renamed.
1. Your work folder - **`./app`**.
2. `app` folder contains raw files that converts and outputs to `build` folder, so you should be careful when type paths to the files;
> it means that output files saves to `build` folder and all paths to files (images, scripts, styles) that yout type in raw files should be written like if you are in `build` folder. 
3. Gulp's tasks are in `gulp` folder. I decided to split up tasks to several files. If you want change tasks - go to the folder.
4. There are 5 initial tasks: 
  * `server`, 
  * `scripts`,
  * `styles`, 
  * `images`,
  * `pug`.
5. `server` task works with `build` folder.
6. Task `scripts` consists of 2 tasks: 
* `scripts-libs` **for libraries**, that contains in `app/scripts/libs` folder where you can put your .js libraries, that compiles your custom js to `build/scripts/libs.min.js`
* `scripts-main` that compiles your **custom** .js to `build/scripts/scripts.min.js`.
7. Task `style` converts Sass/SCSS files `*.{scss,sass}` to `build/styles/*.min.css`. By default **PurgeCSS** is off, you can change it in `styles.js: WhiteListsPatterns` by uncommenting it.
8. Task `images` starts up **after** all necessary files are putted into `./app/images/` folder. This task consists of several sub-tasks:
- `img:responsive` - create `responsive` folder with 2 subfolders: `@1x` and `@2x`, then converts the original images with 50% and 100% of original width and then puts files to its' paths. 
> it means that you should use pictures that are **already have** retina sizes or **2x resolution**. Or simply put your optimized images into `responsive` folder.
- After that `tiny` task compress all image .png/.jpg/.jpeg types and replace them to `./build/images/`. Max image per time - 10;
- `webp` task converts to .webp format all files in `./build/images/` and puts them into the same folder;
- `sprite` task works with `sp-*.svg` files in `./app/images/sprite` folder and compiles them into one file - `sprite.svg` and puts it in `./build/images/`;
- `svg:remove` task simply replace all non-`sp-*.svg` files to the `./build/images/`;
> if you once done `images` task, you don't need to repeat it.
9. Task `pug` converts Pug files `*.pug` to `build/*.html`. 

##### How to use `sprite.svg`? 
To get the acces to the svg-files in sprite.svg just put this code in your .html/.pug file:
- `<svg class="YOUR_CLASS"> <use xlink:href="images/sprite.svg#sp-YOUR_ID"></use> </svg>` - for HTML;
- `svg(class="YOUR_CLASS"): use(xlink:href="images/sprite.svg#sp-YOUR_ID")` - for Pug.
YOUR_ID is file name before compression. 

### StyleLint
I included StyleLint and its' plugins for better code accuracy and unified style guide. Plugins that were used:
`stylelint, stylelint-config-htmlacademy, stylelint-config-rational-order, stylelint-order`.
To use Linter you should write: 
- `npm run style:lint` to see the necessary changes according to Linter's config 
- `npm run style:fix` to fix the issues.

### Lazy loading images

Lazy loading img & background images using intersection observer. Enabled by default.

Reference: [Google Developers](https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/#using_intersection_observer "Hallo, its me!").

1. Example of the **usual `img` tag**:

`img class="lazy" src="thumb.gif" data-src="img/@1x/real.jpg" data-srcset="img/@1x/real.jpg 1x, img/@2x/real.jpg 2x"`

2. **Background image class** changer example: `div class="lazy-background"` with added class ".visible" for styling.

3. **Background image style** attribute lazy loading example: `div data-bg="image.jpg"`.

## Well, thats all. Enjoy! :D