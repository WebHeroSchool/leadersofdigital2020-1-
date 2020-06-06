import React from 'react';

import { Button } from './shared/button/button';
import { Bar} from './shared/bar/bar';
import {Subtitle} from './shared/subtitle/subtitle';
export const Components = () => {
    return (
        <div>
            <div>
                <Button></Button>
            </div>
            <div>
                <Bar></Bar>
            </div>
            <div>
                <Subtitle></Subtitle>
            </div>
        </div>
       

    );
}