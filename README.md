You are here for the [`./dist/react-select.esm.min.js`](./dist/react-select.esm.min.js)

To import this build of `react-select` on your webpage:

```html
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script type="module">
import Select from "https://react-select-builds.github.io/v5.8.0/dist/react-select.esm.min.js";

const { React, ReactDOM } = window;

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

function YourAwesomeApp(props) {
    return React.createElement("main", {}, 
	    <Select
            onChange={option => console.log("option selected", option)}
            options={options}
		/>
	);
}

ReactDOM.createRoot(document.getElementById("your-react-root"))
    .render(React.createElement(YourAwesomeApp, {}));
</script>
```

________________

See https://stackoverflow.com/questions/62842565/is-it-possible-to-use-react-select-in-the-browser-from-the-cdn

Starting from v3 [react-select](https://www.npmjs.com/package/react-select) developers decided to stop shipping browser-importable CDN bundles, I guess because they wanted to promote tree shaking.

Little did they know that this would not stop shitcoders like me from generating and publishing those unoptimized CDN builds ourselves >:D

This repository holds the latest on the moment of writing version of react-select bundled by esbuild and the esbuild configuration itself:

```sh
npm ci
node esbuild
```

