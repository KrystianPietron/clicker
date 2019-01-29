import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const customContentStyle = {
    width: '100%',
    maxWidth: 'none',
};

class DialogExampleCustomWidth extends React.Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const actions = [
            <FlatButton
                label="OK"
                primary={true}
                onClick={this.handleClose}
            />,
        ];

        return (
            <div>
                <RaisedButton label="Alert" onClick={this.handleOpen} />
                <Dialog
                    title="Alert"
                    actions={actions}
                    modal={true}
                    contentStyle={customContentStyle}
                    open={this.state.open}
                >
                    Zbyt mało gotówki
                </Dialog>
            </div>
        );
    }
}
export default DialogExampleCustomWidth