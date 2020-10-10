import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import AddBoxIcon from '@material-ui/icons/AddBox';
import DescriptionIcon from '@material-ui/icons/Description';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '100px',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(2),
        },
    },
}));
const ResumePanel = ({profileScreen}) => {
    const classes = useStyles();

    const handleDelete = () => {
        console.log('You clicked the delete icon.');
    };

    const handleClick = () => {
        console.log('You clicked the Chip.');
    };

    return (
        <div className="resume-panel">
            <div className={classes.root}>


                <Chip
                    icon={<DescriptionIcon style={{ color: 'white'}}/>}
                    label="ResumeDesign.docx"
                    onClick={handleClick}
                /*onDelete={handleDelete}*/
                style={{width:"250px", height: "40px", backgroundColor: '#3498DB', color: 'white'}}
                />

                <Chip
                    icon={<DescriptionIcon style={{ color: 'white'}}/>}
                    label="ResumeCoding.docx"
                    onClick={handleClick}
                /* onDelete={handleDelete}*/
                style={{width:"250px", height: "40px", backgroundColor: '#3498DB', color: 'white'}}
                />

                <Chip
                    icon={<DescriptionIcon style={{ color: 'white'}}/>}
                    label="ResumeGame.docx"
                    onClick={handleClick}
                /* onDelete={handleDelete}*/
                style={{width:"250px", height: "40px", backgroundColor: '#3498DB', color: 'white'}}
                />
                {profileScreen===true?<AddBoxIcon style={{ color: '#3498DB', fontSize: "50px"}}/>:null}
                
            </div>
        </div>
    )
}
export default ResumePanel;
