# CHANGELOG of OpenSlides

https://openslides.com


## Version 3.1 (2019-12-13)

[Milestone](https://github.com/OpenSlides/OpenSlides/milestones/3.0)

**General:**
- Improved loading time of OpenSlides [#5061, #5087, #5110, #5146 - Breaks IE11].
- Improved Websocket reconnection - works now more reliable [#5060].
- Improved performance by replacing deprecated encode and decode library with faster manual approaches [#5085, #5092].
- Improved mobile views for small devices [#5106].
- Improved virtual scrolling behavior of tables: remember last scroll position [#5156].
- New SingleSignOn login method via SAML [#5000].
- New inline editing for start page, legal notice and privacy policy [#5086].
- Reordered settings in subpages for better overview [#4878, #5083, #5096].
- Added html meta noindex tag to prevent search engines finding instances of OpenSlides [#5061].
- Added server log entries for usage of notify feature [#5066].
- Added server-side HTML validation for personal notes (motions) and about me field (users) [#5121].
- Fixed an issue where projector button in lists was always not indicating the projected element [#5055].
- Fixed issues where search-filter, property-filter and property-sort in list views does not work correctly [#5065].
- Fixed an issues where list view entries using virtual scrolling become invisible [#5072].
- Fixed an error where loading spinner would not disappear while offline mode [#5151].
- Various cleanups and improvements to usability, performance and translation.

**Agenda:**
- New config option to show motion submitters as subtitle in agenda list [#5002, #5094].
- New view to sort sepakers of a list - preventing unwanted changes esp. using mobile devices [#5069].
- New button to readd the last speaker to the top of the list [#5069, #5067].
- New agenda list filter 'item type' (topic, motion, motion block, election) [#5084].
- Changed window title for current list of speakers [#5037].
- Added motion title in agenda list [#5063].

**Motions:**
- New option to export personal notes [#5075].
- New amendment filter for motion list [#5056, #5157].
- New possibility to change state and recommendation in motion list using quick edit [#5071].
- Added multi select actions to amendment list [#5041].
- Added search value selector in multi select action dialogs [#5058].
- Added support for nested lists with line numbers in PDF export [#5138].
- Improved scaling of motion tile view [#5038].
- Improved performance for large motions with dozens of amendments by implementing manual change detection in motion detail [#5074, #5139].
- Improved display of long names for states and recommendations in drop down menu in motion detail view [#5079].
- Improved amendment slide by showing only changed line(s)s without surrounding paragraph [#5144].
- Fixed line number errors during creation of amendments [#5023].
- Fixed an issue that ol/ul lists are not printed in amendment PDF [#5051].
- Fixed the amendment option "Show entire motion text" [#5052].
- Fixed a rare bug in final version where change recommendations or amendments would have been hidden [#5070].
- Fixed PDF export in final version: use modified final version if available [#5139].
- Fixes a bug where the event name was printed twice in the PDF header [#5155].

**Elections:**
- Fixed errors by entering votes and sorting candidates [#5129, #5125].
- Fixed a permission issue that prevented nominating another participants for elections [#5154].

**Users:**
- Fixed wrong permission check for set password [#5128].

**Mediafiles:**   
- Fixed mediafile upload path [#4710].
- Fixed double slash in mediafile URL [#5031].
- Original filename must now be unique for files [#5123].

**Projector:**
- New projector edit dialog with preview [#5043].
- Added support for custom aspect ratios in projector edit dialog; database migration required [#5141].
- Added missing autoupdates for changed projection defaults [#5045].
- Added scaleable tile for projector list [#5043].
- Added a lock icon on the list of speaker slide if list has been closed [#5154].
- Improved autoupdates for projectors by using changeIDs [#5064].
- Improved performance by preventing high CPU usage on Firefox in projector detail view [#5022].
- Changed config option to show nice horizontal meta box on motion slide [#5088].
- Changed config option "Event date" back to string format [#5042].
- Saved countdown settings [#5053].

**Breaking Changes:**
- Due to faster model handling (using the 'Proxy' function) Internet Explorer 11 cannot be supported anymore!


## Version 3.0 (2019-09-13)

[Milestone](https://github.com/OpenSlides/OpenSlides/milestones/3.0)

**General (Client):**
- OpenSlides client completely rewritten, based on Angular 8 and Material Design.
- OpenSlides is now a Progressive Web App (PWA).
- New browser caching via IndexedDB (one cache store for all browser tabs).
- New list views optimized with virtual scrolling (improved performance for long lists).
- New global quick search using by shortcut 'Alt+Shift+F'.
- New built-in design themes for customizing user interface.
- New update notification if OpenSlides static files are updated.
- New config option for pdf page size (DIN A4 or A5).
- Added TinyMCE 5 editor (switched from CKEditor caused by changed license).
- Switched from yarn/gulp to npm.
- Improved pdf gerneration with progress bar and cancel option.
- Translations available for EN, DE, RU and CS.

**General (Server):**
- New websocket protocol for server client communication using JSON schema.
- New change-id system to send only updated elements to client.
- New global history mode (useable for admin group only).
- Updated to Channels 2.
- Dropped support for Python 3.5.
- Dropped support for Geiss.
- Complete rework of startup and caching system. Dropped restricted data cache.
- Changed URL schema.
- Changed personal settings.py.
- Changed format for elements send via autoupdate.
- Changed projector concept.
- Compressed autoupdates before sending to clients (reduced traffic).
- Fixed autoupdate system for related objects.
- Fixed logo configuration if logo file is deleted.
- Added several bulk views for motions and users (one request for updating multiple selected elements).
- Added docs for using OpenSlides in 'big mode' with Gunicorn and Uvicorn.
- Added docs for configure OpenSlides in settingy.py.
- Dropped chat functionality.
- Server performance improvements.

**Agenda:**
- Agenda items are now optional (for motions, elections and mediafiles). New config to set default behavior.
- New drag&drop view to sort agenda items.
- New config option: only present participants can be added to list of speakers.
- New config option to hide number of speakers on projector.

**Motions:**
- New call list for custom sort of motions.
- New tile layout view with all categories (each category a tile).
- New statute motions with managing statute paragraphs.
- New permission to manage metadata (state, recommendation, submitters and supporters, category, motion block and polls).
- New permission to create amendments.
- New permission to see motions in internal states.
- New access restrictions definable for each motion state in workflow.
- New 'internal' option for motion blocks.
- New sorting view for categories to create subcategories.
- New custom comment fields for all motions (read/write access can be managed via permission groups).
- New motion history (each action is stored in global OpenSlides history which can be restored any time, replaced old motion version and log features).
- New XLSX export (docx support is dropped).
- New navigation for next/previous motion in detail view (shortcut: 'Alt+Shift+Left/Right').
- New multi select actions.
- New timestampes for motions (for sorting by creation date and last modified).
- New config option to set reason as required field.
- New config option to change multiple paragraphs with an amendment.
- New config option to hide motion text on projector.
- New config option to show sequential number.
- New config option to show all motions which are referred to a special motion.
- New config option to show submitters and recommendation in table of contents of PDF.
- New config options to control identifier generation - number of digits and blanks (moved from settings.py).
- Improved PDF export (optional with toc, page numbers, date, comments and meta information)
- Improved motion numbering in (sub)categories: Motions of subcategories are also numbered, and parents of amendments needs to be in the numbered category or any subcategory.
- Improved projection layout of motion blocks.
- Changed default workflows: Allowed submitters to set state of new motions in complex and customized workflow. No migration provided.
- Change CSV import to add tags.

**User:**
- New admin group which grants all permissions. Users of existing group 'Admin' or 'Staff' are move to the new group during migration.
- New gender field.
- New password forget/reset function via email.
- New permission to change own password.
- New config option for sender name and reply email address (From address is defined in settings.py).

**Mediafiles:**
- New support for (sub)folders and permission groups.

**Projector:**
- New views to list, manage and control created OpenSlides projectors.
- New projector queue (add slide to queue), all projected slides are logged.
- New chyron for current speaker.
- New color settings for each projector.


## Version 2.3 (2018-09-20)
[Release notes](https://github.com/OpenSlides/OpenSlides/wiki/OpenSlides-2.3) · [Milestone](https://github.com/OpenSlides/OpenSlides/milestones/2.3)

**Agenda:**
- New item type 'hidden'. New visibilty filter in agenda [#3790].

**Motions:**
- New feature to scroll the projector to a specific line [#3748].
- New possibility to sort submitters [#3647].
- New representation of amendments (paragraph based creation, new diff and list views for amendments) [#3637].
- New feature to customize workflows and states [#3772, #3785].
- New table of contents with page numbers and categories in PDF [#3766].
- New teporal field "modified final version" where the final version can be edited [#3781].
- New config options to show logos on the right side in PDF [#3768].
- New config to show amendments also in motions table [#3792].
- Support to change decimal places for polls with a plugin [#3803].

**Elections:**
- Support to change decimal places for elections with a plugin [#3803]

**Core:**
- Updated Django to 2.1 [#3777, #3786].
- Support for Python 3.7 [#3786].
- Python 3.4 is not supported anymore [#3777].
- Updated pdfMake to 0.1.37 [#3766].
- Changed behavior of collectstatic management command [#3804].


## Version 2.2 (2018-06-06)

[Release notes](https://github.com/OpenSlides/OpenSlides/wiki/OpenSlides-2.2) · [Milestone](https://github.com/OpenSlides/OpenSlides/milestones/2.2)

**Agenda:**
- New permission for managing lists of speakers [#3366].
- New DOCX export of agenda [#3569].
- New collapsable agenda overview [#3567].
- New feature: mark speakers (e.g. as submitter) [#3570].
- New config option to enable numbering of items [#3697].
- New config option to hide internal items when projecting subitems [#3701].
- Hide closed agenda items in the item slide [#3567].
- Fixed wrong sorting of last speakers [#3193].
- Fixed issue when sorting a new inserted speaker [#3210].
- Fixed multiple request on creation of agenda related items [#3341].
- Autoupdates for all children if the item type has changed [#3659].

**Motions:**
  - New export dialog for managers only [#3185].
  - New personal note field for each motions [#3190, #3267, #3404].
  - New navigation between single motions [#3459].
  - New possibility to create change recommendations for motion titles [#3626].
  - New support for export motions in a ZIP archive [#3189, #3251].
  - New PDF export for personal note and comments [#3239].
  - New config option for customize sorting of category list in pdf/docx export [#3329].
  - New config optoin for pagenumber alignment in PDF [#3327].
  - New config options to hide reason, recommendation and meta data box on projector [#3432, #3692].
  - New inline editing for motion reason [#3361].
  - New multiselect filter for motion comments [#3372].
  - New support for pinning personal notes to the window [#3360].
  - New warning message if an edit dialog was already opened by another client [#3212].
  - New change recommendation type "other" [#3495].
  - Fixed issue when creating/deleting motion comment fields in the settings [#3187].
  - Fixed empty motion comment field in motion update form [#3194].
  - Fixed error on category sort [#3318].
  - Bugfix: Changing motion line length did not invalidate cache [#3202].
  - Bugfix: Added more distance in motion PDF for DEL-tags in new lines [#3211].
  - Bugfix: Creating colliding change recommendation is now prevented on server side [#3304].
  - Bugfix: Several bugfixes regarding splitting list items in change recommendations [#3288].
  - Bugfix: Several bugfixes regarding diff version [#3407, #3408, #3410, #3440, #3450, #3465, #3537, #3546, #3548, #3644, #3656].
  - Improved the multiselect state filter [#3459].
  - Save pagination state to session storage [#3569].
  - Allow to delete own motions [#3516].
  - Reference to motions by id in state and recommendation special field [#3498].
  - Log which comment was updated [#3569].
  - Split up 'can_see_and_manage_comments' permission in two seperate ones [#3565].
  - Combined all boolean filters into one dropdown menu and added a filter for amendments [#3501].
  - Show motion identifier in (current) list of speakers [#3442]
  - Show the number of next speakers in motion list view [#3470].
  - Added (shortened) motion title to motion block slide [#3700].
  - Clear identifier on state reset [#3356].
  - Reworked DOCX export parser and added comments to DOCX [#3258].
  - Removed server side image to base64 transformation and added local transformation [#3181].
  - Added karma:watch command [#3466].

**Elections:**
- New pagination for list view [#3393].

**Users:**
- New fast mass import for users [#3290].
- New default user group 'admin' [#3621].
- New feature to send invitation emails with OpenSlides login data [#3503, #3525].
- New view to toggle presence by entering participant number (can be used with barcode scanner) [#3496].
- New support for password validation using Django or custom validators
  5.  7.  for minimum password length [#3200].
- Hide password in change password view [#3417].
- Users without the permission 'can see users' can now see agenda item speakers, motion submitters and supporters, assignment candidates, mediafile uploader and chat message users if they have the respective permissions [#3191, #3233].
- Fixed compare of duplicated users while CSV user import [#3201].
- Added settings option to enable updating the last_login field in the database. The default is now disabled [#3400].
- Removed OPTIONS request. All permissions are now provided on startup [#3306].

**Mediafiles:**
- New form for uploading multiple files [#3650].
- New custom CKEditor plugin for browsing mediafiles [#3337].
- Project images always in fullscreen [#3355].
- Protect mediafiles for forbidden access [#3384].
- Fixed reloading of PDF on page change [#3274].

**Core:**
- New settings to upload custom fonts (for projector and pdf) [#3568].
- New custom translations to use custom wordings [#3383].
- New support for choosing image files as logos for projector, PDF and web interface header [#3184, #3207, #3208, #3310].
- New notify system [#3212].
- New config option for standard font size in PDF [#3332].
- New config option for disabling header and footer in the projector [#3357].
- New dynamic webpage title [#3404].
- New 'go to top'-link [#3404].
- New custom format cleanup plugin for CKEditor [#3576].
- Reset scroll level for each new projection [#3686].
- Scroll to top on every state change [#3689].
- Added pagination on top of lists [#3698].
- Improved performance for PDF generation significantly (by upgrading to pdfmake 0.1.30) [#3278, #3285].
- Enhanced performance esp. for server restart and first connection of all clients by refactoring autoupdate, Collection and AccessPermission [#3223, #3539].
- Improved reconnect handling if the server was flushed [#3297].
- No reload on logoff. OpenSlides is now a full single page application [#3172].
- Highlight list entries in a light blue, if a related object is projected (e. g. a list of speakers of a motion) [#3301].
- Select the projector resolution with a slider and an aspect ratio [#3311].
- Delay the 'could not load projector' error 3 seconds to not irritate users with a slow internet connection [#3323].
- Added default sorting for agenda, motions, elections, mediafiles and users [#3334, 3348].
- Added caching for the index views [#3419, #3424].
- Added projector prioritization [#3425].
- Added --debug-email flag to print all emails to stdout [#3530].
- Added --no-template-caching flag to disable template caching for easier development [#3566].
- Updated CKEditor to 4.7 [#3375].
- Reduced ckeditor toolbar for inline editing [#3368].
- New api route to project items with just one request needed [#3713].
- Use native twisted mode for daphne [#3487].
- Saved language selection to session storage [#3543].
- Set default of projector resolution to 1220x915 [#2549].
- Preparations for the SAML plugin; Fixed caching of main views [#3535].
- Removed unnecessary OPTIONS request in config [#3541].
- Switched from npm to Yarn [#3188].
- Improvements for plugin integration [#3330].
- Cleanups for the collection and autoupdate system [#3390]
- Bugfixes for PDF creation [#3227, #3251, #3279, #3286, #3346, #3347, #3342].
- Fixed error when clearing empty chat [#3199].
- Fixed autoupdate bug for a user without user.can_see_name permission [#3233].
- Fixed bug the elements are projected and the deleted [#3336].
- Several bugfixes and minor improvements.

*[#xxxx] = Pull request number to get more details on https://github.com/OpenSlides/OpenSlides/pulls*


## Version 2.1.1 (2017-04-05)

[Milestone](https://github.com/OpenSlides/OpenSlides/milestones/2.1.1)

**Agenda:**
- Fixed issue #3173 that the agenda item text cannot be changed.

**Other:**
- Set required version for optional Geiss support to <1.0.0.


## Version 2.1 (2017-03-29)

[Release notes](https://github.com/OpenSlides/OpenSlides/wiki/OpenSlides-2.1) · [Milestone](https://github.com/OpenSlides/OpenSlides/milestones/2.1)

**Agenda:**    
- Added button to remove all speakers from a list of speakers.
- Added option to create or edit agenda items as subitems of others.
- Fixed security issue: Comments were shown for unprivileged users.
- Added option to choose whether to show the current list of speakers slide as a slide or an overlay.
- Manage speakers on the current list of speakers view.
- List of speakers for hidden items is always visible.

**Core:**
- Added support for multiple projectors.
- Added control for the resolution of the projectors.
- Added smooth projector scroll.
- Set the projector language in the settings.
- Added migration path from OpenSlides 2.0.
- Added support for big assemblies with lots of users.
- Django 1.10 is now supported. Dropped support for Django 1.8 and 1.9.
- Used Django Channels instead of Tornado. Refactoring of the autoupdate process. Added retry with timeout in case of ChannelFull exception.
- Made a lot of autoupdate improvements for projector and site.
- Added new caching system with support for Redis.
- Support https as websocket protocol (wss).
- Accelerated startup process (send all data to the client after login).
- Add the command getgeiss to download the latest version of Geiss.
- Add a version of has_perm that can work with cached users.
- Removed our AnonymousUser. Make sure not to use user.has_perm() anymore.
- Added function utils.auth.anonymous_is_enabled which returns true, if it is.
- Changed has_perm to support an user id or None (for anyonmous) as first argument.
- Cache the group with there permissions.
- Added watching permissions in client and change the view immediately on changes.
- Used session cookies and store filter settings in session storage.
- Removed our db-session backend and added possibility to use any django session backend.
- Added template hook system for plugins.
- Used Roboto font in all templates.
- Added HTML support for messages on the projector.
- Moved custom slides to own app "topics". Renamed it to "Topic".
- Added button to clear the chatbox.
- Better dialog handling. Show dialog just in forground without changing the state url. Added new dialog for profile, change password, tag and category update view.
- Switched editor back from TinyMCE to CKEditor which provides a better copy/paste support from MS Word.
- Validate HTML strings from CKEditor against XSS attacks.
- Use a separate dialog with CKEditor for editing projector messages.
- Use CKEditor in settings for text markup.
- Used pdfMake for clientside generation of PDFs. Run pdf creation in background (in a web worker thread).
- Introduced new table design for list views with serveral filters and CSV export.
- New CSV import layout.
- Replaced angular-csv-import by Papa Parse for CSV parsing.
- Added UTF-8 byte order mark for every CSV export.
- Removed config cache to support multiple threads or processes.
- Added success/error symbol to config to show if saving was successful.
- Fixed bug, that the last change of a config value was not send via autoupdate.
- Moved full-text search to client-side (removed the server-side search engine Whoosh).
- Made a lot of code clean up, improvements and bug fixes in client and backend.

**Motions:**
- Added adjustable line numbering mode (outside, inside, none) for each motion text.
- Allowed to add change recommendations for special motion text lines (with diff mode).
- Added projection support for change recommendations.
- Added button to sort and number all motions in a category.
- Added recommendations for motions.
- Added options to calculate percentages on different bases.
- Added calculation for required majority.
- Added blocks for motions which can be used in agenda. Set states for multiple motions of a motion block by following the recommendation for each motion.
- Used global config variable for preamble.
- Added configurable fields for comments.
- Added new origin field.
- Reimplemented amendments.
- New PDF layout.
- Added DOCX export with docxtemplater.
- Changed label of former state "commited a bill" to "refered to committee".
- Number of ballots printed can now be set in config.
- Add new personal settings to remove all whitespaces from motion identifier.
- Add new personal settings to allow amendments of amendments.
- Added inline editing for comments.

**Elections:**
- Added options to calculate percentages on different bases.
- Added calculation for required majority.
- Candidates are now sortable.
- Removed unused assignment config to publish winner election results only.
- Number of ballots printed can now be set in config.
- Added inline edit field for a specific hint on ballot papers.

**Users:**
- Added new matrix-interface for managing groups and their permissions.
- Added autoupdate on permission change (permission added).
- Improved password reset view for administrators.
- Changed field for initial password to an unchangeable field.
- Added new field for participant number.
- Added new field 'is_committee' and new default group 'Committees'.
- Improved users CSV import (use group names instead of id).
- Allowed to import/export initial user password.
- Added more multiselect actions.
- Added QR code in users access pdf.

**Mediafiles:**
- Allowed to project uploaded images (png, jpg, gif) and video files (e. g. mp4, wmv, flv, quicktime, ogg).
- Allowed to hide uploaded files in overview list for non authorized users.
- Enabled removing of files from filesystem on model instance delete.

**Other:**
- Added Russian translation (Thanks to Andreas Engler).
- Added command to create example data.


## Version 2.0 (2016-04-18)

[Milestone](https://github.com/OpenSlides/OpenSlides/milestones/2.0)

*OpenSlides 2.0 is essentially not compatible to OpenSlides 1.7. E. g. customized templates, databases and plugins can not be reused without adaption.*

**Agenda:**
- Updated the tests and changed internal parts of method of the agenda model.
- Changed API of related objects. All assignments, motions and custom slides are now agenda items and can be hidden.
- Removed django-mptt.
- Added attachments to custom sldies.
- Improved CSV import.

**Assignments:**    
- Renamed app from assignment to assignments.
- Removed possibility to block candidates.
- Massive refactoring and cleanup of the app.

**Motions:**  
- Renamed app from motion to motions.
- Massive refactoring and cleanup of the app.

**Mediafiles:**
- Renamed app from mediafile to mediafiles.
- Used improved pdf presentation with angular-pdf.
- Massive refactoring and cleanup of the app.

**Users:**
- Massive refactoring of the participant app. Now called 'users'.
- Used new anonymous user object instead of an authentification backend. Used special authentication class for REST requests.
- Used authentication frontend via AngularJS.
- Improved CSV import.

**Other:**
- New OpenSlides logo.
- New design for web interface.
- Added multiple countdown support.
- Added colored countdown for the last n seconds (configurable).
- Switched editor from CKEditor to TinyMCE.
- Changed supported Python version to >= 3.4.
- Used Django 1.8 as lowest requirement.
- Django 1.9 is supported
- Added Django's application configuration. Refactored loading of signals and projector elements/slides.
- Setup migrations.
- Added API using Django REST Framework 3.x. Added several views and mixins for generic Django REST Framework views in OpenSlides apps.
- Removed most of the Django views and templates.
- Removed Django error pages.
- Added page for legal notice.
- Refactored projector API using metaclasses now.
- Renamed SignalConnectMetaClass classmethod get_all_objects to get_all (private API).
- Refactored config API and moved it into the core app.
- Removed old style personal info page, main menu entries and widget API.
- Used AngularJS with additional libraries for single page frontend.
- Removed use of 'django.views.i18n.javascript_catalog'. Used angular-gettext now.
- Updated to Bootstrap 3.
- Used SockJS for automatic update of AngularJS driven single page frontend.
- Refactored plugin API.
- Refactored start script and management commands. Changed command line option and path for local installation.
- Refactored tests.
- Used Bower and gulp to manage third party JavaScript and Cascading Style Sheets libraries.
- Used setup.cfg for development tools.
- Removed code for documentation and for Windows portable version with GUI. Used new repositories for this. Cleaned up main repository.
- Updated all dependencies.

**Translations:**
- Updated DE, FR, CS and PT translations.
- Added ES translations.


## Version 1.7 (2015-02-16)

https://github.com/OpenSlides/OpenSlides/milestones/1.7

**Core:**
- New feature to tag motions, agenda and assignments.
- Fixed search index problem to index contents of many-to-many tables (e. g. tags of a motion).
- Fixed AttributeError in chatbox on_open method.

**Motions:**
- New Feature to create amendments, which are related to a parent motion.
- Added possibility to hide motions from non staff users in some states.

**Assignments:**
- Fixed permissions to alter assignment polls.

**Other:**
- Cleaned up utils.views to increase performance when fetching single objects from the database for a view (#1378).
- Fixed bug on projector which was not updated when an object was deleted.
- Fixed bug and show special characters in PDF like ampersand (#1415).
- Updated pdf.js to 1.0.907.
- Improve the usage of bsmselect jquery plugin.
- Updated translations.


## Version 1.6.1 (2014-12-08)

https://github.com/OpenSlides/OpenSlides/milestones/1.6.1

**Agenda:**
- Fixed error in item numbers.

**Motions:**
- Show supporters on motion slide if available.
- Fixed motion detail view template. Added block to enable extra content via plugins.

**Assignments:**
- Fixed PDF build error when an election has more than 20 posts or candidates.

**Participants:**
- Fixed participant csv import with group ids:
    - Allowed to add multiple groups in csv group id field, e. g. "3,4".
    - Fixed bug that group ids greater than 9 can not be imported.
    - Updated error message if group id does not exists.

**Other:**
- Fixed CKEditor stuff (added insertpre plugin and removed unused code).
- Updated French, German and Czech translation.


## Version 1.6 (2014-06-02)

https://github.com/OpenSlides/OpenSlides/milestones/1.6

**Dashboard:**
- Added shortcuts for the countdown.
- Enabled copy and paste in widgets.

**Agenda:**
- New projector view with the current list of speakers.
- Added CSV import of agenda items.
- Added automatic numbering of agenda items.
- Fixed organizational item structuring.

**Motions:**
- New slide for vote results.
- Created new categories during CSV import.

**Assignments/Elections:**
- Coupled assignment candidates with list of speakers.
- Created a poll description field for each assignment poll.
- New slide for election results.

**Participants:**
- Disabled dashboard widgets by default.
- Added form field for multiple creation of new participants.

**Files:**
- Enabled update and delete view for uploader refering to his own files.

**Other:**
- Added global chatbox for managers.
- New config option to set the 100 % base for polls (motions/elections).
- Changed api for plugins. Used entry points to detect them automaticly. Load them automaticly from plugin directory of Windows portable version.
- Added possibility to use custom templates and static files in user data path directory.
- Changed widget api. Used new metaclass.
- Changed api for main menu entries. Used new metaclass.
- Inserted api for the personal info widget. Used new metaclass.
- Renamed config api classes. Changed permission system for config pages.
- Regrouped config collections and pages.
- Renamed some classes of the poll api.
- Renamed method and attribute of openslides.utils.views.PermissionMixin.
- Added api for absolute urls in models.
- Inserted command line option to translate config strings during database setup.
- Enhanced http error pages.
- Improved responsive design for templates.
- Fixed headings on custom slides without text.
- Moved dashboard and select widgets view from projector to core app.
- Renamed and cleaned up static direcories.
- Used jsonfield as required package. Removed jsonfield code.
- Added new package backports.ssl_match_hostname for portable build script.
- Used new app "django-ckeditor-updated" to render WYSIWYG html editors. Removed CKEditor from sources.
- Only reload the webserver in debug-mode.


## Version 1.5.1 (2014-03-31)

https://github.com/OpenSlides/OpenSlides/milestones/1.5.1

**Projector:**
- Fixed path and config help text for logo on the projector.

**Agenda:**
- Fixed permission error in the list of speakers widget.
- Fixed Item instance method is_active_slide().

**Motion:**
- Fixed sorting of motions concerning the identifier. Used natsort and DataTables Natural Sort Plugin.

**Participant:**
- Added permission to see participants to the manager group.
- Fixed user status view for use without Javascript.

**Files:**
- Fixed error when an uploaded file was removed from filesystem.

**Other:**
- Set minimum Python version to 2.6.9. Fixed setup file for use with Python 2.6.
- Used unicode font for circle in ballot pdf. Removed Pillow dependency package.
- Fixed http status code when requesting a non-existing static page using Tornado web server.
- Fixed error in main script when using other database engine.
- Fixed error on motion PDF with nested lists.


## Version 1.5 (2013-11-25)

https://github.com/OpenSlides/OpenSlides/milestones/1.5

**Projector:**
- New feature: Show PDF presentations on projector (with included pdf.js).
- Improved projector update process via new websocket API (using sockjs and tornado).
- New projector template with twitter bootstrap.
- Improved projector zoom and scroll behaviour.

**Agenda:**
- New config option: couple countdown with list of speakers.
- Used HTML editor (CKEditor) for agenda item text field.
- Added additional input format for agenda item duration field.

**Motions:**
- Enabled attachments for motions.
- Refactored warnings on CSV import view.

**Elections:**
- Refactored assignment app to use class based views instead of functions.

**Polls:**
- Added percent base to votes cast values.

**Participants:**
- Updated access data PDF: WLAN access (with QRCode for WLAN ssid/password) and OpenSlides access (with QRCode for system URL), printed on a single A4 page for each participant.

**Other:**    
- Full text search integration (with Haystack and Whoosh).
- New start script with new command line options (see python manage.py --help)
- Fixed keyerror on user settings view.
- New messages on success or error of many actions like creating or editing objects.
- Changed messages backend, used Django's default now.
- A lot of template fixes and improvements.
- Extended css style options in CKEditor.
- Added feature to config app to return the default value for a key.
- Cleaned up OpenSlides utils views.
- Improved README (now with install instructions and used components).
- Updated all required package versions.
- Used flake8 instead of pep8 for style check, sort all import statements with isort.
- Added Portuguese translation (Thanks to Marco A. G. Pinto).
- Switched to more flexible versions of required third party packages.
- Updated to Django 1.6.x.
- Updated German documentation.
- Change license from GPLv2+ to MIT, see LICENSE file.


## Version 1.4.2 (2013-09-10)

https://github.com/OpenSlides/OpenSlides/milestones/1.4.2

- Used jQuery plugin bsmSelect for better ``<select multiple>`` form elements.
- New config option to disable paragraph numbering in motion pdf. (Default value: disabled.)
- Removed max value limitation in config field 'motion_min_supporters'.
- Removed supporters signature field in motion pdf.
- Fixed missing creation time of motion version. Show now string if identifier is not set (in widgets and motion detail).
- Fixed error when a person is deleted.
- Fixed deleting of assignments with related agenda items.
- Fixed wrong ordering of agenda items after order change.
- Fixed error in portable version: Open browser on localhost when server listens to 0.0.0.0.
- Fixed typo and updated translations.
- Updated CKEditor from 4.1.1 to 4.2. Fixed errors in MS Internet Explorer.
- Updated to Django 1.5.2.


## Version 1.4.1 (2013-07-29)

https://github.com/OpenSlides/OpenSlides/milestones/1.4.1

 - Fixed tooltip which shows the end of each agenda item.
 - Fixed duration of agenda with closed agenda items.
 - Disabled deleting active version of a motion.
 - Start browser on custom IP address.
 - Fixed wrong URLs to polls in motion detail view.
 - Added Czech translation.


## Version 1.4 (2013-07-10)

https://github.com/OpenSlides/OpenSlides/milestones/1.4

**Agenda:**
- New feature: list of speakers for each agenda item which saves begin and end time of each speaker; added new widget and overlay on the dashboard for easy managing and presenting lists of speakers.
- New item type: organisational item (vs. agenda item).
- New duration field for each item (with total time calculation for end time of event).
- Better drag'n'drop sorting of agenda items (with nestedSortable jQuery plugin).

**Motions:**
- Integrated CKEditor to use allowed HTML formatting in motion text/reason. With server-side whitelist filtering of HTML tags (with bleach) and HTML support for reportlab in motion pdf.
- New motion API.
- Support for serveral submitters.
- New workflow concept with two built-in workflows:
  1)  complex workflow (like in OpenSlides <= v1.3)
  2)  simple workflow (only 4 states: submitted -> acceptednot decided; no versioning)
- Categories for grouping motions.
- New modifiable identifier.
- New motion version diff view. Improved history table in motion detail view.
- New config variable 'Stop submitting of new motions' (for non-manager users).
- Updated motion status log.
- Updated csv import.

**Participants:**
- New feature: qr-code for system url on participants password pdf.
- Update default groups and permissions.
- New participant field: 'title'.
- Removed participants field 'type'. Use 'group' field instead. Updated csv import.
- Added warning if non-superuser removes his last group containing permission to manage participants.

**Other:**
- New html template based on twitter bootstrap.
- New GUI frontend for the Windows portable version.
- New command to backup sqlite database.
- New mediafile app (files) to upload/download files via frontend.
- Used Tornado web server (instead of Django's default development server).
- Updated win32 portable version to use Tornado.
- Integrated DataTables jQuery plugin for overview tables of motions, elections and participants (for client side sorting/filtering/pagination).
- New overlay API for projector view.
- New config app: Apps have to define config vars only once; config pages and forms are created automatically.
- Moved version page out of the config app.
- Changed version number api for plugins.
- Moved widget with personal info to account app. Inserted info about lists of speakers.
- Updated to Django 1.5.
- Dropped support for python 2.5.
- Updated packaging (setup.py and portable).
- Open all PDFs in a new tab.
- Changed Doctype to HTML5.
- Updated German documentation (especially sections about agenda and motions).
- Several minor fixes and improvements.


## Version 1.3.1 (2013-01-09)

https://github.com/OpenSlides/OpenSlides/milestones/1.3.1

- Fixed unwanted automatical language switching on projector view if more than one browser languages send projector request to OpenSlides (#434)


## Version 1.3 (2012-12-10)

https://github.com/OpenSlides/OpenSlides/milestones/1.3

**Projector:**
- New public dashboard which allows access for all users per default. (#361) (changed from the old, limited projector control page)
- New dashboard widgets:
    - welcome widget (shows static welcome title and text)
    - participant widget
    - group widget
    - personal widget (shows my motions and my elections)
- Hide scrollbar in projector view.
- Added cache for AJAX version of the projector view.
- Moved projector control icons into projector live widget. (#403)
- New weight field for custom slides (to order custom slides in widget).
- Fixed drag'n'drop behaviour of widgets into empty dashboard column.
- Fixed permissions for agenda, motion and assignment widgets (set to projector.can_manage_projector).

**Agenda:**
- Fixed slide error if agenda item deleted. (#330)

**Motions:**
- Translation: Changed 'application' to 'motion'.
- Fixed: Manager could not edit supporters. (#336)
- Fixed attribute error for anonymous users in motion view. (#329)
- Set default sorting of motions by number (in widget).
- CSV import allows to import group as submitter. (#419)
- Updated motion code for new user API.
- Rewrote motion views as class based views.

**Elections:**
- User can block himself/herself from candidate list after delete his/her candidature.
- Show blocked candidates in separate list.
- Mark elected candidates in candidate list. (#374)
- Show linebreaks in description. (#392)
- Set default sorting of elections by name (in widget).
- Fixed redirect from a poll which does not exists anymore.
- Changed default permissions of anonymous user to see elections. (#334)
- Updated assignment code for new user API.

**Participants:**
- New user and group API.
- New group option to handle a group as participant (and thus e.g. as submitter of motion).
- CSV import does not delete existing users anymore and append users as new users.
- New user field 'about me'. (#390)
- New config option for sorting users by first or last name (in participant lists, elections and motions). (#303)
- Allowed whitespaces in username, default: ``<firstname lastname>`` (#326)
- New user and group slides. (#176)
- Don't allow to deactivate the administrator or themself.
- Don't allow to delete themself.
- Renamed participant field 'groups' to 'structure level' (German: Gliederungsebene).
- Rewrote participant views as class based views.
- Made OpenSlides user a child model of Django user model.
- Appended tests.
- Fixed error to allow admins to delete anonymous group

**Other:**
- Added French translation (Thanks to Moira).
- Updated setup.py to make an openslides python package.
- Removed frontpage (welcome widget contains it's content) and redirect '/' to dashboard url.
- Added LOCALE_PATHS to openslides_settings to avoid deprecation in Django 1.5.
- Redesigned the DeleteView (append QuestionMixin to send question via the django message API).
- Fixed encoding error in settings.py. (#349)
- Renamed openslides_settings.py to openslides_global_settings.py.
- New default path to database file (XDG_DATA_HOME, e.g. ~/.local/share/openslides/).
- New default path to settings file (XDG_CONFIG_HOME, e.g. ~/.config/openslides/).
- Added special handling to determine location of database and settings file in portable version.
- Don't use similar characters in generated passwords (no 'Il10oO').
- Localised the datetime in PDF header. (#296)
- Used specific session cookie name. (#332)
- Moved code repository from hg to git (incl. some required updates, e.g. version string function).
- Updated German translations.
- Several code optimizations.
- Several minor and medium issues and errors were fixed.


## Version 1.2 (2012-07-25)

https://github.com/OpenSlides/OpenSlides/milestones/1.2

**General:**
- New welcome page with customizable title and text.
- OpenSlides portable win32 binary distribution.
- New start script (start.py) to automatically create the default settings and the database, start the server and the default browser.
- Add plugin system. Allow other django-apps to interact with OpenSlides.

**Projector:**
- New projector dashboard to control all slides on projector.
- New projector live view on projector dashboard.
- Countdown calculation works now on server-side.
- New Overlay messages to show additional information on a second projector layer.
- Add custom slides.
- Add a welcome slide.
- Project application and assignment slides without an agenda item.
- Update the projector once per second (only).

**Agenda:**
- Add new comment field for agenda items.

**Elections (Assignments):**
- New config option to publish voting results for selected winners only.

**Applications:**
- Now, it's possible to deactivate the whole supporter system.
- New import option: set status of all imported applications to 'permit'.
- More log entries for all application actions.

**Participant:**
- Add new comment field for participants.
- Show translated permissions strings in user rols form.
- Admin is redirect to 'change password' page.
- New default user name: "firstname lastname".

**Other:**
- Use Django's class based views.
- Update to Django 1.4. Drop python 2.4 support for this reason.
- Separate the code for the projector.
- Rewrite the vote results table.
- Rewrite the poll API.
- Rewrite the config API. (Now any data which are JSON serializable can be stored.)
- Improved CSV import for application and participants.
- GUI improvements of web interface (e.g. sub navigations, overview tables).
- Several minor and medium issues and errors were fixed.


## Version 1.1 (2011-11-15)

https://github.com/OpenSlides/OpenSlides/milestones/1.1

**Agenda:**
- [Feature] Agenda overview: New item-done-column for all non-manager (#7)
- [Feature] Allow HTML-Tags in agenda item of text (#12)
- [Feature] Split up hidden agenda items in new agenda table section (#13)

**Projector:**
- [Feature] Assignment projector view layout improvements (#9)
- [Bugfix] Zoom problem for sidebar div in beamer view (#5)
- [Bugfix] Blue 'candidate elected line' not visible in projector ajax view (#6)
- [Bugfix] Assignment projector view: Show results for elected candidates only (#11)
- [Bugfix] Missing beamer scaling (#2)
- [Bugfix] Assigment projector view: Removed empty character for no results cell. (#10)

**Applications:**
- [Feature] Import applications (#55)
- [Feature] Support trivial changes to an application (#56)
- [Bugfix] Order submitter and supporter form fields by full name (#53)
- [Bugfix] Application: Show profile instead of submitter username (#15)
- [Bugfix] "Application: Only check enough supports in status ""pub""" (#16)

**Elections:**
- [Feature] New button to show agenda item of selected application/assignment (#54)
- [Feature] Open add-user-url in new tab. (#32)

**Applications/Elections:**
- [Feature] Show voting results in percent (#48)

**Participants:**
- [Feature] Filter displayed permissions in group editor (#59)
- [Feature] Generate password after user creation automatically (#58)
- [Bugfix] Encoding error (#1)
- [Bugfix] List of participants (pdf) link not visible for users with see-particiants-permissions (#3)
- [Bugfix] Use user.profile.get_type_display() instead of user.profile.type (#4)

**PDF:**    
- [Feature] Mark elected candidates in PDF (#31)
- [Feature] New config option to set title and preamble text for application and assignment pdf (#33)
- [Feature] New config option to set number of ballots in PDF (#26)
- [Bugfix] Assignment ballot pdf: Wrong line break in group name with brackets (#8)
- [Bugfix] Print available candidates in assignment pdf (#14)
- [Bugfix] Show "undocumented" for result "-2" in application and assignment pdf (#17)

**Other:**
- [Feature] Rights for anonymous (#45)
- [Feature] Show counter for limited speaking time (#52)
- [Feature] Reorderd config tab subpages (#61)
- [Localize] i18n German: Use gender-specific strings (#51)
- [Bugfix] ``<button>`` inside ``<a>`` tag not working in IE (#57)
- [Bugfix] Change default sort for tables of applications, assignments, participants (#27)


## Version 1.0 (2011-09-12)

https://github.com/OpenSlides/OpenSlides/tree/1.0/
