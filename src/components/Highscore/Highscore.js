import React, { useEffect, useState } from 'react';
import CssClasses from './Highscore.module.scss';
import { useSelector } from 'react-redux';
import {    
    Table,
    TableRow,
    TableRowItem,
    TableHeader,
    Spinner,
    Card
} from '../ui';

const Highscore = (props) => {
    const [loading, setLoading] = useState(true);
    const highscores = useSelector((state) => state.game.highscores);



    useEffect(() => {
        if (highscores) {
            setLoading(false);
        }
    }, [highscores])
    
    if (loading) {
        return (
            <Card>
                <Spinner />
            </Card>
        )
    }
    return (
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
            {highscores && highscores.sort((a, b) => b.score - a.score).map(highscore => {
                return (
                    <TableRowItem key={highscore?.quoteId}>
                        <TableRowItem>
                            {highscore?.userName}
                        </TableRowItem>
                        <TableRowItem>
                            {highscore?.score}
                        </TableRowItem>
                    </TableRowItem>
                )
            })}
        </Table>
    );
}

export default Highscore;