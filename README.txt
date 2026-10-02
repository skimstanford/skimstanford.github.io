ALEXANDER P. KIM — WEBSITE EDITING GUIDE
=========================================

The website is deliberately very simple. Each page is just an HTML file.

HOW TO EDIT
------------

1. Open your GitHub repository:
   https://github.com/skimstanford/skimstanford.github.io

2. For an easier editing experience, press the . (period) key while viewing
   the repository. GitHub will open the free github.dev editor in your browser.

3. The files are organized like this:

   index.html              English home page
   en/vita.html            English Vita
   en/engagements.html     English engagements
   en/repertoire.html      English repertoire
   en/press.html           English press
   en/gallery.html         English gallery
   en/contact.html         English contact

   de/index.html           German home page
   de/vita.html            German Vita
   de/engagements.html     German engagements
   de/repertoire.html      German repertoire
   de/press.html           German press
   de/gallery.html         German gallery
   de/contact.html         German contact

4. Inside every page you will see comments like:

   <!-- ======================== EDIT THIS TEXT ======================== -->

   Everything between these markers is intended to be edited by you.
   The comments themselves do not appear on the website.

5. Change the words you want to change, then commit the changes in GitHub.

IMPORTANT
---------

Most of the website is plain text, but links are written with HTML such as:

   <a href="https://example.com">Event information</a>

If you only want to change the words visitors see, change the words between
> and </a> and leave the rest alone.

For example:

   <a href="https://example.com">Event information</a>

can become:

   <a href="https://example.com">More information</a>

without changing the link itself.

If you want to change the destination of a link, change the URL inside
href="...".

You can also edit individual files directly on GitHub using the pencil icon.
GitHub's github.dev editor is usually more convenient when editing several
pages.
