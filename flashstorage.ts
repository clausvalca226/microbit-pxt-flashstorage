

//% color="#B19200" 
//% icon="\uf0e7"
//% block="Flash Storage"
namespace flashstorage {

    //let simMap : any = new Map();
    var simMapKeys : string[] = [];
    var simMapValues : string[] = [];
    

    //% blockId="flash_pairs_stored" block="number of pairs stored in flash"
    //% shim=flashstorage::size
    export function size() : number {
        //if (!simMap) return 0;
        return simMapKeys.length;
    }

    //% blockId="flash_remove_key" block="remove %key pair"
    //% shim=flashstorage::remove
    export function remove(key: string) : void {
        //if (simMap) simMap.delete(key);
        //simMap.delet(key);
        let i = simMapKeys.indexOf(key);
        if(i<0) return;
        simMapKeys.removeAt(i);
        simMapValues.removeAt(i);
    }

    //% blockId="flash_get_key" block="get value for %key pair"
    //% shim=flashstorage::get
    export function get(key: string) : string {
        //return simMap ? simMap[key] : "";
        //return simMap.get(key);
        let i = simMapKeys.indexOf(key);
        if(i<0) return "";
        return simMapValues[i];
    }


    //% blockId="flash_put_value" block="save %key : %value pair"
    //% shim=flashstorage::put
    export function put(key: string, value: string) : number {
        //if (!simMap) simMap = {};
        //simMap[key] = value;
        //simMap.set(key,string);
        simMapKeys.push(key);
        simMapValues.push(value);
        return 0;
    }
}
