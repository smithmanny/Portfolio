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
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

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
define('AUTH_KEY',         '0R}mvjyddqxZq0/zpYw5o75wAQ&v!5XD`oRP_5:{Y0mZ_/Ix5@g1jU-ZexO/Nd%R');
define('SECURE_AUTH_KEY',  'r7OG;THW-J4(|l,Jg0r.z3E6NVZg]F 8`I2C}Cu(vnW!K3;!bXm$]!_tHQYuy80n');
define('LOGGED_IN_KEY',    '6d]<5f6]YK=evmLf<dgqQS^LW=eMcs-daqlJu=zue)Gk!q3;_]8kLyaVUN]k5``/');
define('NONCE_KEY',        'DwlRO|^){i$)|B(5JG<fCs.Vuz^%U*}h#l2l`DJYNkX[50.FryCB9hMf6YCzlHTE');
define('AUTH_SALT',        'iZzVBupC:7}.OfxzK$JetHx0e!PS.YXj5K<Ja?FwY=&*LN(@q:kMha4d^Og?7^lg');
define('SECURE_AUTH_SALT', 'E~BFigF9G?v<C`va|pT1EvMTOPY02.zdgN^=kk+$)[KXNz>{ Q`p[.yXH:HS>2 %');
define('LOGGED_IN_SALT',   'dxsv8V,,emj;u b%K14b7{@KaVi$<Z]!E:g>K=N [{oY78bPXx)o%TouXZrx))Nt');
define('NONCE_SALT',       ')[ZQ,|M,P0j(3RH6]$AFn|v-HL2-3Qhr< -K`)z]5{3suRF,EX#h:hsw()b~smcB');

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
