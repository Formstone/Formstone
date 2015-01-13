{"template":"content.html","title":"Upgrade Guide","site_root":"../","asset_root":"../","component_root":"../components/"}

# Upgrade Guide

Formstone components are now bundled as a single package. Developers should still only include the required components, including any unused components will only weigh down a site. As part of the consolidation many of the components' names have been changed to match well known design patterns. A lightbox is now `lightbox` - no need to memorize cute names.

| Old | New |
| --- | --- |
| Boxer | [Lightbox](../components/lightbox/) |
| Dropper | [Upload](../components/upload/) |
| Gridlock | [Grid](../components/grid/) |
| Macaroon | [Cookie](../components/cookie/) |
| Naver | [Navigation](../components/navigation/) |
| Picker | [Checkbox](../components/checkbox/) |
| Ranger | [Range](../components/range/) |
| Roller | [Carousel](../components/carousel/) |
| Rubberband | [Mediaquery](../components/mediaquery/) |
| Scroller | [Scrollbar](../components/scrollbar/) |
| Selecter | [Dropdown](../components/dropdown/) |
| Sizer | [Equalize](../components/equalize/) |
| Shifter | [Navigation](../components/navigation/) |
| Stepper | [Number](../components/number/) |
| Tabber | [Tabs](../components/tabs/) |
| Tipper | [Tooltip](../components/tooltip/) |
| Wallpaper | [Background](../components/background/) |

Customized components will need to be updated as selectors and based styles have changed. There will also be some breaking changes that will require testing all javascript before deployment - this is not a drop-in update.