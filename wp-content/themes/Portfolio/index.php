<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <!-- Required meta tags -->
    <meta charset="<?php bloginfo('charset');?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title><?php wp_title(); ?></title>

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
    <link rel="stylesheet" href="<?php echo get_bloginfo('template_directory'); ?>/style.min.css">

    <?php wp_head(); ?>
</head>

<body>
    <!-- LG + NAV AREA-->
    <nav class="navbar hidden-md-down">
        <div class="container d-flex">
            <a href="#" class="navbar-brand">Shakhor Smith</a>
            <div class="collapse navbar-collapse d-flex ml-auto">
                <ul class="navbar-nav flex-row">
                    <li class="nav-item active linkedin">
                        <a class="nav-link" href="https://www.linkedin.com/in/shakhor-smith/" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i>Linkedin</a>
                    </li>
                    <li class="nav-item github">
                        <a class="nav-link" href="https://github.com/smithmanny" target="_blank"><i class="fa fa-github" aria-hidden="true"></i>Github</a>
                    </li>
                    <li class="nav-item codepen">
                        <a class="nav-link" href="https://codepen.io/smithmanny/" target="_blank"><i class="fa fa-codepen" aria-hidden="true"></i>Codepen</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- Sub nav LG + -->
    <nav class="navbar nav-wrapper hidden-md-down">
        <div class="container subNav">
            <ul class="linksP linksP-transparent">
                <li class="links blog"><a href="blog.php">Blog</a></li>
                <li class="links port"><a href="#portfolio">Portfolio</a></li>
                <li class="links contact"><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
    <!-- Md and down nav -->
    <nav class="navbar navbar-toggleable-md navbar-light hidden-lg-up sticky-top">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="my-auto text-center">
          <a href="index.php" class="navbar-brand">Shakhor Smith</a>
      </div>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="index.php"><i class="fa fa-home" aria-hidden="true"></i>Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="blog.php"><i class="fa fa-list-alt" aria-hidden="true"></i>Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.php#contact"><i class="fa fa-envelope-o" aria-hidden="true"></i>Contact</a>
                    </li>
                </ul>
            </div>
    </nav>

    <main>
        <!--About Section  -->
        <section id="about" class="hero">
            <div class="inner">
                <div class="copy">
                    <h1 class="text-white display-4">Hi, I'm Shakhor.<br /> I'm a Front-End Web Developer</h1>
                    <div style="margin-top: 3rem;">
                        <a href="#portfolio">
                            <i class="fa fa-arrow-down fa-5x" aria-hidden="true" style="color:white; padding: 0 20px;"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <!-- Porfolio Section -->
        <section id="portfolio" class="content info">
            <div class="inner">
                <div class="infoContent">
                    <h1>Portfolio</h1>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 mx-auto">
                            <h1>Coming Soon</h1>
                        </div>
                        <!-- <div class="col port-body">
                            <a href="#">
                                <div class="overlay">
                                    <div class="overlay-btn">
                                        <p>
                                            Open Website
                                        </p>
                                    </div>
                                </div>
                                <img class="img-fluid test" src="img/portfolioBg.png" />
                            </a>
                            <p>
                                <strong>Project name</strong>
                            </p>
                            <p>
                                Languages I used for project
                            </p>
                        </div>
                        <div class="col port-body">
                            <a href="#">
                                <div class="overlay">
                                    <div class="overlay-btn">
                                        <p>
                                            Open Website
                                        </p>
                                    </div>
                                </div>
                                <img class="img-fluid" src="img/portfolioBg.png" />
                            </a>
                            <p>
                                <strong>Project name</strong>
                            </p>
                            <p>
                                Languages I used for project
                            </p>
                        </div>
                        <div class="col port-body">
                            <a href="#">
                                <div class="overlay">
                                    <div class="overlay-btn">
                                        <p>
                                            Open Website
                                        </p>
                                    </div>
                                </div>
                                <img class="img-fluid" src="img/portfolioBg.png" />
                            </a>
                            <p>
                                <strong>Project name</strong>
                            </p>
                            <p>
                                Languages I used for project
                            </p>
                        </div>
                    </div> -->
                    </div>
                </div>
        </section>
        <!-- Contact Section -->
        <section class="content" id="contact">
            <div class="inner">
                <div class="aboutContent container">
                    <h1 class="mb-3">Contact Me</h1>
                    <!-- Form submitted message -->
                    <div id="msgSubmit" class="h3 text-center hidden"></div>
                    <form method="post" id="contact-form" action="contact.php" role="form">
                        <!-- Form submitted message -->
                        <div class="messages "></div>
                        <!-- Name - From -->
                        <div class="form-group col-8">
                            <label for="name">Name *</label>
                            <input type="text" id="name" name="name" class="form-control" required/>
                            <div class="help-block with-errors"></div>
                        </div>
                        <!-- Email - Form -->
                        <div class="form-group col-8 ">
                            <label for="email ">Email *</label>
                            <input id="email" type="email" name="email" class="form-control" required>
                            <div class="help-block with-errors"></div>
                        </div>
                        <!-- Messages - Form -->
                        <div class="form-group col-8">
                            <label for="message">Message *</label>
                            <textarea id="message" name="message" class="form-control" rows='3' required></textarea>
                            <div class="help-block with-errors"></div>
                        </div>
                </div>

                <button class="btn submit-btn" id="submit" name="submit" type="submit" value="send">Submit
                </button>
                <div class="row ">
                    <div class="col-md-12 mt-1">
                        <p class="text-muted center-align "><strong>*</strong> These fields are required.</p>
                    </div>
                </div>
                </form>
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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/1000hz-bootstrap-validator/0.11.9/validator.min.js"></script>
    <script type="text/javascript" src="<?php echo get_bloginfo('template_directory'); ?>/assets/js/custom.min.js"></script>

</body>

</html>
