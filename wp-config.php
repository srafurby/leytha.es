<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'leytha' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'T&0K*4b%`ah7`5Ch|z;0;GnciXVSqu-${jn][J&_=Crf;AHK !XWDCBwE71MPgEH' );
define( 'SECURE_AUTH_KEY',  '?$#-/gCb[p?}.Iq_DKBD9!.&+1H>VO:$~I`iN@Jwl_ubdC0&9+A2*B-y?VDgwIKv' );
define( 'LOGGED_IN_KEY',    ':v}X*<-9QJ2kUZe|n,*/hHP{WPB~!1@O ;I3 xNJX/M+oO$[b(Lo{X;JE!OV``~x' );
define( 'NONCE_KEY',        ' &HYcbG?Euh,IzL*&5uC31Keh*-d]+oowz-aK_EOPZfUC`m)+o=d@`Viz%gnWtO]' );
define( 'AUTH_SALT',        's<bBrWF.^^<4Dx6 u.XkZ!nfcp)L`u$(>K{7aCZEZ7m>dp5llii9C-OooQM,g9~&' );
define( 'SECURE_AUTH_SALT', 'uL^PjS3$NsQFy T)}d@e[P%--Yo>_M 3K2{1TPIS5gZ@465?Av|JHuvll%kH#7OJ' );
define( 'LOGGED_IN_SALT',   'iw~C|CN]J1+JLezKVgPQdZv@B<_1)zmsevf|~[(G|*cCyFhq3b%0xheUfLNQEe=)' );
define( 'NONCE_SALT',       'fw+caGcdl#,J|})<J-*3|NX@U~2pbsat0+pj:z)xU?w*jy9iA`~:x|+2?v3:QB(P' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

@ini_set( 'upload_max_filesize' , '512M' );
@ini_set( 'post_max_size', '512M');
@ini_set( 'memory_limit', '512M' );
@ini_set( 'max_execution_time', '300' );
@ini_set( 'max_input_time', '300' );