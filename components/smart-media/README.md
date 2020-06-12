# Smart Media

Version: *1.1.0*

Authors: *Alexey Stsefanovich (ala'n)*, *Yuliya Adamskaya*, *Julia Murashko*

SmartMedia - custom element, that provides ability to add and configure media (video / audio)
using a single tag as well as work with external providers using simple native-like API.
 
--- 

### Supported Features:
 
 - extendable **MediaProviders** implementation for different media types. Supports out of the box:
   - HTMLAudio (`audio` type)
   - HTMLVideo (`video` type)
   - Youtube (`youtube` type)
   - Brightcove (`brightcove` type)
   - Abstract Iframe (`iframe` type)
 
 - load-conditions - restriction to load smart-media. Uses SmartMediaQuery syntax.
 
 - play-in-viewport - feature that restricts active state to only visible components on the page.
 
 - manual initialization - component will not be initialized until disable marker is removed.
 
 - group manager - to allow single active player in group restriction.
 
 - fill mode - feature that allows managing video player rendering option in bounds of given element area.
 
 - state change events (`smedia:load`, `smedia:error`, `smedia:play`, etc)
 
 - provides 'HTMLMedia like' API that is safe and will be executed after real API is ready

### Attributes:

 - **media-src** (for html media / iframe) - media resource src
 - **media-id** (for youtube/brightcove) - id of media resource
 - **media-type** - type of media provider
 
 - **group** (optional) - group name, only one media player can be active in bounds of the group.
 
 - **disabled** (boolean) - marker that prevents media api initialization
 
 - **fill-mode** (optional) - enables resource size management. Available options:
   - `auto` - default, media area will be stretched to element size
   - `cover` - media area will be zoomed in/out, cropped and centered to cover element area
   - `inscribe` - media area will be inscribed into element area
 
 - **aspect-ratio** (optional) - override aspect ratio for media resource. Supported formats:
   - `1.5` - width / height (`3:2` proportion in this example)
   - `16:9` - colon-separated proportion
   - `16/9` - slash-separated proportion

 - **play-in-viewport** (boolean) - auto stop video which is out of viewport area
 
 - **autofocus** (boolean) - set focus to player when media starts playing
 
 - **autoplay** (boolean) - start to play automatically on initialization 
 *(note: initialization doesn't happen until media has `disabled` attribute)*
 
 - **controls** (boolean) - show media player controls
 
 - **loop** (boolean) - play media in loop
 
 - **mute** (boolean) - mute media

### Readonly Attributes:
 
 - **error** (boolean) - marker that indicates that media API has loaded with error
 - **ready** (boolean) - marker that indicates that media API has loaded
 - **played** (boolean) - marker that indicates that media has played
 - **active** (boolean) - marker that indicates that media is playing
 
### Events: 
 - `smedia:error` - (bubbles) fires when API is initialized with error
 - `smedia:ready` - (bubbles) fires when API is ready
 - `smedia:play` - (bubbles) fires when smart-media starts playing
 - `smedia:paused` - (bubbles) fires when smart-media is paused
 - `smedia:ended` - (bubbles) fires when smart-media ends
 - `smedia:detach` - (bubbles) fires after smart-media provider is detached (reinitialized / disconnected from the DOM)
 - `smedia:mangedpause` - (bubbles) fires when media paused by smart-media group restriction manager
 
### Examples:
```html
<smart-media
     media-type="youtube"
     media-id="##MEDIAID##"
     title="Video Title"     
     [disabled]    
     [group="mediaGroup"]
></smart-media-embedded>
```
  