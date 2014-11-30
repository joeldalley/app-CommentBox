app-CommentBox
==============

A simple comment box that lists comments, and provides a form to enter new comments.

This is a React app, based on Facebook's React tutorial.<br/>
http://facebook.github.io/react/docs/tutorial.html

This app is also meant to demonstrate the use of RequireJS,<br/>
and so I've broken the React components into their own files.

RequireJs JSX Support
=====================

I have included the necessary files in the `js/lib` directory, and I have configured the JSX plugin in the `requirejs.config` object, in the file, `js/app.js`, so that RequireJS can load and transform JSX files.

This plugin comes from:<br/>
https://github.com/philix/jsx-requirejs-plugin

App Image
=========

![app-CommentBox](https://cloud.githubusercontent.com/assets/4063581/5237635/ec8706e6-784f-11e4-89df-578ab36f434e.png)

Copyright & License
===================

app-CommentBox is copyright &copy; Joel Dalley 2014.<br/>
app-CommentBox is distributed under the same license as Perl.
