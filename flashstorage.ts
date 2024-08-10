

//% color="#B19200" 
//% icon="\uf0e7"
//% block="Flash Storage"
namespace flashstorage {

    let simMap : any = null

    //% blockId="flash_pairs_stored" block="number of pairs stored in flash"
    //% shim=flashstorage::size
    export function size() : number {
        if (!simMap) return 0;
        return simMap.size;
    }

    //% blockId="flash_remove_key" block="remove %key pair"
    //% shim=flashstorage::remove
    export function remove(key: string) : void {
        if (simMap) simMap.delete(key);
    }

    //% blockId="flash_get_key" block="get value for %key pair"
    //% shim=flashstorage::get
    export function get(key: string) : string {
        return simMap ? simMap[key] : "";
    }


    //% blockId="flash_put_value" block="save %key : %value pair"
    //% shim=flashstorage::put
    export function put(key: string, value: string) : number {
        if (!simMap) simMap = {};
        simMap[key] = value;
        return 0;
    }
}
