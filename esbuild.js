import * as esbuild from 'esbuild';
import epeg from "esbuild-plugin-external-global";

await esbuild.build({
    entryPoints: ['src/main.jsx'],
	bundle: true,
	minify: true,
	sourcemap: true,
	outfile: "dist/react-select.esm.min.js",
	format: "esm",
    target: ['es6'],
    external: ['react', 'react-dom'],
	plugins: [
	    epeg.externalGlobalPlugin({
            'react': 'window.React',
            'react-dom': 'window.ReactDOM',
		}),
	],
});