/* eslint-disable no-console */
console.log("App.js is running!");

const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer.",
    options: [],
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
    }
    e.target.elements.option.value = "";

    renderApp();
};

const removeAll = () => {
    app.options = [];
    renderApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById("app");

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>
                {app.options.length > 0
                    ? "Here are your options"
                    : "No Options"}
            </p>
            <button onClick={onMakeDecision} disabled={!app.options.length}>
                What should I do?
            </button>

            <button onClick={removeAll}>Remove All</button>
            <ol>
                {app.options.map((item) => {
                    return <li key={item}>{item}</li>;
                })}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderApp();
