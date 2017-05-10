## Features:
- [x] Login to any room.
- [x] All users get the same Intro-Buttons interface.
- [x] When users "Share Image and Code", their shared canvases appear on everyone's gallery.
- [x] When a teacher logs out, students leave room and return to login state.
- [x] When a student logs out, the teacher removes student's turtle
- [x] Admin capabilities.

## Use NetLogo primitive commands and reporters
- [x] hubnet-send
- [x] gbcc-send-canvas

## Server Code
- [x] send-reporter shares a variable from a user, with server or all users
- [x] get-reporter asks server for a variable from a user 
- [x] variables include the canvas, global variables and variables local to patches or turtles

## Convert a NetLogo Hubnet Activity to Web
- Open NetLogo Hubnet Activity in the NetLogo java app. Save as NetLogo Web.
- Copy and paste data from $("#nlogo-code") into index.html
- Update config file to match the model
- Update js/events.js for any sliders on student's interface (not currently generalizable)
