<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'smithmanny');

/** MySQL database password */
define('DB_PASSWORD', '9IY92dtrThaPRw0z');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
 define('AUTH_KEY',         ':[wx,PwgqAYKGX>^!/r40]Y1>6|J6#oAt2c+{4sqHW-PWOXx&<zVhzREy_^gA*c&');
 define('SECURE_AUTH_KEY',  'WX$ikD|FGsk{h=_RNY->]R4lQkmZaF$}] |f18Iqj>wS]#Exf26krs|gO%1H$b9E');
 define('LOGGED_IN_KEY',    '{IQ$WG#%X]?Iz6pB&kJCeL6NuM])-QGmab4X{qf2Zp=laaxP)sweJBoV7Q_^=!g(');
 define('NONCE_KEY',        '%kU^.lYcnv_*H}8U:KW2DtPZ;9T|8{D;K[R=@;[IW=t7|79v_/V@:.ty{z|RGz(z');
 define('AUTH_SALT',        '$kAh-ERg|;ygz&syd(.y~ Z|?XhEMMpfyeXc/x)*V_V_2uI-=AjLF?KWl$Cpr;rF');
 define('SECURE_AUTH_SALT', '^vme#sa)Fo-r-T(poyC/0 R{t.{>p#J)tP>x@I1A7]W,`~E)r!W,+s3rz5TpT=!k');
 define('LOGGED_IN_SALT',   'Z&px{g/!?:p|va|e^T[448<D53x:=|=:h]*}a=FhTtNG#u<1?/zt3i--wk6cbWeu');
 define('NONCE_SALT',       'k-I#qT)*R>:<>b(>#`pvx<<(N|O |vw+Z*uK}?PX  vn{y8% f09<6BA<k`NMl:b');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'sj_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
