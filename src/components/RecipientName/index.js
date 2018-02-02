import emailAddresses from 'email-addresses';

const RecipientName = ({ address }) => {
    const parsedFromHeader = emailAddresses.parseOneAddress(address);
    return parsedFromHeader.name || parsedFromHeader.address;
}

export default RecipientName;