<!DOCTYPE html>
<html lang="en">

<head>
    <title>Shakhor Portfolio</title>

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!--FA Icons  -->
    <script src="https://use.fontawesome.com/5f66eba51a.js"></script>
    <!-- Fonts -->
    <link href='http://fonts.googleapis.com/css?family=Roboto+Slab:400,700' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Noto+Sans' rel='stylesheet' type='text/css'>
    <!--Import Google Icon Font-->
    <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import Bootstrap.css-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
    <!--    Custom CSS    -->
    <link rel="stylesheet" href="<?php echo get_bloginfo('template_directory'); ?>/build/css/style.min.css">

</head>

<body>
    <!-- LG + NAV AREA-->
    <nav class="navbar hidden-md-down">
        <div class="container d-flex">
            <a href="index.php" class="navbar-brand">Front-End Developer</a>
            <div class="collapse navbar-collapse d-flex ml-auto">
                <ul class="navbar-nav flex-row">
                    <li class="nav-item active">
                        <a class="nav-link" href="https://www.linkedin.com/in/shakhor-smith/" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i>Linkedin</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://github.com/smithmanny" target="_blank"><i class="fa fa-github" aria-hidden="true"></i>Github</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://codepen.io/smithmanny/" target="_blank"><i class="fa fa-codepen" aria-hidden="true"></i>Codepen</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- Sub nav LG + -->
    <nav class="navbar sticky-top nav-wrapper hidden-md-down">
        <div class="container subNav">
            <ul class="linksP linksP-transparent">
                <li class="links blog"><a class="active" href="blog.php">Blog</a></li>
                <li class="links port"><a href="index.php#portfolio">Portfolio</a></li>
                <li class="links contact"><a href="index.php#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
    <!-- Md and down nav -->
    <nav class="navbar navbar-toggleable-md hidden-lg-up sticky-top">
        <div class="row">
            <div class="col my-auto text-center">
                <a href="#" class="navbar-brand">Front-End Developer</a>
            </div>
            <div class="navbar-collapse col-sm-12">
                <ul class="navbar-nav flex-row">
                    <li class="nav-item active">
                        <a class="nav-link" href="index.html"><i class="fa fa-home" aria-hidden="true"></i>Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="blog.html"><i class="fa fa-list-alt" aria-hidden="true"></i>Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.html#contact"><i class="fa fa-envelope-o" aria-hidden="true"></i>Contact</a>
                    </li>
                </ul>
            </div>
            <div class="col">
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            </div>
        </div>
    </nav>

    <main>
        <section class="content">
            <div class="inner">
                <h1 class="my-5 display-4">Blog</h1>
                <div class="aboutContent container">
                    <div class="text-center mt-5">
                        <article>
                            <div class=" col-xs-12 col-xl-6 mx-auto">
                              <a href="#">
                                <h1 class="mb-0">Front-End Web Developer Bundle</h1>
                              </a>
                                <a href="#">
                                    <p>
                                        A Front-End Web Developer Yarn starter kit. This bundle is what I currently use on my projects and find this setup to work best for me. This bundle includes:
                                        <ul>
                                          <li>
                                            Yarn (Alternative to NPM)
                                          </li>
                                          <li>
                                            Gulp
                                          </li>
                                          <li>
                                            Browser-sync
                                          </li>
                                          <li>
                                            SASS and JQuery minifier
                                          </li>
                                        </ul>
                                    </p>
                                </a>
                            </div>
                        </article>
                        <hr />

                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="page-footer">
        <div class="container py-2">
            <p class="center-align my-auto">
                Made with &hearts; by Shakhor Smith
            </p>
        </div>
    </footer>



    <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js " integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb " crossorigin="anonymous "></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js " integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn " crossorigin="anonymous "></script>
    <script type="text/javascript" src="build/js/main.min.js "></script>

</body>

</html>
