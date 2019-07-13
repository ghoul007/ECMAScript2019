import * as getData from './data';
import { access } from 'fs';


const unique = arr => reduce((acc, ele) => acc.includes(ele) ? acc : [...acc, ele], []);

const RenderNames = students =>
    Unique(getData.list.map(student => getData.ids[student])).join(", ");

const RenderDayWise = attendance => {
    console.log("attendance ", attendance.flat(2));

};


RenderDayWise(getData.list)