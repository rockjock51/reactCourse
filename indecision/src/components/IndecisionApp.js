import React from "react";

import AddOption from "./AddOption";
import Options from "./Options";
import Action from "./Action";
import Header from "./Header";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined,
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter(
                (option) => optionToRemove !== option
            ),
        }));
    };

    handleAddOption = (newOption) => {
        if (!newOption) {
            return "Enter valid value to add item";
        } else if (this.state.options.indexOf(newOption) > -1) {
            return "This option already exists";
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(newOption),
        }));
    };

    handlePick = () => {
        const random = Math.floor(Math.random() * this.state.options.length);
        const selectedOption = this.state.options[random];

        this.setState(() => ({ selectedOption }));
    };

    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
    };

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

    render() {
        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer";

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption handleAddOption={this.handleAddOption} />
                        <OptionModal
                            selectedOption={this.state.selectedOption}
                            handleClearSelectedOption={
                                this.handleClearSelectedOption
                            }
                        />
                    </div>
                </div>
            </div>
        );
    }
}
