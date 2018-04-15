# Image sizing
For smaller devices we can drop the resolution of the image to less pixels and also crop the image differently so that it has a different aspect ratio. 

## Two reasons to use a responsive image
### Art direction and cropping 
Create responsive image to use a different image at different screen sizes.
```html
<picture>
  <source media="(min-width: 1200px)" srcset="images/dog-crop-large.jpg">
  <source media="(min-width: 760px)" srcset="images/dog-crop-medium.jpg">
  <img src="images/dog-crop-small.jpg" alt="Puppy in sand"/>
</picture>
```

### Adding higher resolution
```html
<picture>
  <!-- Add image srcset with specific widths -->
  <source media="(min-width: 1200px)" srcset="images/dog-crop-large.jpg 1200w, images/dog-crop-large-hi-dpi.jpg 2400w"> 
  <source media="(min-width: 760px)" srcset="images/dog-crop-medium.jpg">
  <img src="images/dog-crop-small.jpg" alt="Puppy in sand"/>
</picture>
```

### Image resolution and filesize
Images are identical in cropping, only the size of the image is smaller becasse we don't want smaller devices downloading huge files.

Browser will use the smallest image file for the resolution.
We need to tell the browser the size of each image so it knows which one to use.
```html
<img srcset"images/dog-resolution-small.jpg 570w, images/dog-resolution-medium.jpg 1200w,  images/dog-resolution-medium.jpg 1920w" alt="Puppy in the sand">
```

### If the image is not taking up the whole width of the viewport
If the image is taking up less then 100% of the view port, in order to apply different resolutions you need to tell the browser how big the image will be.
Otherwise the browser will think that the image is 100% and download the highest resolution it can find.
```html
<img srcset="assets/images/first-trip-low-res-i.jpg 565w, assets/images/first-trip-i.jpg 976w, assets/images/first-trip-hi-dpi-i.jpg 1952w" alt="Couple walking down a street." sizes="(min-width:976px) 976px, 100vw">
```
This tells the browser that when the width is 976 the picture needs to be 976px but anything else the picture needs to be 100vw (100% of the viewport width).

Another example:
```html
          <picture>
            <source srcset="assets/images/our-start.jpg 404w, assets/images/our-start-hi-dpi.jpg 808w" media="(min-width: 1020px)" sizes="404px">
            <source srcset="assets/images/our-start-portrait.jpg 382w, assets/images/our-start-portrait-hi-dpi.jpg 764w" media="(min-width: 800px)" sizes="320px">
            <img srcset="assets/images/our-start-landscape.jpg 800w, assets/images/our-start-landscape-hi-dpi.jpg 1600w" alt="Our founder, Jane Doe">
          </picture>
```
Here there are three different images served up at different media queries. The sizes tells the browser what size the image needs to be at the max of that breakpoint. This way the browser can make the best decision on which picture to download.