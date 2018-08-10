class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle </h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visibility && (<p id='details' >Here are some details</p>)}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// let visibility = false;





// const appRoot = document.getElementById('app');

// const toggle = () => {
//     visibility = !visibility;
//     render();
// }; 

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle </h1>
//             <button onClick={toggle}>
//             {visibility ? 'Hide details' : 'Show details'}
//             </button>
//             {visibility && (<p id ='details' >Here are some details</p>)}

//         </div>
//     );

//     ReactDOM.render(template, appRoot);  
// }

// render();