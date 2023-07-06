const timers = new Map<string,number>();

export function run(uid:string,fn:()=>void,delay:number = 100){
    if (timers.has(uid)){
        clearTimeout(timers.get(uid));
    }
    const handle = setTimeout(()=>{
        fn();
        timers.delete(uid);
    },delay);
    timers.set(uid,handle);
}