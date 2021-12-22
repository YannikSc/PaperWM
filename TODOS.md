# TODOs I have identified so far

- ~~The workspace changes and shifts around when changing between panes~~ Fixed -> animations.js
  - ~~Same occours when the focus changes between monitors~~ Fixed -> animations.js
- The settings UI is not working
  - It opens now
  - Keybindings all show "invalid"
  - The `Gtk.FileChooserButton` got removed in GTK4 without drop-in replacement. For now those get replaced with `Gtk.Text`s, just so it works
- 3-finger gestures defaulting to original gnome gestures
  - Identified workaround: use 4 fingers
    - Still to handle: Disable 3 fingers
- Dragging Windows is not working (not sure if this is a changed feature, but it worked in the past, and I want to bring it back)
