## Prefix MD Angular Material

### Bildung Blocks



### Development Notes

>Cloned from an AngularJS-Material boilerplate by [this generous Gitlab developer](https://gitlab.com/hcurnor/Angular-Material-Template.git), [Muhammad Husnain](https://gitlab.com/hcurnor). Good example of how to juggle multiple layouts and of navigation playing the accordion. Complex [theming instructions](https://material.angularjs.org/latest/Theming/03_configuring_a_theme) to puzzle over.  This takes place in `app/src/core/core.module.js` &mdash; the sort of thing document writers often forget to mention


```
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey')
    .accentPalette('grey')
    .warnPalette('red')
```

>Set a darker shade on that red and write in a honeybee shade of yellow and we are aesthetically pleased for now.
