import * as getData from './data';
import { access } from 'fs';


const unique = arr => reduce((acc, ele) => acc.includes(ele) ? acc : [...acc, ele], []);

const RenderNames = students =>
    Unique(getData.list.map(student => getData.ids[student])).join(", ");

const RenderDayWise = attendance => {
    console.log("attendance ", attendance.flatMap(x => 900000 + Number(x[0][0])));
    console.log("attendance ", attendance.flatMap(x => Number(x[0][0])%2 === 0 ? [x[0][0]]:[]));

};


RenderDayWise(getData.list)