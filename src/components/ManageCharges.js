import React, {useState} from 'react';
import { Button } from '@material-ui/core';
import DataTable from './table';
import PopupDialog from './popup';

function ManageCharges() {
    const [actGroup, setActGroup] = useState(false);
    const [charges, setCharges] = useState([]);
    const [open, setOpen] = useState(false);

    const checkGroup = (activate) => {
        setActGroup(activate);
    }
    const group = (Charges) => {
        setCharges([...Charges]);
    }
    const showPopup = () => {
        setOpen(true);
    }
    return (
        <div>
            <h3 style={{textAlign: 'left'}}>Manage Charges</h3>
            { actGroup ? 
                <Button variant="contained" color="primary" onClick = {() => showPopup}>Group</Button> :
                <Button variant="contained" color="primary" disabled>Group</Button>
            }
            <Button variant="contained" disabled>Ungroup</Button>
            {open && <PopupDialog charges={charges}/>}
            <DataTable checkGroup = {checkGroup} group={group}/>
            <Button color="primary">+ More Charges</Button>
            <Button variant="outlined" color="primary">Cancel</Button>
            <Button variant="contained" color="primary">Submit</Button>
        </div>
    )
}

export default ManageCharges;
