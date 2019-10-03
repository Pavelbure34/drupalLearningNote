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
        ``
    
};