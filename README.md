# Gulp Template
> This is an lightweight starter HTML5 template with Gulp 4, Sass, Browsersync, Autoprefixer, Uglify, CSSO, HTMLMIN, PurgeCSS. It uses best practices for responsive images optimizing.


## Lazy loading images

Lazy loading img & background images using intersection observer. Enabled by default.

Reference: [Google Developers](https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/#using_intersection_observer "Нужна помощь?").

1. Example of the **usual `img` tag**:

`img class="lazy" src="thumb.gif" data-src="img/@1x/real.jpg" data-srcset="img/@1x/real.jpg 1x, img/@2x/real.jpg 2x"`

2. **Background image class** changer example: `div class="lazy-background"` with added class ".visible" for styling.

3. **Background image style** attribute lazy loading example: `div data-bg="image.jpg"`.