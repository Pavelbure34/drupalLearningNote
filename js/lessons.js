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
        ``,
    day04:
        ``,
    day05:
        ``,
    day06:
        ``
    
};