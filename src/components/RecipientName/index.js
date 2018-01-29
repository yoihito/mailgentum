import emailAddresses from 'email-addresses';

const RecipientName = ({ from }) => {
    const parsedFromHeader = emailAddresses.parseOneAddress(from);
    return parsedFromHeader.name || parsedFromHeader.address;
}

export default RecipientName;