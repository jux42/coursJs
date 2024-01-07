const  mathUtils = {

    ajouter:function additionJuju(arg, ...rest) {


        let result = 0;

        for (let i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] === 'string') {
                console.log("ici c'est une maison sérieuse, on additionne les nombres et rien d'autre");
                return -1;
            }
            console.log(arguments[i] + " + ")

            result += arguments[i];
        }
        console.log('=');

        return result;},



    soustraire:      function soustractionJuju(args, ...rest) {
            let result = 0;
            for (let i = 0; i < arguments; i++) {
                console.log(arguments[i] + " - ")
                result -= arguments[i];
            }
            console.log('=');

            return result;}
    }
export default mathUtils;
////****fin de l'interface




