class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options: [],
        };
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: [],
            };
        });
    }

    handleAddOption(newOption) {
        if (!newOption) {
            return "Enter valid value to add item";
        } else if (this.state.options.indexOf(newOption) > -1) {
            return "This option already exists";
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(newOption),
            };
        });
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
                <Header title={title} subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >
                    What should I do?
                </button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>
                    Remove All
                </button>
                {this.props.options.map((option) => (
                    <Option optionText={option} key={option} />
                ))}
            </div>
        );
    }
}

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
        this.setState(() => {
            return { error };
        });

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

class Option extends React.Component {
    render() {
        return <div>{this.props.optionText}</div>;
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
