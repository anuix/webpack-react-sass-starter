import React from 'react';

class Saves extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            saved: props.saved,
            numSaves: props.numSaves
        };

        console.log(this.state);
    }



    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.saved);
        
        if (saved === false) {
            saved = true;
            numSaves++;
        } else {
            numSaves--;
        }

        this.setState({
            saved : saved,
            numSaves : numSaves
        });
    }

    render() {
        const {  saved, numSaves } = this.state;
        console.log(this.state);
        var savedText = '';
        var submitText = 'Save';

        if (saved) {
            savedText = 'You have saved this item';
            submitText = 'Remove';
        } else {

        }

        return (
            <div className="saves">
                <form onSubmit={this.handleSubmit}>
                    <input type="submit" value={submitText} />
                </form>
                {numSaves} saves. {savedText}
                
            </div>
        );
    }

}

export default Saves;
