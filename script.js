function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      text: placeholder
    });_defineProperty(this, "handleChange",

    e => {
      this.setState({
        text: e.target.value });
    });}

  render() {
    const { text } = this.state;
    const markdown = marked(text, { breaks: true });

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { className: "col" }, /*#__PURE__*/
      React.createElement("div", { className: "row-6" }, /*#__PURE__*/
      React.createElement("h5", { className: "text-center" }, "Enter Markdown Here:"), /*#__PURE__*/
      React.createElement("textarea", { name: "Editor", className: "form-control ", id: "editor", value: text, onChange: this.handleChange })), /*#__PURE__*/

      React.createElement("div", { className: "row-6" }, /*#__PURE__*/
      React.createElement("h5", { className: "text-center" }, "See the results here:"), /*#__PURE__*/
      React.createElement("div", { id: "preview", className: "preview rounded", dangerouslySetInnerHTML: { __html: markdown } })))));

  }}

const placeholder = `# Welcome to my React Markdown Previewer!

Heres some code, \`<span></span>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**!
Or _italic_.
Or... why not **_both!_**
Or maybe ~~cut the words~~.


> This is a blockquote
>
>> This is a nested blockquote

You can even create tables as well:

   FRUITS  |   VEGETABLES  |    CITRUS
 :-----  | :----: | -----:
  Apples |  Cabbage |  Oranges
 Mangoes |  Lettuce |  Lemons
 Plums   | cucumber |  limes


- And of course there are lists.
- Some are bulleted.
  - With different indentation levels.
  - That look like this.


1. And there are numbered lists too.
2. This is just for example.
3. And last but not least, let's not forget embedded images:

![REACT LOGO](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)
`;

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));
