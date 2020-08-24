import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

export default function Message(props) {

    return (<>

        {
            props.message.from && <div className="container w-75 float-left">
                <Card className="d-inline-flex float-left m-1 px-2 p-1">
                    <Tooltip title={props.message.at}>
                        <CardContent className="p-0 m-0">
                            <Typography >
                                {props.message.msg}
                            </Typography>
                        </CardContent>
                    </Tooltip>
                </Card>
            </div>
        }

{
        props.message.to && <div className="container w-75 float-right ">
            <Card className="d-inline-flex float-right m-1 px-2 p-1">
                <Tooltip title={props.message.at}>
                    <CardContent className="p-0 m-0">
                        <Typography >
                            {props.message.msg}
                        </Typography>
                    </CardContent>
                </Tooltip>
            </Card>
        </div>
    }
 </>
)
}