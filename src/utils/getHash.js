
const getHash = () => 
    // location.hash.slice(1).toLocaleLowerCase().split("/")[1] || "/";
    location.hash.replace(/#\/(\d{1,2})\/?/, "$1").toLowerCase() || '/'; //todo practicar expresión regulares

export default getHash;
