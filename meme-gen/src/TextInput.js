import React from "react";


class TextInput extends React.Component{
    constructor(props){
        super(props);
        this.state={
            style:{
                position: "absolute",
                left: "0px",
                top:"0px"
            },
            inputStyle:{
                border: "none",
                background: "none",
                width: "250px",
                resize: "both",
                fontSize : 25+"px"
            },
            placeholderText : "Enter your meme caption here",
            fontSize : 25
        };
        this.removeInputField=this.removeInputField.bind(this);
        this.increaseFontSize=this.increaseFontSize.bind(this);
        this.decreaseFontSize=this.decreaseFontSize.bind(this);
    }
    componentDidMount(){
        this.setState({
            style : {
                position: "absolute",
                left: this.props.x+"px",
                top: this.props.y+"px"
            }
        });
    }

    removeInputField(){
        console.log("remove");
        this.setState({
            style: {
                display : "none"
            }
        });
    }
    increaseFontSize(){
        this.setState({
            fontSize:this.state.fontSize+1
        }, ()=>{
            const inputStyle = JSON.parse(JSON.stringify(this.state.inputStyle));
            inputStyle["fontSize"] = this.state.fontSize+"px"
            this.setState({
                inputStyle:inputStyle
            });
        });
    }
    decreaseFontSize(){
        this.setState({
            fontSize:this.state.fontSize-1
        }, ()=>{
            const inputStyle = JSON.parse(JSON.stringify(this.state.inputStyle));
            inputStyle["fontSize"] = this.state.fontSize+"px"
            this.setState({
                inputStyle:inputStyle
            });
        });
    }
    render(){
        return(
            <React.Fragment>
                <span style={this.state.style}>
                    <textarea type="text" style={this.state.inputStyle} placeholder={this.state.placeholderText}/>&nbsp;
                    <span id="input-controls">
                        <i class="fa fa-plus" aria-hidden="true" title="Increase font size" onClick={this.increaseFontSize}></i>&nbsp;&nbsp;&nbsp;&nbsp;
                        <i class="fa fa-minus" aria-hidden="true" title="Decrease font size" onClick={this.decreaseFontSize}></i>&nbsp;&nbsp;&nbsp;&nbsp;
                        <i class="fa fa-times" aria-hidden="true" title="Remove this input field" onClick={this.removeInputField}></i>&nbsp;&nbsp;&nbsp;
                    </span>
                </span>
            </React.Fragment>
        )
    }
} 

export default TextInput;