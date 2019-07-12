import getData from './api';


getData().then(({ data }) => {

    const {
        email,
        cell,
        name: { title, first },
        ...otherDetails
    } = data.results[0];

    console.log("otherDetails ", otherDetails);

    const contact = {
        email,
        cell,
        title
    }
    const profile = {
        fullname: `${title}. ${first}`.toUpperCase(),
        first,
        designation: "data scientist",
        ...contact
    }
    console.log("profile ", profile);

})