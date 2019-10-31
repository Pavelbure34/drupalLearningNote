const data = {
    ot:
        `<h2>Orientation:My.denison compositions</h2>
        <section>
            Congratulations! Now you are employed to myDenison Development.<br>
            Before we go over, let&rsquo;s go over 
            My.Denison frameworks and how they work with each other.
            <ul>
                <li><emB>Lando</emB>
                    <div class="indented">
                        It is <emR>docker container</emR> service.<br>
                        It enables my.Denison to function
                        under different frameworks.
                    </div>
                </li>
                <li><emR>Vue.js</emR>
                    <div class="indented">
                        In <emB>some portion</emB> of my.denison,
                        they use it.
                    </div>
                </li>
                <li><emR>Drupal</emR>
                    <div class="indented">
                        Majority of portion is
                        with drupal framework.<br> 
                        Currently page is in <emB>Drupal 7</emB> however,
                        it will be fully <emB>migrated to Drupal 8</emB>.
                    </div>
                </li>
                <li><emR>php</emR>
                    <div class="indented">
                        The serverside is written with PHP.
                    </div>
                </li>   
            </ul> 
        </section>`,
    day01:
        ` <h2>What is CMS, Drupal, Open Source?</h2>
        <section>
            <section>
                <h3>What is <emR>CMS</emR>?</h3>
                <blockquote>
                    <emB>CMS</emB> = Content Management System or
                    tool that <emR>lets users</emR> add, publish, edit, or remove content from a web.
                </blockquote>
                It helps you <emB>manage</emB> <emR>digital contents</emR>
                with ease.The following image is the example of LAMP stack.<br>
                <img
                    src="img/day01/LAMP.png"
                    width="500"
                    height="300"
                    alt="LAMP"
                >
                <ul>
                    <li>usually written with <emB>script language</emB>.</li>
                    <li>usually <emB>running</emB> on computer which <emR>database and web servers</emR> are installed.</li>
                    <li>Combination of OS and CMS: Linux, Apache Web Server, MySQL, and PHP = LAMP stack</li>
                </ul>
            </section>
            <section>
                <h3>What is <emR>Drupal</emR>?</h3>
                <blockquote>
                    <emB>Drupal</emB>
                    = <emR>Web</emR> Application <emB>CMS</emB>
                    <emB>allowing</emB> <emB>user(s)</emB> to <emB>create, edit, control
                    access</emB> to website using GUI.
                </blockquote>
                <ul>
                    <li>It uses <emB>PHP</emB> for <emR>dynamic building of HTML</emR>.</li>
                    <li>Based on <emB>LAMP stack</emB></li>
                    <li><emR>modular design</emR> enables
                        <emB>changes in the themes and features</emB> with 
                        <emB>installing 
                        or uninstalling of modules</emB>.
                    </li>
                    <li>Supporting OS: <emB>MacOS, Windows, Linux</emB></li>
                    <li>Supporting Web Server: <emB>Nginx, IIS</emB></li>
                    <li>Supporting Database: <emB>PostgreSQL, SQLite, MariaDB, Percona</emB></li>
                </ul>
                <section class="indented">
                    <h4>Why Drupal?</h4>
                    <ol>
                        <li>You can have <emR>benefits</emR> of
                             <emB>
                                 online editing, uniformity among large scale, possible features for more complexity
                             </emB>.
                        </li>
                        <li>It is <emR>general purpose</emR> CMS and can <emB>fit into anything</emB>.</li>
                        <li><emR>IT IS FREE</emR></li>
                        <li>Possible Operations
                            <ul>
                                <li>control over publication status and work flow</li>
                                <li>create and manage custom URL and menu items</li>
                                <li>manage users and acess for content and features of the site</li>
                                <li>organize content with categories and listing pages</li>
                                <li>moving blocks of contents to different areas of page</li>
                            </ul>
                        </li>
                    </ol>
                </section>
            </section>
            <section>
                <h3>What is <emR>Open Source</emR>?</h3>
                <blockquote>
                    <emR>Open Source</emR> software(OSS) is <emR>licensed</emR>
                    for <emB>anyone</emB> to edit, inspect, modify, or distribute
                    <emB>freely</emB>.
                </blockquote>
                <section class="indented">
                    <h4>Why does it matter?</h4>
                    Building an software based on the community of developers and users
                    will not only gives you more ideas for improvement and helps you
                    avoid the pitfalls.
                </section>
            </section>
        </section>`,
    day02:
        ` <h2>Modules and Themes</h2>
        <emR>Modules and Themes</emR> are <emB>core basics</emB> of Drupal frameworks.<br>
        <emR>Module</emR> determines <emB>contents on the site</emB> and
        <emR>Theme</emR> determines <emB>HTML markup and CSS wrap-ups</emB>.
        <section>
            <h3>Modules</h3>
            <blockquote>
                <emB>Module</emB> = A set of PHP, Javascript, and CSS <emR>extending</emR>
                    <emB>site features and add functionality</emB>.
            </blockquote>
            Drupal site extends its features and functionalities with <emB>modules</emB>.<br>
            By simply <emB>installing or uninstalling them</emB>, site can be managed.<br>
            More importantly, <emR>modules determine the content to be shown in the site</emR>.
            <ul>
                <caption>Core functionality of modules</caption>
                <li>Manage <emG>User accounts</emG> = <emR>the core User</emR> <emB>module</emB></li>
                <li>Manage <emG>basic contents</emG> = <emR>the core Node</emR> <emB>module</emB></li>
                <li>Manage <emG>basic fields</emG> = <emR>the core Field or UI</emR> <emB>module</emB></li>
                <li>Manage <emG>navigation menus</emG> = <emR>the core Menu UI</emR> <emB>module</emB></li>
                <li>Make <emG>lists, grids, blocks</emG> from existing contents = <emR>the core Views and Views UI</emR>
                     <emB>module</emB></li>
            </ul>
            However, it is <emB>a good convention</emB> to <emR>uninstall</emR> <emB>modules not being used</emB>. 
        </section>
        <section>
            <h3>Themes</h3>
            <blockquote>
                <emB>Themes</emB> = A set of files <emR>defining</emR>
                <emB>the visual look and feel of your website</emB>.
            </blockquote>
            Themes determines <emB>HTML mark-ups and CSS wrap-ups</emB>.<br>
            Themes can be <emB>provided</emB> with <emR>core distribution</emR>.
            <ul>
                <li>supports both free and paid themes</li>
                <li>also supports 3rd party themes.</li>
            </ul>
        </section>`,
    day03:
        ` <h3>Distributions</h3>
        <section>
            <blockquote>
             <emB>Distribution</emB> = provision of <emR>site features and functions</emR>
             <emB> for a specific type of site as single downlad</emB>
             <ul>
                 <caption>including</caption>
                 <li>core software</li>
                 <li>contributed modules, themes</li>
                 <li>pre-defined configurations</li>
             </ul>
            </blockquote>
            It is <emG>simlar to NPM or Yarn</emG>.
        </section>
        <section>
            <h4>Full-featured distribution</h4>
            It provides <emB>perfect solution</emB> for the
             <emB>specific purposes</emB>.<br>
            ex) academic, government, nonprofit, publishing, social
        </section>
        <section>
             <h4>other distribution</h4>
             It can be <emB>quick start</emB> tools for developers and site builders as
             <EmR>starting point</EmR>.
         </section>`,
    day04:
        `<h2>Data Types</h2>
        There are <emB>four types</emB> of data to be used
        for Drupal websites.
        <dl>
            <dt><emR>Content</emR>:</dt>
            <dd>
                <blockquote>
                    <emB>information</emB>
                    to be <emB>shown or used</emB>
                     to <emR>site visitors</emR>.
                </blockquote>
                <ul>
                    <caption>ex) text, images, etc</caption>
                    <li>relatively permanent</li>
                    <li>always <emB>editable</emB></li>
                </ul>
            </dd>

            <dt><emR>Configuration</emR>:</dt>
            <dd>
                <blockquote>
                    <emB>setting</emB> defining
                     <emG>how your site behaves</emG> or is displayed.
                </blockquote>
                <ul>
                    <li>relatively permanent</li>
                    <li>always <emB>editable</emB></li>
                    <li><emG>sometimes</emG> shown to site visitors.</li>
                </ul>
            </dd>

            <dt><emR>State</emR>:</dt>
            <dd>
                <blockquote>
                    <emB>information</emB> of the <emR>temporary</emR>
                    state of the <emB>current site</emB>.
                </blockquote>
                <ul>
                    <caption>ex) time when cron jobs were last run</caption>
                    <li>temporary</li>
                </ul>
            </dd>

            <dt><emR>Session</emR></dt>
            <dd>
                <blockquote>
                    <emB>information</emB> of the <emR>reaction to the site</emR>
                    of the <emB>individual visitor</emB>.
                </blockquote>
                <ul>
                    <caption>ex) logged in or not</caption>
                    <li><emR>temporary</emR></li>
                    <li><emB>sub type</emB> of state</li>
                </ul>
            </dd>
        </dl>`,
    day05:
        `  <h2>Regions in theme</h2>
        Websites has sections for each contents and functionalities.
        <blockquote>
            <emR>regions</emR> = a set of named regions on website.
        </blockquote>
        <ul>
            <li>dependent on layouts of the page.</li>
        </ul>`,
    day06:
        `<h2>Planning site layout</h2>
        <section>
            <h3>1. make a <emB>list of contents</emB> to be
            <emB>displayed</emB> to <emR>site visitors</emR>.</h3>
        </section>
        <section>
            <h3>2. make a <emB>list and types of pages</emB> and
            what wil be <emB>contained</emB> at <emR>each page</emR>.</h3>
        </section>
        <section>
            <h3>3.decide a <emB>the most important data</emB> for
            <emB>each pages</emB> and <emR>what</emR> should be
             <emB>in main navigation</emB>.</h3>
        </section>
        <section>
            <h3>3.make a <emR>rough design</emR> for both <emB>mobile and desktop</emB>.</h3>
        </section>`,
    day07:
        `<h2>Contents Entity and Fields</h2>
        <section>
            <h3>Contents Entity</h3>
            <blockquote>
                <emR>item</emR> of the <emB>content data</emR>
                <ul>
                    <caption>consisting of</caption>
                    <li>text, HTML, images, attached files</li>
                </ul>
            </blockquote>
            <ul>
                <li>can be <emB>defined</emB> by <emR>core software and modules</emR>.</li>
                <li>can <emB>have sub-type</emB>.</li>
            </ul>
            <div class="indented">
                <h4>Examples</h4>
                Here are some popular entities and its subtypes.
                <table>
                    <tr>
                        <th>Entity Type</th>
                        <th>Entity Subtype</th>
                        <th>Defiing module</th>
                        <th>Main use</th>
                    </tr>
                    <tr>
                        <td>Comment</td>
                        <td>Comment Type</td>
                        <td>Comment module</td>
                        <td>Comment added to content</td>
                    </tr>
                    <tr>
                        <td>Content item</td>
                        <td>Content type</td>
                        <td>node module</td>
                        <td>contents to be in main page area</td>
                    </tr>
                    <tr>
                        <td>User Profile</td>
                        <td>NONE</td>
                        <td>User module</td>
                        <td>defining user data for site</td>
                    </tr>
                    <tr>
                        <td>Custom block</td>
                        <td>Block type</td>
                        <td>Custom block module</td>
                        <td>small chunk of data to be shown in sidebar block</td>
                    </tr>
                    <tr>
                        <td>file</td>
                        <td>NONE</td>
                        <td>file module</td>
                        <td>image or file attachment tracked and managed by site</td>
                    </tr>
                    <tr>
                        <td>contact form</td>
                        <td>Form type</td>
                        <td>contact module</td>
                        <td>a form letting visitors contact site owners</td>
                    </tr>
                </table>
            </div>
        </section>
        <section>
            <h3>Fields</h3>
            <blockquote>
                each <emB>entity(item of data)</emB>
                consist of field(s) holding
                 <emB>one type of data</emB> for <emB>each</emB>.
            </blockquote>
            <ul>
                <li>good example is <emG>address item</emG>: <emB>street, state, country, post box</emB>.</li>
                <li>can be <emB>added by administrator</emB> on an <emR>entity sub-type</emR></li>
                <li>similar to <emG>properties and member functions on C++ class and JavaScript Object</emG></li>
            </ul>
        </section>`,
    day08:
        ` <h2>Modular Contents</h2>
        <blockquote>
            <emR>Modular Contents</emR> = <emB>separate</emB> contents
            <emB>providing data</emB> for other pages to render. 
        </blockquote>
        <ul>
            <li>separates data and page rendering when required.</li>
            <li>allows <emG>automated edition of page</emG> simply by changing modular data.</li>
        </ul>`,
    day09:
        ` <h2>Contents Structures</h2>
        Ask yourself this questions. 
        <blockquote>
            <ul>
                <li>What kinds of contents do I need?</li>
                <li>How are they all related?</li>
                <li>which pages need one from all data you listed?</li>
            </ul>
        </blockquote>
        <ol>
            <li><emB>brainstorm!</emB></li>
                 <div class="indented">
                     You can ask yourself about
                     <ul>
                         <li><emR>What</emR> does my site <emR>need</emR> to <emB>have</emB>?</li>
                         <li><emR>What</emR> do I want to <emR>share</emR> with <emB>users</emB>?</li>
                         <li><emR>What</emR> will <emB>users</emB> be <emR>looking</emR> for?</li>
                     </ul>
                 </div>
            <li>decide <emG>the best type</emG> for each <emB>contents entity</emB>.</li>
            <li>decide <emB>divisions</emB> of <emB>entity subtypes</emB></li>
            <li>decide <emB>fields</emB> for <emB>entity subtypes</emB></li>
            <li>decide <emB>listings of entities</emB></li>
            <li>decide <emG>how much data type</emG> you allow for each subtypes.</li>
        </ol>
        <div class="indented">
            <h3>Examples</h3>
             <blockquote>
                 Consider 
             </blockquote>
        </div>`,
    day10:
        `<h2>Editorial Workflow</h2>
        <blockquote>
            A <emG>process</emG> organisations
            follow to <emR>create, review, edit and publish</emR> <emB>contents</emB>.
        </blockquote>
        Think of a newspaper company.
        There are <emB>contents creators and editors</emB>.
        <section>
            <h3>available tools</h3>
            <div class="indented">
                <h4>Published-unpublished status</h4>
                <emB>contents item entity type</emB>
                marks each content <emG>either published or
                unpublished</emG>. 
            </div>
            <div class="indented">
                <h4>Revision Tracking</h4>
                some contents store the older version when revised.
            </div>
            <div class="indented">
                <h4>Workflows</h4>
                The <emB>core Workflow modules</emB> let you
                define and assign <emG>roles and permission</emG>
                 to workflow states and transitions.
            </div>
            <div class="indented">
                <h4>Block placement</h4>
                <emB>Custom block entity</emB> lets 
                you create a custom block and edit it and
                make visible on site when it is only done.
            </div>
        </section>`,
    day11:
        `<h2>User Interface, Configurations, Content Translations.</h2>
        <section>
            <h3>Content Translation</h3>
            Sometimes you have to set up a page <emR>not based on English</emR>.<br>
            <emB>User interface text, Configuration, and Content text and files</emB>
            are all translatable.
            <div class="indented">
                <h4>User Interface</h4>
                You can download <emG>core interface translation modules</emG>.
            </div>
            <div class="indented">
                <h4>Configuration Text</h4>
                Text predefined by system setting such as site title, and headers,
                are editable so translatable.
            </div>
            <div class="indented">
                <h4>Content Text and files</h4>
                You can set it as translatable if translating modules are installed.
            </div>
            However, <emR>administration</emR> contents
            will still be in English.
        </section>`,
    day12:
        `<h2>Basic Set up</h2>
        <section>
            <h3>PHP</h3>
            <emB>PHP 7.2 or higher versions</emB> are recommended.
        </section>
        <section>
            <h3>Web Servers</h3>
            <emB>Apache</emB> is recommended yet.<br>
            Nginx, Hiawatha, PHP local server are also
            available.
        </section>
        <section>
            <h3>Database</h3>
            mySQL version 5.5.3 or higher with InnoDB compatibility.
            or PostGre 9.1.2 or higher.
            SQLite 3.4.2 or higher.
        </section>`,
    day13:
        `<h2>Additional useful tools</h2>
        <section>
            <div class="indented">
                <h3>Git</h3>
                Not to mention, Git offers
                <emB>command line console</emB>
                which is very efficient,
            </div>
            <div class="indented">
                <h3>Composer</h3>
                <blockquote>
                    <emR>Composer</emR> is a tool for
                    <emB>managing PHP dependencies.</emB>
                </blockquote>
                <ul>
                    <li>Developers specifies what version of each external libraries</li>
                    <li><emB>Core Module</emB>
                         uses mostly Composer since <emB>it uses external modules</emB>.</li>
                </ul>
            </div>
            <div class="indented">
                <h3>Drupal Console</h3>
                It provides command line environment
                for installing modules, making boiler plates.
            </div>`,
    day14:
        `<h2>How to install and set up drupal 8</h2>
        <section>
            You will need <emB>Apache</emB>,<emB>MySQL</emB>, <emB>PHP</emB>, <emB>Linux</emB>
            since Drupal runs on <emB>LAMP</emB> stack.<br>
            Get yourself a better computer and install lando...<br>
            <ul>
                <li>install lando</li>
                <li>go <a href="https://docs.lando.dev/config/drupal8.html#getting-started">here</a></li>
                <li>lando info</li>
                <li>check database name, password, username, port number, database container</li>
                <li>you are good to go!</li>
            </ul>
        </section>`,
    day15:
        ``,
    day16:
        ``,
    day17:
        ``,
    day18:
        ``,
    day19:
        ``,
    day20:
        `<h2>Changing basic site set up</h2>
        <ol>
            <li><emR>Log in as admin</emR>. Check up on tip section.</li>
            <li>go to <emB>Configuration</emB>-><emB>Basic Site Setting</emB></li>
            <li>There you can change the <emB>site name, slogan, and email address</emB>.</li>
            <li>go to <emB>Configuration</emB>-><emB>Regional Setting</emB></li>
            <li>There you can change the <emB>default country, date.</emB>.</li>
        </ol>`,
    day21:
        `<h2>Installing a module</h2>
        There are two ways to install the modules.
        <ol>
            <li>Using <emR>admin tool bar</emR></li>
            <div class="indented">
                <ol>
                    <li>go to <emR>Extend</emR></li>
                    <li><emB>check</emB> the module</li>
                    <li><emB>click</emB> install</li>
                </ol>
            </div>
            <li>Using <emR>drush command</emR></li>
            <div class="indented">
                <ol>
                    <li>go to <emR>Extend</emR> using admin tool bar</li>
                    <li><emB>check</emB> the module and find machine name</li>
                    <li><emB>drush en</emB> <emG>machaine name you found</emG></li>
                </ol>
            </div>
        </ol>`,
    day22:
        `<h2>Uninstalling a module</h2>
        <li>Using <emR>admin tool bar</emR><br>
            <emG>cannot uninstall modules required by other modules == dependencies</emG></li>
        <div class="indented">
            <ol>
                <li>go to <emR>Extend</emR>-><emR>uninstall</emR></li>
                <li><emB>check</emB> the module</li>
                <li><emB>click</emB> uninstall</li>
            </ol>
        </div>
        <li>Using <emR>drush command</emR></li>
        <div class="indented">
            <ol>
                <li>go to <emR>Extend</emR> using admin tool bar</li>
                <li><emB>check</emB> the module and find machine name</li>
                <li><emB>drush pm-uninstall</emB> <emG>machaine name you found separated by comma</emG></li>
            </ol>
        </div>`,
    day23:
        `<h2>Configure user account setting</h2>
        <ol>
            <li>Go to
                <emB>Configuration</emB>-><emB>People</emB>-><emB>Account setting</emB>
            </li>
            <li>You can change who is allowed to register.</li>
        </ol>`,
    day24:
        `<h2>Configring a Theme</h2>
        <ol>
            <li>Go to <emB>Appearance</emB></li>
            <li>Choose the theme to change</li>
            <li>You can change colour of each part.</li>
        </ol>`,
    day25:
        `<h2>How to add basic pages</h2>
        <ul>
            <caption>On the <emG>admin tool bar</emG>,</caption>
            <li>Click <emB>Content</emB> -> <emB>Add content</emB> -> <emB>basic page</emB></li>
            <li>Select <emB>option for writing</emB></li>
            <li>Set up <emB>URL alias</emB>.</li>
            <li>Set up <emB>published or not</emB></li>
            <li>click <emR>save</emR>.</li>
        </ul>
        You can simply write with pure html, javascript, css.`,
    day26:
        `<h2>How to edit basic pages</h2>
        <ul>
            <caption>On the <emG>admin tool bar</emG>,</caption>
            <li>Click <emB>Content</emB></li>
            <li>Select <emB>Contents</emB>  you like to edit</li>
            <li>Set up <emB>reviison option</emB>.</li>
            <li>Set up <emB>what has been changed</emB></li>
            <li>click <emR>save</emR>.</li>
        </ul>
        You can simply write with pure html, javascript, css.`,
    day27:
        `<h2>How to add pages to navigation</h2>
        <ul>
            <caption>On the <emG>admin tool bar</emG>,</caption>
            <li>Click <emB>Content</emB></li>
            <li>Select <emB>Contents</emB>  you like to edit</li>
            <li>Set up <emB>menu setting</emB>.</li>
            <li>Set up <emB>set up parent item</emB></li>
            <li>click <emR>save</emR>.</li>
        </ul>
        You can simply write with pure html, javascript, css.`,
    day28:
        `<h2>How to change orders navigation</h2>
        <ul>
            <caption>On the <emG>admin tool bar</emG>,</caption>
            <li>Click <emB>Structure</emB>-><emB>Menu</emB></li>
            <li>Select <emB>Main Menu</emB> and click edit</li>
            <li>Drag pages in order you want.</li>
            <li>or modify the weight in menu setting in each page.</li>
            <li>click <emR>save</emR>.</li>
        </ul>
        You can simply write with pure html, javascript, css.`,
    day29:
        `<h2>How to make custom contents type</h2>
        <ul>
          <caption>On the <emG>admin tool bar</emG>,</caption>
          <li>Click <emB>Structure</emB>-><emB>Contents Type</emB></li>
          <li>Select <emB>add content type</emB></li>
          <li>Select <emG>name, title field label, preview options, explanations for preview</emG>.</li>
          <li>Select publishing options such as published, promoted to front page, sticky at top fo lists, creae new revision</li>
          <li>click <emR>save</emR>.</li>
        </ul>`,
    day30:
        `<h2>How to make custom field for contents type</h2>  
        <ul>
            <caption>On the <emG>admin tool bar</emG>,</caption>
            <li>Click <emB>Structure</emB>-><emB>Contents Type</emB></li>
            <li>Select <emB>edit fields</emB> on existing content types</li>
            <li>Select <emG>type and name</emG>.</li>
            <li>Select <emG>basic setp ups</emG>.</li>
            <li>Select <emG>save</emG>.</li>
        </ul>`,
    day31:
        ` <h2>How to delete field from content type</h2>
        <ul>
          <caption>On the <emG>admin tool bar</emG>,</caption>
          <li>Click <emB>Structure</emB>-><emB>Contents Type</emB></li>
          <li>Select <emB>more options</emB> on existing content types</li>
          <li>Select <emG>delete</emG>.</li>
        </ul>`,
    day32:
        ` <h2>Reference Field</h2>
        <blockquote>
            <emB>field</emB> presenting <emR>relationships</emR>
            between entity and one or more other entities.
        </blockquote>
        <ul>
            <li><emB>Content reference</emB> = a <emR>reference</emR> to a <emB>content item</emB></li>
            <div class="indented">
                ex) <emB>Recipe</emB> will require <emR>relationship and reference</emR> with and to <emB>the vendor who posts it</emB>.
            </div>
            <li><emB>Taxonomy term Reference</emB> = a <emR>reference</emR> to a <emB>taxonomy term</emB></li>
            <div class="indented">
                ex) <emB>Recipe</emB> will require <emR>relationship and reference</emR> with and to <emB>ingredients</emB>.
            </div>
            <li><emB>User reference</emB> = a <emR>reference</emR> to a <emB>user account</emB>.</li>
            <div class="indented">
                ex) <emB>Recipe</emB> will require <emR>relationship and reference</emR> with and to <emB>the chef who made it</emB>.
            </div>
        </ul>`,
    day33:
        ` <h2>Taxonomy</h2>
        <blockquote>
            <emB>method</emB> to classify <emR>the contents</emR>
        </blockquote>
        <ul>
            <li>used to <emR>categorize and classify</emR> <emB>posts in website</emB></li>
            <li>single taxonomy is called <emB>term</emB>.</li>
            <li>A set of terms is called <emB>vocabulary</emB>.</li>
            <li>usually <emG>attached to the reference fields to other content entities</emG>.</li>
            <div class="indented">
                ex) <emB>Recipe</emB> will require <emR>ingredient tag</emR>.<br>
                ex) when ingredient carrot is in recipe, searching for carrot will bring all the recipe including carrots.
            </div>
        </ul>`,
    day34:
        `<h2>How to set up taxonomy</h2>
        <ul>
            <li>click <emB>structure</emB>-><emB>taxonomy</emB></li>
            <li>click <emB>add vocabulary</emB></li>
            <li>set up name and description</li>
            <li>fill up the vocabulary.</li>
            <li><emG>time to apply for the field</emG>
                <ul>
                    <li>in <emB>field editing for contents type</emB>, choose taxonomy(reference).</li>
                    <li>set up a name and basic set-ups.</li>
                </ul>
            </li>
            <li>save and good to go.</li>
        </ul>`,
    day35:
        `<h2>How to add reference field</h2>
        <ul>
            <li>go to <emB>structure</emB>-><emB>contents</emB></li>
            <li><emB>edit field</emB> -> <emB>add field in reference</emB></li>
            <li>specify <emR>which content you refer to</emR></li>
        </ul>`,
    day36:
        `<h2>changing content entry form</h2>
        In drupal, those who have admin access can 
        <emB>change</emB> the <emR>form for the entry to th field</emR>.<br>
        <ul>
            <li>go to <emB>structure</emB>-><emB>contents type</emB></li>
            <li>select <emB>manage form display</emB></li>
            <li>change the setting</li>
            <li>click save.</li>
            <li>confirm the change when making new content.</li>
        </ul>`,
    day37:
        ` <h2>How to edit visuals of the contents</h2>
        When you view your contents such as vendor, recipe, player...<br>
         it will need to configure how it is displayed.
         <ul>
             <li>from the admin tool bar,</li>
             <li>go to <emB>structure</emB>-><emB>contents type</emB></li>
             <li>select <emB>manage display</emB></li>
             <li>change <emB>settings</emB>
                 <ol>
                     <li>display order</li>
                     <li>showing or hiding labels</li>
                     <li>link properties</li>
                 </ol>
             </li>
             <li>click save and see how it is done</li>
         </ul>`,
    day38:
        `<h2>image styling</h2>
        When image is not in the desired size, you can set up image style.
        <ul>
            <li>from the admin tool bar,</li>
            <li>go to <emB>configuration</emB>-><emB>image style</emB></li>
            <li>select <emB>make new image style</emB></li>
            <li>set up the properties</li>
            <li>save.</li>
            <li>go to <emB>structure</emB>-><emB>contents type</emB>-><emB>edit display</emB></li>
            <li>apply lmage style to the image.</li>
        </ul>`,
    day39:
        ` <h2>responsive image styles</h2>
        <emB>responsive image style</emB> allows optimal image style for different platform.
          <ul>
              <li>it is mapping between <emB>image style</emB> and <emB>breakpoints</emB>.</li>
              <li><emB>break points</emB> are when image style changes.</li>
          </ul>`,
    day40:``,
    day41:``,
    day42:``,
};