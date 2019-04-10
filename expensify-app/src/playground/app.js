class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options: [],
        };
    }

    componentDidMount(prevProps, prevState) {
        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // Do nothing at all
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.options.length !== prevState.options.length) {
            localStorage.setItem("options", JSON.stringify(this.state.options));
        }
    }

    componentWillUnmount() {
        console.log("component will unmount");
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter(
                (option) => optionToRemove !== option
            ),
        }));
    }

    handleAddOption(newOption) {
        if (!newOption) {
            return "Enter valid value to add item";
        } else if (this.state.options.indexOf(newOption) > -1) {
            return "This option already exists";
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(newOption),
        }));
    }

    handlePick() {
        const random = Math.floor(Math.random() * this.state.options.length);
        const pick = this.state.options[random];

        alert(pick);
    }

    render() {
        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer";

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: "Indecision",
};

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>
                What should I do?
            </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && (
                <p>Please add an option to get started!</p>
            )}
            {props.options.map((option) => (
                <Option
                    optionText={option}
                    key={option}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))}
        </div>
    );
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined,
        };
    }

    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();

        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.option.value = "";
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                remove
            </button>
        </div>
    );
};

const User = (props) => {
    return (
        <div>
            <p>Name: </p>
            <p>Age: </p>
        </div>
    );
};

ReactDOM.render(
    <IndecisionApp options={["Item One", "Item Two"]} />,
    document.getElementById("app")
);
