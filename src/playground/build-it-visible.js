const app = {
    title: "Visibility Toggle",
};

let visible = false;

const onShowDetails = () => {
    visible = !visible;
    renderApp();
};

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={onShowDetails}>
                {visible ? "Hide Details" : "Show Details"}
            </button>

            {visible && <p>Hey! Here is some text for you.</p>}
        </div>
    );

    ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById("app");
renderApp();
