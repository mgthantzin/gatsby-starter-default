/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require("react");
exports.onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    	<script>
		(function() {
			window.counter = 'https://tzo.goatcounter.com/count'

			var script = document.createElement('script');
			script.async = 1;
			script.src = '//gc.zgo.at/count.js';
			var ins = document.getElementsByTagName('script')[0];
			ins.parentNode.insertBefore(script, ins)
		})();
	</script>
  ]);
};
