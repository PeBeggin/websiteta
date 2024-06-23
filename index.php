<?php
require_once('server/config.php');
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Capricorn Wedding Decoration</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="Free HTML Templates" name="keywords">
    <link rel="shortcut icon" href="img/logo_capricorn-Photoroom.png" type="image/x-icon">
    <meta content="Free HTML Templates" name="description">

    <!-- Favicon -->
    <link href="img/favicon.ico" rel="icon">

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:wght@400;600&display=swap" rel="stylesheet">

    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">

    <!-- Libraries Stylesheet -->
    <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
    <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet">

    <!-- Customized Bootstrap Stylesheet -->
    <link href="css/style.css" rel="stylesheet">
</head>

<body data-spy="scroll" data-target=".navbar" data-offset="51">
    <!-- Navbar Start -->
    <nav class="navbar fixed-top shadow-sm navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5">
        <a href="index.html" class="navbar-brand d-block d-lg-none">
            <h1 class="font-secondary text-white mb-n2" style="text-align: center;">Capricorn</h1>
            <h2 class="font-secondary text-white mb-n2" style="font-size: 15px;">Wedding Decoration</h2>
        </a>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div class="navbar-nav ml-auto py-0">
                <a href="#services" class="nav-item nav-link active">Services</a>
                <a href="#gallery" class="nav-item nav-link">Gallery</a>
                <a href="#rsvp" class="nav-item nav-link">Request</a>
                <a href="#contact" class="nav-item nav-link">Contact</a>
            </div>
            <a href="index.html" class="navbar-brand mx-5 d-none d-lg-block">
                <img src="img/logo_capricorn-Photoroo.png" alt="Capricorn Wedding Decoration" class="logo-img" style="width: 140px; height: 90px;">
            </a>
            <div class="navbar-nav mr-auto py-0">

            </div>
        </div>
    </nav>
    <!-- Navbar End -->


    <!-- Carousel Start -->
    <div class="container-fluid p-0 mb-5 pb-5" id="home">
        <div id="header-carousel" class="carousel slide carousel-fade" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item position-relative active" style="height: 100vh; min-height: 400px;">
                    <img class="position-absolute w-100 h-100" src="img/carousel-90.jpg" style="object-fit: cover;">
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div class="p-3" style="max-width: 900px;">
                            <h1 class="display-1 font-secondary text-white mt-n3 mb-md-4" style="font-size: 140px">
                                Capricorn</h1>
                            <div class="d-inline-block border-top border-bottom border-light py-3 px-4">
                                <h3 class="text-uppercase font-weight-normal text-white m-0" style="letter-spacing: 2px; ">Wedding Decoration</h3>
                            </div>
                            <button type="button" class="btn-play mx-auto" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="carousel-item position-relative" style="height: 100vh; min-height: 400px;">
                    <img class="position-absolute w-100 h-100" src="img/carousel-91.jpg" style="object-fit: cover;">
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div class="p-3" style="max-width: 900px;">
                            <h1 class="display-1 font-secondary text-white mt-n3 mb-md-4" style="font-size: 140px">
                                Capricorn</h1>
                            <div class="d-inline-block border-top border-bottom border-light py-3 px-4">
                                <h3 class="text-uppercase font-weight-normal text-white m-0" style="letter-spacing: 2px;">Wedding Decoration</h3>
                            </div>
                            <button type="button" class="btn-play mx-auto" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <a class="carousel-control-prev justify-content-start" href="#header-carousel" data-slide="prev">
                <div class="btn btn-primary px-0" style="width: 68px; height: 68px;">
                    <span class="carousel-control-prev-icon mt-3"></span>
                </div>
            </a>
            <a class="carousel-control-next justify-content-end" href="#header-carousel" data-slide="next">
                <div class="btn btn-primary px-0" style="width: 68px; height: 68px;">
                    <span class="carousel-control-next-icon mt-3"></span>
                </div>
            </a>
        </div>
    </div>

    <!-- Carousel End -->


    <!-- Video Modal Start -->
    <div class="modal fade" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <!-- 16:9 aspect ratio -->
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src="" id="video" allowscriptaccess="always" allow="autoplay"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Video Modal End -->


    <!-- About Start -->
    <div class="container-fluid py-5" id="services">
        <div class="container py-5">
            <div class="section-title position-relative text-center">
                <h6 class="text-uppercase text-primary mb-3" style="letter-spacing: 3px;">Services</h6>
                <h1 class="font-secondary display-4" style="font-size: 30px">You Have <span class="text-primary">Plan</span> | We Have <span class="text-primary">Solution</span></h1>
                <i class="far fa-heart text-dark"></i>
            </div>
            <div class="row m-0 mb-4 mb-md-0 pb-2 pb-md-0">
                <div class="col-md-6 p-0 text-center text-md-right">
                    <div class="h-100 d-flex flex-column justify-content-center bg-secondary p-5">
                        <h3 class="mb-3">Engagement</h3>
                        <p style="text-align: justify;">Kami melayani jasa engagement untuk membantu Anda merencanakan
                            dan mengatur semua kebutuhan pertunangan Anda, mulai dari lamaran hingga persiapan
                            pernikahan yang sempurna.</p>
                    </div>
                </div>
                <div class="col-md-6 p-0" style="min-height: 400px;">
                    <img class="position-absolute w-100 h-100" src="img/engagement.jpg" style="object-fit: cover;">
                </div>
            </div>
            <div class="row m-0">
                <div class="col-md-6 p-0" style="min-height: 400px;">
                    <img class="position-absolute w-100 h-100" src="img/akad.jpg" style="object-fit: cover;">
                </div>
                <div class="col-md-6 p-0 text-center text-md-left">
                    <div class="h-100 d-flex flex-column justify-content-center bg-secondary p-5">
                        <h3 class="mb-3">Akad Nikah</h3>
                        <p style="text-align: justify;">Kami melayani jasa akad nikah untuk membantu Anda merencanakan
                            dan mengatur prosesi akad yang sakral, mulai dari dekorasi, dokumentasi, hingga penyediaan
                            peralatan dan perlengkapan yang dibutuhkan, memastikan momen istimewa Anda berjalan dengan
                            lancar dan khidmat.</p>
                    </div>
                </div>
            </div>
            <div class="row m-0 mb-4 mb-md-0 pb-2 pb-md-0">
                <div class="col-md-6 p-0 text-center text-md-right">
                    <div class="h-100 d-flex flex-column justify-content-center bg-secondary p-5">
                        <h3 class="mb-3">Melayani Jasa Ulang Tahun</h3>
                        <p style="text-align: justify;"> Kami melayani jasa ulang tahun untuk memastikan perayaan Anda
                            berjalan sempurna mulai dari dekorasi dengan tema dan keinginan Anda.</p>
                    </div>
                </div>
                <div class="col-md-6 p-0" style="min-height: 400px;">
                    <img class="position-absolute w-100 h-100" src="img/birthday.heic" style="object-fit: cover;">
                </div>
            </div>
            <div class="row m-0">
                <div class="col-md-6 p-0" style="min-height: 400px;">
                    <img class="position-absolute w-100 h-100" src="img/aqiqah.jpg" style="object-fit: cover;">
                </div>
                <div class="col-md-6 p-0 text-center text-md-left">
                    <div class="h-100 d-flex flex-column justify-content-center bg-secondary p-5">
                        <h3 class="mb-3">Melayani Jasa Aqiqah</h3>
                        <p style="text-align: justify;"> Kami melayani jasa aqiqah untuk membantu Anda menjalankan
                            ibadah aqiqah dengan mudah dan lancar.</p>
                    </div>
                </div>
            </div>
            <div class="row m-0 mb-4 mb-md-0 pb-2 pb-md-0">
                <div class="col-md-6 p-0 text-center text-md-right">
                    <div class="h-100 d-flex flex-column justify-content-center bg-secondary p-5">
                        <h3 class="mb-3">Melayani Khitanan</h3>
                        <p style="text-align: justify;"> Kami melayani jasa khitanan untuk memastikan prosesi sunat
                            berjalan lancar dan aman, dengan dukungan tenaga medis profesional, peralatan steril, serta
                            pelayanan yang ramah dan nyaman bagi anak Anda.</p>
                    </div>
                </div>
                <div class="col-md-6 p-0" style="min-height: 400px;">
                    <img class="position-absolute w-100 h-100" src="img/khitanans.jpg" style="object-fit: cover;">
                </div>
            </div>
            <div class="row m-0">
                <div class="col-md-6 p-0" style="min-height: 400px;">
                    <img class="position-absolute w-100 h-100" src="img/pelaminan.webp" style="object-fit: cover;">
                </div>
                <div class="col-md-6 p-0 text-center text-md-left">
                    <div class="h-100 d-flex flex-column justify-content-center bg-secondary p-5">
                        <h3 class="mb-3">Pelaminan</h3>
                        <p style="text-align: justify;"> Kami melayani jasa pelaminan untuk menjadikan hari pernikahan
                            Anda lebih istimewa, dengan dekorasi pelaminan yang elegan dan sesuai tema, serta peralatan
                            dan layanan terbaik untuk menciptakan momen yang tak terlupakan.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- About End -->

    <!-- Gallery Start -->
    <div class="container-fluid bg-gallery" id="gallery" style="padding: 120px 0; margin: 90px 0;">
        <div class="section-title position-relative text-center" style="margin-bottom: 120px;">
            <h6 class="text-uppercase text-primary mb-3" style="letter-spacing: 3px;">Gallery</h6>
            <h1 class="font-secondary display-4 text-white"> Moments We Create</h1>
            <i class="far fa-heart text-white"></i>
        </div>
        <div class="owl-carousel gallery-carousel">
            <div class="gallery-item">
                <img class="img-fluid w-100" src="img/gallery-1.jpg" alt="">
                <a href="img/gallery-1.jpg" data-lightbox="gallery">
                    <i class="fa fa-2x fa-plus text-white"></i>
                </a>
            </div>
            <div class="gallery-item">
                <img class="img-fluid w-100" src="img/gallery-2.jpg" alt="">
                <a href="img/gallery-2.jpg" data-lightbox="gallery">
                    <i class="fa fa-2x fa-plus text-white"></i>
                </a>
            </div>
            <div class="gallery-item">
                <img class="img-fluid w-100" src="img/gallery-3.jpg" alt="">
                <a href="img/gallery-3.jpg" data-lightbox="gallery">
                    <i class="fa fa-2x fa-plus text-white"></i>
                </a>
            </div>
            <div class="gallery-item">
                <img class="img-fluid w-100" src="img/gallery-4.jpg" alt="">
                <a href="img/gallery-4.jpg" data-lightbox="gallery">
                    <i class="fa fa-2x fa-plus text-white"></i>
                </a>
            </div>
            <div class="gallery-item">
                <img class="img-fluid w-100" src="img/gallery-5.jpg" alt="">
                <a href="img/gallery-5.jpg" data-lightbox="gallery">
                    <i class="fa fa-2x fa-plus text-white"></i>
                </a>
            </div>
            <div class="gallery-item">
                <img class="img-fluid w-100" src="img/gallery-6.jpg" alt="">
                <a href="img/gallery-6.jpg" data-lightbox="gallery">
                    <i class="fa fa-2x fa-plus text-white"></i>
                </a>
            </div>
        </div>
    </div>
    <!-- Gallery End -->

    <!-- RSVP Start -->
    <div class="container-fluid py-5" id="rsvp">
        <div class="container py-5">
            <div class="section-title position-relative text-center">
                <h6 class="text-uppercase text-primary mb-3" style="letter-spacing: 3px;">RSVP</h6>
                <h1 class="font-secondary display-4">Online Request</h1>
                <i class="far fa-heart text-dark"></i>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="text-center">
                        <form action="index.php" method="post">
                            <div class="form-row">
                                <div class="form-group col-sm-6">
                                    <input id="nama" type="text" name="nama" class="form-control bg-secondary border-0 py-4 px-3" placeholder="Nama" required />
                                </div>
                                <div class="form-group col-sm-6">
                                    <input type="text" id="email_or_phone" name="email_or_phone" class="form-control bg-secondary border-0 py-4 px-3" placeholder="Email atau Nomor Telepon" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$|^[0-9]{10,12}$" title="Masukkan email atau nomor telepon yang valid" required />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-sm-6">
                                    <input type="text" id="jumlah_tamu" name="jumlah_tamu" class="form-control bg-secondary border-0 py-4 px-3" placeholder="Jumlah Tamu" required />
                                </div>
                                <div class="form-group col-sm-6">
                                    <select id="event" name="event" class="form-control bg-secondary border-0" style="height: 52px;" required>
                                        <option value="Engagement">Engagement</option>
                                        <option value="Akad Nikah">Akad Nikah</option>
                                        <option value="Ulang Tahun">Ulang Tahun</option>
                                        <option value="Aqiqah">Aqiqah</option>
                                        <option value="Khitanan">Khitanan</option>
                                        <option value="Pelaminan">Pelaminan</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <textarea id="pesan" name="pesan" class="form-control bg-secondary border-0 py-2 px-3" rows="5" placeholder="Pesan" required></textarea>
                            </div>
                            <div>
                                <input class="btn btn-primary font-weight-bold py-3 px-5" type="submit" id="register" name="create" value="Submit">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- RSVP End -->


    <!-- Footer Start -->
    <div class="container-fluid bg-dark text-white py-5" id="contact" style="margin-top: 90px;">
        <div class="container text-center py-5">
            <div class="section-title position-relative text-center">
                <h1 class="font-secondary display-3 text-white">Contact Us</h1>

            </div>

            <div class="d-flex justify-content-center py-2">
                <!-- <p class="text-white" href="#">info@example.com</p>
                <span class="px-3">|</span> -->

                <div class="d-flex justify-content-center mb-4">
                    <a class="btn btn-lg btn-outline-light btn-lg-square mr-2" href="https://wa.me/081376875354">
                        <i class="fab fa-whatsapp"></i>
                    </a>
                    <a class="btn btn-lg btn-outline-light btn-lg-square mr-2" href="mailto:example@gmail.com">
                        <i class="fas fa-envelope"></i>
                    </a>
                    <a class="btn btn-lg btn-outline-light btn-lg-square" href="https://www.instagram.com/capricorn_weddingdecoration/">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>

            </div>
            <br>
            <div class="postal-address">
                <h3 class="font-first" style="font-size: 15px; color: white;">Postal Address</h3>
                <p style="font-size: 12px;">Komplek Perumahan Tanjung Gading, Blok U-32,<br>Batubara, Indonesia</p>
            </div>
            <br>
            <div class="open-hours">
                <h3 class="font-first" style="font-size: 15px; color: white;">Open Hours</h3>
                <p style="font-size: 12px;">Senin - Jumat<br>8:00 - 17:00 WIB</p>
            </div>
            <p class="m-0">&copy; <a class="text-primary" href="#">Designed by <a class="text-primary" href="https://www.instagram.com/capricorn_weddingdecoration/">Wedding Decoration</a>
            </p>
        </div>
    </div>
    <!-- Footer End -->


    <!-- Scroll to Bottom -->
    <i class="fa fa-2x fa-angle-down text-white scroll-to-bottom"></i>

    <!-- Back to Top -->
    <a href="#" class="btn btn-lg btn-outline-primary btn-lg-square back-to-top"><i class="fa fa-angle-double-up"></i></a>


    <!-- JavaScript Libraries -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="lib/isotope/isotope.pkgd.min.js"></script>
    <script src="lib/lightbox/js/lightbox.min.js"></script>

    <!-- Template Javascript -->
    <script src="js/main.js"></script>
    <script src="https://unpkg.com/validator@latest/validator.min.js"></script>

    <script type="text/javascript">
        $(function() {
            $('#register').click(function(e) {
                function validatePhoneNumber(input_str) {
                    var re = /^[0-9]{10,12}$/;
                    return re.test(input_str);
                }
                var valid = this.form.checkValidity();
                if (valid) {
                    var nama = $('#nama').val();
                    var email_or_phone = $('#email_or_phone').val();
                    var jumlah_tamu = $('#jumlah_tamu').val();
                    var event = $('#event').val();
                    var pesan = $('#pesan').val();

                    e.preventDefault();

                    // Checks if the email and phone number are in a valid format
                    if (!validatePhoneNumber(email_or_phone) & !validator.isEmail(email_or_phone)) {
                        Swal.fire({
                            'title': 'Errors',
                            'text': 'Invalid phone number/email format',
                            'type': 'error'
                        })
                    } else {
                        $.ajax({
                            type: 'POST',
                            url: 'server/process_request.php',
                            data: {
                                nama: nama,
                                email_or_phone: email_or_phone,
                                jumlah_tamu: jumlah_tamu,
                                event: event,
                                pesan: pesan
                            },
                            success: function(data) {
                                Swal.fire({
                                    'title': 'Successful',
                                    'text': data,
                                    'type': 'success'
                                })
                            },
                            error: function(data) {
                                Swal.fire({
                                    'title': 'Errors',
                                    'text': 'There were errors while saving the data.',
                                    'type': 'error'
                                })
                            }
                        });
                    }
                } else {}
            });
        });
    </script>

</body>

</html>