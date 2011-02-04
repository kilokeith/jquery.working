jQuery Working (Spinner) Indicator Plugin
=========================================

 * version: 1.0 (2010-04-19)
 * @requires jQuery v1.3.2 or later
 * Author: Keith Hoffmann @ http://kiloproductions.net
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html

#### Needs some CSS for the spinner. This should be the minimum
<pre>.working-status {
	width: 16px;
	height: 16px;
	display: inline-block;
	background: url(../images/loading.gif) no-repeat center center;
}
.working-bg {
	background: url(../images/loading.gif) no-repeat center center;
}</pre>

#### Example usage:
<pre>//start process. Indicate with spinner ...
$('#some_elemenet).show_working('before');
// ... code finishes, remove spinner
$('#some_elemenet).hide_working();</pre>