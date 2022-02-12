import React, {useEffect, useState } from 'react';
import CssClasses from './Highscore.module.scss';
import { useSelector } from 'react-redux';
import {
    Card,
    CardTitle,
    CardBody,
    Table,
    TableRow,
    TableRowItem,
    TableHeader,
    Spinner
} from '../ui';

const Highscore = (props) => {
    const [loading, setLoading] = useState(true);
    const highscores = useSelector((state) => state.game.highscores);

    

    useEffect(() => {
        if(highscores){
            setLoading(false);
        }
    }, [highscores])
    if(loading){
        return (
            <Card>
                <CardBody>
                    <Spinner /> 
                </CardBody>
            </Card>
           
        )
    }
    return (
        <Card>
            <CardTitle tag="h3">
                Highscore
            </CardTitle>
            <CardBody column>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableRowItem className={['text-center'].join(" ")}>
                                Username
                            </TableRowItem>
                            <TableRowItem className={['text-center']}>
                                Score
                            </TableRowItem>
                        </TableRow>
                    </TableHeader>
                    {highscores && highscores.sort((a,b) => b.score - a.score).map(highscore => {
                        return(

                            <TableRowItem key={highscore.quoteId}>
                                <TableRowItem>
                                    {highscore.userName}
                                </TableRowItem>
                                <TableRowItem>
                                    {highscore.score}
                                </TableRowItem>                                 
                            </TableRowItem>
                        )
                    })}
                </Table>
            </CardBody>
        </Card>

    );
}

export default Highscore;