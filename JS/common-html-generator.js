// created by jingweili on 2/22/2020


$(document).ready(function() {
    // generate html for nav bar
    let year = (new Date()).getFullYear();
    $("body").prepend(`
        <div id="nav" class="menu-wrap">
            <nav class="menu">
                <ul class="clearfix">
                    <li><a href="index.html">HOME</a></li>
                    <li><a href="Bio.html">ABOUT</a></li>
                    <li><a href="Resume.html">RESUME</a></li>
                    <li><a href="AppFolio.html">APPS</a></li>
                    <li><a href="Graphic Design.html">GRAPHIC DESIGN</a></li>
                    <li>
                        <a id="nav_proj" href="Projects.html">PROJECTS</a>
                        <ul class="sub-menu">
                            <li><a href="Projects.html">All</a></li>
                            <li><a href="proj_frc.html">FIRST Robotics</a></li>
                            <li><a href="Beatslytics.html">Beatslytics</a></li>
                            <li><a href="Litec.html">EmbeddedControl</a></li>
                            <li><a href="https://github.com/CSDTs/3D_Visualizer/tree/3D-Visualizer-iOS">3D Visualizer</a></li>
                        </ul>
                    </li>
                    <li><a href="Games.html">GAMES</a></li>
                    <li><a href="Contacts.html">CONTACT</a></li>
                </ul>
            </nav>
        </div>

        <div id="top_mobile_nav">
            <img id="navicon" src="Images/navicon.png" height="50px" width="50px">
        </div>

        <header>
            <nav id="mobile_nav">
                <div class="horizScrollDiv" style="margin-left: 20px">
                    <a href="index.html"><img src="Images/home.png" height="70" width="70"></a>
                    <li><a href="index.html">HOME</a></li>
                </div>
                <div class="horizScrollDiv">
                    <a href="Bio.html"><img src="Images/aboutIcon.png" height="70" width="70"></a>
                    <li><a href="Bio.html">ABOUT</a></li>
                </div>
                <div class="horizScrollDiv">
                    <a href="Resume.html"><img src="Images/resumelogo.png" height="70" width="70"></a>
                    <li><a href="Resume.html">RESUME</a></li>
                </div>
                <div class="horizScrollDiv">
                    <a href="AppFolio.html"><img src="Images/apps.png" height="70" width="70"></a>
                    <li><a href="AppFolio.html">APPS</a></li>
                </div>
                <div class="horizScrollDiv">
                    <a href="Graphic Design.html"><img src="Images/splashIcon.png" height="70" width="70"></a>
                    <li><a href="Graphic Design.html">GRAPHIC DESIGN</a></li>
                </div>
                <div class="horizScrollDiv">
                    <a href="Projects.html"><img src="Images/gearIcon.png"height="70"width="70"></a>
                    <li><a href="Projects.html">PROJECTS</a></li>
                </div>
                <div class="horizScrollDiv">
                    <a href="Games.html"><img src="Images/gameIcon.png" height="70" width="70"></a>
                    <li><a href="Games.html">GAMES</a></li>
                </div>
                <div class="horizScrollDiv" style="margin-right: 20px">
                    <a href="Contacts.html"><img src="Images/phone.png" height="70" width="70"></a>
                    <li><a href="Contacts.html">CONTACT</a></li>
                </div>
            </nav>
        </header>
    `);

    // generate html for footer
    $("body").append(`
        <div id="footer_container">
            <div id="footerx">
                <div id="personal_logo">
                    <img style="margin-top: 18px" src="Images/PersonalLogoBlack.png">
                </div>
                <div id="section1">
                        <div id="navigation">
                        <ul>
                            <li><h4>Pages</h4></li>
                            <div class="slideContents">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="Bio.html">About</a></li>
                                <li><a href="Resume.html">Resume</a></li>
                                <li><a href="Graphic%20Design.html">Graphic Design </a></li>
                                <li><a href="Games.html">Games</a></li>
                                <li><a href="Contacts.html">Contact Me</a></li>
                            </div>
                        </ul>
                    </div>
                    <div id="projects_footer">
                        <ul>
                            <li><h4>Projects</h4></li>
                            <div class="slideContents">
                                <li><a href="Projects.html">All Projects</a></li>
                                <li><a href="Games.html">2048 Game</a></li>
                                <li><a href="AppFolio.html">Apps</a></li>
                                <li><a href="Beatslytics.html">Beatslytics</a></li>
                                <li><a href="Litec.html">Embedded Control</a></li>
                                <li><a href="https://github.com/CSDTs/3D_Visualizer/tree/3D-Visualizer-iOS">3D Visualizer</a></li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div id="section2">
                    <div id="graphics_footer">
                        <ul>
                            <li><h4>Designs</h4></li>
                            <div class="slideContents">
                                <li><a href="https://www.behance.net/gallery/47281675/2026-Time-Capsule">Time Capsule</a></li>
                                <li><a href="https://www.behance.net/gallery/52343049/RPI-Class-of-2021-Sticker-Design">2021 Stickers</a></li>
                                <li><a href=Regular_Art.html>Regular Art</a></li>
                                <li><a href=https://www.behance.net/gallery/47687973/Robotics-Recruitment-Poster>Robotcs Poster</a></li>
                                <li><a href="https://www.behance.net/MrProLi">Behance</a></li>
                                <li><a href="https://www.flickr.com/photos/154270674@N02/">Flickr</a></li>
                            </div>
                        </ul>
                    </div>
                    <div id="social_media_footer">
                        <ul>
                            <li><h4>Social</h4></li>
                            <div class="slideContents">
                                <li><a href="https://www.facebook.com/li.jingwei.94">Facebook</a></li>
                                <li><a href="https://www.instagram.com/ljw980105">Instagram</a></li>
                                <li><a href="https://www.linkedin.com/in/jingweili2/">LinkedIn</a></li>
                                <li><a href="https://twitter.com/MrProLi">Twitter</a></li>
                                <li><a href="https://www.youtube.com/channel/UC33WP6-Af8Oy7SGzZm5mxng">Youtube</a></li>
                                <li><a href="https://github.com/ljw980105/">GitHub</a></li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
    
            <div id="mobile_logo">
                <img src="Images/PersonalLogo.png">
            </div>
        </div>
        <h4 id="standalone_footer" style="text-align: center; margin: 3% 5%"> &copy; JING WEI LI 2017-${year}. Proudly Created from Scratch</h4>
    `);

});
