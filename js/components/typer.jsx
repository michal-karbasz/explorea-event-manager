class TextTyper extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            sec:0,
            text: this.props.text.substr(0,1)
        }
    }
    render() {
        return <h2>{this.state.sec} {this.state.text}</h2>
    }
   
    componentDidMount() {
        this.id = setInterval( () => {
            this.setState({
                text: this.props.text.substr(0,(this.state.sec+1) + 1),
                sec:this.state.sec+1
            }, () => {
                if(this.state.text == this.props.text) 
                {
                   clearInterval(this.id); 
                }
            })

            
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.id);
        }
}